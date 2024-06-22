function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let temp = arr.shift(); // Вземаме първия елемент
        arr.push(temp); // Преместваме го в края на масива
    }

    console.log(arr.join(' '));
}
arrayRotation([32, 21, 61, 1], 4);