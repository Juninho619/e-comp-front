import { cartType, productProps } from '@/utils/types'
import { create } from 'zustand'


export const useStoreCart = create<cartType>((set) => ({
    cart: [],
    num: 0,
    incNum: () => set((state) => ({ num: state.num + 1 })),
    decNum: () =>set((state) => ({num: state.num - 1})),
    addToCart: (product: productProps) => set((state) => ({ cart: [...state.cart, product]})),
    emptyCart: () => set({ cart: [] })
    // removeFromCart: () => set((state) => ({cart: state.cart - state.num})),
}))

