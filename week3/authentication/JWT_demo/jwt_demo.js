const express=require('express');
const jwt=require('jsonwebtoken');
const jwtPrivateKey="1234567890";

const app = express();

const value={
    name: "sunny",
    accountNumber: 123454321
};

const token=jwt.sign(value.name,jwtPrivateKey);
console.log(token);
try {
    const verify=jwt.verify(token,"112");
console.log(verify); 
} catch (error) {
    console.log("There is some error: " );
}
