import { getPosts } from '$lib/utils/get-posts';
import setup from '$lib/settings.js'

export async function load() {
	const posts = await getPosts()
	const count = await posts.length
	const settings = setup()
	const pageNumber = Math.ceil(count/settings.frontend)
	const title = "ទំព័រដើម"
	const pageURL = '/'

	return { posts, count, settings, pageNumber, title, pageURL }
}