<script lang="ts">
	import type { SkillsData } from '$lib/types';

	interface Props {
		skills: SkillsData[];
		jobId: number;
	}

	let { skills, jobId }: Props = $props();

	let selectedIndex = $state<number | undefined>(undefined);

	function getDisplayDate(date: Date) {
		let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
		let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
		let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

		return `${month} ${year}`;
	}

	function getSkillId(skillName: string) {
		return skillName.toLowerCase().replace(/[^A-Z0-9]/gi, '-');
	}

	function handleToggle(index: number) {
		if (selectedIndex === index) {
			selectedIndex = undefined;
		} else {
			selectedIndex = index;
		}
	}
</script>

<ul>
	{#each skills as skill, index}
		<li
			id={`${jobId}-skill-description-${index}`}
			{...skill}
			class={`skill-${getSkillId(skill.name)} ${index === selectedIndex ? 'selected' : ''}`}
			onclick={() => handleToggle(index)}
		>
			<header>
				<h4>{skill.name}</h4>
				<div>
					<div>{getDisplayDate(skill.startDate)}</div>
				</div>
			</header>
			<div class="skill-description">{skill.description}</div>
		</li>
	{/each}
</ul>

<style>
	header {
		display: flex;
		align-items: stretch;
		margin: 0 0 0.5rem;
	}
	header h4 {
		flex: 1;
	}
	ul {
		flex: 3;
		list-style-type: none;
		padding: 1rem;
		margin: 0;
	}

	li {
		background-color: var(--color-skill-0-100);
		border-color: var(--color-skill-0-400);
		border-left-width: 3px;
		border-left-style: solid;
		border-radius: 0.3rem;
		padding: 0.5rem;
		margin: 0 0 0.3rem;
		font-size: 0.8rem;
		line-height: 1.2rem;
	}
	h4 {
		margin: 0;
		font-size: 0.9rem;
		font-weight: bold;
	}

	li:not(.selected) .skill-description {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	li.skill-sveltekit,
	li.skill-macromedia-flash {
		background-color: var(--color-skill-1-100);
		border-color: var(--color-skill-1-400);
	}

	li.skill-d3,
	li.skill-css,
	li.skill-javascript {
		background-color: var(--color-skill-2-100);
		border-color: var(--color-skill-2-400);
	}

	li.skill-typescript,
	li.skill-mysql {
		background-color: var(--color-skill-3-100);
		border-color: var(--color-skill-3-400);
	}

	li.skill-react,
	li.skill-photoshop {
		background-color: var(--color-skill-4-100);
		border-color: var(--color-skill-4-400);
	}

	li.skill-angular,
	li.skill-jquery,
	li.skill-perl {
		background-color: var(--color-skill-5-100);
		border-color: var(--color-skill-5-400);
	}

	li.skill-wordpress,
	li.skill-html,
	li.skill--net {
		background-color: var(--color-skill-6-100);
		border-color: var(--color-skill-6-400);
	}

	@media (prefers-color-scheme: dark) {
		li {
			color: var(--color-base-100);
		}
	}
</style>
