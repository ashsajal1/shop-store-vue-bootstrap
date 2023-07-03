import { defineStore } from 'pinia'

export const useCartItemStore = defineStore('cartItem', {
    state: () => ({ cartItem: [] }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        addToCart(item) {
            this.cartItem.push(item);
            localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
        },
    }
})