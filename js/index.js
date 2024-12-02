// 【字符串替换】编写⼀个函数，接收三个参数：原字符串、待替换的⼦字符串以及替换后的⼦
// 字符串。函数应返回将原字符串中所有待替换的⼦字符串替换为替换后的⼦字符串的结果。
replaceString("hello world", "world", "there");
replaceString("abc abc abc", "abc", "123");
function replaceString(str, temp, newStr) {
    let res = '', arr = str.split(' ');
    // index=str.indexOf(temp);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === temp) {
            res += ' ' + newStr;
        } else {
            res += ' ' + arr[i];
        }
    }
    console.log(res)
    return res;
}

// 【验证字符串是否为有效的括号序列】编写⼀个函数，接收⼀个只包含字符 '(', ')',
// '{', '}', '[' 和 ']' 的字符串，判断字符串是否是⼀个有效的括号序列。
isValid("()");
function isValid(str) {

}

// 【字符串中的单词翻转】编写⼀个函数，接收⼀个包含多个单词的字符串（单词之间由空格分
// 隔），并返回单词顺序翻转后的字符串，但单词内部的字符顺序不变。
reverseWords("Let's take LeetCode contest");
function reverseWords(str) {
    let arr = str.split(' '), res = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i !== 0) {
            res += ' ';
        }
        res += arr[i];
    }

    console.log(res);
    return res;
}

// 4. 【数组中的第⼆⼤元素】编写⼀个函数，接收⼀个数组作为输⼊，并返回该数组中的第⼆⼤元
// 素。如果不存在第⼆⼤元素，则返回 null 或 undefined 。

findSecondLargest([3, 5, 1, 2, 4]); // 输出: 4
findSecondLargest([1, 2, 2, 2]); // 输出: null 或 undefined
function findSecondLargest(arr) {
    let max = arr[0], max2 = arr[0], max3 = arr[0], index = 0;
    //找到最大的数
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max) {
            max2 = Math.max(max2, arr[i]);
            index++;
        }
    }
}