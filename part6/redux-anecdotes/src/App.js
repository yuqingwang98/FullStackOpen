import { useEffect } from 'react'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import {setAnecdote} from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdote(anecdotes)))
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
