<template>
  <div class="cart-container" @click="toggleCart">
    🛒
    <span v-if="cart.length" class="cart-count">{{ cart.length }}</span>
  </div>

  <div v-if="showCart" class="cart-dropdown show-cart">
    <h3>Cart</h3>
    <ul>
      <li v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="product-image" />
        <div class="product-details">
          <p class="product-name">{{ item.name }}</p>
          <p class="product-price">{{ item.price }}€</p>
          <div class="product-options">
            <label>
              Size:
              <select v-model="item.size" class="custom-select small-input">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="G">L</option>
                <option value="G">XL</option>
                <option value="G">XXL</option>
              </select>
            </label>
            <label>
              Quantity:
              <input type="number" v-model.number="item.quantity" min="1" class="custom-input small-input" />
            </label>
          </div>
          <button @click="removeFromCart(index)" class="remove-btn">Remove</button>
        </div>
      </li>
    </ul>
    <hr />
    <p class="total-price"><strong>Total:</strong> {{ totalPrice }}€</p>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const showCart = ref(false);
const props = defineProps({
  cart: Array
});
const emit = defineEmits(["remove-item"]);

const toggleCart = () => {
  showCart.value = !showCart.value;
};

const removeFromCart = (index) => {
  emit("remove-item", index);
};

const totalPrice = computed(() => {
  return props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.cart-container {
  position: fixed;
  top: 80px;
  right: 20px;
  background: #2a2a2a;
  border: 2px solid #f474b6;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s;
  font-family: 'Poppins', sans-serif;
}

.cart-container:hover {
  transform: scale(1.1);
}

.cart-count {
  background: white;
  color: #f474b6;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 7px;
  position: absolute;
  top: -5px;
  right: -10px;
}

.cart-dropdown {
  position: fixed;
  top: 130px;
  right: 20px;
  background: #2a2a2a;
  border: 2px solid #f474b6;
  padding: 15px;
  border-radius: 8px;
  min-width: 320px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;
  font-family: 'Poppins', sans-serif;
}

.cart-dropdown.show-cart {
  animation: fadeIn 0.3s ease-in-out;
}

.cart-dropdown:not(.show-cart) {
  animation: fadeOut 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f474b6;
}

.product-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
}

.product-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.product-name {
  font-weight: bold;
  font-size: 16px;
}

.product-price {
  color: #f474b6;
  font-size: 14px;
}

.product-options {
  display: flex;
  gap: 10px;
  align-items: center;
}

.product-options label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.custom-select,
.custom-input {
  padding: 4px;
  border-radius: 4px;
  border: none;
  background: #3a3a3a;
  color: white;
  font-size: 14px;
}

.custom-select.small-input,
.custom-input.small-input {
  width: 80px;
}

.remove-btn {
  background: #f474b6;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 5px;
}

.remove-btn:hover {
  background: #ff5c8a;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  margin-top: 10px;
}
</style>
