<template>
    <Card>
        <template #banner>
            <img
                :src="agency.agencyBannerImage"
                alt=""
            >
        </template>

        <template #body>
            <div class="flex gap-3">
                <img
                    class="w-[80px] rounded-md"
                    :src="agency.agencyLogoImage"
                >
                <div class="mr-auto flex flex-col gap-1">
                    <h2 class="font-bold text-xl">{{ agency.agencyName }}</h2>
                    <p class="uppercase text-slate-500 text-xs">{{ agency.agencyLocations.join(", ") }}</p>
                    <span class="text-info flex items-center gap-1">
                        <span class="material-icons !text-md">
                            info
                        </span>
                        Suggested by StudioSpace
                    </span>
                </div>
            </div>
        </template>

        <template #actions>
            <button
                class="btn btn-ghost text-[teal] font-bold w-full flex items-center justify-start"
                @click="emit('addToShortlist')"
            >
                <span class="material-icons">
                    add
                </span>
                Add to Shortlist
            </button>
        </template>
    </Card>
</template>

<script setup lang="ts">
const emit = defineEmits(['addToShortlist'])
defineProps({
    agency: {
        type: Object,
        default: {
            "addedBy": "studiospace",
            "agencyBannerImage": "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1721146683561_AMAN_NY_JH_LIFESTYLE_13786_2_copy.jpg",
            "agencyExternalLink": "https://google.com",
            "agencyId": "38423-12412497",
            "agencyLocations": [
                "Australia",
                "United Kingdom"
            ],
            "agencyLogoImage": "https://stmp-prod.ams3.cdn.digitaloceanspaces.com/1721146238694_SOW_BLACK_LOGO.jpg",
            "agencyName": "Test Agency Name"
        }
    }
})
</script>

<style scoped></style>