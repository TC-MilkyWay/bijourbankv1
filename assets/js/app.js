console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function() {
    $(document).foundation();
});

/*class operation {
    constructor(operator, titre, desc, montant) {
        this.operator = operator;
        this.titre = titre;
        this.desc = desc;
        this.montant = montant;
    }
}*/


/*recuperer les données du formulaire*/



/*bouton credit et debit*/

document.getElementById("btncredit")
    .addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else this.classList.add("active");
    });

document.getElementById("btndebit")
    .addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else this.classList.add("active");
    });

/*affichage menu debit credit */
btncredit.addEventListener("click", () => {
    document.getElementById("operationcredit").style.display = block;
    document.getElementById("operationdebit").style.display = none;
});
btndebit.addEventListener("click", () => {
    document.getElementById("operationdebit").style.display = block;
    document.getElementById("operationcredit").style.display = none;
});

// DISPLAY DES ONGLET AU CLIC//

const debcache = document.getElementsByClassName("debit");
const crecache = document.getElementsByClassName("credit");
const tout = document.querySelector("#btntout");

const debit = document.querySelector("#btndebit")

debit.addEventListener("click", function() {
    for (let i = 0; i < crecache.length; i++) {
        crecache[i].style.display = "none";
    }
    for (let i = 0; i < debcache.length; i++) {
        debcache[i].style.display = "block"
    }
    debit.setAttribute("class", "active") // changement class active//
    tout.setAttribute("class", "inactive")
    credit.setAttribute("class", "inactive")
})

const credit = document.querySelector("#btncredit")

credit.addEventListener("click", function() {
    for (let i = 0; i < debcache.length; i++) {
        debcache[i].style.display = "none";
    }
    for (let i = 0; i < crecache.length; i++) {
        crecache[i].style.display = "block"
    }
    credit.setAttribute("class", "active") // changement class active//
    tout.setAttribute("class", "inactive")
    debit.setAttribute("class", "inactive")
})

tout.addEventListener("click", function() {
    for (let i = 0; i < debcache.length; i++) {
        debcache[i].style.display = "block";
    }
    for (let i = 0; i < crecache.length; i++) {
        crecache[i].style.display = "block"
    }
    tout.setAttribute("class", "active") // changement class active//
    credit.setAttribute("class", "inactive")
    debit.setAttribute("class", "inactive")
})


/*const operations = [];      essaie tableau

const operation = {
    operator: operator = document.querySelector("#operator").value,
    titre: titre = document.querySelector("#titre").value,
    descr: descr = document.querySelector("#desc").value,
    montant: montant = document.querySelector("#montant").value
}

operations.push(operation)*/

const form = document.querySelector("#operationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let hideform = document.querySelector(".reveal-overlay");
    hideform.style.display = " none"; /*fermer le formulmaire*/

    const titre = document.querySelector("#titre").value;
    const operator = document.querySelector("#operator").value
    const desc = document.querySelector("#desc").value
    const montant = document.querySelector("#montant").value


    console.log(operator); /*affiche avec la console*/
    console.log(titre);
    console.log(desc);
    console.log(montant);

    /*ajout des donnees du formulaire dans html*/

    const results = document.querySelector("#results")

    let img = document.querySelector("img").src
        /*image selon operation*/
    if (operator === "credit") {
        img = "./assets/images/sac-dargent.png";
    } else {
        img = "./assets/images/depenses.png";

    }


    /* if (operator == "credit") {
         operator.push(parseInt(montant));
         console.log(operator);
         sumArray();*/
    results.innerHTML += `
<div class="operation ${operator}">
          <div class="grid-x grid-padding-x align-middle">
            <div class="cell shrink">
              <div class="picto">
                <img id="image" src= ${img} />
              </div>
            </div>
            <div class="cell auto">
              <div>
                <h2>${titre}</h2>
                <small>${desc} </small>
              </div>
            </div>
            <div class="cell small-3 text-right">
              <div>
                <p class="count">${montant}€</p>
                <small>%</small>
              </div>
            </div>
          </div>
        </div>
        `
        /* } else {
        operator.push(parseInt(-montant));
        console.log(operator);
        sumArray();
        results.innerHTML += `
<div class="operation ${operator}">
          <div class="grid-x grid-padding-x align-middle">
            <div class="cell shrink">
              <div class="picto">
                <img id="image" src= ${img} />
              </div>
            </div>
            <div class="cell auto">
              <div>
                <h2>${titre}</h2>
                <small>${desc} </small>
              </div>
            </div>
            <div class="cell small-3 text-right">
              <div>
                <p class="count">${montant}€</p>
                <small>%</small>
              </div>
            </div>
          </div>
        </div>
        `;*/


    let solde = document.querySelector(solde)
    solde = results.count.innertext


    /*let soldeArray = []; //liste pour conserver les valeurs du solde
    function sumArray() {
        let solde = 0;

        for (let i = 0; i < operaton.length; i++) {
            solde += operator[i];
        }
        console.log(solde);

    };*/




    form.reset(); // Reset les champs du formulaire
    return false; // Evite le refresh de la page 

});




/*function solde() {
    document.getElementById("solde").value = document.getElementById("solde").value + document.querySelector("#montant").value;
}

console.log(function solde() {
        document.getElementById("solde").value = document.getElementById("solde").value + document.querySelector("#montant").value;
    }

);

/*document.querySelector('#solde').innerHTML = ``*/
/*let solde = document.querySelector("solde")
solde = results.count.innertext*/
/*let soldeArray = [];

function sumArray() {
    let solde = 0;
    for (let i = 0; i < comptetotal.length; i++) {
        solde += comptetotal[i];
    }
    console.log(solde);
}

/*pour afficher message sous le solde*/

/*let good = document.getElementById("good");
let bad = document.getElementById("bad");
let verybad = document.getElementById("verybad");

if (comptetotal >= 300) {
    good.style.display = "block";
    bad.style.display = "none";
    verybad.style.display = "none";

} else if (comptetotal < 300) {
    good.style.display = "none";
    bad.style.display = "block";
    verybad.style.display = "none";

} else(comptetotal < 0)
good.style.display = "none";
bad.style.display = "none";
verybad.style.display = "block";
});*/