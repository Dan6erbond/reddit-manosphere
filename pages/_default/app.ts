import { createSSRApp, defineComponent, h } from "vue";
import PageLayout from "./PageLayout.vue";
import "../../src/styles/bootstrap.scss";
import { PageContext } from "./types";

export { createApp };

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  app.config.globalProperties.$baseUrl = import.meta.env.BASE_URL;
  app.config.globalProperties.$urlPathname = pageContext.urlPathname;
  // We make `pageContext.routeParams` available in all components as `$routeParams`
  // (e.g. `$routeParams.movieId` for a Route String `/movie/:movieId`).
  app.config.globalProperties.$routeParams = pageContext.routeParams;

  return app;
}
