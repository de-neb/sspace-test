import { ref } from "vue";

const message = ref("");
const showToast = ref(false);

export const useToast = () => {
  const triggerToast = (text: string) => {
    showToast.value = true;
    message.value = text;
    setTimeout(() => {
      showToast.value = false;
    }, 5000);
  };
  return {
    triggerToast,
    message,
    showToast,
  };
};
