// Task 106
// Berilgan ob'ekt ichidagi barcha qiymatlar yig'indisini toping(faqat son qiymatlarni).

function sumObjectValues(obj) {
    let result = []
    let arr = [{ value: obj, step: 1 }]
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else if (typeof value[key] === "number") {
                result.push(value[key])
            }
        }
    }
    return result.reduce((a, b) => (a + b))
}
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
// console.log(sumObjectValues(obj));
// Output: 6

// Task 105
// Berilgan massiv ichidagi elementlarni n qadamga chapga siljiting.

function rotateArrayLeft(arr, n) {
    let result = null
    for (let i = 1; i <= n; i++) {
        arr.push(arr.shift());
    }
    return arr
}

// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2]

// Task 106
// Berilgan satr ichidagi barcha raqamlarni olib tashlang.

function removeDigits(str) {
    let arr = str.split("")
    let result = []
    arr.forEach((item, index) => {
        if (isNaN(item)) {
            result.push(item)
        }
    });
    return result.join("")
}

// console.log(removeDigits("abc123def456"));
// Output: "abcdef"

// Task 107
// Berilgan massivdan faqat toq indekslaridagi elementlarni qaytaring.

function oddIndexedElements(arr) {
    let result = arr.filter((item, index) => index % 2 !== 0)
    return result
}

// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));
// Output: [2, 4, 6]

// Task 108
// Berilgan ob'ekt ichidagi barcha son qiymatlarni ikki baravar oshiring.
function doubleValues(obj2) {
    let arr = [{ value: obj2, step: 1 }]
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else if (typeof value[key] === "number") {
                value[key] = value[key] * 2
            }
        }
    }
    return obj2
}

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
// console.log(doubleValues(obj2));
// Output: { a: 2, b: { c: 4, d: { e: 6 } } }

// Task 109
// Berilgan ob'ekt ichidagi kalit-qiymat juftliklarini arrayga aylantiring.

function objectToArray(obj3) {
    let result = []
    for (const key in obj3) {
        result.push([key, obj3[key]])
    }
    return result
}
const obj3 = {
    a: 1,
    b: 2,
    c: 3
};
// console.log(objectToArray(obj3));
// Output: [["a", 1], ["b", 2], ["c", 3]]

// Task 110
// Berilgan ob'ekt ichidagi barcha kalitlarni ularning qiymati bo'yicha tartiblang.

function sortKeysByValue(obj4) {
    let keys = Object.keys(obj4)
    keys.sort((a, b) => obj4[a] - obj4[b])
    let result = {}
    for (const key of keys) {
        result[key] = obj4[key]
    }
    return result
}

const obj4 = {
    a: 3,
    b: 1,
    c: 2
};
console.log(sortKeysByValue(obj4));
// Output: { b: 1, c: 2, a: 3 }