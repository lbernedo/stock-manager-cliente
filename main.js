import { StockManagerApp } from './src/stock-manager-app';
// import './style.css';

document.querySelector('#app').innerHTML = `
<div class="contenido">
</div>
`;
const element = document.querySelector('.contenido');
StockManagerApp(element);