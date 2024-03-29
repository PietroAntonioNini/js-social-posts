//PROGRAMMA SOCIAL POST

//array dei post con il like
const likedPosts = [];

//array del contenuto dei post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "02-09-2024"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2023"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": ""
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03-05-2022"
    }
];

//seleziono l'elemento in cui inserire i post
const postContainer = document.getElementById("container");

//itero attraverso ciascun post nell'array
posts.slice().forEach(post => {

    //creo un elemento post
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    //ottiengo le iniziali dell'utente per l'elemento di fallback
    const initials = post.author.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    //creo l'HTML per il singolo post
    postElement.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${post.author.image ? `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">` : `<div class="profile-fallback">${initials}</div>`}                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${timeAgo(post.created)}</div>
                </div>                    
            </div>
        </div>

        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="${post.author.name}">
        </div>
        
        <div class="post__footer">
            <div class="likes js-likes">
                <div id="like-button-${post.id}" class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span id="color-text-${post.id}" class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>              
    `;

    //aggiungo l'elemento di post al contenitore dei post
    postContainer.appendChild(postElement);

    //aggiungo un ascoltatore al tasto mi piace di tutti i post
    const likeButtonElement = document.querySelectorAll(`#like-button-${post.id}`);

    likeButtonElement.forEach(function(button) {

        button.addEventListener('click', function(event) {
            
            //prevengo il comportamento dell'ancor(ricarica la pagina)
            event.preventDefault();
            
            //verifico se il pulsante è già stato cliccato
            const isLiked = button.classList.contains("liked");
            const postId = post.id;

            if (isLiked) {

                //rimuovi il "Mi Piace"
                button.classList.remove("liked");

                //decremento il contatore dei "Mi Piace"
                const likeCounter = document.querySelector(`#like-counter-${post.id}`);
                likeCounter.innerText = parseInt(likeCounter.innerText) - 1;

                document.querySelector(`#color-text-${post.id}`).classList.remove("red-text");

                //rimuovo l'ID del post dall'array se non presente
                const index = likedPosts.indexOf(postId);
                if (index > -1) {
                    likedPosts.splice(index, 1);
                }

            } else {

                //aggiungi il "Mi Piace"
                button.classList.add("liked");

                //incremento il contatore dei "Mi Piace"
                const likeCounter = document.querySelector(`#like-counter-${post.id}`);
                likeCounter.innerText = parseInt(likeCounter.innerText) + 1;

                document.querySelector(`#color-text-${post.id}`).classList.add("red-text");

                //aggiungo l'ID del post all'array se non presente
                if (!likedPosts.includes(postId)) {
                    likedPosts.push(postId);
                }
            }

            console.log(likedPosts);
        });
    });
});

//funzione per calcolare il tempo trascorso dalla pubblicazione del post
function timeAgo(postDate) {
    
    //data del post
    const date = new Date(postDate);
    //data odierna
    const now = new Date();

    //differenza in millisecondi tra le date del post e la data odierna
    const diffTime = Math.abs(now - date);

    //converto i millisecondi ottenuti dal diffTime in giorni
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    //calcolo la differenza in mesi, 30.44 è l'approssimazione dei giorni in un mese
    const diffMonths = Math.floor(diffDays / 30.44);
    
    //calcolo la differenza in anni
    const diffYears = Math.floor(diffMonths / 12);
    
    //stabilisco il testo da visualizzare in base alla differenza temporale
    let timeAgoText;

    if (diffYears > 0) {
        timeAgoText = `${diffYears} anno/i fa`;
    } else if (diffMonths > 0) {
        timeAgoText = `${diffMonths} mese/i fa`;
    } else {
        timeAgoText = `${diffDays} giorno/i fa`;
    }
    
    //risultato
    return timeAgoText;
}
