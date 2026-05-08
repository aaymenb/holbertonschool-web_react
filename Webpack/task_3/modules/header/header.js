import $ from 'jquery';
import './header.css';

$('body').prepend(
  `<header>
    <div id="logo"></div>
    <h1>Holberton Dashboard</h1>
  </header>`
);

console.log('Init header');
