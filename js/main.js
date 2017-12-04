document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('keydown', function(e) {
        console.log(e.keyCode);
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    })

});