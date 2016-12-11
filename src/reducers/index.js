import * as types from '../actions/constants'

const wikiReducer = (state = {query: ``, articles: []}, action) => {
  
  switch(action.type) {
    case types.SEARCH_WIKI_SUCCESS:
      return {...state, articles: action.articles}
    case types.SET_QUERY:
      return {...state, query: action.query}
    default:
      return state
  }
}

export default wikiReducer