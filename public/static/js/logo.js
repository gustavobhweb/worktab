function calcp(w)
{
    var data, h;
    
    h = (115*w) / 100;
    
    data = {w: w, h: h};
    
    return data;
}

function Logo()
{
    
    var time, obj, start;
    
    this.time = 500;
    this.start = false;
    
    this.generate = function(obj, data)
    {
        var width, left, top;
        if (typeof(data) != 'object' || typeof(data.width) == 'undefined') { 
            width = 100;
        } else {
            width = data.width;
        }
        
        if (typeof(data) != 'object' || typeof(data.left) == 'undefined') { 
            left = 0;
        } else {
            left = data.left;
        }
        
        if (typeof(data) != 'object' || typeof(data.top) == 'undefined') { 
            top = 0;
        } else {
            top = data.top;
        }
                    
        this.obj = $(obj);
        
        var logo = $(obj);
        logo.attr("id", "logo");
        logo.css("position", "relative");
        logo.css("width", calcp(width).w);
        logo.css("height", calcp(width).h);
        logo.css("left", left);
        logo.css("top", top);
        logo.css("float", "left");
        logo.css("cursor", "pointer");            
                
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
        
        window.thisContext = this;
        
        this.obj.hover(function(){
            //thisContext.animate();
        }, function(){
            //thisContext.stop();
        });
    }
    
    this.animate = function(frames)
    {
        if (!this.start) {
            if (frames != null && typeof(frames) != 'undefined') {
                for (frame in frames) {
                    eval(frames[frame])();
                }
            } else {
                this.start = true;
                this.frame1();
            }
        }
    }
    
    this.stop = function()
    {
        if (this.start) {
            this.start = false;
            $('#bar_3').stop().animate({opacity:'1'}, this.time);
            $('#bar_0').stop().animate({height:'63%'}, this.time);
            $('#bar_1').stop().animate({height:'77%'}, this.time);
            $('#bar_2').stop().animate({height:'47%'}, this.time);
        }
    }
    
    this.frame1 = function()
    {
        window.thisContext = this;
        $('#bar_3').animate({opacity:'0.5'}, this.time);
        $('#bar_0').animate({height:'90%'}, this.time);
        $('#bar_1').animate({height:'40%'}, this.time);
        $('#bar_2').animate({height:'70%'}, this.time, function(){
            thisContext.frame2();
        });
    }
    
    this.frame2 = function()
    {
        window.thisContext = this;
        $('#bar_3').animate({opacity:'1'}, this.time);
        $('#bar_0').animate({height:'63%'}, this.time);
        $('#bar_1').animate({height:'77%'}, this.time);
        $('#bar_2').animate({height:'47%'}, this.time, function(){
            thisContext.frame1();
        });
    }

    this.destroy = function()
    {
        this.obj.remove();
    }
}

function animationLoading()
{
    window.$logo = new Logo();
    
    var $dataLogo = {
        width: 230, 
        left: '40%', 
        top: 180
    };
    $logo.generate('#wt-logo', $dataLogo);
    
    $('#canvasAnimation').fadeIn();
    var $frames = {
        frame1: function(){
            $logo.animate();
        }, 
        frame2: function(){
            setTimeout(function(){
                $logo.stop();
                $logo.time = 3000;
                $logo.obj.animate({left: 34, top: 12, width: 23, height: calcp(23).h}, $logo.time);
            }, $logo.time*10);
        },
        frame3: function(){
            setTimeout(function(){
                $('#canvasAnimation').animate({height: 50}, $logo.time);
            }, ($logo.time * 11));
        },
        frame4: function(){
            setTimeout(function(){
                $('#canvasAnimation').fadeOut(function(){
                    $(this).remove();
                });
                $logo.time = 500;
                $logo.obj.hover(function(){
                    $logo.animate();
                }, function(){
                    $logo.stop();
                });
            }, ($logo.time * 11));
        }
    };
    
    $logo.animate($frames);
}

