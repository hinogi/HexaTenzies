


<template>
  <div class="dice-container">
    <div v-for="die in dice">
      <Die :value="die"></Die>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useDieStore } from '../../app/dieStore';
import Die from './components/Die.vue'

const { dice } = useDieStore();

</script>