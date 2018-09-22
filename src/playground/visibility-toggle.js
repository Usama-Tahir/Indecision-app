// new code with React Component

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleIt = this.toggleIt.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleIt() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }
    //  toggleObject = {
    //     text : "Henlo Jee"
    // }

    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.toggleIt}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>"HELLO"</p>}
            </div>
        )
    }
}
ReactDOM.render(<Toggle />, document.getElementById('app'));



                                                                //  previous 
// const appRoot = document.getElementById("app");
// let visibility = false;
// const toogleObject = {
//     'text': 'This is toggle text',
// }
// const toogleIt = () => {
//     visibility = !visibility;
//     console.log(visibility);
//     renderTemplate();
// }
// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={toogleIt}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && <p>{toogleObject.text}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }
// renderTemplate();