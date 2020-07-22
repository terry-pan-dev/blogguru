import React, { Component } from 'react'
import { connect } from "react-redux";
import {
    LoginWrapper,
    LoginBox,
    InputWrapper,
    LoginButton,
    Solution,
    SocialMediaLogin,
} from "./style";

import { FaUserAlt, FaLock } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FaTwitter, FaLinkedin, FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import { sendLoginForm } from "../../../store/reducers/home/login/actionCreators";
import { Redirect } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.user = React.createRef();
        this.password = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            account: this.user.current.value,
            password: this.password.current.value
        }
        this.props.sendLogin(payload);
    }

    render() {
        const { login } = this.props;
        return (
            !login ?
                <LoginWrapper>
                    <form onSubmit={this.handleSubmit}>
                        <LoginBox>
                            <InputWrapper>
                                <IconContext.Provider value={{ color: '#c8c8c8', size: '1.3em', verticalAlign: 'middle' }} >
                                    <div className="email">
                                        <div className='icon'>
                                            <FaUserAlt />
                                        </div>
                                        <div className="input">
                                            <input placeholder='email/phone' ref={this.user} />
                                        </div>
                                    </div>
                                    <div className="password">
                                        <div className='icon'>
                                            <FaLock />
                                        </div>
                                        <div className="input">
                                            <input placeholder='password' type='password' ref={this.password} />
                                        </div>
                                    </div>
                                </IconContext.Provider>
                            </InputWrapper>
                            <Solution>
                                <div className="remember"><input type='checkbox' id='remme' /> <label htmlFor="remme"></label> remember me</div>
                                <div className='solution'>issue with login?</div>
                            </Solution>
                            <LoginButton type='submit'>
                                Login
                            </LoginButton>
                            <SocialMediaLogin>
                                <IconContext.Provider value={{ size: '2em' }} >
                                    <div><FaTwitter /></div>
                                    <div><FaLinkedin /></div>
                                    <div><FaFacebookSquare /></div>
                                    <div><FaGoogle /></div>
                                </IconContext.Provider>
                            </SocialMediaLogin>
                        </LoginBox>
                    </form>
                </LoginWrapper> : <Redirect to='/' />
        )
    }
}

const mapStateToProps = ({ login }) => ({
    login: login.get('login')
})

const mapDispatchToProps = (dispatch) => {
    return {
        sendLogin(payload) {
            dispatch(sendLoginForm(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
