window.onload = function (){

    var mySwiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction:'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        }, 
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            var changeline=document.getElementById("changeline");
            if(swiper.activeIndex==3){
                changeline.style.display="block";
                changeline.style.animation="strench 5s linear 1";
            }else{
                changeline.style.animation="";
                changeline.display="none";
            }
        }
    }) ;

};
function playPause(){
    var music1=document.getElementById("music1");
    var audio1=document.getElementById("audio1");
    if(audio1.paused){
        audio1.play();
        music1.style.animation = 'change 3s linear infinite';
    }else{
        audio1.pause();
        music1.style.animation = 'none';
    }
} 
