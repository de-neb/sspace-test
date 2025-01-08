<template>
    <div class="w-[95%] bg-neutral absolute rounded-t-[20px] bottom-0 left-[50%] translate-x-[-50%] ">
        <div
            role="
    tablist"
            class="tabs tabs-lifted tabs-lg navbar p-0 md:w-[70%] xs:h-[10%] sm:w-full"
        >
            <a
                role="tab"
                class="tab h-full w-auto font-semibold text-[1rem] !rounded-none "
                v-for="(tab, i) in TABS"
                :key="tab.name"
                :class="{ 'tab-active !rounded-t-none !text-[1.1rem]': activeTab === i, '!rounded-tl-[20px]': activeTab === 0, 'text-[#e1c9d5] tab-disabled': tab.disabled }"
                @click="activeTab = i"
            >
                <div
                    class="badge badge-error mr-1 text-white"
                    v-if="!tab.disabled && activeTab !== i"
                >{{ tabCounts[`${i}` as keyof typeof tabCounts] }}</div>
                <span
                    class="material-icons"
                    v-if="tab.disabled"
                >
                    lock
                </span>
                {{ tab.name }}
            </a>
            <div
                role="tabpanel"
                class="tab-content p-10"
            >Tab content 1</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TABS } from '~/constants/projectNavbar';
import { useAgencyState } from '#build/imports';

const { agencies, shortlistedAgencies } = useAgencyState()

const tabCounts = computed(() => ({
    "0": agencies.value.length,
    "1": shortlistedAgencies.value.length
}))

const emit = defineEmits(['onTabSelect'])
const activeTab = ref<number>(0)

watch(activeTab, () => {
    emit('onTabSelect', activeTab.value)
})

</script>

<style scoped></style>