document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('keydown', function(e) {
        console.log(e.keyCode);
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        let drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
        console.log(drum);
        drum.classList.add("active");
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    })

    function removeTransition(e) {
        if (e.propertyName !== 'box-shadow') return;
        this.classList.remove("active");
    }

    let drums = document.querySelectorAll('.drum');
    drums.forEach(drum => drum.addEventListener('transitionend', removeTransition));


});