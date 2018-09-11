$(function(){
    var timer;
    var i=0;
    timer=setInterval(function(){ 
        if(i<=1){
            i++;
        }else{
            i=0
        }
        $('.box ul.img li').eq(i).fadeIn(1000).siblings().fadeOut(1000);
        $('.box ul.circle li').eq(i).css({'background':'transparent','border':'2px solid white'}).children('h6').css('background','#fff')
        $('.box ul.circle li').eq(i).siblings().css({'background':'#ccc','border':'2px solid transparent'}).children('h6').css('background','#ccc')
    },2000)
    var flag=1;
    $('nav #img3').click(function(){
        if(flag){
            $('nav ul').slideDown(800);
            flag=0;
        }else if(flag==0){
            $('nav ul').slideUp(800);
            flag=1;
        }       
    })
    $(window).on('mousewheel',function(e){
        if(e.deltaY<0){
            if($('main .top').offset().top<700){
                $('main .top').fadeIn(1000)
            }else if(700<=$('main .middle').offset().top<1200){
                $('main .middle').fadeIn(1000)
            }
            } else if(1200<=$('main .bottom').offset().top<2400){
                $('main .middle').fadeIn(1000)
                   
        }else if(e.deltaY>0){
            $('main .top').fadeOut(1000);
        }
    })
})
