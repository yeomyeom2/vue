import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
	state: () => {
		return {
			cartItems: [],
		}
	},
	actions: {
		addCartItem(cartItem) {
			const newCartItem = {
				...cartItem,
				imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
			}
			this.cartItems.push(newCartItem)
		}
	}
})