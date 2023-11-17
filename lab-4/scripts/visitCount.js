function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function increaseVisitCount() {
    let visitCount = getCookie("visitCount");
    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    } else {
        visitCount = 1;
    }
    setCookie("visitCount", visitCount, 365);
    updateVisitCountFooter(visitCount);
}

function updateVisitCountFooter(count) {
    document.getElementById("visitCountFooter").innerText = "Вы посетили этот сайт "  + count + " раз(а)";
    document.getElementById("visitCountFooter").style.color = "#fff";
    document.getElementById("visitCountFooter").style.padding = "10px";
    document.getElementById("visitCountFooter").style.fontFamily = "Arial, sans-serif";
    document.getElementById("visitCountFooter").style.fontSize = "14px";
}

window.onload = function() {
    increaseVisitCount();
}
