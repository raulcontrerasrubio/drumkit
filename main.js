window.onload = (function (){
  document.addEventListener('keydown', keyPress);
  document.addEventListener('keyup', keyRelease);

  function keyPress(evt){
    let box = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    
    if(!(box || audio)){return;}
    
    box.classList.add('playing');
    audio.play();
  }

  function keyRelease(evt){
    let box = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    if(box && audio){
      box.classList.remove('playing');
      audio.pause();
      audio.currentTime = 0;
    }
  }

  
})();