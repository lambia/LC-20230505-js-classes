class Cart {
	/**
	 * Tiene conto di tutti i prodotti aggiunti, in un array
     * Permette di aggiungere/rimuovere prodotti e calcolare il totale
     * 
	 */
	constructor() {
		this.items = [];
        this.total = 0;
	}

    addItem(product) {
        this.items.push(product);
        this.total += product.price;
    }

    //Per calcolare il totale dei prodotti
    //Non più necessario, se teniamo aggiornata la prop "total"
    getTotalPrice() {
        let totale = 0;

        for (let i = 0; i < this.items.length; i++) {
            const product = this.items[i];
            totale += product.price;
        }

        return totale;
    }

    empty() {
        this.items = [];
        this.total = 0;
    }
}