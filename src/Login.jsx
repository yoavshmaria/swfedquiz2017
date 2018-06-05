import React, { Component } from 'react';
import logo from './logo-simi.png';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.startQuiz = this.startQuiz.bind(this);
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    startQuiz = (e) => {
        e.preventDefault();
        this.props.dataObj.setData("name", this.nameElement.value);
        this.props.dataObj.setData("email", this.emailElement.value);
        this.props.initQuiz();
    };

    setName = (ref) => {
        this.nameElement = ref;
    };

    setEmail = (ref) => {
        this.emailElement = ref;
    };

    render() {
        return (
            <form className="Login-container" onSubmit={this.startQuiz}>
                <img src={logo} alt="SimilarWeb"/>
                <input autoFocus={true} type="text" required placeholder="Name" ref={this.setName} name="name"/>
                <input type="email" required placeholder="Email" ref={this.setEmail} name="email"/>
                <button>Start</button>
            </form>
        );
    }
}

export default Login;
