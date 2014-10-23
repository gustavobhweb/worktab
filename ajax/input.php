<?php

class Input {
	
	public static function get($name)
	{
		if (static::is('post')) {
			if (!isset($_POST[$name])) return false;
			return $_POST[$name];
		} else {
			if (!isset($_GET[$name])) return false;
			return $_GET[$name];
		}
	}
			
	public static function is($type)
	{
		$type = strtolower($type);
		if (isset($_POST) && $_POST && $type == 'post') {
			return true;
		} elseif ($type == 'get') {
			return true;
		} else {
			return false;
		}
	}
	
	public static function type()
	{
		if (isset($_POST) && $_POST) {
			return 'POST';
		} else {
			return 'GET';
		}
	}
	
}