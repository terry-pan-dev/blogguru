import React, { Fragment } from "react";
import { connect } from 'react-redux';
import {
    ListWrapper,
    ListContent,
} from './style';

import { BsBookmark } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';

const List = (props) => {
    const { articles } = props;
    const constructList = (articles) => {
        return articles.map((article) => {
            return (
                <ListWrapper key={article.get('id')}>
                    <ListContent>
                        <div className='source'>{article.get('source')}</div>
                        <div className='title'>{article.get('title')}</div>
                        <div className='subtitle'>{article.get('subtitle')}</div>
                        <div className='content'>
                            <div className='content-left'>
                                <div className='author'>{article.get('author')}</div>
                                <div className='date'>{article.get('date')}</div>
                            </div>
                            <div className='content-right'>
                                <div className='more'><FiMoreVertical /></div>
                                <div className='bookmark'><BsBookmark /></div>
                            </div>
                        </div>
                    </ListContent>
                    <img
                        className="list-img"
                        src={article.get('url')}
                        alt={article.get('title')}
                    />
                </ListWrapper>
            )
        })
    }
    return (
        <Fragment>
            {constructList(articles)}
        </Fragment>
    )
}

const mapStateToProps = ({ home }) => {
    return {
        articles: home.article.get('articles')
    }
}

export default connect(mapStateToProps, null)(List);