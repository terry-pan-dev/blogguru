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
import { NUM_OF_SEARCH_ITEMS } from '../../../store/reducers/header/actions';
import { get } from 'immutable';
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
    createSearchInfoItems = () => {
        const { trendings, page } = this.props;
        const itemList = [];
        // eslint-disable-next-line no-undef
        for (let index = page * NUM_OF_SEARCH_ITEMS; index < (page + 1) * NUM_OF_SEARCH_ITEMS; index++) {
            if (index < trendings.size) {
                itemList.push(get(trendings, index))
            }
        }
        return itemList.map((item) => {
            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
        })
    }

    showSearchInfo = () => {
        const { focus, mouseIn, handleChangePage } = this.props;
        return focus || mouseIn ? <SearchInfo
            onMouseEnter={this.props.handleMonseEnter}
            onMouseLeave={this.props.handleMouseLeave}
        >
            <SearchInfoTitle>
                Popular
                <SearchInfoUpdate
                    onClick={() => handleChangePage()}
                ><GrUpdate className="spin" /> Change</SearchInfoUpdate>
            </SearchInfoTitle>
            <SearchInfoList>
                {this.createSearchInfoItems()}
            </SearchInfoList>
        </SearchInfo> : null;
    }

    render() {
        const { focus, handleFocus, handleBlur, trendings } = this.props;
        return (
            <Fragment>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Nav>
                        <IconContext.Provider value={{ style: { verticalAlign: 'sub' } }} >
                            <Link to='/'>
                                <NavItem className='left active'><FiHome /> Home</NavItem>
                            </Link>
                            <NavItem className='left'><FaMobileAlt /> Download</NavItem>
                            <Link to='/login'>
                                <NavItem className='right'>Login</NavItem>
                            </Link>
                            <SearchWrapper>
                                <CSSTransition
                                    in={focus}
                                    timeout={200}
                                    classNames="expand"
                                >
                                    <NavSearch
                                        className={focus ? 'focused' : ''}
                                        onFocus={() => handleFocus(trendings)}
                                        onBlur={handleBlur}
                                    />
                                </CSSTransition>
                                <FiSearch className='searchicon' />
                                {this.showSearchInfo()}
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
}

const mapStateToProps = ({ header }) => {
    return {
        focus: header.get('focus'),
        trendings: header.get('trendings'),
        page: header.get('page'),
        mouseIn: header.get('mouseIn')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(trendings) {
            (trendings.size === 0) &&
                dispatch(headerActions.fetchTrendings())
            dispatch(headerActions.toggleSearchBoxFocus());
        },
        handleBlur() {
            dispatch(headerActions.toggleSearchBoxFocus());
        },
        handleMonseEnter() {
            dispatch(headerActions.toggleMouseInOut());
        },
        handleMouseLeave() {
            dispatch(headerActions.toggleMouseInOut());
        },
        handleChangePage() {
            dispatch(headerActions.rotatePage());
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);