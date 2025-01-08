<template>
    <Collapse>
        <template #title>
            <h6 class="uppercase font-semibold">Agency Shortlist</h6>
        </template>

        <template #content>
            <div class="flex gap-3 flex-wrap justify-start">
                <span
                    class="text-slate-400 mx-auto"
                    v-if="!shortlistedAgenciesLength"
                >No Shortlisted Agencies to show.</span>

                <AgencyShortlistCard
                    class="mb-4"
                    v-for="shortlistedAgency in shortlistedAgencies"
                    :key="'shortlist_' + shortlistedAgency.agencyId"
                    :agency="shortlistedAgency"
                    @removeToShortlist="removeAgencyFromShortList(shortlistedAgency.agencyId)"
                ></AgencyShortlistCard>
            </div>

        </template>
    </Collapse>
</template>

<script setup lang="ts">
import AgencyShortlistCard from './AgencyShortlistCard.vue';

import { useAgencyState } from '#build/imports';

const { shortlistedAgencies, removeAgencyFromShortList } = useAgencyState()

const shortlistedAgenciesLength = computed(() => shortlistedAgencies.value.length)

watch(shortlistedAgencies, (val) => {
    console.log('added', val)
})
</script>

<style scoped></style>