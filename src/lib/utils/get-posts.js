
export async function getPosts() {
	let posts = []

	const paths = import.meta.glob('$lib/content/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata
			const post = { ...metadata, slug }
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    	new Date(second.date).getTime() - new Date(first.date).getTime()
	)
	
	return posts
}