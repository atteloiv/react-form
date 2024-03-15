# Форма оплаты

## Установка

1. Клонируйте репозиторий `https://github.com/atteloiv/react-form.git`
2. Перейдите в папку склонированного репозитория
3. Установите composer `composer install`
4. Создайте новый файл конфигурации на основе .env.example `cp .env.example .env`
5. Настройте базу данных в файле .env в корне проекта:
    ```
    DB_CONNECTION="тип используемого соединения"
    DB_HOST="имя хоста или IP-адрес сервера"
    DB_PORT="номер порта"
    DB_DATABASE="имя БД"
    DB_USERNAME="имя пользователя"
    DB_PASSWORD="пароль"
    ```
6. Запустите миграцию базы данных `php artisan migrate`
7. Сгенерируйте уникальный ключ `php artisan key:generate`
8. Установите пакеты `npm install`
9. Запустите окружение для локальной фронтенд-разработки `npm run dev`
10. Запустите веб-сервер `php artisan serve`
