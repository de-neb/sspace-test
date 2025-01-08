<template>
    <Collapse>
        <template #title>
            <h6 class="uppercase font-semibold">Suggested Agencies ({{ suggestedAgenciesLength }})</h6>
        </template>

        <template #content>
            <div class="flex gap-4 flex-wrap ">
                <span
                    class="text-slate-400 mx-auto"
                    v-if="!suggestedAgenciesLength"
                >No Suggested Agencies to show.</span>

                <SuggestedAgencyCard
                    class="mb-4"
                    v-for="suggestedAgency in suggestedAgencies"
                    :key="suggestedAgency.agencyId"
                    :agency="suggestedAgency"
                    @addToShortlist="addAgencyToShortList(suggestedAgency)"
                ></SuggestedAgencyCard>
            </div>
        </template>
    </Collapse>
</template>

<script setup lang="ts">
import { useAgencyState } from '#build/imports';

const { agencies: suggestedAgencies, addAgencyToShortList } = useAgencyState()

const suggestedAgenciesLength = computed(() => suggestedAgencies.value.length)
</script>

<style scoped></style>