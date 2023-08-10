import './core.css';
import './theme-default.css';
import '../../demo.css';
import './perfect-scrollbar.css';
import './boxicons.css';
import renderTableUsersHTML from './render-table-users.html?raw';

let renderTableUser;
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTableUsers = (element) => {

    if (renderTableUser) return;
    element.innerHTML = '';
    renderTableUser = document.createElement('div');
    renderTableUser.classList.add('layout-wrapper');
    renderTableUser.classList.add('layout-content-navbar');
    renderTableUser.innerHTML = renderTableUsersHTML;
    element.append(renderTableUser);
}