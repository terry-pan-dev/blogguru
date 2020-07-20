import React from "react";
import { connect } from "react-redux";

import {
    TopicWrapper,
    TopicItem
} from "./style";

const Topic = (props) => {
    const createTopicItems = (topics) => {
        return topics.map((topic) => {
            return <TopicItem key={topic.get('title')}>
                <img className="topicimg" src={topic.get('url')} alt={topic.get('title')} />
                {topic.get('title')}
            </TopicItem>
        })
    }
    return (
        <TopicWrapper>
            {createTopicItems(props.topics)}
        </TopicWrapper>
    )
}

const mapStateToProps = ({ home }) => {
    return {
        topics: home.topic.get('topics')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);