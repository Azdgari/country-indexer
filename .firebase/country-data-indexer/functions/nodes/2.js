import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.gy38uLIJ.js","_app/immutable/chunks/scheduler.ugufa1kq.js","_app/immutable/chunks/index._QlLQHNh.js","_app/immutable/chunks/data._232QnrY.js"];
export const stylesheets = [];
export const fonts = [];
