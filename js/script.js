//PROGRAMMA SOCIAL POST

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
        "created": "09-03-2021"
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
        "created": "05-15-2021"
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
        "created": "03-05-2021"
    }
];

//seleziono l'elemento in cui inserire i post
const postContainer = document.getElementById("#container");

//itero attraverso ciascun post nell'array
posts.slice(1).forEach(post => {

    //creo un elemento post
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    console.log(postElement);
});




//aggiungo un ascoltatore al tasto mi piace di tutti i post
const likeButtonElement = document.querySelectorAll("#like-button");

likeButtonElement.forEach(function(button) {

    button.addEventListener('click', function() {
        
        //verifico se il pulsante è già stato cliccato
        const isLiked = button.classList.contains("liked");

        if (isLiked) {

            //rimuovi il "Mi Piace"
            button.classList.remove("liked");

            //decremento il contatore dei "Mi Piace"
            const likeCounter = document.querySelector(".js-likes-counter");
            likeCounter.innerText = parseInt(likeCounter.innerText) - 1;

            //il colore del testo del pulsante torna originale
            document.querySelector(".like-button__label").style.color = "black";
            
        } else {

            //aggiungi il "Mi Piace"
            button.classList.add("liked");

            //incremento il contatore dei "Mi Piace"
            const likeCounter = document.querySelector(".js-likes-counter");
            likeCounter.innerText = parseInt(likeCounter.innerText) + 1;

            //cambio il colore del testo del pulsante
            document.querySelector(".like-button__label").style.color = "red";
        }
        
    });
});
