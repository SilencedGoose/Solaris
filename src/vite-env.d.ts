/// <reference types="vite/client" />

declare module 'vanta/dist/vanta.net.min' {
	export interface VantaNetOptions {
		el: HTMLElement | string;
		THREE?: unknown;
		mouseControls?: boolean;
		touchControls?: boolean;
		gyroControls?: boolean;
		minHeight?: number;
		minWidth?: number;
		scale?: number;
		scaleMobile?: number;
		color?: number;
		backgroundColor?: number;
		points?: number;
		spacing?: number;
	}

	export interface VantaEffect {
		destroy(): void;
	}

	export default function NET(options: VantaNetOptions): VantaEffect;
}
