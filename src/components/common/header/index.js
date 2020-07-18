import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    headerActions
} from '../../../store/reducers';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Misc,
    Button,
    SearchWrapper
} from './style';
import { FiHome, FiSearch } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Header = (props) => {

    const { focus } = props;
    return (
        <Fragment>
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <IconContext.Provider value={{ style: { verticalAlign: 'text-top' } }} >
                        <NavItem className='left active'><FiHome />Home</NavItem>
                        <NavItem className='left'><FaMobileAlt />Download</NavItem>
                        <NavItem className='right'>Login</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focus}
                                timeout={200}
                                classNames="expand"
                            >
                                <NavSearch
                                    className={focus ? 'focused' : ''}
                                    onFocus={props.handleFocus}
                                    onBlur={props.handleBlur}
                                />
                            </CSSTransition>
                            <FiSearch className='searchicon' />
                        </SearchWrapper>

                        <Misc>
                            <Button className='blog'><BsPencilSquare /> Blog</Button>
                            <Button className='reg'>Sign up</Button>
                        </Misc>

                    </IconContext.Provider>
                </Nav>
            </HeaderWrapper>
        </Fragment>
    )
}

const mapStateToProps = ({ header }) => {
    return {
        focus: header.get('focus'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(headerActions.focusSearchBox());
        },
        handleBlur() {
            dispatch(headerActions.defocusSearchBox());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);