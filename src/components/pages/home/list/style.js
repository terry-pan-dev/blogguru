import styled from "styled-components";
export const ListWrapper = styled.div.attrs({

})`
    height: 190px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 30px;
    margin-bottom: 20px;
    .list-img {
        width: 30%;
        height: 100%;
        display: block;
        float: right;
    }
`

export const ListContent = styled.div.attrs({

})`
    width: 70%;
    height: 100%;
    float: left;
    position: relative;
    padding-right: 20px;
    color: rgb(0 0 0 / 54%);
    .content-left {
        width:70%;
    }
    .content-right {
        width: 30%;
    }
    .source {
        text-transform: uppercase;
        margin-bottom: 10px
    }
    .title {
        color: rgb(0 0 0 / 84%);
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 1.2em;
        font-weight: bold;
    }
    .subtitle {
        margin-bottom: 20px;
    }
    .content {
        overflow: hidden;
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }
    .content-left {
        float: left;
    }
    .content-right {
        float: right;
        vertical-align: middle;
        overflow: hidden;
        .more {
            float: right;
            margin-right: 20px;
        }
        .bookmark {
            float: right;
            margin-right: 10px;
        }
    }
    .content-left .author {
        color: rgb(0 0 0 / 84%);
        margin-bottom: 5px;
        font-size: 0.85em;
    }
    .content-left .date {
        font-size: 0.8em;
    }
`
