# React Notes
## 3 important things
- Component
- State
- Re-rendering

### Front end of a dynamic website could be divided intwo 2 parts:
State and Component

### What is State?
1. A JS object that represents the **current** state of the *app*.
It repressents the dynamic things in our app(things that change).



### What is a component?
This tell how a DOM element should be rendered if a state is given.
It is a reusable, dynamic, HTML snippet that changes given the state.
As the state is updated, component also gets updated.

Other way of understanding component:
Component is a function which takes in a state/states as input and returns a HTML with something is called component.



### What is Re-rendering?
1. A state change triggers a re-render.
2. A re-render represents the actual DOM being manipulated when the state changes.
3. The updating of state and then the component also changing.
4. This process is called Re-rendering.

How to make Dynamic website?
1st way:
Create a Global state. For example, in case of Amazon, it could be side filter, products display.
Then as the user update the state variable as the person changes the state. For example, we started scorlling, then new itmes start getting added below.

## Breaking down concepts of react
1. In the below code, useState will generate two values, the first will get assigned to count, and the second will go to setCount.
2. Also, it is a way to set initial state.
3. These value are then fed to Button via a count and setcount attribute.
```
function App(){
    const [count, setCount]=React.useState(0);
return {
    <div><Button count={count} setCount={setCount}></Button>
    </div>
}

}
```
- We also see some return statement.
- Seems like it takes 2 inputs count and setCount


Now, we have a function as follows:
```
function Button(props){
    function onButtonClick(){
        props.setCount(){props.count+1};
    }
    return <button onClick={onButtonClick}>Counter {props.count}</button>
}

```



# How to create a React app?
1. npm create vite@latest
2. Give project name
3. select react
4. Select JS
5. Done.
6. Then run **"npm run i"**
7. to run the react project: **npm run dev**
8. To see how it gets converted to equivalent HTML, CSS, JS code, run: *npm run build*
