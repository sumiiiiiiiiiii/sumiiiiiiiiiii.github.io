document.getElementById('blur-container').addEventListener('click', function() {
    document.getElementById('blur-container').style.display = 'none';
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    mainContent.style.opacity = 1;

    const files = [
        "1.mp3",
        "2.mp3",
        "3.mp3",
        "4.mp3"
    ];
    const song = Math.floor(Math.random() * files.length);

    const audioplayer = document.getElementById("musicplayer");
    const songplayerprogressbarfill = document.querySelector(".song-player-progress-bar-fill");
    const playpausebutton = document.getElementById("play-pause-button");
    const songplayertime = document.querySelector(".song-player-time");

    function toggleplaypause() {
        if (audioplayer.paused) {
            audioplayer.play();
            playpausebutton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioplayer.pause();
            playpausebutton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    audioplayer.src = files[song];
    audioplayer.play();
    audioplayer.loop = true;

    audioplayer.addEventListener("timeupdate", () => {
        const { currentTime, duration } = audioplayer;
        const progressPercent = (currentTime / duration) * 100;
        songplayerprogressbarfill.style.width = `${progressPercent}%`;

        let currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }

        let durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }

        songplayertime.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
    });

    playpausebutton.addEventListener("click", toggleplaypause);
});