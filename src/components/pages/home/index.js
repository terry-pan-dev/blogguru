import React from "react";
import {
    HomeWrapper,
    LeftPane,
    RightPane,
    Banner,
    GoTop,
} from "./style";

import { connect } from "react-redux";

import List from "./list";
import Recommendation from "./recommendation";
import Topic from "./topic";
import HotPost from "./hot_articles";

import {
    fetchArticleList,
    fetchTopics,
    fetchHotArticleList,
} from '../../../store/reducers/home'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showScroll: false,
        }
    }

    bindWindowScrollEvent = () => {
        window.addEventListener('scroll', this.showScrollTop);
    }

    showScrollTop = (e) => {
        const isShow = document.documentElement.scrollTop > 200 ? true : false;
        this.setState(() => ({
            showScroll: isShow,
        }))
    }

    handleScrollTop = () => {
        window.scroll(0, 0);
    }

    componentDidMount() {
        this.props.fetchPageContents();
        this.bindWindowScrollEvent();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.showScrollTop);
    }
    render() {
        return (
            <HomeWrapper>
                <LeftPane>
                    <Banner />
                    <Topic />
                    <List />
                </LeftPane>
                <RightPane>
                    <Recommendation />
                    <HotPost />
                </RightPane>
                {this.state.showScroll ? <GoTop onClick={this.handleScrollTop}>⌃</GoTop> : null}
            </HomeWrapper>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPageContents() {
            dispatch(fetchTopics());
            dispatch(fetchArticleList());
            dispatch(fetchHotArticleList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);