export type authProps = {
    username: string
    email: string
    password: string
}

export type loginProps = {
    email: string
    password: string
}

export type productProps = {
    id: string
    product_brand: string
    product_model: string
    price: number
    stock: number
    category: string
}

export type purchaseProps = {
    id: string,
    product: [],
    product_id: string,
    amount: number,
    quantity: number,
    user: [],
    user_id: string
}

export interface cartType {
    cart: number;
    num: number;
    incNum: () => void;
    decNum: () => void;
    addToCart: () => void;
    emptyCart: () => void;
    removeFromCart: () => void;
  }