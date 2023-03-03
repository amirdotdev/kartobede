import useAppStore from '../../hooks/useAppStore'
import { shuffleArray } from '../../utils/utils'

const SelectRoles = () => {
  const players = useAppStore((state) => state.players)
  const selectedPlayers = players.filter((player) => player.status)
  const roles = useAppStore((state) => state.roles)
  const selectedRoles = roles.filter((role) => role.status)
  const shuffledRoles = shuffleArray(selectedRoles)
  if (
    shuffledRoles.length === 0 ||
    selectedPlayers.length !== selectedRoles.length
  ) {
    return <div>error</div>
  }
  return (
    <div>
      {shuffledRoles.map((role, index) => {
        return (
          <div
            key={index}
            className="p-4 text-center text-3xl text-indigo-800"
          >{`${selectedPlayers[index].name}=>${role.name}`}</div>
        )
      })}
    </div>
  )
}

export default SelectRoles
