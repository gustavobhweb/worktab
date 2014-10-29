<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<title>WorkTab - Em construção...</title>
	<link href='http://fonts.googleapis.com/css?family=Roboto:900,400,300,100,700,500' rel='stylesheet' type='text/css'>
	<style type="text/css">
	#txt_email{height:35px;padding:0;outline:none;font-family:Roboto;width:300px;border:1px solid #cccccc;float:left;padding:0 6px;border-radius:3px 0 0 3px;}
	#txt_email:focus{border:1px solid #E6A759}
	#btn_enviar{height:37px;background:#E6A759;padding:0 15px;color:white;border:none;float:left;outline:none;border-radius:0 3px 3px 0;}
	#btn_enviar:hover{cursor:pointer;box-shadow:inset 0px 2px 20px 0px rgba(0, 0, 0, 0.1)}
	#btn_enviar:active{box-shadow:inset 0px 8px 20px 0px rgba(0, 0, 0, 0.1)}
	</style>
	<script type='text/javascript' src='static/js/jquery-1.11.1.min.js'></script>
		<script type='text/javascript'>
		$(function(){
			$('#txt_email').focus();
			$('#btn_enviar').on('click', function(){
				var email = $('#txt_email').val();
				$.ajax({
					url: 'ajax/emails.php',
					type: 'POST',
					dataType: 'json',
					data: {
						'txt_email': email
					},
					success: function(response){
						if (response.status) {
							alert(response.message);
							
						} else {
							$('#txt_email').focus();
							$('#txt_email').val('');
							$('#txt_email').attr('placeholder', response.message);
						}
					},
					error: function(){
						alert('Problemas na conexão! Atualize a página e tente novamente.');
					}
				});
			});
			$('#txt_email').on('keyup', function(event){
				if (event.keyCode == 13) {
					$('#btn_enviar').click();
				}
			});
		});
	</script>
</head>
<body>
	
	<div style='text-align:center;margin:120px 0 0 0'>
		<img src='static/img/logo.png' />
		<h3 style="text-align:center;font:20px Roboto;font-weight:300">Desculpe-nos pelo incoveniente, mas nosso site ainda está em construção</h3>
		<h3 style="text-align:center;font:20px Roboto;font-weight:300">Deixe seu e-mail abaixo, para receber novidades:</h3>
		<div style="width:400px;margin:0 auto">
			<input type="text" name="txt_email" id="txt_email" placeholder="email@dominio.com" />
			<button type="button" id="btn_enviar">Enviar</button>
		</form>
	</div>
	
</body>
</html>