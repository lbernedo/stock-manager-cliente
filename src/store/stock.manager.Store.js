import { LoginUser } from "../use-cases/Login-user";

const stateUser = {
    currentPage: 0,
    users: [],
}
const UserLog = {};

/**
 * 
 * @param {*} user 
 */
const UserLogin = async (user) => {
    const log = await LoginUser(user);
}