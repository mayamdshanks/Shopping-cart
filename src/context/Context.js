import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";
const Cart =createContext()

faker.seed(99)
const Context = ({children}) => {
  const products=[...Array(20)].map(()=>({
    id: faker.string.uuid(),
    username: faker.commerce.productName(),
    price:faker.commerce.price(),
    avatar: faker.image.avatar(),
   instock:Math.floor(Math.random()*2),
    // inStock:faker.commerce.arrayElement([0,3,5,6,7]),
    fastdelivery:faker.datatype.boolean(true),
    // ratings:faker.commerce.arrayElement([1,2,3,4,5])
    // ratings:faker.random.arryElement([1,2,3,4,5])
  }))
const [state, dispatch] = useReducer(cartReducer,{
  products:products,
  cart:[]
})
  console.log(products)
  return (
   <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
  return useContext(Cart);
}