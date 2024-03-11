function objectMethods(obj){
    console.log("Original Object:",obj);
    let keys = Object.keys(obj);
    let values=Object.values(obj);
    let entries = Object.entries(obj);
    console.log("After Object.entries:",entries);
    let hasProps=obj.hasownProperties("properties");
    console.log("After Object.hasOwnProperty:",hasProps);

    // Adds value to the existing object
    //parameters description---> empty object(this is by default as per syntax), existing object,content what we want to add 
    let newObject = Object.assign({},obj,{newProperty:"newValue"});
    console.log("After Object.assign:",newObject);

}