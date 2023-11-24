const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

/* 1.Viết function tính thứ hạng trung bình của cả lớp */
function averageGradeOfClass(grades) {
    const totalGrades = grades.reduce((total, student) => total + student.grade, 0);
    return totalGrades / grades.length;
}
console.log("Thứ hạng trung bình của cả lớp:", averageGradeOfClass(grades));


/* 2.Viết function tính thứ hạng trung bình của nam trong lớp */
function averageGradeOfMaleStudents(grades) {
    const maleStudents = grades.filter(student => student.sex === 'M');
    const totalGrades = maleStudents.reduce((total, student) => total + student.grade, 0);
    return totalGrades / maleStudents.length;
}
console.log("Thứ hạng trung bình của nam trong lớp:", averageGradeOfMaleStudents(grades));


/* 3.Viết function tính thứ hạng trung bình của Nữ trong lớp */
function averageGradeOfFemaleStudents(grades) {
    const femaleStudents = grades.filter(student => student.sex === 'F');
    const totalGrades = femaleStudents.reduce((total, student) => total + student.grade, 0);
    return totalGrades / femaleStudents.length;
}
console.log("Thứ hạng trung bình của nữ trong lớp:", averageGradeOfFemaleStudents(grades));


/* 4.Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp */
function highestGradeMaleStudent(grades) {
    const maleStudents = grades.filter(function(student) {
        return student.sex === 'M';
    });

    return maleStudents.reduce(function(max, student) {
        if (student.grade > max.grade) {
            return student;
        }
        return max;
    }, maleStudents[0]);
}
console.log("Học viên Nam có thứ hạng cao nhất trong lớp:", highestGradeMaleStudent(grades));


/* 5.Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp */
function highestGradeFemaleStudent(grades) {
    const femaleStudents = grades.filter(function(student) {
        return student.sex === 'F';
    });

    return femaleStudents.reduce(function(max, student) {
        if (student.grade > max.grade) {
            return student;
        }
        return max;
    }, femaleStudents[0]);
}
console.log("Học viên Nữ có thứ hạng cao nhất trong lớp:", highestGradeFemaleStudent(grades));


/* 6.Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp */
function lowestGradeMaleStudent(grades) {
    const maleStudents = grades.filter(function(student) {
        return student.sex === 'M';
    });

    return maleStudents.reduce(function(min, student) {
        if (student.grade < min.grade) {
            return student;
        }
        return min;
    }, maleStudents[0]);
}
console.log("Học viên Nam có thứ hạng thấp nhất trong lớp:", lowestGradeMaleStudent(grades));


/* 7.Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp */
function lowestGradeFemaleStudent(grades) {
    const femaleStudents = grades.filter(function(student) {
        return student.sex === 'F';
    });

    return femaleStudents.reduce(function(min, student) {
        if (student.grade < min.grade) {
            return student;
        }
        return min;
    }, femaleStudents[0]);
}
console.log("Học viên Nữ có thứ hạng thấp nhất trong lớp:", lowestGradeFemaleStudent(grades));


/* 8.Viết function thứ hạng cao nhất của cả lớp */
function highestGradeOfClass(grades) {
    return grades.reduce(function(max, student) {
        if (student.grade > max) {
            return student.grade;
        }
        return max;
    }, grades[0].grade);
}
console.log("Thứ hạng cao nhất của cả lớp:", highestGradeOfClass(grades));


/* 9.Viết function thứ hạng thấp nhất của cả lớp */
function lowestGradeOfClass(grades) {
    return grades.reduce(function(min, student) {
        if (student.grade < min) {
            return student.grade;
        }
        return min;
    }, grades[0].grade);
}
console.log("Thứ hạng thấp nhất của cả lớp:", lowestGradeOfClass(grades));


/* 10.Viết function lấy ra danh sách tất cả học viên Nữ trong lớp */
function femaleStudentsList(grades) {
    return grades.filter(student => student.sex === 'F');
}
console.log("Danh sách tất cả học viên Nữ trong lớp:", femaleStudentsList(grades));


/* 11.Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái */
function sortStudentsByNameAscending(grades) {
    return grades.sort((a, b) => a.name.localeCompare(b.name));
}
console.log("Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái:", sortStudentsByNameAscending(grades));


/* 12.Viết function sắp xếp thứ hạng học viên theo chiều giảm dần */
function sortStudentsByGradeDescending(grades) {
    return grades.sort((a, b) => b.grade - a.grade);
}
console.log("Sắp xếp thứ hạng học viên theo chiều giảm dần:", sortStudentsByGradeDescending(grades));


/* 13.Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J” */
function femaleStudentsStartsWithJ(grades) {
    return grades.filter(student => student.sex === 'F' && student.name.charAt(0).toLowerCase() === 'j');
}
console.log("Học viên Nữ có tên bắt đầu bằng 'J':", femaleStudentsStartsWithJ(grades));


/* 14.Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp */
function top5StudentsWithHighestGrades(grades) {
    const sortedGrades = grades.slice().sort((a, b) => b.grade - a.grade);
    return sortedGrades.slice(0, 5);
}
console.log("Top 5 người có thứ hạng cao nhất trong lớp:", top5StudentsWithHighestGrades(grades));





