declare module "bootstrap" {
	export class Modal {
		constructor(element: Element, options?: object)
		show(): void
		hide(): void
		static getInstance(element: Element): Modal | null
	}
}
