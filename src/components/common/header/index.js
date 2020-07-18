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
    SearchInfo,
    SearchInfoTitle,
    SearchInfoUpdate,
    SearchInfoItem,
    SearchInfoList,
    SearchWrapper
} from './style';
import { FiHome, FiSearch } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { GrUpdate } from 'react-icons/gr';

const Header = (props) => {
    const { focus, trendings } = props;

    const createSearchInfoItems = (trendings) => {
        return trendings.map((item) => {
            return <SearchInfoItem key={item.get('tag')}>{item.get('tag')}</SearchInfoItem>
        })
    }

    const showSearchInfo = (show, trendings) => {
        return show ? <SearchInfo>
            <SearchInfoTitle>
                popular
                <SearchInfoUpdate><GrUpdate /> change</SearchInfoUpdate>
            </SearchInfoTitle>
            <SearchInfoList>
                {createSearchInfoItems(trendings)}
            </SearchInfoList>
        </SearchInfo> : null;
    }

    return (
        <Fragment>
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <IconContext.Provider value={{ style: { verticalAlign: 'sub' } }} >
                        <NavItem className='left active'><FiHome /> Home</NavItem>
                        <NavItem className='left'><FaMobileAlt /> Download</NavItem>
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
                            {showSearchInfo(focus, trendings)}
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
        trendings: header.get('trendings')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(headerActions.fetchTrendings())
            dispatch(headerActions.focusSearchBox());
        },
        handleBlur() {
            dispatch(headerActions.defocusSearchBox());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);