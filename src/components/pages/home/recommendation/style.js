import styled from "styled-components";

export const RecommendWrapper = styled.div.attrs({

})`
    margin-top: 30px;
    height: 100%;
    .weekly {
        background: #F2BB57;
    }
    .monthly {
        background: #EB8E82; 
    }
    .series {
        background: #C7E8DD;
        color: #658F87;
    }
    .authors {
        background: #BDD7EB;
        color: #6D91AF;
    }
`

export const RecommendItem = styled.div.attrs({

})`
    height: 51px;
    line-height: 51px;
    margin-bottom: 22px;
    border-radius: 5px;
    padding-left: 20px;
    color: #fff;
    text-transform: uppercase;
    &:after {
        content: " ➤"
    }
`