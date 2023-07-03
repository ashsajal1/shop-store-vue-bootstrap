<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4" v-for="item in items" :key="item.id">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" :src="item.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-success" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">Buy</button>
                <button type="button" class="btn btn-sm btn-outline-success" @click="addToCart(item)">Add to
                  Cart</button>
              </div>
              <small class="text-muted">{{ item.price }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle order</button>
          <button type="button" class="btn btn-primary">Procced via <i class="bi bi-paypal"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useCartItemStore } from '../stores/cartStore'

export default {
  setup() {
    const cartStore = useCartItemStore()

    const items = [
      {
        id: 1,
        name: 'Item 1',
        description: 'This is item 1',
        price: '$10',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Item 2',
        description: 'This is item 2',
        price: '$20',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Item 3',
        description: 'This is item 3',
        price: '$30',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        name: 'Item 4',
        description: 'This is item 4',
        price: '$40',
        image: 'https://via.placeholder.com/150'
      }
    ];

    const addToCart = (item) => {
      cartStore.addToCart(item);
    };

    return {
      items,
      addToCart
    };
  }
}
</script>