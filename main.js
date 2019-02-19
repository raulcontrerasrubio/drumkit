window.onload = (function (){
  document.addEventListener('keydown', keyPress);
  document.addEventListener('keyup', keyRelease);

  function keyPress(evt){
    let box = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    
    if(!(box || audio)){return;}
    
    box.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function keyRelease(evt){
    let box = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
    if(!box){
      return;
    }
    
    box.classList.remove('playing');

  }

  
})();