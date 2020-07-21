import React, { Fragment } from "react";
import { connect } from 'react-redux';
import {
    ListWrapper,
    ListContent,
} from './style';

import { BsBookmark } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import {
    fetchArticleList,
} from '../../../../store/reducers/home'

import { Link } from "react-router-dom";

class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            totalList: 0,
        }
    }

    handleScroll = () => {
        const articleLength = this.props.articles.size;
        if (this.li) {
            var lastLiOffset = this.li.offsetTop + this.li.clientHeight;
            var pageOffset = window.pageYOffset + window.innerHeight;
            if (pageOffset > lastLiOffset) {
                this.setState((prevState) => ({
                    totalList: articleLength + prevState.totalList,
                }))
                this.props.loadMore(this.state.totalList + 1);
            }
        }
    };

    componentDidMount() {
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        });
    }
    constructList = () => {
        const { articles } = this.props;
        const totalArticles = articles.size - 1;
        return articles.map((article, index) => {
            return (
                <Link key={article.get('title')} to='/detail'>
                    <ListWrapper ref={totalArticles === index ? (li) => { this.li = li } : ''} >
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
                </Link>
            )
        })
    }

    render() {
        return (
            <Fragment>
                {this.constructList()}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ home }) => {
    return {
        articles: home.article.get('articles')
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        loadMore(offset) {
            dispatch(fetchArticleList(offset));
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(List);