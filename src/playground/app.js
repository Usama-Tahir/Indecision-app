// for understanding bind().
const obj = {
    name: "Usama",
    getName() {
        return this.name;
    }
}
const getName = obj.getName.bind(obj);

console.log(getName());


//  **************************************

// ****************************************
// stateless functional component

// ****************************************

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.randomChoice = this.randomChoice.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOptionsSingular = this.handleDeleteOptionsSingular.bind(this);
        this.state = {
            // options: ['11', '22', '33']
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }
    // only for class based component 
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch(err) {
            
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log("saving data", prevState);
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log("Unmount");
    }
    handleDeleteOptionsSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
        console.log("HTO", optionToRemove);
    }
    handleAddOptions(option) {
        if (!option) {
            return 'Enter valid value!';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists in the array';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });
    }
    randomChoice() {
        let randomValue = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(randomValue);
    }
    render() {
        const subtitle = "Put your life in the hands of Computer.";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    randomChoice={this.randomChoice}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionsSingular={this.handleDeleteOptionsSingular}
                />

                <AddOption
                    handleAddOptions={this.handleAddOptions} />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision"
}
// class Header extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.randomChoice}
                disabled={!props.hasOptions}
            >
                What is!
            </button>
        </div>
    );
};
// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.randomChoice}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What is!
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
         <div>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOptionsSingular={props.handleDeleteOptionsSingular}
                    />
                ))

            }
            <button onClick={props.handleDeleteOptions}>Remove all Items</button>
            {props.options.length <1 && <p> No element present in array.</p>}
        </div>
    );
};
// class Options extends React.Component {

//     render() {
//         let options = this.props.options;
//         console.log(options);
//         return (
//             <div>
//                 {
//                     options.map((option) => <Option key={option} optionText={option} />)
//                 }
//                 <button onClick={this.props.handleDeleteOptions}>Remove all Items</button>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            <p key={props.optionText}>{props.optionText}!</p>
            <button
                onClick={(e) => props.handleDeleteOptionsSingular(props.optionText)}>
                Delete It
            </button>

        </div>

    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <p key={this.props.optionText}>{this.props.optionText}!</p>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        this.setState(() => ({ error }));
        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                <pre>Add Options here.</pre>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// *******************************************
// stateless functional component example

// const Poop = (props) => {
//     return (
//         <div>
//             <pre>Name : {props.name}</pre>
//             <pre>Age : {props.age}</pre>
//         </div>
//     )
// }

// *******************************************

// ReactDOM.render(<Poop name={"Usama"} age={23} />, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreetings = this.getGreetings.bind(this);
    }
    getGreetings() {
        return `Hi!. My name is ${this.name}.`
    }
}
 const old = new OldSyntax();
 const getGreetings = old.getGreetings;
 console.log(getGreetings());

//  new syntax

class NewSyntax {
    name = "Jen";
    getGreetings = () => {
        return `Hi!. My name is ${this.name}.`
    }
}

const newSyntax = new NewSyntax();
const newGetGreetings = newSyntax.getGreetings;
console.log(newGetGreetings());