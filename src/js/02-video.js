import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoplayerTime = "videoplayer-current-time";
const iframeEl = document.getElementById("vimeo-player");
const player = new Player(iframeEl);

player.on('timeupdate', throttle(onPlay, 1000));

const memoryTime = localStorage.getItem(videoplayerTime);

if (memoryTime) {
    player.setCurrentTime(JSON.parse(memoryTime).seconds);
}

function onPlay(data) {
    localStorage.setItem(videoplayerTime, JSON.stringify(data));
}

