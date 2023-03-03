import { useState } from 'react'
import useAppStore from '../../hooks/useAppStore'
import Checkbox from '../../UI/Checkbox'

const RolesList = () => {
  const [checked, setChecked] = useState(false)

  const roles = useAppStore((state) => state.roles)
  const players = useAppStore((state) => state.players)
  const toggleRoleStatus = useAppStore((state) => state.toggleRoleStatus)
  const addRoleCount = useAppStore((state) => state.addRoleCount)
  const decrementRoleCount = useAppStore((state) => state.decrementRoleCount)
  const selectedPlayersCount = players.filter((player) => player.status).length
  const selectedRolesCount = roles.reduce((acc, current) => {
    return acc + current.count
  }, 0)
  return (
    <>
      <div
        className={`flex ${
          selectedRolesCount < selectedPlayersCount
            ? 'bg-rose-500'
            : 'bg-emerald-700'
        }`}
      >
        <h2>تعداد نقش های انتخاب شده : {selectedRolesCount}</h2>
        <h2>تعداد بازیکنان : {selectedPlayersCount}</h2>
      </div>
      <div className="flex">
        {roles.map((role, index) => (
          <div key={index}>
            <form className="p-4 text-center text-3xl text-indigo-800">
              <Checkbox name={role.name} />
              <label htmlFor={index}>{role.name}</label>
            </form>
            <button
              onClick={() => {
                if (role.count === 0) return
                addRoleCount(role.name)
              }}
            >
              add
            </button>
            <button
              onClick={() => {
                if (role.count === 1) return
                decrementRoleCount(role.name)
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default RolesList
