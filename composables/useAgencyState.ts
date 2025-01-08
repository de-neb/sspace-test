import agencyData from "@/sample.json";
import { ref } from "vue";
import { useToast } from "./useToast";

const agencies = ref(agencyData.data);
const shortlistedAgencies = ref<any[]>([]);

const toast = useToast();

export function useAgencyState() {
  const shortListedAgencyIds = computed(() =>
    shortlistedAgencies.value.map((agency: any) => agency.agencyId)
  );

  const removeAgencyFromAgencies = (id: string) => {
    agencies.value = agencies.value.filter(
      (agency: any) => agency.agencyId !== id
    );
  };

  const addAgencyToShortList = (agency: any) => {
    if (shortListedAgencyIds.value.includes(agency.agencyId)) {
      return;
    }
    removeAgencyFromAgencies(agency.agencyId);
    shortlistedAgencies.value.push(agency);
    toast.triggerToast(`${agency.agencyName} has been added to Shortlist.`);
  };

  const removeAgencyFromShortList = (id: string) => {
    const agencyIndex = shortListedAgencyIds.value.findIndex(
      (shortlistedId: string) => shortlistedId === id
    );
    shortlistedAgencies.value.splice(agencyIndex, 1);
    toast.triggerToast(
      `${shortlistedAgencies.value[agencyIndex].agencyName} has been removed from Shortlist.`
    );
  };

  return {
    agencies,
    shortlistedAgencies,
    addAgencyToShortList,
    removeAgencyFromShortList,
  };
}
