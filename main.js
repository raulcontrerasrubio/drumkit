window.onload = (function (){
  document.addEventListener('keydown', keyPress);
  document.addEventListener('keyup', keyRelease);
  handleOnClickEvent();

  function keyPress(evt){
    let box = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    box.classList.add('playing');
    play(box, audio);
  }

  function keyRelease(evt){
    let box = document.querySelector(`.box[data-key="${evt.keyCode}"]`);
    if(!box){ return; }

    box.classList.remove('playing');
  }

  function handleOnClickEvent(){
    var buttons = document.querySelectorAll('.box[data-key]');
    for(let btn of buttons){
      btn.onclick = function(){
        let code = this.getAttribute('data-key');
        let audio = document.querySelector(`audio[data-key="${code}"]`)
        
        play(this, audio);
      }
    }
  }

  function play(box, audio){
    if(!(box || audio)){return;}

    audio.currentTime = 0;
    audio.play();
  }

  
})();