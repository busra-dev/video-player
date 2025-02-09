const video = document.getElementById('main-video');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar');
const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
const volumeBar = document.getElementById('volume-bar');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Oynat/Duraklat butonu
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚❚';
    } else {
        video.pause();
        playPauseBtn.textContent = '►';
    }
});
function rewindVideo() {
    video.currentTime -= 10;
}

function forwardVideo() {
    video.currentTime += 10;
}
//İleri/Geri sarma
seekBar.addEventListener('input', () => {
    const time = (video.duration / 100) * seekBar.value;
    video.currentTime = time;
});

video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
});

// Ses aç/kapa
muteUnmuteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteUnmuteBtn.textContent = '🔊';
    } else {
        video.muted = true;
        muteUnmuteBtn.textContent = '🔇';
    }
});

// Ses seviyesi kontrolü
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
    if (video.volume > 0) {
        muteUnmuteBtn.textContent = '🔊';
    } else {
        muteUnmuteBtn.textContent = '🔇';
    }
});

// Tam ekran modu
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});