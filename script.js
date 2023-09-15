// Получаем ссылку на кнопку и блок с дополнительной информацией
const button = document.getElementById('myButton');
const moreInfo = document.getElementById('moreInfo');
console.log(document);
// Добавляем обработчик события для кнопки
button.addEventListener('click', function () {
    // Переключаем видимость блока с дополнительной информацией
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        button.textContent = 'Скрыть информацию';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Показать больше информации';
    }
});
