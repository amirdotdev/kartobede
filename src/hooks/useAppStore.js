import { create } from 'zustand'

const useAppStore = create((set) => ({
  players: [
    { name: 'نرگس', status: false, role: false },
    { name: 'امیرمحمد', status: false },
    { name: 'یاسمن', status: false, role: false },
    { name: 'درسا', status: false, role: false },
    { name: 'زهرا', status: false, role: false },
    { name: 'محمد', status: false, role: false },
    { name: 'حسین', status: false, role: false },
  ],
  addPlayer: (newPlayer) =>
    set((state) => ({ players: [...state.players, newPlayer] })),
  togglePlayerStatus: (selectedPlayer) =>
    set((state) => {
      const players = state.players.map((player) =>
        player.name === selectedPlayer
          ? { ...player, status: !player.status }
          : player
      )
      return { players: players }
    }),
  roles: [
    { name: 'شهروند', status: false, count: 0 },
    { name: 'پدرخوانده', status: false, count: 0 },
    { name: 'تک تیرانداز', status: false, count: 0 },
    { name: 'کارآگاه', status: false, count: 0 },
    { name: 'پزشک', status: false, count: 0 },
    { name: 'مافیا', status: false, count: 0 },
    { name: 'تفنگ دار', status: false, count: 0 },
  ],
  addRole: (newRole) => set((state) => ({ roles: [...state.roles, newRole] })),
  names_roles: [],
  addNamesRoles: (newNameRole) =>
    set((state) => ({ names_roles: [...state.names_roles, newNameRole] })),
  addRoleCount: (selectedRole) =>
    set((state) => {
      const roles = state.roles.map((role) =>
        role.name === selectedRole ? { ...role, count: role.count + 1 } : role
      )
      return { roles: roles }
    }),
  decrementRoleCount: (selectedRole) =>
    set((state) => {
      const roles = state.roles.map((role) =>
        role.name === selectedRole ? { ...role, count: role.count - 1 } : role
      )
      return { roles: roles }
    }),
  resetRoleCount: (selectedRole) =>
    set((state) => {
      const roles = state.roles.map((role) =>
        role.name === selectedRole ? { ...role, count: 0 } : role
      )
      return { roles: roles }
    }),
  toggleRoleStatus: (selectedRole) => {
    set((state) => {
      const roles = state.roles.map((role) =>
        role.name === selectedRole ? { ...role, status: !role.status } : role
      )
      return { roles: roles }
    })
  },
}))

export default useAppStore
