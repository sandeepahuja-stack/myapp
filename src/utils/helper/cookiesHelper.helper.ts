const CookiesHelper = {
    
        createCookie : function(name: string, value: string, mins: number) {
            let expires = "";
            if (mins) {
                let date = new Date();
                date.setTime(date.getTime() + (mins *  60 * 1000));
                expires = `; expires=${date.toUTCString()}; secure;`
            }
        
            document.cookie = name + "=" + value + expires + "; path=/";
        },
    
       
    
 // usage
        // let value = CookiesHelper.readCookie("myCookieUniqueName");
        // let json = JSON.parse(CookiesHelper.readCookie("myJsonCookieUniqueName");
        readCookie : function(name: string) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }, 
        eraseCookie : function(name: any) {
            CookiesHelper.createCookie(name, "", -1);
        }
    
}


export default CookiesHelper;


