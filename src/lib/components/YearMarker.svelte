<script>
	import Badge from "./Badge.svelte";

</script>
<div class="container">
    <a href="#"
        onclick={(e) => {
        e.preventDefault();
        window.document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        }}
    >
        <svg viewBox="0 0 24 24" width="24" focusable="false" class="chakra-icon css-d0gtmn"><path fill="currentColor" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
    </a>
</div>
<div class="year">
<Badge type="secondary" size="large">
    {new Date().getFullYear()}
</Badge>
</div>

<style>
    .container {
        position: sticky;
        top: 0;
        z-index: 10;
        text-align: center;
        width: 2.4em;
        margin: 1rem auto 0;
    }
    a {
        border: 2px solid white;
        border-radius: 50%;
        display: inline-block;
        background-color: var(--color-secondary);
        height: 2.4em;
        width: 2.4em;
        text-align: center;
        line-height: 1.9em;
        box-shadow: 0 0 10px #00000055;
        color: white;
        text-decoration: none;
    }

    a svg {
        width: 2em;
        height: 2.4em;
    }
    .year {
        text-align: center;
        padding: 0.5rem 0;
    }
</style>