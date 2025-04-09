document.addEventListener('DOMContentLoaded', function() {
    // Инициализация карты
    ymaps.ready(initMap);
    
    function initMap() {
        const map = new ymaps.Map('map', {
            center: [55.751244, 37.618423],
            zoom: 15
        });
        
        // Сохранение ссылки на карту для других скриптов
        window.tourExpMap = map;
    }
});