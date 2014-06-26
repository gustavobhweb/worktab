<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	<style>
		*{margin:0;padding:0}
        #canvasAnimation{background:#333333;width:100%;height:100%;position:fixed;left:0;top:0;z-index:1000}
        .logo{position:relative;left:0;top:0;float:left}
        .bar{width:18%;border-radius:0.4em;position:absolute;bottom:0}
        .bar.gray{background:#dedede}
        .bar.blue{background:#1069EF;width:26%;}
	</style>
    <script type='text/javascript' src='http://code.jquery.com/jquery-1.11.1.min.js'></script>
    <script type='text/javascript' src='<?=URL::to('public/static/js/logo.js')?>'></script>
    <script type='text/javascript'>
    $(document).ready(function(){
        
        window.$logoMin = new Logo();
        
        var $dataLogoMin = {
            width: 23, 
            left: 34, 
            top: 12
        };
        $logoMin.generate('#logo-min', $dataLogoMin);
        $logoMin.obj.hover(function(){
            $logoMin.animate();
        }, function(){
            $logoMin.stop();
        });
                                        
    });
    </script>
</head>
<body>
    <div id="canvasAnimation" style='display:none'>
        <div id='wt-logo'></div>
    </div>
    <div style='position:fixed;height:50px;background:#333333;width:100%'>
        <div id='logo-min'></div>
        <div class='menu'>
            
        </div><!--menu-->
    </div>
</body>
</html>