<script>
	import Layout from "$lib/component/Layout.svelte";
	let { data } = $props()
</script>

<Layout {data}>
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="post/{post.slug}" class="title">{post.title}</a>
				<p class="date">{(new Date(post.date)).toLocaleDateString('it-IT')}</p>
			</li>
		{/each}
	</ul>
</section>
</Layout>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);

		.post {
			max-inline-size: var(--size-content-3);

			&:not(:last-child) {
				border-bottom: 1px solid var(--border);
				padding-bottom: var(--size-7);
			}

			.title {
				font-size: var(--font-size-fluid-3);
				text-transform: capitalize;
			}

			.date {
				color: var(--text-2);
			}
		}
	}
</style>