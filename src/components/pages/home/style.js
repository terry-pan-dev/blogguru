import styled from "styled-components";

export const HomeWrapper = styled.div.attrs({

})`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
`

export const LeftPane = styled.div.attrs({

})`
    width: 625px;
    float: left;
    padding-top: 30px;
    margin-left: 15px;
`

export const Banner = styled.div.attrs({
})`
    width: 625px;
    height: 270px;
    background: url("https://rosehipplus.com.au/wp-content/uploads/2017/09/Blogger-Love-Banner.jpg");
    background-size: contain;
`

export const RightPane = styled.div.attrs({

})`
    width: 280px;
    float: right;
`

export const GoTop = styled.div.attrs({

})`
    position: fixed;
    bottom: 50px;
    right: 150px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #eee;
    font-size: 2.2em;
    color: #ccc;
    cursor: pointer;
`