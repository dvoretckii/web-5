document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname;
    var navItems = document.querySelectorAll(".nav-item a");

    navItems.forEach(function(item) {
        var itemPathname = new URL(item.href, window.location.origin).pathname;
        if (itemPathname === currentPage) {
            item.classList.add("active");
        }
    });
});
