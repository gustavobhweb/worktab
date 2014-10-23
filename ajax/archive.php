<?php

class Archive {
	
	private static $openedArchive = false;
	
	public static function create($fullpath, $content)
	{
		if (!static::exists($fullpath)) {
			$fp = explode('/', $fullpath);
			
			if (count($fp)) {
				$actual = '';
				foreach ($fp as $k => $v) {
					$actual .= $v . '/';
					if ($k + 1 < count($fp)) {
						if (!is_dir($actual)) {
							mkdir($actual);
						}
					}
				}
			}
			file_put_contents($fullpath, $content);
		} else {
			static::open($fullpath);
			static::add($content);
		}
		static::open($fullpath);
	}
	
	public static function open($fullpath)
	{
		if (file_exists($fullpath)) {
			static::$openedArchive = $fullpath;
		} else {
			throw new Exception('Arquivo não encontrado.');
		}
	}
	
	public static function add($content)
	{
		if (!static::$openedArchive) {
			throw new Exception('Você deve abrir o arquivo primeiro');
		} else {
			file_put_contents(static::$openedArchive, PHP_EOL . $content, FILE_APPEND);
		}
	}
	
	public static function delete()
	{
		if (!static::$openedArchive) {
			throw new Exception('Você deve abrir o arquivo primeiro');
		} else {
			unlink($this->openedArchive);
		}
	}
	
	public static function exists($fullpath)
	{
		return file_exists($fullpath);
	}

}