import { useState } from 'react'
import useAppStore from '../../hooks/useAppStore'

const RolesForm = () => {
  const [roleInput, setRoleInput] = useState('')

  const addRole = useAppStore((state) => state.addRole)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        addRole({
          name: roleInput,
          status: false,
        })
        setRoleInput('')
      }}
    >
      <div>
        <input
          className="border-2 border-teal-800 focus:outline-0"
          type="text"
          value={roleInput}
          onChange={(event) => setRoleInput(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">add role</button>
      </div>
    </form>
  )
}

export default RolesForm
