import { getAPI } from '../../api'
import { useAxios } from '../../hooks/useAxios'
import * as types from './ActionTypes'

// const addHeading = heading => ({
//   type: types.SET_PAGE_HEADING,
//   heading,
// })

// export const setPageHeading = heading => (dispatch, getState) => {
//   dispatch(addHeading(heading))
// }

// Thunk function
export function getPageHeading(dispatch, getState) {
  dispatch({ type: types.GET_PAGE_HEADING, payload: [] })
}

export function setPageHeading(pageHeading) {
  return function saveNewTodoThunk(dispatch, getState) {
    // console.log(getState())
    // const initialTodo = { text }
    // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch({ type: types.SET_PAGE_HEADING, payload: pageHeading })
  }
}

export function getTodos() {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodos = await getAPI('/todos/')
    dispatch({ type: types.GET_TODOS, payload: initialTodos.data })
  }
}
