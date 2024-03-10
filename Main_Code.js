function switchVowelsOrder(str) {
    const vowels = 'aeiouAEIOU';
    let vowelsArr = [];
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsArr.push(char);
        }
    }
    let newStr = '';
    for (let char of str) {
        if (vowels.includes(char)) {
            // Извлекаем последний элемент массива гласных, чтобы поменять местами
            newStr += vowelsArr.pop();
        } else {
            newStr += char;
        }
    }
    return newStr;
}

console.log(switchVowelsOrder('hello')); // 'holle'
console.log(switchVowelsOrder('world')); // 'world'
console.log(switchVowelsOrder('a')); // 'a'
console.log(switchVowelsOrder('aeiou')); // 'uoiea'