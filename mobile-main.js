let navbar = document.getElementById('navbar')
let logoImage = '1234.jpg'
let mainImage = 'tron-hot.jpg'
let ndImage = '2nd-hot.jpg'
let rdImage = '3rd-hot.jpg'

let filters = [' &times; AI &times; ',' &times; ART &times; ',' &times; BIOTECH &times; ',' &times; BUSINESS &times; ',' &times; CLOTHING &times; ',' &times; COMMUNICATION &times; ',' &times; CONSTRUCTION &times; ',' &times; GADGETS &times; ',' &times; HOME &times; ',' &times; PRIVACY &times; ',' &times; PRODUCTION &times; ',' &times; ROBOTS &times; ',' &times; SOCIETY &times; ',' &times; TRANSPORT &times; ',' &times; WORK &times; ']

let whatsNewPosts = {
    bmw: {
        title: 'BMW Concept',
        year: '2030',
        city: 'Munchen',
        author: 'Bayerische Motoren Werke AG'
    },
    newWorld: {
        title: 'New World Concept',
        year: '2050',
        city: 'New York',
        author: 'Charles Kyivanov'
    },
    kawasaki: {
        title: 'Kawasaki Terra',
        year: '2025',
        city: 'Geneva',
        author: 'Kawasaki Heavy Industries'
    },
    research: {
        title: 'Hydrogen Engine',
        year: '2030',
        city: 'Chicago',
        author: 'SMVIC'
    },
    electric: {
        title: 'Electric Bike Technology Advancement',
        year: '2030',
        city: 'Paris',
        author: 'Boldura Deian'
    }
}

let userList = [
    {
        userImage: 'waterman.jpg',
        userName: 'true waterman',
        userLikes: 3241
    },
    {
        userImage: 'kiyvanov.jpg',
        userName: 'Charles Kyivanov',
        userLikes: 8565
    },
    {
        userImage: 'deian.jpg',
        userName: 'boldura deian',
        userLikes: 1008
    },
    {
        userImage: 'felipe.jpg',
        userName: 'felipe pulecio',
        userLikes: 2185
    },
    {
        userImage: 'chris.jpg',
        userName: 'chris jones',
        userLikes: 98
    },

]



let posts = [
    {
        year: '2050',
        city: 'SHANGHAI',
        title: '2050 Revolution',
        author: 'FELIPE PULECIO'
    },
    {
        year: '2030',
        city: 'BANGALORE',
        title: 'Major engine advancement',
        author: 'chris jones'
    },
    {
        year: '2050',
        city: 'RABAT',
        title: 'Electronic monarchy',
        author: 'earthman'
    },
    {
        year: '2050',
        city: 'TOKYO',
        title: 'New ways of public transport',
        author: 'Deian'
    },
    {
        year: '2050',
        city: 'TOKYO',
        title: 'New ways of public transport',
        author: 'Deian'
    },
    {
        year: '2050',
        city: 'RABAT',
        title: 'Electronic monarchy',
        author: 'earthman'
    },
    {
        year: '2030',
        city: 'BANGALORE',
        title: 'Major engine advancement',
        author: 'chris jones'
    },
    {
        year: '2050',
        city: 'SHANGHAI',
        title: '2050 Revolution',
        author: 'FELIPE PULECIO'
    },
    {
        year: '2050',
        city: 'SHANGHAI',
        title: '2050 Revolution',
        author: 'FELIPE PULECIO'
    },
    {
        year: '2030',
        city: 'BANGALORE',
        title: 'Major engine advancement',
        author: 'chris jones'
    },
    {
        year: '2050',
        city: 'RABAT',
        title: 'Electronic monarchy',
        author: 'earthman'
    },
    {
        year: '2050',
        city: 'TOKYO',
        title: 'New ways of public transport',
        author: 'Deian'
    },
    {
        year: '2050',
        city: 'TOKYO',
        title: 'New ways of public transport',
        author: 'Deian'
    },
    {
        year: '2050',
        city: 'RABAT',
        title: 'Electronic monarchy',
        author: 'earthman'
    },
    {
        year: '2030',
        city: 'BANGALORE',
        title: 'Major engine advancement',
        author: 'chris jones'
    },
    {
        year: '2050',
        city: 'SHANGHAI',
        title: '2050 Revolution',
        author: 'FELIPE PULECIO'
    },

]


function constructHeader () {
    navbar.innerHTML += '<div class="logo">' +
        '<div class="author">by deian</div>' +
        '</div>' + '<div class="open-nav" onclick="openNav()">&#9776;</div>' +
        '<div class="links">\n' +
        '<div class="routes">' +
        '<div class="route">' +
        'ART</div>' +
        '<div class="route">PREDICTIONS' +
        '</div>' +
        '<div class="route">FEEDBACK' +
        '</div>' +
        '<div class="route">ABOUT' +
        '</div> <div class="route">SEARCH</div>' +
        '<div class="route"><div class="english language">EN</div> <div class="russian language">RU</div></div>' +
        '</div>\n' +
        '<button class="sign-in">SIGN IN</button>' +
        `<div class="close-nav" onclick="closeNav()">&times;</div>` +
        '</div>'


    let logo = document.querySelectorAll('.logo')[0]
    console.log(logo)
    logo.innerHTML += `<img id="imageLogo" alt="logo" src="${logoImage}"/>`

}

function constructMain() {
    let main = document.getElementsByTagName('main')[0]
    console.log(main)
    main.innerHTML =
        `<section id="section1">
        <div id="whats-hot">
        <div id="whats-hot-header">
        <svg aria-hidden="true" id="flame" width="14" height="22" focusable="false" data-prefix="fas" data-icon="fire" class="svg-inline--fa fa-fire fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path></svg>
        WHAT'S HOT</div>
        <div id="whats-hot-images"><div id="first-image"><img id="main-image" alt="image" src="${mainImage}"/>
        <div class="text-on-image">
        <h3 style="margin-left: 16px; color: #00ffa7;">${whatsNewPosts.bmw.year} &times; ${whatsNewPosts.bmw.city}</h3>
        <h2 style="margin-left: 16px; color: white; ">${whatsNewPosts.bmw.title}</h2>
        <h4 style="margin-left: 16px; color: lightgray;">${whatsNewPosts.bmw.author}</h4>
        </div>
        </div>
        <div id="second-image">
        <img id="nd-image" alt="image" src="${ndImage}"/>
        <div class="text-on-image">
        <h3 style="margin-left: 16px; color: #00ffa7;">${whatsNewPosts.newWorld.year} &times; ${whatsNewPosts.newWorld.city}</h3>
        <h2 style="margin-left: 16px; color: white;">${whatsNewPosts.newWorld.title}</h2>
        <h4 style="margin-left: 16px; color: lightgray;">${whatsNewPosts.newWorld.author}</h4>
        </div>
        </div>
        <div id="third-image"> 
        <img id="rd-image" alt="image" src="${rdImage}"/>
        <div class="text-on-image">
        <h3 style="margin-left: 16px; color: #00ffa7;">${whatsNewPosts.kawasaki.year} &times; ${whatsNewPosts.kawasaki.city}</h3>
        <h2 style="margin-left: 16px; color: white;">${whatsNewPosts.kawasaki.title}</h2>
        <h4 style="margin-left: 16px; color: lightgray;">${whatsNewPosts.kawasaki.author}</h4>
        </div>
        </div>
        </div>
        </div>
        <div id="whats-new">
        <div id="whats-new-header">WHAT'S NEW</div>
        </div>
        </section>
        <section id="section2">
        <div class="poster-container"><div class="poster-inner"><h1 class="icon-title"">Stay safe, wear equipment</h1><h3 class="icon-subtitle">Ride safe, it's totally worth it.</h3></div><div class="icon-container"><img src="helmet-icon.jpg" alt="icon" class="icon"></div>
        </div>
        <div class="section2-header">BEST OF</div>
        <div id="posts-filter"><select name="filter" id="select-filter"><option value="AI"> &times; AI &times; </option></select></div>
        <div id="posts"></div>
        </section>
        <section id="section3"><div id="slider-container">
        <div class="slider-inner">
        <div class="slider-header"> OUR FUTUROLOGISTS </div>
        <div id="user-list">
        </div>
        <div class="watch-link">WATCH ALL <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></div>
        </div>
        </div>
        </section>`
    let select = document.getElementById('select-filter')
    for (let i = 1; i < filters.length; i++) {
        let option = document.createElement('option')
        option.value = filters[i]
        option.innerHTML = filters[i]
        select.appendChild(option)
        console.log(select)
    }
    let whatsNew = document.getElementById('whats-new')
    for (const key in whatsNewPosts) {
        console.log(whatsNewPosts[key].title)
        whatsNew.innerHTML +=  `<div class="whats-new-post"><div class="whats-new-city-year"><div class="whats-new-year">${whatsNewPosts[key].year}</div><div class="whats-new-city"> &times; ${whatsNewPosts[key].city}</div></div>
        <div class="whats-new-title">${whatsNewPosts[key].title}</div><div class="whats-new-author">${whatsNewPosts[key].author}</div></div>`
    }

    let postsTag = document.getElementById('posts')
    for (let i = 0; i < posts.length; i++) {
        postsTag.innerHTML += `<div class="post"><div class="post-year-city">${posts[i].year} &times; ${posts[i].city}</div>
        <div class="post-title">${posts[i].title}</div>
        <div class="post-author">${posts[i].author}</div></div>`
    }

    let userListDOM = document.getElementById('user-list')
    for (let i = 0; i < userList.length; i++) {
        userListDOM.innerHTML += `<div class="user">
        <div class="user-image"><img class="user-image-image" src="${userList[i].userImage}" alt="user"></div>
        <div class="user-name">${userList[i].userName}</div>
        <div class="user-likes"><svg class="heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>${userList[i].userLikes.toString()}</div>
        </div>`
    }

    let footer = document.getElementsByTagName('footer')[0]
    footer.innerHTML += '<div class="footer-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z"/></svg>Ametras 2022</div><div class="footer-policy">Privacy Policy</div>'
}

history.scrollRestoration = "manual"

constructHeader()
constructMain()


function openNav() {
    console.log('open')
    document.querySelector('.links').style.width = '60%'
    document.querySelector('.close-nav').style.display = 'block'
    document.querySelector('.logo').style.opacity = '0.2'
    document.querySelector('.close-nav').style.zIndex = '1'
    document.querySelector('.links').style.opacity = '1'
    document.querySelector('.links').style.display = 'flex'
    document.getElementsByTagName('main')[0].style.opacity = '0.2'
    document.getElementsByTagName('footer')[0].style.opacity = '0.2'
    document.querySelector('.open-nav').style.display = 'none'
}

function closeNav() {
    document.querySelector('.links').style.width = '0'
    document.querySelector('.close-nav').style.display = 'none'
    document.querySelector('.links').style.opacity = '0'
    document.getElementsByTagName('main')[0].style.opacity = '1'
    document.getElementsByTagName('footer')[0].style.opacity = '1'
    document.querySelector('.logo').style.opacity = '1'
    document.querySelector('.open-nav').style.display = 'block'

}


function elementInViewport(element) {
    let bound = element.getBoundingClientRect()
        return (
            bound.top >= 0 && bound.left >= 0 && bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bound.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }


let image = document.getElementById('nd-image')

console.log(elementInViewport(image))
