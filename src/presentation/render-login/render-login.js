import { renderTableUsers } from '../render-table-users/render-table-users';
import renderLoginHTML from './render-login.html?raw';
import '../../../style.css';

let login;
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderLogin = (element) => {

    if (login) return;
    element.innerHTML = '';
    login = document.createElement('div');
    login.innerHTML = renderLoginHTML;
    element.append(login);

    const logBoton = login.querySelector('.boton-login');
    const TextBoxUsu = login.querySelector('.text-user');
    const TextBoxPass = login.querySelector('.text-Password');
    const LabelLogin = login.querySelector('.label-login');

    logBoton.addEventListener('click', (event) => {
        // console.log('mensaje');
        if (TextBoxUsu.value.trim().length === 0) {
            LabelLogin.innerHTML = 'Ingrese Usuario.';
            LabelLogin.classList.remove('label-login');
            LabelLogin.classList.add('label-error');
            event.preventDefault();
            return;
        }
        if (TextBoxPass.value.trim().length === 0) {
            LabelLogin.innerHTML = 'Ingrese Password.';
            LabelLogin.classList.remove('label-login');
            LabelLogin.classList.add('label-error');
            event.preventDefault();
            return;
        }
        renderTableUsers(element);
    });
}