<script setup lang='ts'>
import { ref, watch } from 'vue';
import { getCharacters } from '@/api/queries/characters.ts';

const items = ref();

const { data, status } = getCharacters();

watch([data, status], () => {
  if (status.value !== 'success' || !data.value) return;

  return items.value = data.value;
});
</script>

<template>
  <span v-if="status !== 'success'">{{ status }}</span>
  <ul v-if='items'>
    <li v-for='(item, index) in items.characters.results' :key='item + index' class='list-style'>
      {{ item.id }} {{ item.name }}
    </li>
  </ul>
</template>
<style lang='scss'>
.list-style {
  text-align: left;
}
</style>
