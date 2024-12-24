import { error } from '@sveltejs/kit'
import { getPosts } from '$lib/utils/get-posts'
import setup from '$lib/settings';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export async function load({ params }) {
	try {
		const settings = setup()
		let post = await import(`$lib/content/posts/${params.slug}.md`)
		post = { ...post.metadata, content: post.default, slug: params.slug }
    	
		const Posts = await getPosts()
		const posts = Posts.filter((post) => !((post.categories.includes("news"))||(post.slug.includes(params.slug))))
		shuffle(posts)
		let randomPosts = posts.slice(0,6)
		
		const title = post.title

		return { post, settings, randomPosts, title }
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}

export async function entries() {
    const posts = await getPosts()
	const slugs = posts.map(post => ({slug: post.slug}))
	return slugs
}