<?php

include_once('response.php');
include_once('input.php');
include_once('validate.php');
include_once('archive.php');

if (Validate::email(Input::get('txt_email'))) {
	Archive::create('../static/controle/emails.txt', Input::get('txt_email'));
	Response::json([
		'status' => true,
		'message' => 'E-mail cadastrado com sucesso.'
	]);
} else {
	Response::json([
		'status' => false,
		'message' => 'Digite um e-mail válido'
	]);
}