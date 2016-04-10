/**
 * Created by Administrator on 16-4-10.
 */

window.onload= function () {

    var music=document.getElementsByClassName("play")[0];
    var audio=document.getElementsByTagName("audio")[0];

    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");

   //当音乐播放完之后，控制音乐播放效果

    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
    },false);


    //music.onclick=function(){
    //
    //   if(audio.paused) {
    //    audio.play();
    //      // this.setAttribute("class","play")
    //       this.style.animationPlayState="running";
    //       this.style.webkitAnimationPlayState="running"
    //   }else {
    //       audio.pause();
    //       //this.setAttribute("class","")
    //       this.style.animationPlayState="paused";
    //       this.style.webkitAnimationPlayState="paused"
    //   }
    //
    //}

    music.addEventListener("touchstart",function(event){

           if(audio.paused) {
            audio.play();
               music.setAttribute("class","play");
              // music.style.animationPlayState="running";
              // music.style.webkitAnimationPlayState="running"
           }else {
               audio.pause();

               music.setAttribute("class","");
              // music.style.animationPlayState="paused";
               //music.style.webkitAnimationPlayState="paused"
           }
    },false);


   // page 的切换
    page1.addEventListener("touchstart",function(event){
        page1.style.display="none";
        page2.style.display="block";
        //page3.style.display="block";

        setTimeout(function() {
            page2.setAttribute("class","page fadeout")
            page3.setAttribute("class","page fadein")
            page2.style.display = "none";
             page3.style.display = "block";
        }, 5500);

    },false);


};
