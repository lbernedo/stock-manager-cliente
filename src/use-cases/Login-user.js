
/**
 * 
 * @param {Like<User>} user 
 */
export const LoginUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/login`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-type': 'application/json' }
    });
    const LogUser = await res.json();
    return LogUser;
}