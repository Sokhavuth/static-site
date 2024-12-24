import { error } from '@sveltejs/kit'
import { getPosts } from '$lib/utils/get-posts';

export async function load({ params }) {
	try {
		const post = await import(`$lib/content/posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}

export async function entries() {
    const posts = await getPosts()
	const slugs = posts.map(post => ({slug:post.slug}))
	return slugs
}