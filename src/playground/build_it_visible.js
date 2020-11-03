class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.ToggleDetails = this.ToggleDetails.bind(this);
        this.state = {
            isShowing: false
        }
    }
    ToggleDetails(){
        this.setState((prevState) => {
            return{
                isShowing: !prevState.isShowing
            };
        });
    }
    render(){
        return(
            <div>
                 <h1>Visibility App</h1>
                 <button onClick={this.ToggleDetails}>{this.state.isShowing ? "Hide details" : "Show details"}</button>
                 {this.state.isShowing && <div><p>Details here</p></div>}
             </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'));
