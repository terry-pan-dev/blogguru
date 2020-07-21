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

class Post extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bannerHeight: 350,
        }
    }

    getImageHeight = (e) => {
        const { clientHeight } = e.target;
        this.setState(() => ({
            bannerHeight: clientHeight + 50,
        }))
    }
    render() {
        return (
            <PostWrapper>
                <HeaderWrapper >
                    <div className="title">America’s Coronapocalypse</div>
                    <div className="subtitle">Trump Has Led America to Human Tragedy, Public Health Crisis, Economic Depression, and Social Collapse</div>
                    <div className='bottom'>
                        <div className="author">
                            <div className='avatar-container' >
                                <span className="circle" />
                                <img className='avatar' src="https://miro.medium.com/fit/c/96/96/0*lI5-avJvcBbQDmA2.jpeg" alt="" />
                            </div>
                            <div className="author-detail">
                                <div className='author-name'>umair haque <button>follow</button></div>
                                <div className="date">Jul 18</div>
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
                <ImageBanner
                    onLoad={this.getImageHeight}
                    src="https://uploads.prod01.sydney.platformos.com/instances/157/assets/images/content-type-covid-19.png?updated=1587432499"
                    alt="banner"
                />

                <ContentWrapper margintop={this.state.bannerHeight}>
                    content here
                </ContentWrapper>
            </PostWrapper>
        )
    }
}

export default Post;