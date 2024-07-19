import { create } from 'zustand'

const useStore = create((set) => ({
    cart: 0,
    num: 0,
    incNum: () => set((state) => ({ num: state.num + 1 })),
    decNum: () =>set((state) => ({num: state.num - 1})),
    addToCart: () => set((state) => ({ cart: state.cart + state.num })),
    emptyCart: () => set({ cart: 0 }),
    removeFromCart: () => set((state) => ({cart: state.cart - state.num})),
    updateBears: (newProduct) => set({ cart: newProduct }),
}))