<script>
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
	let showLoader = $state(true);
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let hideTimer;

	onMount(() => {
		const bootTimer = setTimeout(() => {
			showLoader = false;
		}, 900);

		beforeNavigate(() => {
			showLoader = true;
		});

		afterNavigate(() => {
			clearTimeout(hideTimer);
			hideTimer = setTimeout(() => {
				showLoader = false;
			}, 180);
		});

		return () => {
			clearTimeout(bootTimer);
			clearTimeout(hideTimer);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}


<div
	class="boot-loader"
	class:is-visible={showLoader}
	aria-live="polite"
	aria-label="Loading page"
	aria-hidden={!showLoader}
>
	<div class="loader-text">
		<span>loading</span>
		<span class="loader-dots" aria-hidden="true">
			<span>.</span>
			<span>.</span>
			<span>.</span>
		</span>
	</div>
</div>

<style>
	.boot-loader {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: grid;
		place-items: center;
		background: #ffffff;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition:
			opacity 180ms ease,
			visibility 0s linear 180ms;
	}

	.boot-loader.is-visible {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
		transition:
			opacity 120ms ease,
			visibility 0s linear 0s;
	}

	.loader-text {
		display: inline-flex;
		align-items: baseline;
		gap: 0.2em;
		font-family: 'terminal', monospace;
		font-size: clamp(1rem, 2.2vw, 1.6rem);
		letter-spacing: 0.06em;
		text-transform: lowercase;
	}

	.loader-dots {
		display: inline-flex;
		min-width: 1.2em;
	}

	.loader-dots span {
		opacity: 0;
		animation: blink-dots 1s infinite steps(1, end);
	}

	.loader-dots span:nth-child(2) {
		animation-delay: 0.25s;
	}

	.loader-dots span:nth-child(3) {
		animation-delay: 0.5s;
	}

	@keyframes blink-dots {
		0%,
		100% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}
</style>
