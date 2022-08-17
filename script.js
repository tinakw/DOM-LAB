//Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
]; 
  const mainEl = document.querySelector('main');
  
  mainEl.style.backgroundColor = 'var(--main-bg)'
  
  mainEl.innerHTML = '<h1>SEI ROCKS</h1>'
  
  mainEl.classList.add('flex-ctr');
  
  const topMenuEl = document.getElementById('top-menu');
  
  topMenuEl.style.height = '100%';
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  
  topMenuEl.classList.add('flex-around');
  
  for (link of menuLinks) {
    let newAnchor = document.createElement('a')
    newAnchor.setAttribute('href', link.href)
    newAnchor.textContent = link.text
    topMenuEl.appendChild(newAnchor)
  }
  // 5.1
  const subMenuEl = document.getElementById('sub-menu');

  subMenuEl.style.height = '100%';

  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

  subMenuEl.classList.add('flex-around');

  subMenuEl.style.position = "absolute";

  subMenuEl.style.top = "0";

  const topMenuLinks = document.querySelectorAll('top-menu-links a');
  // 5.1
  const showingSubMenu = false;
// 5.2
  topMenuEl.addEventListener('click', function(ev) {
    ev.preventDefault();
    const link = ev.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
//5.3
    if (link.classList.contains('active')) {
      link.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;

    } 
    //5.4
    topMenuLinks.forEach(function(link){
      link.classList.remove('active');
    });
    // 5.5
    link.classList.add('active');

    const linkData = menuLinks.find(function(linkObj){
      return linkObj.text === link.textContent;
    });
    //5.6***
     showingSubMenu = 'subLinks' in linkData;

    if (!showingSubMenu) mainEl.innerHTML = 
    `<h1>${link.textContent}</h1>`;

    if (showingSubMenu) {
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
    }
  });
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link){
      const newLinkEl = document.createElement('a');
      newLinkEl.setAttribute('href', link.href)
      newLinkEl.textContent = link.text
      subMenuEl.appendChild(newLinkEl)
      });
  }
  
subMenuEl.addEventListener('click', function(ev){
  ev.preventDefault();
  const link = ev.target;
  if (link.tagName != 'A') return;
  console.log(link.textContent);

  showingSubMenu = false;
  subMenuEl.style.top = '0';

  topMenuLinks.forEach(function(link){
    link.classList.remove('active');
  });
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});

