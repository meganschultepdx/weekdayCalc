import { weekdayCalc } from './weekday-calc';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let month = $('#month').val();
    let day = $('#day').val();
    let year = $('#year').val();
    let myDate = new Date(year, month, day);
    let weekday = weekdayCalc(myDate);
    console.log(weekday);
      $('#solution').text(`The day of the week is ${weekday}`);
  });
});
