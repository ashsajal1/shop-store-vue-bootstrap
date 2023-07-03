<template>
    <div>
      <ul>
        <li v-for="item in cartItems" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartItemStore } from '../stores/cartStore'
  
  export default {
    computed: {
      cartItems() {
        return useCartItemStore().$state.cartItem;
      },
    },
    mounted() {
      const cartItems = localStorage.getItem("cartItem");
      if (cartItems) {
        useCartItemStore().$state.cartItem = JSON.parse(cartItems);
      }
    },
  };
  </script>