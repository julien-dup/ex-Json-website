fetch("assets/json/movies.json")
    .then(response => response.json())
    //les 2 lignes du dessus serve à appelet notre fichier Json
    .then(function (data) {
       
        data.results.forEach(element => {

            // ici switch
            let julien = element.vote_average

            let content = document.getElementById('content')
            // le magic quote ligne 13-26 permet de creer tous le contenu défini
            //le += permet d'ajouter les crétaion sans les écraser 
            main.innerHTML += `
               <div class="boxcontent" id="content">
                    <div class="img" >
                    <img src="${element.poster_path}"class="test" width="100%" height="100%">
                    </div>
                    <div class="column" >
                        <div class="titre" >${element.original_title}</div>
                        <div class="texte">${element.overview}</div>
                        <div class="rate ${julien}">
                            <div class="conteneurEtoile">${element.vote_average}  </div>
                            <div class="noteInteger">${element.vote_average}</div>
                        </div> 
                    </div>
                </div>`
        })
    })
    .then(function () {
        let nbEtoiles
        let stars = document.querySelectorAll(".conteneurEtoile")

        stars.forEach(element => {
            nbEtoiles = Math.round((element.innerHTML) / 2)
            element.innerHTML=""
            console.log(nbEtoiles)
            switch (nbEtoiles) {
                case 1:
                    element.className = "etoile1"
                    break
                case 2:
                    element.className = "etoile2"
                    break
                case 3:
                    element.className = "etoile3"
                    break
                case 4:
                    element.className = "etoile4"
                    break
                case 5:
                    element.className = "etoile5"
                    break
            }
        })
    })