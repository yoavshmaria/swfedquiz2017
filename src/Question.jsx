import React, { Component } from 'react';
import logo from './logo-simi.png';
import Highlight from 'react-highlight';
import './Question.css';
import 'react-highlight/build/docs.css';
import Answer from "./Answer";
import {Questions} from './Questions';

class Question extends Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.answerClicker = this.answerClicker.bind(this);
        this.state = {
            selectedAnswer: 0,
        };
    }

    nextStep = () => {
        if(this.state.selectedAnswer > 0){
            this.setState({selectedAnswer: 0});
            this.props.dataObj.setData(`Q${this.props.questionNumber}`, this.state.selectedAnswer);
            this.props.nextStep();
            document.body.scrollTop = 0;
        }
    };

    answerClicker = (n) => {
        this.setState({selectedAnswer: n})
    };

    render() {
        let question = Questions[this.props.questionNumber];
        let answers = [];
        question.answers.forEach(answer => {
            answers.push(
                <Answer key={answer.id} id={answer.id} isSelected={this.state.selectedAnswer === answer.id} onClick={this.answerClicker}>
                    <Highlight className="javascript">
                        {answer.text}
                    </Highlight>
                </Answer>
            )
        });
        return (
            <div className="Question-container">
                <div>
                    <div className="Question-title">
                        {question.title}
                    </div>
                    <div className="Question-description">
                        <Highlight className="javascript">
                            {question.description}
                        </Highlight>
                    </div>
                    {answers}
                </div>
                <div className="Question-footer">
                    <button onClick={this.nextStep}>Next</button>
                    <img src={logo} alt="SimilarWeb"/>
                </div>
            </div>
        );
    }
}

export default Question;
