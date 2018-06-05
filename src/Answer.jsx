import React, { Component } from 'react';
import './Question.css';

class Answer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = `Question-answer-container`;
        if(this.props.isSelected){
            className = `Question-answer-container Question-answer--selected`;
        }
        return (
            <div onClick={() => {this.props.onClick(this.props.id)}} className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default Answer;
