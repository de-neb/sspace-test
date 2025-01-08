<template>
    <div class="card card-compact bg-base-100 w-96 shadow-xl rounded-md">
        <figure>
            <slot name="banner"></slot>
        </figure>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
        <div class="divider m-1 mx-5"></div>
        <div class="card-actions">
            <div class="px-3 pb-3 w-full">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>