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

export class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <form>
                    <LoginBox>
                        <InputWrapper>
                            <IconContext.Provider value={{ color: '#c8c8c8', size: '1.3em', verticalAlign: 'middle' }} >
                                <div className="email">
                                    <div className='icon'>
                                        <FaUserAlt />
                                    </div>
                                    <div className="input">
                                        <input placeholder='email/phone' />
                                    </div>
                                </div>
                                <div className="password">
                                    <div className='icon'>
                                        <FaLock />
                                    </div>
                                    <div className="input">
                                        <input placeholder='password' />
                                    </div>
                                </div>
                            </IconContext.Provider>
                        </InputWrapper>
                        <Solution>
                            <div className="remember"><input type='checkbox' id='remme' /> <label htmlFor="remme"></label> remember me</div>
                            <div className='solution'>issue with login?</div>
                        </Solution>
                        <LoginButton>
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
            </LoginWrapper>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
