function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('current-sound');

    setTimeout(()=>{
        key.classList.remove('current-sound');
    },500)

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', function(e){play(e)});

