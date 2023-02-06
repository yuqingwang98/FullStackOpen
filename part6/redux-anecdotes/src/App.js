import { useEffect } from 'react'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Filter/ >
      <Notification />
      <h2>create new</h2>
      <AnecdoteForm/ >
      <h2>Anecdotes</h2>
      <AnecdoteList/ >
    </div>
  )
}

export default App
