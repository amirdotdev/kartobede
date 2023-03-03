import useAppStore from '../../hooks/useAppStore'

const NamesList = () => {
  const players = useAppStore((state) => state.players)
  const togglePlayerStatus = useAppStore((state) => state.togglePlayerStatus)
  return (
    <form>
      {players.map((player, index) => (
        <div key={index} className="p-4 text-center text-3xl text-indigo-800">
          <input
            id={index}
            type="checkbox"
            value={player.name}
            onClick={(event) => togglePlayerStatus(event.target.value)}
          />
          <label htmlFor={index}>{player.name}</label>
        </div>
      ))}
    </form>
  )
}

export default NamesList
