import React, {Component} from 'react';
import './App.css';
import Login from "./Login";
import Question from "./Question";
import {Questions} from "./Questions";
import apiData from './apiData';
import Thankyou from "./Thankyou";

class App extends Component {
    constructor(props) {
        super(props);

        let dataObj = new apiData();

        this.initQuiz = this.initQuiz.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.state = {
            isLoggedIn: false,
            currentStep: 0,
            dataObj: dataObj
        }
    }

    initQuiz = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    nextStep = () => {
        this.setState({
            currentStep: this.state.currentStep + 1,
        })
    };

    render() {
        return (
            <div className="App">
                {this.state.currentStep === Questions.length ? <Thankyou dataObj={this.state.dataObj} /> :
                    this.state.isLoggedIn ? (<Question nextStep={this.nextStep} dataObj={this.state.dataObj}
                                                       questionNumber={this.state.currentStep}/>) : (
                        <Login dataObj={this.state.dataObj} initQuiz={this.initQuiz}/>)
                }
            </div>
        );
    }
}

export default App;
