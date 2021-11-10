// Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
// Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом.
//  То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].

function filterBy (array, dataType) {
    if(dataType == 'null'){
        return array.filter( function(el){
            return el != null
        })
    }if(dataType == 'object'){
        return array.filter( function(el){
            return typeof (el) != dataType || (el) == null
        })
    }else{
        return  array.filter( function(el){
            return typeof (el) != dataType}
        )
    }
}

// // В этом массиве убрать 'string'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'string')); // [{…}, ƒ, ƒ, 0, false, 65, null, true, NaN, 9007199254740992n, undefined]

// // В этом массиве убрать 'number'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'number')); // ['hello', 'world', {…}, ƒ, ƒ, '23', ' ', 'null', false, null, true, 9007199254740992n, undefined]

// // В этом массиве убрать 'bigint'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'bigint')); // ['hello', 'world', {…}, ƒ, ƒ, '23', 0, ' ', 'null', false, 65, null, true, NaN, undefined]

// // В этом массиве убрать 'boolean'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'boolean')); // ['hello', 'world', {…}, ƒ, ƒ, '23', 0, ' ', 'null', 65, null, NaN, 9007199254740992n, undefined]

// // В этом массиве убрать 'object'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'object')); // ['hello', 'world', ƒ, ƒ, '23', 0, ' ', 'null', false, 65, null, true, NaN, 9007199254740992n, undefined]

// // В этом массиве убрать 'function'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'function')); // ['hello', 'world', {…}, '23', 0, ' ', 'null', false, 65, null, true, NaN, 9007199254740992n, undefined]

// // В этом массиве убрать 'undefined'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'undefined')); // ['hello', 'world', {…}, ƒ, ƒ, '23', 0, ' ', 'null', false, 65, null, true, NaN, 9007199254740992n]

// // В этом массиве убрать 'null'
// console.log(filterBy(['hello', 'world', {a:2, b:'qwe'} , alert, function(){}, '23', 0, " ", 'null', false, 65, null, true, NaN, 9007199254740992n, undefined], 'null')); // ['hello', 'world', {…}, ƒ, ƒ, '23', 0, ' ', 'null', false, 65, true, NaN, 9007199254740992n]



