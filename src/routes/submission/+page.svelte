<main class="submission-page">
	<nav class="navbar" aria-label="Main navigation">
		<a class="brand" href="/">shuffle</a>
		<div class="links" aria-label="Secondary links">
			<a href="/#how-it-works-title">about</a>
			<a href="/#faq-title">faq</a>
			<a href="/guides">guides</a>
		</div>
	</nav>

	<section class="coming-soon" aria-labelledby="coming-soon-title">
		<h1 id="coming-soon-title">coming soon!</h1>
	</section>
</main>

<style>
	.submission-page {
		min-height: 100vh;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'terminal', monospace;
		font-size: 2rem;
		text-transform: lowercase;
	}

	.links {
		display: flex;
		gap: 1.5rem;
	}

	.coming-soon {
		flex: 1;
		display: grid;
		place-items: center;
	}

	h1 {
		margin: 0;
		font-family: 'dreamertm', sans-serif;
		font-size: clamp(2.5rem, 10vw, 8rem);
		text-transform: lowercase;
	}

	@media (max-width: 640px) {
		.submission-page {
			padding: 1rem 1rem 1.5rem;
		}

		.navbar {
			font-size: 0.9rem;
		}

		.links {
			gap: 1rem;
		}
	}
</style>
