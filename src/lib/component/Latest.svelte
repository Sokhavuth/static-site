<script>
    let { data } = $props()
    const featured = data.posts.slice(0, 3)
    const posts = data.posts.slice(3)
    function navigate(event){
        document.location=event.target.value
    }
</script>

<section class="latest">
    <div class="panel">
        {#each featured as post}
            <a href={`/post/${post.slug}`}>
                <img src={post.thumb} alt='' />
                {#if post.videos.length>0 }
                <img class="play-icon" src="/images/play.png" alt='' />
                {/if}
                <div class="title">{post.title}</div>
            </a>
        {/each}
    </div>
    <div class="posts">
        {#each posts as post}
            <div class="post">
                <a class="thumb" href="/post/{post.slug}">
                    <img src={post.thumb} alt='' />
                    {#if post.videos.length>0 }
                    <img class="play-icon" src="/images/play.png"alt=''/>
                    {/if}
                </a>
                <div class="title-date">
                    <a href="/post/{post.slug}" class="title">{post.title}</a>
                    <div>{(new Date(post.date)).toLocaleDateString("it-IT")}</div>
                </div>
            </div>
        {/each}
    </div>
    {#if data.pageNumber>=1 }
    <div class="pagination">
        <span>​​​​​​​​​​​​​​​​​​​​​ទំព័រ</span> 
        <select onchange={navigate}> 
        {#each [...Array(data.pageNumber).keys()] as page}
            {#if page+1 == parseInt(data.navPage) }
                <option selected>{page+1}</option>
            {:else}
                <option>{page+1}</option>
            {/if}            
        {/each}	
        </select> 
        <span>នៃ {data.pageNumber}</span>
    </div>
    {/if}
</section>

<style>
.latest .panel{
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    padding-top: 10px;
}
.latest .panel > a, .latest .posts > .post .thumb{
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    width: 100%;
}
.latest .panel > a img, .latest .posts > .post .thumb img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
}
.latest .panel > a .play-icon, .latest .posts > .post .thumb .play-icon{
    width: auto;
    min-height: auto;
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.latest .panel > a .title{
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    font: 16px/1.5 Oswald, Bayon;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    background: -webkit-linear-gradient(bottom, black,transparent);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.latest .posts{
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2 - 5px));
    grid-gap: 10px;
    padding: 10px 0 0;
}
.latest .posts > .post{
    background:  #dbf188;
    display: grid;
    grid-template-columns: repeat(2, 50%);
}
.latest .posts > .post .title-date{
    padding: 5px;
}
.latest .posts > .post .title-date .title{
    color: black;
}
.latest .pagination{
    text-align: center;
    padding: 20px 0 0;
}
.latest .pagination > span{
    padding: 0 5px;
}

@media only screen and (max-width: 600px){
    .latest .panel{
        grid-template-columns: 100%;
        padding: 10px 10px 0;
    }   
    .latest .posts{
        grid-template-columns: 100%;
        padding: 30px 10px 0;
    } 
}
</style>