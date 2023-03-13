import { Vue3Snackbar } from "vue3-snackbar";
import { h } from "vue";

export default {
  inject: ["snackbarOptions"],
  render() {
    return h(Vue3Snackbar, this.snackbarOptions);
  },
};
