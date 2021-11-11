const cookieHandler = {
    setCookie(cookieName, anyString)  {
        const now = new Date();
        now.setTime(now.getTime + 15 * 60 * 1000);
        const expires = now.toUTCString();
        document.cookie = `${cookieName}=${anyString}; expires=${expires}`;
    },
    
    getAll() {
        const cookieObj = {};
        const arrOfCookies = document.cookie.split('; ');
        arrOfCookies.forEach(cookie => {
            const keyValuePairs = cookie.split('=');
            cookieObj[keyValuePairs[0]] = keyValuePairs[1];
        })
        return cookieObj;
    },
    toSessionStorage() {
        const reverseCookie = cookieHandler.getAll();
        for (let key in reverseCookie) {
            sessionStorage.setItem(key, reverseCookie[key])
        }
    },
    flush () {
     const deleteCookie = cookieHandler.getAll();
     for (let key in deleteCookie) {
         document.cookie = `${key}=; expires=expires=Thu, 01 Jan 1970 00:00:00 UCT`
     }   
    }
}
export {
    cookieHandler
};