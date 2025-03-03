let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navbarItem = document.querySelector('.navbar-item');

burger.addEventListener('click', () => {
    navbarItem.classList.toggle('h-class');
    nav.classList.toggle('v-class');
});

let musicSection = document.getElementById('music');
let isPlaying = true;

musicSection.addEventListener('click', function(event) {
    let targetedElement = event.target;

    if (targetedElement.className.includes('Options')) {
        let selected = document.querySelector('.Selected');
        let img = targetedElement.parentElement.parentElement.querySelector('.img');
        let music = targetedElement.previousElementSibling.previousElementSibling;
        let sounds = document.getElementsByTagName('audio');
        let playElements = document.getElementsByClassName('bx-pause');

        // Set loop for pause
        for (let i = 0; i < sounds.length; i++) {
            // Pause all sounds
            if (!sounds[i].paused) sounds[i].pause();

            // Change pause icons to play
            if (playElements[i]) playElements[i].classList.replace('bx-pause', 'bx bx-play-circle');

            // Remove the 'playmusic' class from all the images
            document.querySelectorAll('.img').forEach(function(img) {
                img.classList.remove('playmusic');
            });
        }

        // Check the condition for playing
        if (isPlaying) {
            music.play();
            isPlaying = false;
            targetedElement.classList.replace('bx bx-play-circle', 'bx-pause');
            img.classList.add('playmusic');
        } else {
            music.pause();
            music.currentTime = 0;
            isPlaying = true;
            targetedElement.classList.replace('bx-pause', 'bx bx-play-circle');
            img.classList.remove('playmusic');
        }

        // Remove the selected elements
        if (selected) selected.classList.remove('Selected');

        // Adding class to a targeted element so we will able to select it later
        targetedElement.parentElement.parentElement.classList.add('Selected');
    }
});

