

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.qQW3AQOU.js","_app/immutable/chunks/scheduler.ugufa1kq.js","_app/immutable/chunks/index._QlLQHNh.js"];
export const stylesheets = ["_app/immutable/assets/0.M-HWwyPe.css"];
export const fonts = [];
