import { c as create_ssr_component, v as validate_store, s as subscribe, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let country = {};
  $page.params.id;
  $$unsubscribe_page();
  return `<h1>${escape(country.name)}</h1> <h1>${escape(country.symbol)}</h1>`;
});
export {
  Page as default
};
