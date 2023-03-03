import { useState } from 'react'
import useAppStore from '../../hooks/useAppStore'

const NamesForm = () => {
  const [nameInput, setnameInput] = useState('')

  const addPlayer = useAppStore((state) => state.addPlayer)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        addPlayer({
          name: nameInput,
          status: false,
        })
        setnameInput('')
      }}
    >
      <div>
        <input
          className="border-2 border-teal-800 focus:outline-0"
          type="text"
          value={nameInput}
          onChange={(event) => {
            setnameInput(event.target.value)
          }}
        />
      </div>
      <button type="submit">add name</button>
    </form>
  )
}

export default NamesForm
