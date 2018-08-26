function getMin(...arg) {
    let arr = [...arg];
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] >= arr[i]) {
            arr[0] = arr[i];
        }
    }

    return arr[0];
}

getMin();
