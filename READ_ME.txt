Relazione Progetto: NOCTIS | Dark Gothic Fashion
Il progetto consiste in una piattaforma e-commerce per un brand di moda gotica e vittoriana. L'obiettivo è creare un'esperienza utente immersiva, utilizzando un design coerente con l'estetica "dark" e funzionalità interattive

1. HTML (La Struttura)
Il sito è suddiviso in due pagine principali:

index.html: È la landing page principale. Include una sezione Hero con video/immagini d'impatto, una griglia per le categorie di prodotto (Women, Men, Accessories) e le sezioni dinamiche per lo shop.

contacts.html: Una pagina dedicata al supporto clienti con un form di contatto e informazioni aziendali, mantenendo lo stesso header e footer della home per coerenza.

Componenti Semantici: Ho utilizzato tag semantici come <nav>, <section>, <header>, <footer> e <article> per migliorare l'accessibilità e la SEO del sito.

2. Design e Styling: CSS & SCSS
Per lo stile, ho adottato un approccio moderno utilizzando SCSS (Sass) per poi compilarlo in CSS.

Variabili e Mixins: In style.scss ho definito variabili per i colori (es: $crimson per il rosso sangue, $deep-black per lo sfondo) e mixins per riutilizzare blocchi di codice come il centraggio dei contenuti o lo stile dei bottoni.

Design Responsivo: Il sito è completamente responsive. Grazie all'uso di Flexbox, CSS Grid e Media Queries, l'interfaccia si adatta perfettamente a desktop, tablet e smartphone.

Animazioni: Ho inserito animazioni personalizzate (es. fadeInUp) e un cursore personalizzato per rendere l'interfaccia più dinamica e a tema.

Canvas Animati: Sono presenti due elementi <canvas> (batCanvas e spiderCanvas) che vengono gestiti tramite JavaScript per creare effetti di movimento (pipistrelli e ragni) in sottofondo.

3. Logica JavaScript (Le Funzionalità)
Il file script.js gestisce tutta l'interattività della piattaforma senza l'uso di librerie esterne pesanti:

Gestione Prodotti: I dati dei prodotti sono salvati in un oggetto PRODUCTS. La funzione renderProducts si occupa di generare dinamicamente le card dei prodotti nel DOM.

Carrello e Wishlist: Ho implementato un sistema di persistenza dei dati utilizzando il LocalStorage. Questo permette all'utente di aggiungere prodotti al carrello o ai preferiti e ritrovarli anche dopo aver ricaricato la pagina.

Modali Interattive: Quando si clicca su un prodotto, si apre una finestra modale che mostra i dettagli, la descrizione e permette la selezione della taglia.

Chatbot (Lilith): Ho creato un'assistente virtuale integrata che risponde con messaggi predefiniti per guidare l'utente tra le novità o le procedure di reso.

Effetti Visivi: JavaScript gestisce anche il cambio di stile della Navbar allo scroll e le animazioni dei canvas menzionati in precedenza.

4. Caratteristiche Distintive
UI/UX Tematica: Ogni elemento, dal font "Cinzel Decorative" alla barra di annuncio scorrevole, è stato scelto per rafforzare l'identità del brand.

Validazione Form: Il modulo contatti include una logica di base per simulare l'invio e fornire feedback all'utente.