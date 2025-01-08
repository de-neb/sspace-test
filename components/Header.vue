<template>
    <header>
        <nav class="navbar bg-primary !text-neutral-content">
            <div class="flex-none m-3 flex flex-col">
                <h1 class="text-2xl">StudioSpace</h1>
                <h5 class="text-xs font-semibold me-auto tracking-[0.6em]">ADMIN</h5>
            </div>
            <div class="flex-1">
                <ul class="menu menu-horizontal px-1 w-full flex gap-2">
                    <li
                        class="self-center"
                        v-for="navLink in NAV_LINKS"
                        :key="navLink"
                    >
                        <NuxtLink
                            class="capitalize font-bold"
                            active-class="rounded-md bg-accent text-base-100 focus:rounded-md focus:bg-accent focus:text-base-100"
                            :to="'/' + navLink"
                        >{{ navLink }}</NuxtLink>
                    </li>

                    <li class="ms-auto">
                        <details>
                            <summary>
                                <div class="avatar">
                                    <div class="w-8 rounded-full">
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                User
                            </summary>
                            <ul class="bg-base-100 rounded-md p-2 z-50">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script setup lang="ts">
import { NAV_LINKS } from '~/constants/header';

const route = useRoute()


</script>

<style scoped></style>