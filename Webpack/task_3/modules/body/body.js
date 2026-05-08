import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append(
  `<section id="main-section">
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id="count"></p>
  </section>`
);

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
