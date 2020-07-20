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
import Author from "./author";
import { fetchTopics } from "../../../store/reducers/home/topic/actionCreators";

class Home extends React.Component {
    componentDidMount() {
        this.props.getTopics();
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
                    <Author />
                </RightPane>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopics() {
            dispatch(fetchTopics());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);