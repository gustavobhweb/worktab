<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	<style>
		*{margin:0;padding:0}
        body{background:#333333}
        .logo{position:relative;left:0;top:0;float:left}
        .bar{width:18%;border-radius:0.4em;position:absolute;bottom:0}
        .bar.gray{background:#dedede}
        .bar.blue{background:#1069EF;width:26%;}
	</style>
    <script type='text/javascript' src='http://code.jquery.com/jquery-1.11.1.min.js'></script>
    <script type='text/javascript'>
    $(document).ready(function(){
        wt_logo('#wt-logo', {width: 180});
        animate_wt_logo();
        
        setTimeout(function(){
            stop_animate_wt_logo(23);
        }, 3000);
    });
    function wt_logo(obj, data)
    {
        if (typeof(data) != 'object' || typeof(data.width) == 'undefined') { 
            width = 100;
        } else {
            width = data.width;
        }
        
        var logo = $(obj);
        logo.attr("id", "logo");
        logo.css("position", "relative");
        logo.css("width", calcp(width).w);
        logo.css("height", calcp(width).h);
        logo.css("left", 0);
        logo.css("top", 0);
        logo.css("float", "left");
                
        var bar_0 = $('<div>');
        var bar_1 = $('<div>');
        var bar_2 = $('<div>');
        var bar_3 = $('<div>');
        
        bar_0.css("width", "18%");
        bar_0.attr("id", "bar_0");
        bar_0.css("border-radius", ".4em");
        bar_0.css("position", "absolute");
        bar_0.css("bottom", 0);
        bar_0.css("background", "#DEDEDE");
        bar_0.css("height", "63%");
        
        bar_1.css("width", "18%");
        bar_1.attr("id", "bar_1");
        bar_1.css("border-radius", ".4em");
        bar_1.css("position", "absolute");
        bar_1.css("bottom", 0);
        bar_1.css("background", "#DEDEDE");
        bar_1.css("height", "77%");
        bar_1.css("left", "24%");
        
        bar_2.css("width", "18%");
        bar_2.attr("id", "bar_2");
        bar_2.css("border-radius", ".4em");
        bar_2.css("position", "absolute");
        bar_2.css("bottom", 0);
        bar_2.css("background", "#DEDEDE");
        bar_2.css("height", "47%");
        bar_2.css("left", "48%");
        
        bar_3.css("width", "26%");
        bar_3.attr("id", "bar_3");
        bar_3.css("border-radius", ".4em");
        bar_3.css("position", "absolute");
        bar_3.css("bottom", 0);
        bar_3.css("background", "#1069EF");
        bar_3.css("height", "100%");
        bar_3.css("left", "72%");
        
        bar_0.appendTo(logo);
        bar_1.appendTo(logo);
        bar_2.appendTo(logo);
        bar_3.appendTo(logo);       
    }
    function calcp(w)
    {
        var data, h;
        
        h = (115*w) / 100;
        
        data = {w: w, h: h};
        
        return data;
    }
    function animate_wt_logo()
    {
        time = 500;
        $('#logo').animate({left:'43%', top: '200px'}, 0);
        $('#bar_3').animate({opacity:'0.5'}, time);
        $('#bar_0').animate({height:'90%'}, time);
        $('#bar_1').animate({height:'40%'}, time);
        $('#bar_2').animate({height:'90%'}, time, set_back_wt_logo);
    }
    function set_back_wt_logo()
    {
        time = 500;
        $('#bar_3').animate({opacity:'1'}, time);
        $('#bar_0').animate({height:'63%'}, time);
        $('#bar_1').animate({height:'77%'}, time);
        $('#bar_2').animate({height:'47%'}, time, animate_wt_logo);
    }
    function stop_animate_wt_logo(width)
    {
        $('#logo').animate({left:'34px', top: '12px', width: width, height: calcp(width).h}, 2000, function(){
            $('#logo').animate({left:'34px', top: '12px'}, 0);
            $('#bar_3').stop().animate({opacity:'1', borderRadius:'0.1em'}, time);
            $('#bar_0').stop().animate({height:'63%', borderRadius:'0.1em'}, time);
            $('#bar_1').stop().animate({height:'77%', borderRadius:'0.1em'}, time);
            $('#bar_2').stop().animate({height:'47%', borderRadius:'0.1em'}, time);
        });
    }
    </script>
</head>
<body>
	
    <div id='wt-logo'></div>
</body>
</html>