<template>
    <div class="w-full h-full flex flex-col">
        <div class="flex-none bg-secondary h-[400px] md:h-[60%] lg:h-[40%] px-10 py-3 relative flex flex-col gap-3">
            <Breadcrumb />
            <div class="badge badge-warning text-white rounded-sm uppercase text-[0.65em] font-semibold gap-2">
                Matching
            </div>
            <div class="flex flex-nowrap justify-between items-center">
                <h1 class="text-4xl font-bold capitalize text-black"> {{ projectName }}</h1>

                <div class="dropdown dropdown-end">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-circle m-1"
                    > <span class="material-icons">
                            more_vert
                        </span></div>
                    <ul
                        tabindex="0"
                        class="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
                    >
                        <li><a class="font-bold">Confirm for client</a></li>
                        <li><a class="font-bold">Send suggestions to client</a></li>
                    </ul>
                </div>

            </div>
            <div class="flex flex-nowrap items-center gap-2">
                <div class="avatar">
                    <div class="w-10 rounded">
                        <img src="/assets/images/ma-financial-group.jpeg" />
                    </div>
                </div>
                <h6>MA Financial Group</h6>
            </div>
            <ProjectNavigation @onTabSelect="(tab: number) => selectedTab = tab" />


        </div>

        <!-- tabpanels -->
        <div
            role="tabpanel"
            class="p-10 h-full w-full flex flex-col gap-4"
            v-if="selectedTab === 0"
        >

            <div
                role="alert"
                class="alert bg-info/20 border border-info rounded-md flex items-start gap-2 "
            >
                <span class="material-icons">info</span>
                <div class="flex flex-col items-start gap-0">
                    <h5 class="font-bold">Suggest an Agency Shorlist.</h5>
                    <span class="text-xs">Please provide the client with a suggested shortlist based on their Project
                        Scope.</span>
                </div>
            </div>
            <SuggestedAgencyList></SuggestedAgencyList>

        </div>

        <div
            role="tabpanel"
            class="p-10 h-full w-full"
            v-else-if="selectedTab === 1"
        >
            <AgencyShortlist></AgencyShortlist>
        </div>
    </div>
</template>

<script setup lang="ts">
import AgencyShortlist from '~/components/AgencyShortlist.vue';

const route = useRoute()

const projectName = computed(() => route.params.project.replaceAll('-', ' '))

const selectedTab = ref(0)

</script>

<style scoped></style>