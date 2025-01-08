<template>
    <Card>
        <template #banner>
            <img
                :src="agency.agencyBannerImage"
                alt=""
            >
        </template>

        <template #body>
            <div class="flex justify-between gap-3">
                <img
                    class="w-[80px] rounded-md"
                    :src="agency.agencyLogoImage"
                >
                <div class="mr-auto flex flex-col gap-1">
                    <h6 class="font-bold text-lg">{{ agency.agencyName }}</h6>
                    <p class="uppercase text-slate-500 text-xs">{{ agency.agencyLocations.join(", ") }}</p>
                    <span class="text-info flex items-center gap-2"> <span class="material-icons align-middle">
                            info
                        </span> Added by {{ agency.addedBy }}
                    </span>
                </div>
            </div>
        </template>

        <template #actions>
            <button
                class="btn btn-ghost w-full hover:rounded-md text-[#9399dd] flex items-center justify-start"
                @click="openInNewTab(agency.agencyExternalLink)"
            >
                <span class="material-icons ">
                    visibility
                </span>
                View Agency
            </button>
            <button
                class="btn btn-ghost text-error font-bold w-full flex items-center justify-start"
                @click="emit('removeToShortlist')"
            >
                <span class="material-icons">
                    delete
                </span>
                Remove from Shortlist
            </button>
        </template>
    </Card>
</template>

<script setup lang="ts">
const emit = defineEmits(['removeToShortlist'])
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

const openInNewTab = (link: string) => {
    window.open(link, '_blank')
}
</script>

<style scoped></style>