var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let calcScrollValue = () => {
  let scrollProgress = document.getElementById
  ("progress");
  let progressValue = document.getElementById
  ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
       document.documentElement.scrollHeight -
        document.documentElement.clientHeight ;
  let scrollValue = Math.round((pos*100) / calcHeight);
  
  if (pos > 100) {
    scrollProgress.style.display = "grid";
 } else {
    scrollProgress.style.display = "none" ;
 }
 scrollProgress.addEventListener("click", () => {document.documentElement.scrollTop = 0;});

 scrollProgress.style.background = `conic-gradient(#F0683C ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

};

window.onscroll = calcScrollValue ;
window.onload = calcScrollValue ;

// let myParent = document.querySelector('.playpausevideo');
// let myVideo = myParent.querySelector('.playpausevideo');

// function fadein(){
//       hint.style.opacity = ctr !== 10 ? '0.'+ctr : 1;
//       hint.style.transform = ctr !== 10 ? 'scale('+('0.'+ctr)+')' : 'scale(1)';
//       ctr++;
      
//       if (ctr < 11)
//         requestAnimationFrame(fadein);
      
//       else
//         ctr = 0;
//     }
  
//     function fadeout(){
//       hint.style.opacity = 1 - ('0.'+ctr);
//       hint.style.transform = 'scale('+(1 - ('0.'+ctr))+')';
//       ctr++;
      
//       if (ctr < 10)
//         requestAnimationFrame(fadeout);
//       else
//         ctr = 0;
//     }

// function playPause() {
//    if (myVideo.paused) {
//          myVideo.play();
//          $(".pausebtn").fadeOut(100);
//          setTimeout(function(){ document.querySelector ('.pausebtn').style.backgroundImage = "none";},100);
//    } else{
//          myVideo.pause();
//          setTimeout(function(){ document.querySelector ('.pausebtn').style.backgroundImage = "url(./Miscellanous/play.png)";$(".pausebtn").fadeIn(100);},0) ;
//    }
// }

