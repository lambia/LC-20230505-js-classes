class Product {
	/**
	 * Commento JSDoc che spiega cosa fa la classe Product
     * 
	 * @param {number} id Un intero univoco incrementale
	 * @param {string} nome Il nome del prodotto
	 * @param {number} prezzo Un intero che rappresenta il costo
	 * @param {string} img E' il percorso dell'immagine
	 */
	constructor(id, nome, prezzo, img) {
		this.id = id;
		this.name = nome;
		this.price = parseInt(prezzo);
		this.image = img;

        if( isNaN(this.price) ) {
            this.price = 0;
        }
	}
}