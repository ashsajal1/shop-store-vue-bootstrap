<template>
  <navbar />

  <!-- <cart-view /> -->
  <router-view></router-view>
  <app-footer />
</template>

<script>
import { useCartItemStore } from './stores/cartStore';

export default {
  beforeMount() {
    const cartItems = localStorage.getItem("cartItem");
    if (cartItems) {
      useCartItemStore().$state.cartItem = JSON.parse(cartItems);
    }
  },
};
</script>