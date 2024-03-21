function getHumanData(){
    // We did not send any GET request. By default, fetch() does that.
    const response=fetch('https://fakerapi.it/api/v1/persons');
    console.log(response);
    // This is also a good way to deal with promise
    console.log(response.then(function(response){
        const json=response.json().then(function(finalData){
            console.log(finalData);
        })

    }))

    
}

// ANother way
async function getDataUsingAsync(){
    const response=await fetch('https://fakerapi.it/api/v1/persons');
    const data=await response.json();
    console.log(data);
}

getDataUsingAsync()