<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<Header />

<slot />

<style>
	:global(body) {
		background: rgb(255, 247, 240);
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
</style>
