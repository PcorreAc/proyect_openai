import create from 'zustand'

const useStore = create((set, get) => ({
  promptSelected: '',
  selectPrompt: (prompt: string) => {
    set(() => ({ promptSelected: prompt }))
  },
}))

export const useAppStore = () => useStore((state: any) => state)
