<<<<<<< HEAD
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1500));
function timeUpdate(data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
const currentTimeSaved = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTimeSaved).catch(function (error) {
  switch (error.time) {
    case 'RangeError':
      time = 0;
      console.log('timeError');
      break;

    default:
      // some other error occurred
      break;
  }
});
=======

>>>>>>> 3e31aa00d34d2819fdd62d559642a62c650b12e2
