/*Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất */

function getStringHasMaxLength(strings) {
    let maxLength = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > maxLength) {
            maxLength = strings[i].length;
        }
    }

    const longestStrings = strings.filter(str => str.length === maxLength);
    return longestStrings;
}

const result = getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']);
console.log(result); 