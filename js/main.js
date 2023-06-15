var name = prompt("Як вас звати?");

while (!name) {
    name = prompt("Будь ласка, введіть своє ім'я:");
}

var age = parseInt(prompt("Скільки вам років?"));
while (isNaN(age) || age <= 0) {
    age = parseInt(prompt("Будь ласка, введіть свій вік числом:"));
}

var smoke = confirm("Ви курите?");

if (age < 18 && !smoke) {
    alert("Молодець " + name + "! Гарний приклад для своїх однолітків");
} else if (age < 18 && smoke) {
    alert(name + ", а твої батьки знають про це?");
} else if (age > 18 && !smoke) {
    alert("Супер " + name + "! Мабуть ще й спортом займаєшся!");
} else if (age > 18 && smoke) {
    alert("Що ж " + name + ", це твій вибір. Але я б не радив курити.");
} else {
    alert("Некоректні дані.");
}
