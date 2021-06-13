// let today = new Date();
// let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.console.log(getDate());
// var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// var dateTime = date + ' ' + time;
// const { DateTime } = require(“luxon”);

let time = document.getElementById('time-id').innerHTML;

function getTime() {
  let refresh = 1000; // Refresh rate in milliseconds
  let myTime = setTimeout('display_Time()', refresh);
}
function display_Time() {
  let cTime = new Date(); // Can use this for month, day, year, hours, minutes, and seconds.
  let currentTime = moment().format('LTS');
  let currentDate = cTime.toLocaleString('en-GB');
  let cDate = moment().format('LL');
  document.getElementById('date-id').innerHTML = cDate;
  document.getElementById('hi-id').innerHTML = currentTime;
  getTime();
}
