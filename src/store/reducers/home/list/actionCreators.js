import { FETCH_ARTICLE_LIST } from "./actions"
export const fetchArticleList = (offset = 0) => ({
    type: FETCH_ARTICLE_LIST,
    offset: offset
})