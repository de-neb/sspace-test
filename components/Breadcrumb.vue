<template>
    <div class="breadcrumbs text-sm">
        <ul>
            <li
                v-for="route in breadcrumbRoutes"
                :key="route.name"
            >
                <NuxtLink
                    class="capitalize font-semibold text-accent/75"
                    active-class="text-black"
                    :to="route.path"
                >{{ route.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import routeHelper from '@/utils/routeHelper'

const route = useRoute()

const breadcrumbRoutes = routeHelper.pathToArray(route.path)

</script>

<style scoped></style>