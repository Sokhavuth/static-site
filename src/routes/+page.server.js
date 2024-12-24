import { getPosts } from '$lib/utils/get-posts';
import setup from '$lib/settings.js'

export async function load() {
	const posts = await getPosts()
	const count = await posts.length
	const settings = setup()
	const title = "ទំព័រដើម"

	return { posts, count, settings, title }
}