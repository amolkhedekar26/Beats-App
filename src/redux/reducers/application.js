// import { SET_PAGE_HEADING } from '../constants/ActionTypes'

import {
  GET_PAGE_HEADING,
  GET_TODOS,
  SET_PAGE_HEADING,
} from '../actions/ActionTypes'

// const initialState = {
//   pageHeading: null,
// }

// export const getPageHeading = (state = initialState.pageHeading, action) => {
//   switch (action.type) {
//     case SET_PAGE_HEADING:
//       if (state == null) {
//         return 'Beats'
//       }
//       return action.pageHeading
//     default:
//       return 'Beats'
//   }
// }

// export const applyPageHeading = state => state.pageHeading

const initialState = { pageHeading: 'Beats', todos: [] }

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_HEADING: {
      return { pageHeading: action.payload }
    }
    case GET_PAGE_HEADING: {
      return state
    }
    case GET_TODOS: {
      // console.log(action.payload)
      // console.log(state)
      return { ...state, todos: action.payload }
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter(todo => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map(todo => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter(todo => !todo.completed)
    }
    case 'todos/todosLoaded': {
      return action.payload
    }
    default:
      return state
  }
}
