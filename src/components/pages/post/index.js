import React from "react";
import {
    PostWrapper,
    HeaderWrapper,
    ContentWrapper,
    ImageBanner,
} from "./style";

import { FaTwitter, FaLinkedin, FaFacebookSquare, FaRegBookmark } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import { get } from 'immutable';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.header = React.createRef();
        this.banner = React.createRef();
        this.state = {
            bannerHeight: 0,
            headerHeight: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.bannerHeight !== nextState.bannerHeight || this.state.headerHeight !== nextState.headerHeight) {
            return true;
        }
        return false;
    }

    getBannerHeight = (e) => {
        const { clientHeight } = e.target;
        this.setState(() => ({
            bannerHeight: clientHeight
        }))
    }

    componentDidMount() {
        const headerMarginTop = parseInt(getComputedStyle(this.header.current).marginTop, 10);
        const headerHeight = headerMarginTop + this.header.current.clientHeight;

        this.setState(() => ({
            headerHeight: headerHeight,
        }))
    }

    render() {
        const { index } = this.props.location.state;
        const { articles } = this.props;
        const post = get(articles, index);
        const { bannerHeight, headerHeight } = this.state;
        return (
            <PostWrapper>
                <HeaderWrapper ref={this.header}>
                    <div className="title">{post.get('title')}</div>
                    <div className="subtitle">{post.get('subtitle')}</div>
                    <div className='bottom'>
                        <div className="author">
                            <div className='avatar-container' >
                                <span className="circle" />
                                <img className='avatar' src={post.get('avatar')} alt="" />
                            </div>
                            <div className="author-detail">
                                <div className='author-name'>{post.get('author')} <button>follow</button></div>
                                <div className="date">{post.get('date')}</div>
                            </div>
                        </div>
                        <IconContext.Provider value={{ size: '1.5em', color: '#888' }}>
                            <div className="share">
                                <button><FaTwitter /> </button>
                                <button><FaLinkedin /> </button>
                                <button><FaFacebookSquare /> </button>
                                <button><FaRegBookmark /> </button>
                                <button><FiMoreVertical /> </button>
                            </div>
                        </IconContext.Provider>
                    </div>
                </HeaderWrapper>
                {post.get('bannerImage') ?
                    <ImageBanner
                        totop={headerHeight}
                        onLoad={this.getBannerHeight}
                        src={post.get('bannerImage')}
                        alt="banner"
                    /> : null}

                <ContentWrapper margintop={bannerHeight} dangerouslySetInnerHTML={{ __html: post.get('content') }}>
                </ContentWrapper>
            </PostWrapper>
        )
    }
}

const mapStateToProps = ({ home }) => {
    return {
        articles: home.article.get('articles')
    }
}

export default connect(mapStateToProps, null)(Post);