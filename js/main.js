const carrello = new Cart();

const prodotti = [
	new Product(1, "Mocassino da barca", 60, "img/mocassino.jpg"),
	new Product(2, "Scarpa Nike", 80, "img/scarpa-nike.jpg"),
	new Product(3, "Scarpa Bershka", 30, "img/bershka.jpg"),
	new Product(4, "Pier One", 49, "img/pier-one.jpg"),
	new Product(5, "Vans", 56, "img/vans.jpg"),
	new Product(6, "Scarpa puma", 70, "img/scarpa-puma.jpg"),
];
console.log(prodotti);

//Per ogni prodotto, crea un bottone
for (let i = 0; i < prodotti.length; i++) {
    const prodotto = prodotti[i];

    document.getElementById("prodotti").innerHTML += `<button class="addToCartBtn">Aggiungi ${prodotto.name}</button>`;
}

//Per ogni bottone, aggiungi il relativo evento
const bottoni = document.getElementsByClassName("addToCartBtn");

for (let i = 0; i < bottoni.length; i++) {
    const bottone = bottoni[i];

    bottone.addEventListener("click", function() {
        //Recupera e logga il prodotto corrente
        const prodottoCliccato = prodotti[i];
        console.log("Prodotto cliccato: ", prodottoCliccato );
        
        //Lo aggiunge al carrello
        carrello.addItem( prodottoCliccato );

        //Calcola e scrive il totale in pagina
        const totale = carrello.getTotalPrice();
        const testoCarrello = `Totale: ${totale} €`;
        writeTextById("carrelloTotale", testoCarrello);
    });
}

//Il pulsante svuota carrello... svuota il carrello
const emptyCartBtn = document.getElementById("emptyCartBtn");

emptyCartBtn.addEventListener("click", function() {
    carrello.empty();
    
    //Calcola e scrive il totale in pagina
    const totale = carrello.getTotalPrice();
    const testoCarrello = `Totale: ${totale} €`;
    writeTextById("carrelloTotale", testoCarrello);
});

//Funzione helper che scrive l'innertext di un dato elemento (by id)
function writeTextById(idElemento, content) {
    document.getElementById(idElemento).innerText = content;
}

function doSomething(idElemento, content) {
    document.querySelector(idElemento).innerText = content;
}