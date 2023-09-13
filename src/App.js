import { useSelector, useDispatch } from 'react-redux'
import { addVote, addAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const onClickVote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  const onClickNew = (event) => {
    event.preventDefault()
    const name = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('name', name)
    dispatch(addAnecdote(name))
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
      <h2>create new</h2>
      <form onSubmit={onClickNew}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App