<template>
    <div class="w-full h-full flex flex-col">
        <div class="flex-none  h-1/3 px-5 py-3">
            <Breadcrumb />
            <ul>
                <li
                    v-for="project in projects"
                    :key="project.name"
                >
                    <NuxtLink
                        class="text-black/90 hover:text-accent"
                        :to="`${route.path}/${project.slug}`"
                    >{{ project.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SAMPLE_PROJECTS } from '~/constants/projects';

const route = useRoute()

const projects = computed((() => SAMPLE_PROJECTS.map((project: string) => ({
    name: project,
    slug: project.replaceAll(' ', '-').toLocaleLowerCase()
}))))

</script>

<style scoped></style>