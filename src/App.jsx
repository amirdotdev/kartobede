import { Names, Roles, SelectRoles } from './components'

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-5xl font-bold text-slate-800">
        kartobede
      </h1>
      <Names />
      <Roles />
      <SelectRoles />
    </div>
  )
}

export default App
