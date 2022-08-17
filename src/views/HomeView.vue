<template>
 <div class="home">
  <h1>{{ storeCounter.title }}</h1>
  <h2>{{storeCounter.count}}</h2>
  <div class="buttons">
    <button class="button" @click="storeCounter.increaseCount">Add One</button>
    <button class="button" @click="storeCounter.decreaseCount">Minus One</button>
 </div>
 </div>
</template>

<script setup>
import {useCounterStore} from '../stores/counter'
const storeCounter = useCounterStore()
</script>

<style scope>
h2 {
  font-size: 80px;
  text-align: center;
  color: hsla(160, 100%, 37%, 1);
}

.buttons {
  text-align: center;
}

</style>