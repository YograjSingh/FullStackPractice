// given an array, give an array where wach value is multiplied by 2

let arr=[1,2,3,4,5,6];

function transform(i){
    return i*2;
}

const new_array=arr.map(transform);
console.log(new_array);

// other way of using map
const new_array2=arr.map(function(i){
    return i*3;
});
console.log(new_array2);