const apiKey = 'c1fdfb48-1bf6-4ef1-b8c9-e74f8f86e23a'; 
const script = document.createElement('script');
script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
script.defer = true;
document.head.appendChild(script);
