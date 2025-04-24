<script lang="ts">
	import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
        type?: "primary" | "secondary";
        size?: "small" | "medium" | "large";
    };
    let { children, type, size = "medium" }: Props = $props();

</script>
<div class="badge" class:secondary={type === 'secondary'} class:large={size === "large"}>{@render children()}</div>
<style>
    .badge {
        display: inline-block;
		background: var(--color-primary);
		padding: 0 0.3rem;
		border-radius: 0.2rem;
		color: white;
		font-size: .8rem;
		margin: 0.1rem 0;
    }
    .badge.secondary {
        background: var(--color-secondary);
    }
    .badge.large {
        font-size: 1rem;
    }
</style>