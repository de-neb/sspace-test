<template>
    <div
        class="toast toast-center   font-bold"
        v-if="showToast"
    >
        <div class="alert bg-[#0e1e37] text-white rounded-md px-10">
            <span class="text-md">{{ message }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast';

const { message, showToast } = useToast()

</script>

<style scoped></style>