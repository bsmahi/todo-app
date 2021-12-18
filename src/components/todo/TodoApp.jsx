import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogOutComponent from './LogOutComponent'

class TodoApp extends Component {
    render() {
        return <div className="TodoApp">
            <Router>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome/:name" element={<WelcomeComponent />} />
                    <Route path="/todos" element={<ListTodosComponent />} />
                    <Route path="/logout" element={<LogOutComponent />} />
                    <Route path="/*" element={<ErrorComponent/>}/>
                </Routes>
                <FooterComponent/>
            </Router>

            {/*<LoginComponent />
            <WelcomeComponent />*/}

        </div>
    }
}

function ErrorComponent() {
    return <div>An Error Occured, please contact support team.</div>
}

/*function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }

    return null
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div>
    }

    return null
}*/

export default TodoApp
