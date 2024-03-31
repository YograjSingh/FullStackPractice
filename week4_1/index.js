const express=require('express');
const bodyParser=require('body=parser');
const app=express();

const adminRouter=require();
const userRouter=require();

// middleware for parsing request body
app.use(bodyparser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});