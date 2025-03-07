<template>
  <div class="merch-container">
    <div class="merch-card">
      <img :src="image" :alt="name" class="merch-image" />
    </div>
    <div class="merch-info">
      <h3 class="merch-name">{{ name }}</h3>
      <p class="merch-description">{{ description }}</p>
      <p class="merch-price">{{ price }}</p>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  price: String,
  description: String,
  image: String
});

const emit = defineEmits(["add-to-cart"]);

const addToCart = () => {
  emit("add-to-cart", { name: props.name, price: props.price });
};
</script>

<style scoped>
.merch-container {
  text-align: left;
  width: 260px;
  font-family: "Rajdhani", sans-serif;
}

.merch-card {
  border-radius: 12px;
  overflow: hidden;
  margin-top: 50px;
}

.merch-image {
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.merch-info {
  margin-top: 10px;
}

.merch-name {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin: 0;
}

.merch-category {
  font-size: 14px;
  color: #b0b0b0;
  margin: 3px 0;
}

.merch-description {
  font-size: 16px;
  color: #e6e6e6;
  margin-top: 5px;
}

.merch-price {
  font-size: 16px;
  font-weight: bold;
  color: #f474b6;
  margin-top: -10px;
}

.add-to-cart {
  background-color: #f474b6;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: background 0.3s ease;
}

.add-to-cart:hover {
  background-color: #d15c98;
}
</style>
