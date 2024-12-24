<script>    
    import Layout from "$lib/component/Layout.svelte"
    import Video from "$lib/component/Video.svelte"
    let { data } = $props()
    
    const Categories = {
        news: 'ព័ត៌មាន',
        national: 'ក្នុង​ប្រទេស',
        global: "ក្រៅ​ប្រទេស",
        opinion: "មតិយោបល់",
        doc: "ឯកសារ",
        sport: "កីឡា",
        movie: 'ភាពយន្ត',
        Khmer: 'រឿងខ្មែរ',
        Thai: 'រឿងថៃ',
        Chinese: 'រឿងចិន',
        Korean: 'រឿងកូរ៉េ',
        world: 'រឿង​​បរទេស',
        travel: 'ដើរ​លេង',
        game: 'ពិភព​និម្មិត',
    }

    let categories = $state(data.post.categories.map((category)=>Categories[category]))
</script>

<Layout {data}>
<section class="Post region">
    <div class="main">
        <h3 class="title">{data.post.title}</h3>
        <div class="categories">
            <span>​​​​​​​​​ជំពូកៈ {categories.toString().replace(',', ', ')}</span>
            <span>{(new Date(data.post.date)).toLocaleDateString('it-IT')}</span>
        </div>
        <div class="author">
            <span>​​​​​​​​​​ចុះ​ផ្សាយ​ដោយៈ {data.post.author}</span>
        </div>
        {#if data.post.videos.length > 0}
            <Video {data} />
        {/if}
        <div class="content">
            <data.post.content />
        </div>
        <div class='post-bottom'>
            <div class="social-media">
                <span class="fb-share-button" data-href={`https://khmerweb-news.netlify.app/post/${data.post.slug}`} data-layout="" data-size=""><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://khmerweb-news.netlify.app/post/${data.post.slug}%2F&amp;src=sdkpreparse`} class="fb-xfbml-parse-ignore">Share</a></span>
            </div>
        </div>
        <div class="fb-comments" data-href={`https://khmerweb-news.netlify.app/post/${data.post.slug}`} data-width="100%" data-numposts="5"></div>
    </div>
    <div class="sidebar">
        {#each data.randomPosts as post}
            <a  href="/post/{post.slug}">
                <img src={post.thumb} alt=''/>
                {#if post.videos.length>0}
                <img class="play-icon" src="/images/play.png" alt=''/>
                {/if}
                <div class="title">{post.title}</div>
            </a>
        {/each}
    </div>

</section>
</Layout>

<style>
.Post{
    margin-top: 15px;
    display: grid;
    grid-template-columns: 70% auto;
    grid-gap: 15px;
    padding-bottom: 30px;
}
.Post .main{
    background-color: #e2f3a6;
    color: rgb(22, 22, 22);
    padding: 15px;
}
.Post .main .title{
    font: 18px/1.5 Oswald, Koulen;
    margin-bottom: 20px;
}
.Post .main .categories span:nth-child(2){
    float: right;
}
.Post .main .author{
    padding-bottom: 0px;
}
.Post .main .content{
    margin: 20px 0;
    font: 14px/1.5 Courgette, Nokora;
}
:global(.Post .main .content img){
    width: 100%;
}
.Post .sidebar a{
    display: block;
    color: white;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    margin-bottom: 15px;
}
.Post .sidebar a:last-child{
    margin-bottom: 0;
}
.Post .sidebar a img{
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
}
.Post .sidebar a .play-icon{
    width: auto;
    min-height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 15%;
}
.Post .sidebar a .title{
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    font: 16px/1.5 Oswald, Bayon;
    text-shadow: 2px 2px 4px #000000;
    background: -webkit-linear-gradient(bottom, black,transparent);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.Post .main .post-bottom{
    display: grid;
    grid-template-columns: auto auto;
}
.Post .main .post-bottom .edit{
    text-align: right; 
}
.Post .main .post-bottom .edit img{
    width: 30px;
}
.Post .main .social-media{
    width: 50px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
    align-items: center;
}

@media only screen and (max-width:600px){
    .Post{
        grid-template-columns: 100%;
    }
    .Post .sidebar{
        padding: 0 15px;
    }
}
</style>