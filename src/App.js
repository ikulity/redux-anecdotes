import { useSelector, useDispatch } from 'react-redux'
import { addVote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const onClickVote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  const byVotes = (x, y) => {
    if (x.votes > y.votes) return -1
    if (x.votes < y.votes) return 1
    else return 0
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(byVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => onClickVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App