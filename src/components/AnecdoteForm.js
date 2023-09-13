import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const onClickNew = (event) => {
    event.preventDefault()
    const name = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('name', name)
    dispatch(addAnecdote(name))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={onClickNew}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm