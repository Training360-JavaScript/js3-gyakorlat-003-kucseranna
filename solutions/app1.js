const setCookie = (anyString) => {
    const now = new Date();
    now.setTime(now.getTime + 15 * 60 * 1000);
    const expires = now.toUTCString();
    document.cookie = `token=${anyString}; expires=${expires}`;
}
export default setCookie;