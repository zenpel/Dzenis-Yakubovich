document.addEventListener('DOMContentLoaded', () => {
    // Автоматическое прокручивание списка рекомендованных фильмов
    const recommendedList = document.querySelector('.recommended-list');
    let scrollAmount = 0;
    const scrollStep = 2; // шаг прокрутки в пикселях
    const scrollDelay = 20; // задержка между прокрутками в миллисекундах

    function scrollList() {
        scrollAmount += scrollStep;
        recommendedList.scrollLeft = scrollAmount;
        if (scrollAmount >= recommendedList.scrollWidth - recommendedList.clientWidth) {
            scrollAmount = 0; // сбросить прокрутку к началу
        }
    }

    setInterval(scrollList, scrollDelay);

    // Обработка кнопок "Смотреть" и "Подробнее"
    const playButton = document.querySelector('.featured-info button:first-child');
    const moreInfoButton = document.querySelector('.featured-info button:last-child');

    playButton.addEventListener('click', () => {
        alert('Проигрывание видео...');
        // Здесь можно добавить код для воспроизведения видео
    });

    moreInfoButton.addEventListener('click', () => {
        alert('Показ дополнительной информации...');
        // Здесь можно добавить код для показа дополнительной информации
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    searchButton.addEventListener('click', function() {
        const searchText = searchInput.value.trim();
        if (searchText !== '') {
            searchResults.innerHTML = ''; // Очищаем предыдущие результаты поиска
            // Здесь можно выполнить логику поиска (например, запрос к API или локальный поиск)
            const resultElement = document.createElement('div');
            resultElement.textContent = `Вы искали: ${searchText}`;
            searchResults.appendChild(resultElement);
        } else {
            alert('Введите текст для поиска');
        }
    });
});
