import React, {Component} from 'react';
import './Thankyou.css';
import logo from './logo-simi.png';
import apiData from './apiData';

class Thankyou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Hold on...",
            text: ""
        };
    }

    componentDidMount() {
        let quizData = this.props.dataObj.getData();
        let usernameId = quizData.email.replace(/@/g,"_").replace(/\./g,"_");
        try {
            window.firebase.database().ref(usernameId).once("value").then(snap => {
                if (snap.val() === null) {
                    window.firebase.database().ref(usernameId).set(quizData);
                    this.setState({title: `Thank you!`, text: `Winners will be announced during lunch.`});
                    this.forceUpdate();
                } else {
                    this.setState({title: `Hi again ;)`, text: `An application for ${quizData.email} already exists.`});
                    this.forceUpdate();
                }
            });
        }
        catch (e) {
            this.setState({title: `Something went wrong :(`, text: `Please try again later.`});
            this.forceUpdate();
        }
    }

    render() {
        return (
            <form className="Thankyou-container" onSubmit={this.startQuiz}>
                <img src={logo} alt="SimilarWeb"/>
                <h1>{this.state.title}</h1>
                <h2>{this.state.text}</h2>
            </form>
        );
    }
}

export default Thankyou;
