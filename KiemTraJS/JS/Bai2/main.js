/*
Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
*/

function filterUsersByAgeAndStatus(users) {
    return users.filter(user => user.age > 25 && user.isStatus);
}

const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];

const filteredUsers = filterUsersByAgeAndStatus(users);
console.log(filteredUsers); 

/* Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần */

function sortUsersByAge(users) {
    return users.slice().sort((a, b) => a.age - b.age);
}

const sortedUsersByAge = sortUsersByAge(users);
console.log(sortedUsersByAge);

