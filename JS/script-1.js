// TASK 1


const ADMIN_PASSWORD = 'm4ng0h4ckz';

let message;

message = prompt('Введите пароль!');

if (!message) {
    message = alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
    message = alert('Добро пожаловать');
} else {
    message = alert('Доступ запрещен! Неверный пароль!');
}