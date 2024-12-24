<script>
	import Layout from "$lib/component/Layout.svelte";
	import Latest from '$lib/component/Latest.svelte'
	let { data } = $props()
</script>

<Layout {data}>
<section class="Index region">
	<Latest {data} />
</section>
</Layout>