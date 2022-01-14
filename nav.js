const navber = () => {
    let nav = document.querySelector('.container');
    nav.innerHTML =`
    <ul>
    <li id="fst"  class="n-li"><a href="/Portofolio/inbox.html"><i class="fas fa-home n-logo"></i><span class="n-text">home</span></a></li>

    <li id="snd" class="n-li"><a href="/Portofolio/about.html"><i class="fas fa-user n-logo"></i><span class="n-text">about</span></a></li>

    <li id="trd" class="n-li"><a href="/Portofolio/portfolio.html"><i class="fas fa-envelope n-logo"></i><span class="n-text">Portfolio</span></a></li>

    <li id="fth" class="n-li"><a href="/Portofolio/blog.html"><i class="fas fa-blog n-logo"></i><span class="n-text">blogs</span></a></li>

    <li id="fith" class="n-li"><a href="/Portofolio/contact.html"><i class="far fa-comment-alt n-logo"></i><span class="n-text">contact</span></a></li>
   
</ul>

     `


}

navber()