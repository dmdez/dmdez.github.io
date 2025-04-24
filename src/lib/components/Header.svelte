<script lang="ts">
	export let avatarUrl = '';
</script>

<header style="--avatar-url: url('{avatarUrl}');">
	<div class="container">
		<h1><span>Hello, my name is</span> <strong>Deric Mendez</strong></h1>

		<p>
			I enjoy planning and building user experiences for web applications of all kinds with
			collaborative project teams. Below, you can get a glimpse of my career and skillsets since
			2000.
		</p>

		<blockquote>
			<strong class="love">I Love</strong> family, cooking and disc golf.
		</blockquote>
	</div>
</header>

<style lang="postcss">
	.container {
		margin: 0 auto;
		max-width: 40em;
	}
	h1 {
		margin: 0 0 2rem;
		font-size: 1.4rem;
		text-transform: lowercase;
		font-weight: 100;
	}

	h1 span {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
	}

	h1 span::before {
		content: '👋';
	}

	h1 span::after {
		content: '';
		background-image: var(--avatar-url);
		display: inline-block;
		height: 2rem;
		width: 2rem;
		border-radius: 100%;
		border: 1px solid white;
		background-size: cover;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
		transition: all 0.3s;
	}

	h1:hover span::after {
		transform: scale(1.2) rotate(5deg);
	}

	h1 strong {
		margin: 1rem 0 0;
		display: block;
		font-size: 2rem;
		line-height: 2rem;
		font-weight: 100;
		text-shadow: var(--text-shadow-lg);
	}

	@media (min-width: 40em) {
		h1 strong {
			font-size: 4rem;
			line-height: 4rem;
		}
	}

	header {
		background: linear-gradient(to bottom, var(--color-base-300), var(--color-base-100));
		padding: 4rem 2rem;
		text-align: center;
		font-weight: 100;
	}

	.love {
		font-weight: 700;
	}

	.love::before {
		content: '♥';
		color: var(--color-secondary);
		margin-right: 0.5rem;
	}
</style>
