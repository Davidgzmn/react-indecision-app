
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.state = {
            count :0
        };
    }
    addOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });
    }
    minusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    resetCount(){
        this.setState(() => {
            return{
                count:0
            };
        });
    }
    componentDidMount(){
        try {
            const countString = localStorage.getItem('count');
            const count = parseInt(countString, 10);
            if(!isNaN(count)){
                this.setState(()=> ({count}));
            }
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log("updating");

        if(prevState.count !== this.state.count){
            const count = this.state.count;
            localStorage.setItem("count", count);
        }
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        );
    }
}
// Counter.defaultProps = {
//     count: 0
// }
ReactDOM.render(<Counter />, document.querySelector("#app"));

