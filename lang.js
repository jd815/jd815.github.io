function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie value
function getCookie() {
    var name = 'lang'; // Specify the name of the cookie to retrieve
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function setLang(lang){
    setCookie('lang', lang, 365); // If the lang cookie is null or 'cz', set it to 'en'
    handleLanguageSwitch()
}
// Function to handle language switch
function handleLanguageSwitch() {
    var lang = getCookie('lang');
    var elements = document.getElementById('text').querySelectorAll('[lang]'); // Select all elements with lang attribute within the "text" div
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('lang') === 'cz') {
            elements[i].style.display = lang === 'cz' ? 'block' : 'none'; // Toggle visibility based on language
        } else {
            elements[i].style.display = lang === 'cz' ? 'none' : 'block'; // Toggle visibility based on language
        }
    }
}
handleLanguageSwitch();