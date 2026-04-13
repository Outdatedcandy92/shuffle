<svelte:head>
	<title>shuffle</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main>
	<section class="hero">
		<nav class="navbar" aria-label="Main navigation">
			<a class="brand" href="/">shuffle</a>
			<div class="links" aria-label="Secondary links">
				<a href="#how-it-works-title">about</a>
				<a href="#faq-title">faq</a>
				<a href="/guides">guides</a>
			</div>
		</nav>

		<div class="hero-content">
			<div class="video-stage">
				<div class="video-frame">
					<video class="hero-video" autoplay muted loop playsinline>
						<source src="/audioboard.webm" type="video/webm" />
					</video>
				</div>
				<div class="hero-cluster top-left">
					<p class="tag-note">under 19?</p>
					<p class="hero-tag">Make a PCB</p>
					<p class="tag-note">> design a kit for a stranger.
                    <br>> a stranger designs one for you.</p>
				</div>
				<div class="hero-cluster bottom-right">
					<p class="hero-tag">Get a free kit</p>
					<p class="tag-note">a random kit. no idea what it’ll be.</p>
				</div>
			</div>
		</div>

		<div class="hero-cta">
			<a class="cta-button" href="/guides">get building</a>
			<div class="scroll-hint" aria-hidden="true">
				<span class="scroll-arrow">↓</span>
			</div>
		</div>
	</section>

	<section class="about" aria-labelledby="how-it-works-title">
		<div class="about-inner">
			<h2 id="how-it-works-title" class="about-title">how it works</h2>
			<ol class="steps">
				<li>design: create a PCB kit and document it well enough that a stranger can build it. not sure where to start? the guides have you covered.</li>
				<li>polish & submit: polish your project and submit for review. we'll check it meets the bar for shippable. full criteria in the guides.</li>
				<li>exchange: once approved, sit tight. When the event wraps up, we'll send you a random kit another participant designed, along with a hotplate and supplies to assemble it.</li>
				<li>profit!?</li>
			</ol>
			<p class="about-note">shuffle is an upcoming Hack Club program. we’ve shipped hardware to thousands of students worldwide</p>
		</div>
	</section>

	<section class="faq" aria-labelledby="faq-title">
		<div class="faq-inner">
			<h2 id="faq-title" class="faq-title">faq</h2>
			<div class="faq-grid">
				<div class="qna">
					<p class="question">q: who can participate?</p>
					<p class="answer">a: shuffle is open to anyone between 13 and 19 years old. that's it.</p>
				</div>
				<div class="qna">
					<p class="question">q: how much does it cost?</p>
					<p class="answer">a: nothing. not a single cent. it will cost you time though.</p>
				</div>
				<div class="qna">
					<p class="question">q: what can i build?</p>
					<p class="answer">a: anything you want, as long as it fits the constraints. a custom dev board, a fidget toy, a sensor breakout, a silly blinking light. if you can design it and document it, it counts.</p>
				</div>
				<div class="qna">
					<p class="question">q: do I need experience?</p>
					<p class="answer">a: no. if you've never touched PCB design before, the guides will take you from zero to a finished board. that's what they're there for.</p>
				</div>
				<div class="qna">
					<p class="question">q: is this legit?</p>
					<p class="answer">a: yes. shuffle is an upcoming Hack Club program. Hack Club is a global nonprofit network of teen-led coding and maker clubs, running real programs and shipping real hardware to students worldwide.</p>
				</div>
				<div class="qna">
					<p class="question">still have questions?</p>
					<p class="answer">reach out at rudy[at]rudymakes.com and I'll get back to you as soon as I can.</p>
				</div>
			</div>
			<div class="faq-actions">
				<a class="faq-button" href="/submission">ready to submit?</a>
			</div>
			<footer class="faq-footer">
				<p>made by <a href="https://github.com/Outdatedcandy92">@rudy.</a></p>
			</footer>
		</div>
	</section>
</main>

<style>
	.hero {
		position: relative;
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

	.hero-content {
		flex: 1;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.hero-cta {
		position: absolute;
		left: 50%;
		bottom: 1rem;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.55rem;
		z-index: 3;
	}

	.cta-button {
		background: transparent;
		border: 2px solid currentColor;
		font-family: 'terminal', monospace;
		font-size: clamp(0.8rem, 1.2vw, 1rem);
		letter-spacing: 0.03em;
		text-transform: lowercase;
		padding: 0.65rem 1.65rem;
		cursor: pointer;
	}

	.scroll-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 1;
	}

	.scroll-arrow {
		font-size: 1.1rem;
		animation: nudge-down 1.1s ease-in-out infinite;
	}

	@keyframes nudge-down {
		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(4px);
		}
	}

	.video-stage {
		position: relative;
		width: min(78vw, 1300px);
	}

	.video-frame {
		width: var(--video-scale, 100%);
		margin: 0 auto;
	}

	.hero-video {
		display: block;
		width: 100%;
		height: auto;
		position: relative;
		z-index: 0;
	}

	.hero-cluster {
		position: absolute;
		z-index: 2;
		pointer-events: none;
	}

	.hero-tag {
		font-family: 'dreamertm', sans-serif;
		font-size: clamp(2rem, 8vw, 10rem);
		line-height: 0.9;
		margin: 0;
	}

	.tag-note {
		font-family: 'terminal', monospace;
		font-size: clamp(0.6rem, 1.7vw, 10rem);
		letter-spacing: 0.03em;
		margin: 0;
        margin-top: 2vh;
	}

	.top-left {
		top: -1em;
		left: -10em;
		text-align: left;
	}

	.bottom-right {
		right: -10em;
		bottom: -1em;
		text-align: right;
	}

	@media (max-width: 1700px) {
		.top-left {
			left: -5.5em;
		}

		.bottom-right {
			right: -5.5em;
		}
	}

	@media (max-width: 1200px) {
		.hero-tag {
			font-size: clamp(1.8rem, 7vw, 6.4rem);
		}

		.top-left {
			left: -2.4em;
		}

		.bottom-right {
			right: -2.4em;
		}
	}

	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 2rem;
	}

	.about-inner {
		width: min(120ch, 100%);
		margin-left: 1.25rem;
	}

	.about-title {
		font-family: 'dreamertm', sans-serif;
		font-size: clamp(2.25rem, 9vw, 8rem);
		line-height: 0.9;
		margin: 0 0 1.5rem;
		text-transform: lowercase;
	}

	.steps {
		margin: 0;
		padding: 0;
		list-style: none;
		counter-reset: howitworks;
		font-family: 'terminal', monospace;
		font-size: clamp(0.85rem, 1.5vw, 5rem);
		line-height: 1.45;
	}

	.steps li {
		position: relative;
		padding-left: 3.15rem;
		margin: 0 0 1rem;
	}

	.steps li::before {
		counter-increment: howitworks;
		content: counter(howitworks, decimal-leading-zero) '/';
		position: absolute;
		left: 0;
		width: 2.55rem;
		top: 0;
		text-align: left;
	}

	.about-note {
		max-width: 120ch;
		margin: 10rem 0 0;
		font-family: 'terminal', monospace;
		font-size: clamp(0.8rem, 1.5vw, 5rem);
		line-height: 1.4;
	}

	.faq {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: flex-start;
		padding: 2.5rem 3rem 2rem;
	}

	.faq-inner {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-left: 0;
		padding: 0 1rem;
	}

	.faq-title {
		font-family: 'dreamertm', sans-serif;
		font-size: clamp(2.75rem, 10vw, 8.75rem);
		line-height: 0.9;
		margin: 0 0 2.5rem;
		text-transform: lowercase;
	}

	.faq-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: 1fr;
		flex: 1;
		align-content: space-between;
		gap: clamp(2rem, 4vw, 4rem) clamp(2rem, 4vw, 5rem);
	}

	.faq-actions {
		display: flex;
		justify-content: center;
		margin-top: 2.5rem;
		margin-bottom: 1.5rem;
	}

	.faq-button {
		background: transparent;
		border: 2px solid currentColor;
		font-family: 'terminal', monospace;
		font-size: clamp(1rem, 1.6vw, 1.25rem);
		letter-spacing: 0.03em;
		text-transform: lowercase;
		padding: 1rem 2rem;
		cursor: pointer;
	}

	.qna {
		min-width: 0;
	}

	.question {
		margin: 0;
		font-family: 'terminal', monospace;
		font-size: clamp(1rem, 1.7vw, 1.5rem);
		line-height: 1.35;
	}

	.answer {
		margin: 0.7rem 0 0;
		font-family: 'terminal', monospace;
		font-size: clamp(0.95rem, 1.6vw, 1.5rem);
		line-height: 1.45;
		color: #000000;
	}

	.faq-footer {
		position: absolute;
		left: 50%;
		bottom: 1rem;
		transform: translateX(-50%);
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		text-align: center;
		font-family: 'terminal', monospace;
		font-size: clamp(0.8rem, 1.15vw, 2rem);
		line-height: 1.4;
		padding-bottom: 0.75rem;
	}

	.faq-footer p {
		margin: 0;
	}

	.faq-footer p + p {
		margin-top: 0.15rem;
	}

	@media (max-width: 640px) {
		.hero {
			padding: 1rem 1rem 1.5rem;
		}

		.navbar {
			font-size: 0.9rem;
		}

		.links {
			gap: 1rem;
		}

		.video-stage {
			width: min(92vw, 560px);
		}

		.video-frame {
			width: var(--video-scale-mobile, 100%);
		}

		.hero-cta {
			bottom: 0.75rem;
		}

		.cta-button {
			padding: 0.55rem 1.25rem;
		}

		.top-left {
			left: -0.1em;
		}

		.bottom-right {
			right: -0.1em;
		}

		.about {
			padding: 1rem;
			align-items: flex-start;
		}

		.about-inner {
			margin-left: 0.6rem;
			padding-top: 3rem;
		}

		.steps {
			padding-left: 0;
		}

		.steps li::before {
			width: 2.35rem;
		}

		.steps li {
			padding-left: 2.85rem;
		}

		.about-note {
			margin-top: 1.5rem;
		}

		.faq {
			padding: 1.25rem 1rem 1rem;
			align-items: flex-start;
		}

		.faq-inner {
			padding: 0 0.35rem;
		}

		.faq-grid {
			grid-template-columns: 1fr;
			grid-auto-rows: auto;
			gap: 1.75rem;
		}

		.faq-actions {
			margin-top: 2rem;
			margin-bottom: 1.25rem;
		}

		.faq-button {
			padding: 0.85rem 1.45rem;
		}

		.faq-footer {
			bottom: 0.75rem;
			padding-bottom: 0;
		}
	}
</style>