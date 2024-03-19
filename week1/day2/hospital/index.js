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
    if(atleastOneUnhealthyKidney==false){
        res.status(411).json("All kidneys are healthy");
    }
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})



function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for (let index = 0; index < users[0].kidneys.length; index++) {
        if(!users[0].kidneys[index].healthy){
            atleastOneUnhealthyKidney=true;
        }
        
        
    }
    return atleastOneUnhealthyKidney
}
app.delete("/",function(req, res){
    // return 411 only if the user
    // atleast one unhealthy kidney is there do this, else rreturn 411
    if(isThereAtleastOneUnhealthyKidney()){
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

    }else{
        res.status(411).json({
            msg:"You dont have bad kidneys"
        })
    }
    
})
app.listen(3000);