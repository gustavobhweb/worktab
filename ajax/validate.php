<?php

class Validate {
	
	public static function email($string)
	{
		return filter_var($string, FILTER_VALIDATE_EMAIL);
	}

}