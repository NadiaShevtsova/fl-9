const three = 3, number1 = 2, number2 = 5, number3 = 8;

//task 1
function findType(variable){

    return typeof variable;
}
console.log(findType(null));

//task 2
let array = [number1, number2, number3];
function consoleForEach(el){
    console.log(el);
}

function forEach(array, func) {
    let i = 0;
    for (i in array){
        if(array){
            func(array[i]);
        }
    }
}
forEach(array, consoleForEach);

//task 3
function elementsMap(el) {

    return el + three;
}

function map(array, func){
    let transformedArray = [];
    forEach(array, function(el){
        transformedArray.push(func(el));
    });

    return transformedArray;
}
console.log(map(array, elementsMap));

//task 4
function elementsFilter(el){

    return el > three;
}

function filter(array, func){
    let filteredArray = [];
    forEach(array, function (el) {
      if(func(el)){
          filteredArray.push(el);
      }
    });

    return filteredArray;
}
console.log(filter(array, elementsFilter));

//task 5
const data = [
        {
            '_id': '5b5e3168c6bf40f2c1235cd6',
            'index': 0,
            'age': 39,
            'eyeColor': 'green',
            'name': 'Stein',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e3168e328c0d72e4f27d8',
            'index': 1,
            'age': 38,
            'eyeColor': 'blue',
            'name': 'Cortez',
            'favoriteFruit': 'strawberry'
        },
        {
            '_id': '5b5e3168cc79132b631c666a',
            'index': 2,
            'age': 2,
            'eyeColor': 'blue',
            'name': 'Suzette',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e31682093adcc6cd0dde5',
            'index': 3,
            'age': 17,
            'eyeColor': 'green',
            'name': 'Weiss',
            'favoriteFruit': 'banana'
        }
    ];

function getAdultAppleLovers(data){
   let filterData = filter(data, function (el) {

       return el.age > 18 && el.favoriteFruit === 'apple';
    });

   let mapData = map(filterData, function (el) {

       return el.name;
   });

   return mapData;
}
console.log(getAdultAppleLovers(data));

//task 6
const obj =
    {
        keyOne: 1,
        keyTwo: 2,
        keyThree: 3
    };

function getKeys(obj) {
    let arrayObjKeys = [];
    for (let key in obj) {
        if (key) {
            arrayObjKeys.push(key);
        }
    }

    return arrayObjKeys;
}
console.log(getKeys(obj));

//task 7
function getValues(obj) {
    let arrayObjValues = [];
    for (let value in obj) {
        if (value) {
            arrayObjValues.push(obj[value]);
        }
    }

    return arrayObjValues;
}
console.log(getValues(obj));

//task 8
function showFormattedDate (){
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date('2018-08-27T01:10:00');
    let monthIndex = date.getMonth();

    return `It is ${date.getDate()} of ${monthNames[monthIndex]}, ${date.getFullYear()}`;
}
console.log(showFormattedDate());
