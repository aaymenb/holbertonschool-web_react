import $ from 'jquery';
import './header.css';
import logo from '../../assets/holberton-logo.jpg';

$('body').prepend(
  `<header>
    <img id="logo" src="${logo}" alt="Holberton logo" />
    <h1>Holberton Dashboard</h1>
  </header>`
);

console.log('Init header');
