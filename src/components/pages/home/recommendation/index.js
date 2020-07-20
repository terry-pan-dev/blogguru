import React from "react";

import {
    RecommendWrapper,
    RecommendItem
} from './style'

class Recommendation extends React.Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem className='weekly'>weekly trendings</RecommendItem>
                <RecommendItem className='monthly'>monthly trendings</RecommendItem>
                <RecommendItem className='series'>hotest series</RecommendItem>
                <RecommendItem className='authors'>hotest authors</RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recommendation;