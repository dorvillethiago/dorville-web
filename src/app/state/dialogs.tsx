import { create } from 'zustand'

interface DialogsStoreType {
    contactDialog: boolean
    setContactDialog: (value: boolean) => void
}

export const useDialogsStore = create<DialogsStoreType>((set) => ({
    contactDialog: false,
    setContactDialog: (value) => set({ contactDialog: value }),
}))
