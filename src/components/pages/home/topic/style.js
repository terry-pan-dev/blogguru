import styled from "styled-components";


export const TopicWrapper = styled.div.attrs({

})`
    overflow: hidden;
    height: 100%;
    padding: 20px 20px;
    border-bottom: 2px solid #eee;
`

export const TopicItem = styled.div.attrs({

})`
    float: left;
    border: 1px solid #dcdcdc;
    height: 32px;
    padding-right: 10px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border-radius: 8px;
    background: #f7f7f7;
    margin-right: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    .topicimg {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`