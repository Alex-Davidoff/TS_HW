var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
document.write('<h3>status = true</h3>');
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var t_user = users_1[_i];
    if (t_user.status) {
        document.write('<p>' + t_user.name + '</p>');
    }
}
document.write('<hr>');
document.write('<h3>status = false</h3>');
for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
    var t_user = users_2[_a];
    if (!(t_user.status)) {
        document.write('<p>' + t_user.name + '</p>');
    }
}
document.write('<hr>');
document.write('<h3>age > 30</h3>');
for (var _b = 0, users_3 = users; _b < users_3.length; _b++) {
    var t_user = users_3[_b];
    if (t_user.age > 30) {
        document.write('<p>' + t_user.name + '</p>');
    }
}
for (var _c = 0, users_4 = users; _c < users_4.length; _c++) {
    var t_user = users_4[_c];
    console.log(t_user);
}
