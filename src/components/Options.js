import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className = "widget-header">
            <h3 className = "widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove all Items
        </button>
        </div>

        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count = {index + 1}
                    handleDeleteOptionsSingular={props.handleDeleteOptionsSingular}
                />
            ))

        }

        {props.options.length < 1 && <p className = "widget__message"> No element present in array!</p>}
    </div>
);

export default Options;