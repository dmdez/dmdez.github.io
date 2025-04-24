<script lang="ts">
	import type { PageData } from './$types';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Job from '$lib/components/Job.svelte';
	import { onMount } from 'svelte';
	import YearMarker from '$lib/components/YearMarker.svelte';
	import type LeaderLine from 'leader-line-new';
	let { data }: { data: PageData } = $props();

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
						path: 'fluid',
					});

					lines.push(line);
				}
			});
			const observer = new ResizeObserver(() => {
				lines.forEach((line) => {
					line.position();
				});
			});
			if ( jobContainer ) {
				observer.observe(jobContainer);
			}

		});
	});
</script>

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
