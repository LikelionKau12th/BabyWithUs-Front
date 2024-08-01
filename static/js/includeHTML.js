function LoadNavBar(){
    const allElements= document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        var el= allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNavBar();
                }
            }
            xhttp.open("GET", navpath,   true);
            xhttp.send();
            return;
        }
    }
}



function LoadFooterBar() {
    const footerElements = document.getElementsByTagName('*');
    for (var i = 0; i < footerElements.length; i++) {
        var el_footer = footerElements[i];
        var footerPath = el_footer.getAttribute("foo-include-path");
        if (footerPath) {
            var footerHttp = new XMLHttpRequest();
            footerHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el_footer.innerHTML = this.responseText;
                    el_footer.removeAttribute("foo-include-path");
                    LoadFooterBar();
                }
            }
            footerHttp.open("GET", footerPath, true);
            footerHttp.send();
            return;
        }
    }
}


