console.log("app.js is running")


const app = {
    title: "Indecision App",
    subtitle: "The best app",
    options:[]
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};
const removeAllOptions = () => {
    app.options = [];
    render();
};
const makeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const appRoot = document.querySelector('#app')

const numbers = [55,101,1000];
const numberLi = numbers.map((number) => {
    return number
});

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length>0 ? <p>Here are your options</p> : <p>No options</p>}
            <p>{app.options.length} options</p>
            <button disabled={app.options.length == 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove all</button>
            <ol>
                {
                    app.options.map((option) =>  <li key={option}>{option}</li>)
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div> 
    );
    ReactDOM.render(template,appRoot);

};

render();


