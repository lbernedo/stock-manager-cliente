import { renderLogin } from "./presentation/render-login/render-login";
import { renderTableUsers } from "./presentation/render-table-users/render-table-users";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const StockManagerApp = async (element) => {
    element.innerHTML = 'Loading...';
    // renderLogin(element);
    renderTableUsers(element);
}