//Menu data structure
//PerScholas W4D2 DOM Lab: SEI Rocks
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
  // 
  const subMenuEl = document.getElementById('sub-menu'); // subLinks lines: 5,10,15

  subMenuEl.style.height = '100%';

  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

  subMenuEl.classList.add('flex-around');

  subMenuEl.style.position = "absolute";

  subMenuEl.style.top = "0";

// 5.1
  const topMenuLinks = document.querySelectorAll('top-menu-links a');

  let showingSubMenu = false;

// 5.2

  topMenuEl.addEventListener('click', function(ev) {
    ev.preventDefault();

    const link = ev.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);

//5.3

    if (link.classList.contains('active')) {
      link.classList.remove('active');
      //showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
    } 

//5.4

    topMenuLinks.forEach(function(link){
      link.classList.remove('active');
    });

// 5.5

    link.classList.add('active');
   

//5.6

    const linkData = menuLinks.find(function(linkObj){
      return linkObj.text === link.textContent;
    });
 
//5.7

    showingSubMenu = 'subLinks' in linkData;

    
    if(showingSubMenu){
      let sublinks = linkData.subLinks;
      buildSubMenu(sublinks);
      subMenuEl.style.top = '100%';  
    } else {
      subMenuEl.style.top = '0';
      mainEl.innerHTML = `<h1>${link.textContent}</h1>`; //6.4
    }
//5.8

  });
  //Code the buildSubMenufunction so that it:
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = ''; //Clears the contents of subMenuEl with empty quotations
    subLinks.forEach(function(link){  //Iterates over the subLinks array passed as an argument; and for each "link" object:
      const newLinkEl = document.createElement('a'); // Create an <a>element.
      //On the new element, add an href attribute('href') with value set to the href property of the "link" object (link.href) - line 117 
      newLinkEl.setAttribute('href', link.href)  //href attribute specifies the URL of the page the link goes to; see lines: 4,5,6,8, etc
      newLinkEl.textContent = link.text //Set the new element's content to the value of the textproperty of the "link" object.
      subMenuEl.appendChild(newLinkEl) //Append the new element to the subMenuElelement.
      });
  }
//6.0

subMenuEl.addEventListener('click', function(ev){
  ev.preventDefault();
  const link = ev.target;
  if (link.tagName != 'A') return;
  console.log(link.textContent);

//6.1

  showingSubMenu = false;
  subMenuEl.style.top = '0';

//6.2

  topMenuLinks.forEach(function(link){
    link.classList.remove('active');
  });

//6.3

  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});

//6.4 see line 105



