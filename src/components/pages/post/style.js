import styled from "styled-components";

export const PostWrapper = styled.div.attrs({

})`
    overflow: hidden;
    width: 680px;
    margin: 0 auto;
    overflow: hidden;
`

export const HeaderWrapper = styled.div.attrs({

})`
    margin-top: 30px;
    position: relative;
    .title {
        font-size: 2.5em;
        color: rgb(41 41 41);
        padding-bottom: 10px;
    }
    .subtitle {
        font-size: 1.5em;
        color: rgb(117 117 117);
        padding-bottom: 20px;
    }
    .bottom {
        position: relative;
        overflow: hidden;
        left: 0;
        right: 0;
        bottom: 0;
        height: 70px;
        display: flex;
        justify-items: center;
        justify-content: space-between;
        align-content: center;
    }
    .author {
        position: relative;
        overflow: hidden;
        float: left;
        .avatar-container {
            float: left;
            display: inline-block;
            height: 70px;
            width: 60px;
            position: relative;
            margin-left: 10px;
            overflow: hidden;
            .circle {
                height: 70px;
                width: 70px;
                border-radius: 70px;
                border: 1px solid green;
                line-height: 70px;
                position: absolute;
                left: -5px;
            }
            .avatar {
                height: 60px;
                width: 60px;
                line-height: 60px;
                border-radius: 60px;
                top: 5px;
                left: 0px;
                position: absolute;
                img {
                    background-size: contain;
                }
            }
        }
        .author-detail {
            float: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 70px;
            margin-left: 20px;
            .author-name{
                line-height: 20px;
                color: rgb(41 41 41);
                button {
                    border: 1px solid green;
                    border-radius: 2px;
                    background: white;
                    color: green;
                }
            }
            .date {
                color: rgb(117 117 117);
            }
        }
    }
    .share {
        float: right;
        line-height: 60px;
        button {
            border: none;
            background: white;
            height: 30px;
        }
    }
`

export const ImageBanner = styled.img.attrs({

})`
    position: absolute;
    top: ${props => props.totop + 80 + 'px'};
    left: 0px;
    right: 0px;
    height: auto;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
`

export const ContentWrapper = styled.div.attrs({

})`
    position: relative;
    margin-top: ${props => props.margintop + 50 + "px"}
`