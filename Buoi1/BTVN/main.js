/* Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó

Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120*/
function calculateFactorial(number) {
    if (number < 0) {
        return "Không thể tính giai thừa của số âm";
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calculateFactorial(5)); 

/* Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

Ví dụ: reverseString(‘hello’) => olleh */
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString('hello')); 

/* Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

Ví dụ: translate(‘VN’) => “Xin chào”
translate(‘EN’) => “Hello” */
function translate(countryCode) {
    let message;

    switch (countryCode) {
        case 'VN':
            message = 'Xin chào';
            break;
        case 'EN':
            message = 'Hello';
            break;
        default:
            message = 'Không có thông điệp cho mã quốc gia này';
    }

    return message;
}


console.log(translate('VN')); // "Xin chào"
console.log(translate('EN')); // "Hello"
console.log(translate('SPN')); // "Không tìm thấy thông điệp cho mã quốc gia này"

/* Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…” */

function subString(inputString) {
    if (inputString.length > 15) {
        return inputString.substring(0, 10) + '...';
    } else {
        return inputString;
    }
}

console.log(subString('xinchaocacbandenvoiTechmaster'));




