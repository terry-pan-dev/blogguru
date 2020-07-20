import React from "react";
import {
    HomeWrapper,
    LeftPane,
    RightPane,
    Banner
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
    componentDidMount() {
        this.props.fetchPageContents();
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