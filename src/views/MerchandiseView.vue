<template>
  <div class="merchandise-view">
    <h1>Merchandise</h1>
    <div class="product-list">
      <MerchandiseComponent
        v-for="item in products"
        :key="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :image="item.image"
        @add-to-cart="handleAddToCart"
      />
    </div>

    <CartComponent :cart="cart" @remove-item="handleRemoveFromCart" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MerchandiseComponent from "../components/MerchandiseComponent.vue";
import CartComponent from "../components/CartComponent.vue";

const products = ref([
  { id: 1, name: "T-shirt", description: "Comfortable cotton t-shirt", price: 20, image: require("@/assets/jersey.jpg"), size: "M", quantity: 1 },
  { id: 2, name: "Hoodie", description: "Warm and cozy hoodie", price: 40, image: require("@/assets/jersey.jpg"), size: "M", quantity: 1 },
  { id: 3, name: "Cap", description: "Stylish cap for summer", price: 15, image: require("@/assets/jersey.jpg"), size: "M", quantity: 1 }
]);

const cart = ref([]);

const handleAddToCart = (item) => {
  const existingItem = cart.value.find((cartItem) => cartItem.id === item.id && cartItem.size === item.size);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...item, quantity: 1 });
  }
};


const handleRemoveFromCart = (index) => {
  cart.value.splice(index, 1);
};
</script>

<style scoped>
.merchandise-view {
  text-align: center;
  padding: 20px;
  margin-left: 130px;
  margin-top: 60px;
}

.merchandise-view h1 {
  font-family: Poppins;
  text-align: left;
  color: azure;
}

.product-list {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}
</style>
