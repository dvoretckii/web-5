(function() {
    window.addEventListener('load', function() {
        const loadTime = Math.round(performance.now());
        const footer = document.querySelector('footer');
        const statsElement = document.createElement('p');
        statsElement.textContent = "Страница загружена за " +  loadTime.toString() + " мс";
        statsElement.style.color = "#fff";
        statsElement.style.padding = "10px";
        statsElement.style.fontFamily = "Arial, sans-serif";
        statsElement.style.fontSize = "14px";
        footer.appendChild(statsElement);
    });
})();
