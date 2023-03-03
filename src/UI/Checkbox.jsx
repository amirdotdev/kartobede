import { useState } from 'react'
import useAppStore from '../hooks/useAppStore'
const Checkbox = ({ name }) => {
  const [checked, setChecked] = useState(false)

  const addRoleCount = useAppStore((state) => state.addRoleCount)
  const resetRoleCount = useAppStore((state) => state.resetRoleCount)

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => {
        if (checked) resetRoleCount(name)
        if (!checked) addRoleCount(name)
        setChecked(!checked)
      }}
    />
  )
}

export default Checkbox
