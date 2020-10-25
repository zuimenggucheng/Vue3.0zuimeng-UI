import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel,footer } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
   window.zuiMengClose = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              zuiMengClose();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
          footer
        }
      );
    },
  });
  app.mount(div);
};
