/* LAB 2:
Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau
”A” nếu mark >= 85
”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
Các trường hợp còn lại in ra “D”
*/

function check(mark) {
    if (mark >= 85) {
        console.log("A");
    } else if (mark >= 70 && mark < 85) {
        console.log("B");
    } else if (mark >= 40 && mark < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
}
check(75);

/* LAB 3:
Bài tập 1: Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)
Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
Ví dụ: day = 6 --> “Hôm nay là thứ 7” */

function printDays(day) {
    switch (day) {
        case 0:
            console.log("Hôm nay là Chủ nhật");
            break;
        case 1:
            console.log("Hôm nay là Thứ 2");
            break;
        case 2:
            console.log("Hôm nay là Thứ 3");
            break;
        case 3:
            console.log("Hôm nay là Thứ 4");
            break;
        case 4:
            console.log("Hôm nay là Thứ 5");
            break;
        case 5:
            console.log("Hôm nay là Thứ 6");
            break;
        case 6:
            console.log("Hôm nay là Thứ 7");
            break;
        default:
            console.log("Ngày không hợp lệ");
            break;
    }
}
printDays(6);

// -------------------------------------------------------------------------

/* LAB 4:
Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
*/

function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString("a", 10));

/* Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
*/

function repeatStringWithDashes(str, n) {
    let repeatString1 = '';
    for (let i = 0; i < n; i++) {
        repeatString1 += str;
        if (i < n - 1) {
            repeatString1 += '-';
        }
    }
    return repeatString1;
}
console.log(repeatStringWithDashes("a", 10));

/*Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, 
ngăn cách nhau bởi dấu gạch ngang.
Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
*/
function repeatStringWithDashes(str, n) {
    if (n <= 1) {
        return str;
    }
    let repeatString2 = str;
    for (let i = 1; i < n; i++) {
        repeatString2 += '-' + str;
    }
    return repeatString2;
}
console.log(repeatStringWithDashes("a", 5));

/*Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100 */

function sumDiv5() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumDiv5()); 

/*Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.*/

function sphericalVolume(radius) {
    const pi = Math.PI;
    const volume = (4 / 3) * pi * Math.pow(radius, 3);
    return volume;
}
console.log(sphericalVolume(5));

/* Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

Note : Kết quả xuôi và ngược là như nhau

Ví dụ :

sum(3,8) = 22
sum(8,3) = 22 */
function sumBetween(a, b) {
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let total = 0;

    for (let i = start + 1; i < end; i++) {
        total += i;
    }
    return total;
}

console.log(sumBetween(3, 8));
console.log(sumBetween(8, 3)); 
/* Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. */

function checkPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(checkPrimeNumber(15)); 
console.log(checkPrimeNumber(23)); 

/* Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào. */
function checkPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function sumPrimeNumber(number) {
    let sum = 0;
    for (let i = 2; i <= number; i++) {
        if (checkPrimeNumber(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimeNumber(10)); 
console.log(sumPrimeNumber(20)); 

/* Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó. */
function totalDivisor(number) {
    if (number <= 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;

            if (i !== Math.sqrt(number)) {
                sum += number / i;
            }
        }
    }
    return sum;
}

console.log(totalDivisor(25)); 
console.log(totalDivisor(12)); 






