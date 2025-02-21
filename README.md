Задание 1. Создать простое webApp.
Создать простое webApp, используя Node.js (Express, JavaScript), PostgresQL (Sequelize ORM).
При запуске приложение должно создать в базе данных таблицу “users” с помощью миграции и добавить в неё один пользовательский аккаунт, на котором будет лишь одно поле “balance” со значением 10000. Для совершения миграций, управляемых приложением, можно использовать библиотеку “Umzug”.
Написать route для обновления баланса пользователя, как в большую, так и в меньшую сторону, принимающего параметры userId и amount.
Важным условием является то, что баланс пользователя не может быть отрицательным.
Изменение баланса должно производиться в реальном времени, без использования очередей и отложенных задач.

Данное задание будет тестироваться отправкой 10000 запросов в один момент на попытку снять с баланса пользователя по 2 единицы. Успешно должно отработать 5000 запросов, вторая их половина должна получить адекватную ошибку о том, что средств на балансе недостаточно.


//////////////////////////////////////////////////////

Для запуска проекта требуется:
  - nodejs v22.11.0+
  - postgres v17.2

Инструкция по запуску:
  1. Для настройки контейнера с БД выполнить команду docker-compose up из корня проекта.
  2. Установить зависимости npm i
  3. Переопределить переменные окружения(можно добавить в корень файл .env). Пример файла .env:
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=postgres
    DB_NAME=postgres
  4. Выполнить команды npm run start. Все таблицы в БД будут созданы автоматически.
  5. Для изменения баланса пользователя необходимо выполнить запрос на PUT http://localhost:3000/api/users/changeBalance с телом:
    {
      "userId": 1,
      "amount": 2
    }
  6. Для проверки работы приложения можно использовать postman.
  