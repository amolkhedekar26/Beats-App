import { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getTodos, setPageHeading } from '../../redux/actions'

const getData = state => state

export const TeamsPage = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(setPageHeading('Teams'))
    dispatch(getTodos())
  }, [])
  let content = ''
  useEffect(() => {
    console.log()
    // data.appData.todos.forEach(i => {
    //   content += <p>i.title</p>
    // })
  }, [data])

  // const [data, setData] = useState(null)
  // const [todo, isError, isLoading] = useAxios({
  //   url: '/todos/2',
  //   method: 'get',
  //   body: {},
  //   headers: {},
  // })
  // useEffect(() => {
  //   if (todo && todo.data) setData(todo.data)
  //   console.log(data)
  // }, [todo])
  return (
    <div className="">
      {data.appData.todos && data.appData.todos.map(i => i.title)}
    </div>
  )
}

const mapStateToProps = state => ({})

// export default connect(mapStateToProps, {})(TeamsPage)
export default TeamsPage
