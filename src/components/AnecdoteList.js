import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === '') {
      return anecdotes
    }
    return anecdotes.filter(anec => anec.content.includes(filter))
  })

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
    <>
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
    </>
  )
}

export default AnecdoteList