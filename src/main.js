import { weekdayCalc } from './weekday-calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let month = $('#month').val();
    let day = $('#day').val();
    let year = $('#year').val();
    let myDate = new Date(year, month, day);
    let weekday = weekdayCalc(myDate);
      $('#solution').text(`The day of the week is ${weekday}`);
  });
});
