<script>
    import Header from './Header.svelte'
    import Menu from "./Menu.svelte"
    import Footer from "./Footer.svelte"
    import Ad from "./Ad.svelte"
    const {data, children} = $props()
</script>

<Header {data} />
<Menu {data} />
<Ad />
<img style='display:none;' src={data.thumb} alt='' />
{@render children(data)}
<Footer />
