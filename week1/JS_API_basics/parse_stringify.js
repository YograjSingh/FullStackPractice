const user_string='{"name":"mango","qty":20}'
// above is atring and we have to convert it to JSON to use it in JS
const user_JSON=JSON.parse(user_string);
console.log(user_JSON["qty"]);

const user1={
    name: "Sunny",
    gender:"male"
}
// converts JSON to string
const finalString = JSON.stringify(user1);
console.log(finalString);