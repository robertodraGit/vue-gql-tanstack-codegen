<script setup lang="ts">
import {useGraphql} from "@/api/use-graphql.ts";
import {GetCharactersDocument} from "@/gql/graphql.ts";
import {ref, watch} from "vue";

const items = ref()

const {data, status} = useGraphql(GetCharactersDocument);

watch([data, status], () => {
    if (status.value !== 'success' || !data.value) return;

    return items.value = data.value;
})
</script>

<template>
    <span v-if="status !== 'success'">{{ status }}</span>
    <ul v-if="items">
        <li v-for="(item, index) in items.data.characters.results" :key="item + index" class="list-style">
            {{ item.id }} {{ item.name }}
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.list-style {
    text-align: left;
}
</style>
