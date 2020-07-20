import styled from "styled-components";

export const HotPostWrapper = styled.div.attrs({

})`
    border-bottom: 1px solid #eee;
    .title-banner {
        font-size: 1.5em;
        font-weight: bold;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #eee;
    }
`

export const Article = styled.div.attrs({

})`
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 20px;

    .id {
        width: 15%;
        float: left;
        font-size: 2em;
        color: rgb(0 0 0 / 15%);
    }
    .body {
        width: 85%;
        float: left;
    }
    .title {
        font-size: 1.2em;
        padding-bottom: 10px;
    }
    .author {
        font-size: 0.85em;
        color: rgb(0 0 0 / 85%);
        padding-bottom: 5px;
    }
    .date {
        font-size: 0.8em;
        color: rgb(0 0 0 / 45%);
    }
`