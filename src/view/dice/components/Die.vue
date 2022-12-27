<template>
  <div class="die-face">
    <h2 class="die-num">{{ value }}</h2>
  </div>
</template>

<script setup lang="ts">
interface DieProps {
  value: number
}
const props = defineProps<DieProps>();
</script>

<style>
.die-face {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: 50px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
}

.die-num {
    font-size: 2rem;
}

</style>
