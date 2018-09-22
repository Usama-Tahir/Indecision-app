import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };

    handleSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
    handleDeleteOptionsSingular = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
        console.log("HTO", optionToRemove);
    };
    handleAddOptions = (option) => {
        if (!option) {
            return 'Enter valid value!';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists in the array';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };
    randomChoice = () => {
        let randomValue = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({
            selectedOption: randomValue
        }));
    };
    // only for class based component 
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (err) {

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

    render() {
        const subtitle = "Put your life in the hands of Computer.";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        randomChoice={this.randomChoice}
                    />
                    <div className = "widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOptionsSingular={this.handleDeleteOptionsSingular}
                        />

                        <AddOption
                            handleAddOptions={this.handleAddOptions}
                        />
                    </div>

                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleSelectedOption={this.handleSelectedOption} />
            </div>
        );
    }
}
