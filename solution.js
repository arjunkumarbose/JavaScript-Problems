function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Not a number! :(";
    } else {
        return Math.pow(number, 3);
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Not a string! :(";
    }
    
    if (string1.includes(string2) || string2.includes(string1)) {
        return true;
    } else {
        return false;
    }
}

function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Invalid Input";
    }
    
    if (arr[0] >= 0 && arr[1] >= 0) {
        if (arr[0] === arr[1]) {
            return "equal";
        } else {
            return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])];
        }
    } else {
        return "Invalid Input";
    }
}

function findAddress(obj) {
    const properties = ['street', 'house', 'society'];
    const tempArr = [];
    
    for (const property of properties) {
        if (obj[property]) {
            tempArr.push(obj[property]);
        } else {
            tempArr.push("__");
        }
    }
    
    const result = tempArr.join(",");
    return result;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Taka was not given! :(";
    }
    
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    
    if (sum < totalDue) {
        return false;
    }
    
    return true;
}
