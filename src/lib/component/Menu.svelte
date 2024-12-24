<!--src/layouts/Menu.astro-->
<script>
let { data } = $props()
let isresponsive = $state(false)

let home = $state('')
let news = $state('')
let opinion = $state('')
let doc = $state('')
let sport = $state('')
let movie = $state('')
let travel = $state('')
let contact = $state('')
let about = $state('')
let game = $state('')

if(data.pageURL === '/'){
    home = 'active'
}else if(data.pageURL === 'news'){
    news = 'active'
}else if(data.pageURL === 'opinion'){
  opinion = 'active'
}else if(data.pageURL === 'doc'){
    doc = 'active'
}else if(data.pageURL === 'sport'){
    sport = 'active'
}else if(data.pageURL === 'movie'){
    movie = 'active'
}else if(data.pageURL === 'trvel'){
    travel = 'active'
}else if(data.pageURL === 'contact'){
    contact = 'active'
}else if(data.pageURL === 'about'){
    about = 'active'
}else if(data.pageURL === 'travel'){
    travel = 'active'
}else if(data.pageURL === 'game'){
    game = 'active'
}

function myFunction() {
  isresponsive = !isresponsive
}
</script>

<section class='menu'>
    <nav class="nav">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="region">
            <div data-sveltekit-reload class="topnav" class:responsive={isresponsive} id="myTopnav">
                <a href="/" class={`home ${home}`}>ទំព័រ​ដើម</a>
                <div class={`dropdown ${news}`}>
                  <button class={`dropbtn `}>ព័ត៌មាន
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="/national/1">ក្នុង​ប្រទេស</a>
                    <a href="/news/1">ក្រៅ​ប្រទេស</a>
                  </div>
                </div>
                <a href="/opinion/1" class={`opinion ${opinion}`}>មតិ​យោបល់</a>
                <a href="/doc/1" class={`doc ${doc}`}>ឯកសារ</a>
                <a href="/sport/1" class={`sport ${sport}`}>កីឡា</a>
                <div class={`dropdown ${movie}`}>
                  <button class={`dropbtn `}>ភាពយន្ត
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="/Khmer/1">រឿង​ខ្មែរ</a>
                    <a href="/Thai/1">រឿង​ថៃ</a>
                    <a href="/Chinese/1">រឿង​ចិន</a>
                    <a href="/Korean/1">រឿង​កូរ៉េ</a>
                    <a href="/world/1">​រឿង​បរទេស</a>
                    <a href="/movies/1">​ឥត​ព្រៀង​ទុក</a>
                  </div>
                </div>
                <a href="/travel/1" class={`travel ${travel}`}>ដើរ​លេង</a>
                <a href="/game/1" class={`game ${game}`}>ពិភព​និមិ្មត</a>
                <a href="/page/66b17b1e944f187d47506cda" class={`contact ${contact}`}>ទំនាក់ទំនង</a>
                <a href="/page/66b17b48944f187d47506cdc" class={`about ${about}`}>អំពីយើង​ខ្ញុំ</a>
                <a href="javascript:void(0);" class="icon" onclick={myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </nav>   
</section>

<style>
nav{
    background-color: var(--menu);
}
.topnav {
    background-color: var(--menu);
    overflow: hidden;
}
  .topnav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 9px 16px;
    text-decoration: none;
    font-size: 14px;
  }
  .topnav a:hover {
    background-color: var(--background-dark);
    color: white;
  }
  .topnav a.active, div.active {
    background-color: var(--background-dark);
    color: white;
  }
  .topnav .icon {
    display: none;
  }
  .dropdown {
    float: left;
    overflow: hidden;
  }
  .dropdown .dropbtn {
  font-size: 14px;
  border: none;
  outline: none;
  color: white;
  padding: 7px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 9px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: var(--background-dark);
  color: white;
}
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}
.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
    .topnav a:not(:first-child), .dropdown .dropbtn{
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
}
  
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>