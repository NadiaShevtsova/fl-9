function getClosestToZero(...arg) {
    let arr = [...arg];
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[0]) >= Math.abs(arr[i])) {
            arr[0] = arr[i];
        }
    }

    return arr[0];
}

getClosestToZero();
