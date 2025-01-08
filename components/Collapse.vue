<template>
    <div class="collapse collapse-arrow overflow-visible">
        <input
            type="checkbox"
            v-model="collapse"
        />
        <div class="collapse-title text-xl font-medium">
            <slot name="title"></slot>
        </div>
        <div class="collapse-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const collapse = ref(true)
</script>

<style scoped></style>