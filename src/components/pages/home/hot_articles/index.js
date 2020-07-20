import React from "react";
import { connect } from "react-redux";

import {
    HotPostWrapper,
    Article,
} from "./style";

const HotPost = (props) => {
    const { populars } = props;
    const createArticleList = (populars) => {
        return populars.map((popular) => {
            const id = popular.get('id');
            const id_str = id >= 10 ? id : "0" + id;

            return <Article key={popular.get('id')}>
                <div className='id'>{id_str}</div>
                <div className='body'>
                    <div className="title">{popular.get('title')}</div>
                    <div className="author">{popular.get('author')}</div>
                    <div className='date'>{popular.get('date')}</div>
                </div>
            </Article>
        })
    }
    return (
        <HotPostWrapper>
            <div className='title-banner'>Popular Articles</div>
            {createArticleList(populars)}
        </HotPostWrapper>
    )
}

const mapStateToProps = ({ home }) => {
    return {
        populars: home.popular.get('populars')
    }
}

export default connect(mapStateToProps, null)(HotPost);