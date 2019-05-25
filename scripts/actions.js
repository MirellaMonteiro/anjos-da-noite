// REALIZA O FILTRO DAS ATUALIZAÇÕES
function findOnNewsList() {
    var input, filter, ul, li, a, i;

    input = document.getElementById("newsListFilter");
    filter = input.value.toUpperCase();
    ul = document.getElementById("newsList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// REALIZA A COLAPSAGEM DO MENU MOBILE
function mobileColapse() {
    var x = document.getElementById("mobile-colapse");

    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
