<script lang="ts">
	import type { SkillsData } from '$lib/types';
	import { marked } from 'marked';
	import Skills from './Skills.svelte';
	import { onMount } from 'svelte';
	import { min, max, scaleTime, timeDay } from 'd3';
	import Badge from './Badge.svelte';

	export let title = '';
	export let date: Date | undefined;
	export let content = '';
	export let skills: SkillsData[] = [];
	export let id: number;
	export let rotate = false;

	const { minDate, maxDate } = getMinMaxFromData(skills);
	$: range = [minDate, maxDate];
	$: x = scaleTime().domain(range).nice(timeDay);

	$: sortedSkills = skills
		.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
		.map((skill) => ({
			...skill,
			bottomPosition: (skill.startDate ? x(skill.startDate) : 0) * 100
		}));

	function getMinMaxFromData(d: SkillsData[]) {
		const startDates = d.map(({ startDate }) => (startDate ? new Date(startDate).valueOf() : 0));
		const endDates = d.map(({ endDate }) =>
			endDate ? new Date(endDate).valueOf() : Date.now().valueOf()
		);
		const minDate = min(startDates) || 0;
		const maxDate = max(endDates) || 0;
		return { minDate, maxDate };
	}
</script>

<div class="container">
	<article class:rotate id={`job-${id}`}>
		<div class="description" id="box1">
			<div class="description-content">
				<h2>{title}</h2>
				{@html marked(content)}
			</div>
		</div>
		<div class="divider">
			<div class="divider-line"></div>
			{#each sortedSkills as skill, index}
				<div
					id={`${id}-skill-${index}`}
					class="skill-date-marker"
					style="bottom: {skill.bottomPosition}%"
				></div>
			{/each}
		</div>
		<div class="skills" id="box2">
			<div class="lines"></div>
			<Skills jobId={id} skills={sortedSkills} />
		</div>
	</article>
	<center class="year">
		<span class="arrow up"></span>
		<Badge>{date?.getFullYear()}</Badge>
		<span class="arrow down"></span>
	</center>
</div>

<style>
	.year {
		position: sticky;
		bottom: 1rem;
		padding: 5px 0 0;
	}

	.arrow {
		border-style: solid;
		border-color: var(--color-primary) transparent;
		display: block;
		width: 0;
		height: 0;
		opacity: 0.5;
	}

	.arrow.up {
		border-width: 0 3px 3px;
	}
	.arrow.down {
		border-width: 3px 3px 0;
	}
	.container {
		position: relative;
	}
	.skills {
		position: relative;
		display: flex;
	}
	.divider {
		position: relative;
	}
	.skill-date-marker {
		position: absolute;
		left: 0;
		width: 0;
		height: 0;
		border-width: 5px 0 5px 5px;
		border-style: solid;
		border-color: transparent var(--color-secondary);
	}
	article.rotate .skill-date-marker {
		border-width: 5px 5px 5px 0;
		right: 0;
		left: auto;
	}
	.divider {
		display: none;
	}
	@media (min-width: 40em) {
		article {
			display: flex;
		}
		.description,
		.skills {
			flex: 1;
			width: 50%;
		}
		article.rotate,
		article.rotate .skills {
			flex-direction: row-reverse;
		}
		.description {
			align-items: center;
			display: flex;
		}

		.divider {
			display: block;
			width: 0;
		}
		.divider-line {
			border-left: 1px dashed var(--color-base-content);
			position: absolute;
			top: 0;
			bottom: 0;
			opacity: 0.3;
		}
		.lines {
			flex: 1;
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
	}
	.description {
		text-align: center;
		animation: fade linear both;
		animation-timeline: view();
		animation-range: 25vh 75vh;
	}

	.description-content {
		padding: 1rem;
	}

	.description,
	h2 {
		font-weight: 100;
	}
</style>
