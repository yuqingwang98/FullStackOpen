import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const voteHandler = async() => {
    const updatedAnecdote = await anecdoteService.update(anecdote)
    dispatch(vote(updatedAnecdote))
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5))
  }

  return (
  <div>
      <div>
          {anecdote.content}
      </div>
      <div>
          has {anecdote.votes}
          <button onClick={voteHandler}>vote</button>
      </div>
  </div>
  )
}

const AnecdoteList = () => {
const anecdotes = useSelector(({filter, anecdotes}) => {
  if ( filter === null ) {
    return anecdotes
  }
  const regex = new RegExp( filter, 'i' )
  return anecdotes.filter(anecdote => anecdote.content.match(regex))
})

const byVotes = (b1, b2) => b2.votes - b1.votes

return(
  anecdotes.sort(byVotes).map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />)
)
}

export default AnecdoteList
