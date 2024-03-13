const express=require("express");//importing the required package
const app=express();//creating an object
const user={//data which we will use
    name: "John",
    kidneys: [{
        healthy: false
    }]
};
const users=[user];//array of data above
app.get("/",function(req,res){//get API 
    const johnKideys = users[0].kidneys;
    const numberOfKideys = johnKideys.length;
    let numberOfHealthyKidneys=0;
    for (let i=0; i<numberOfKideys; i++){
        if(johnKideys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    console.log(johnKideys);
    const numberOfUnhealthyKidneys=numberOfKideys-numberOfHealthyKidneys;

    res.json({
        numberOfKideys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

});

app.use(express.json()); //required for using json in POST
app.post('/add', function(req, res){
    const isHealthy =req.body.ishealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg:"Done!"
    })

})
app.put("/",function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.delete("/",function(req, res){
    const newKidneys=[];
    for(let i=0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"});
})
app.listen(3000);