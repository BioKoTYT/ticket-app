// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();

// Раскрываем на весь экран
tg.expand();

// Функция закрытия приложения
function closeApp() {
    tg.close();
}

// Устанавливаем цвет фона (опционально)
tg.setBackgroundColor('#E5E5E5');

// Устанавливаем цвет заголовка (опционально)
tg.setHeaderColor('#ffffff');