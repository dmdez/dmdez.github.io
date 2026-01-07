<script lang="ts">
	import type { PageData } from './$types';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Job from '$lib/components/Job.svelte';
	import { onMount } from 'svelte';
	import YearMarker from '$lib/components/YearMarker.svelte';
	import type LeaderLine from 'leader-line-new';
	let { data }: { data: PageData } = $props();

	const title = 'deric mendez';
	const description =
		'Portfolio of Deric Mendez, a web developer specializing in building user experiences for web applications. Explore my career journey and skillsets including React, TypeScript, SvelteKit, and more.';
	const siteUrl = 'https://dmdez.com';
	const ogImage = data.profile.avatar_url;

	onMount(async () => {
		const LeaderLine = await import('leader-line-new');
		const lines: LeaderLine[] = [];
		data.jobs.forEach((job, jobId) => {
			const jobContainer = document.getElementById(`job-${jobId}`);
			const startSelector = jobId % 2 === 0 ? 'skill-description' : 'skill';
			const endSelector = jobId % 2 === 1 ? 'skill-description' : 'skill';
			job.fields.skills.forEach((skill, skillId) => {
				const box1 = document.getElementById(`${jobId}-${startSelector}-${skillId}`);
				const box2 = document.getElementById(`${jobId}-${endSelector}-${skillId}`);

				if (box1 && box2) {
					const line = new LeaderLine.default(box1, box2, {
						size: 1,
						dash: { len: 3, gap: 3, animation: false },
						endPlug: 'behind',
						color: 'currentColor',
						startSocketGravity: [-35, 0],
						endSocketGravity: [35, 0],
						path: 'fluid'
					});

					lines.push(line);
				}
			});
			const observer = new ResizeObserver(() => {
				lines.forEach((line) => {
					line.position();
				});
			});
			if (jobContainer) {
				observer.observe(jobContainer);
			}
		});
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="author" content="Deric Mendez" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={siteUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="Deric Mendez Portfolio" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:creator" content="@dmdez" />

	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="web developer, frontend engineer, UX engineer, React, TypeScript, SvelteKit, JavaScript, portfolio, Deric Mendez"
	/>
</svelte:head>

<Header avatarUrl={data.profile.avatar_url} />
<hr />
<YearMarker />
<div>
	<main>
		{#each data.jobs as job, index}
			<Job
				id={index}
				title={job.fields.title}
				content={job.content}
				skills={job.fields.skills}
				date={job.fields.date}
				rotate={index % 2 === 1}
			/>
			<hr />
		{/each}
	</main>
</div>
<hr />
<Footer />

<style>
	main {
		margin: 0 auto;
		max-width: 70rem;
		padding: 0 1rem;
	}
</style>
