// call to this.setState() is an asynchronous call

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            if (count) {
                this.setState(() => ({ count }));
            }
        }
        catch(err) {
            
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("saving data", prevState);
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            }
        })
        console.log(this.state.count);
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            }
        })
        console.log(this.state.count);
    }
    handleReset() {
        this.setState(() => {
            return{
                count: 0
            }
        })
        console.log("reset");
    }
    render() {
        return(
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick = {this.handleAddOne}>+1</button>
            <button onClick = {this.handleMinusOne}>-1</button>
            <button onClick = {this.handleReset}>Reset</button>
        </div>
        );
    }
}


ReactDOM.render(<Counter count = {10} />, document.getElementById('app'));





// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }
// const appRoot = document.getElementById("app");
// const renderCounterApp = () => {
//     const template3 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>

//         </div>
//     );
//     ReactDOM.render(template3, appRoot);
// };
// renderCounterApp();

