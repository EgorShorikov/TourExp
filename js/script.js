document.addEventListener('DOMContentLoaded', function() {
    const zoomOutBtn = document.getElementById('zoomOut');
    const zoomDefaultBtn = document.getElementById('zoomDefault');
    const zoomInBtn = document.getElementById('zoomIn');
    
    zoomOutBtn.addEventListener('click', () => changeZoom(10));
    zoomDefaultBtn.addEventListener('click', () => changeZoom(15));
    zoomInBtn.addEventListener('click', () => changeZoom(18));
    
    function changeZoom(level) {
        if (window.tourExpMap) {
            window.tourExpMap.setZoom(level);
        }
    }
});