import { create } from 'zustand'

const useStore = create((set) => ({
    cart: 0,
    addtoCart: () => set((state) => ({ cart: state.cart + 1 })),
    emptyCart: () => set({ cart: 0 }),
    updateBears: (newProduct) => set({ cart: newProduct }),
  }))