import { writable } from "svelte/store";

export const user = writable(null);
export const path = writable('/');
export const hmenu = writable(false);