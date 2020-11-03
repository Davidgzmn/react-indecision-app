class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            // options:props.options
            options:[]
        };
    }

    //lifecycle method
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
                this.setState(() => ({ options }));
            }
        }catch(e){
            console.log(e);
        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json)
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    handleDeleteOptions(){
        this.setState(() => ({ options: []}));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }
    handlePick(){
        const randomIndex = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomIndex];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>({
            options: prevState.options.concat([option])
        }));
    }
    render(){
        const subtitle = 'Put your fate in the hand of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <OptionList 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//         options: []
// };
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            
        </div>
    );
};
Header.defaultProps={
    title: 'Indecision app'
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled = {!props.hasOptions}
            >
            What should I do?</button>
        </div>
    );
};

const OptionList = (props) => {
    return (
        <div>
            <h3>Here are the options</h3>
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}

                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            remove
            </button>
        </div>
    );
};
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=> ({ error }));
        if(!error){
            e.target.elements.option.value='';        
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}                
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

// ReactDOM.render(<User name="David" age="28" />, document.querySelector("#app"));
ReactDOM.render(<IndecisionApp options={[]}/>, document.querySelector("#app"));