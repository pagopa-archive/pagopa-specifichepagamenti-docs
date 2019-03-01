Introduzione alla versione 2.2
==============================

Il sistema dei pagamenti elettronici a favore della Pubblica Amministrazione, il Sistema pagoPA,
garantisce agli Utilizzatori finali (cittadini e imprese) di effettuare pagamenti elettronici alla
Pubblica Amministrazione in modo sicuro e affidabile, semplice, in totale trasparenza nei costi di
commissione e in funzione delle proprie esigenze.

L’introduzione del Sistema pagoPA porta benefici per i cittadini, la Pubblica Amministrazione e
l’intero sistema Paese:

-  Benefici per i Cittadini

   -  trasparenza e minori costi

   -  possibilità di usufruire dei servizi pubblici in maniera più immediata

   -  semplificazione del processo di pagamento che consente di usufruire del maggior numero di
      canali e servizi possibili

   -  standardizzazione dell’esperienza utente per i pagamenti verso la Pubblica Amministrazione

   -  standardizzazione delle comunicazioni di avviso di pagamento, riconoscibile su tutto il
      territorio nazionale

-  Benefici per la Pubblica Amministrazione:

   -  riduzione dei tempi di incasso attraverso l’accredito delle somme direttamente sui conti
      dell’Ente Beneficiario entro il giorno successivo al pagamento

   -  riduzione dei costi di gestione del contante

   -  miglioramento dell’efficienza della gestione degli incassi attraverso la riconciliazione
      automatica

   -  superamento della necessità bandire gare per l’acquisizione di servizi di incasso, con
      conseguenti riduzioni di inefficienze e costi di commissione fuori mercato

   -  riduzione dei costi e tempi di sviluppo delle applicazioni online (riuso soluzioni)

   -  eliminazione della necessità di molteplici accordi di riscossione

   -  maggiori controlli automatici per evitare i doppi pagamenti e le conseguenti procedure di
      rimborso

-  Benefici per i Prestatori di Servizi di Pagamento:

   -  eliminazione necessità molteplici accordi con le PA

   -  riduzione dei costi di gestione del contante

   -  miglioramento dei servizi resi

   -  fidelizzazione della clientela

-  Benefici per il Sistema Paese:

   -  completa aderenza agli standard della PSD2

   -  incentivazione dell’utilizzo dei pagamenti elettronici a livello nazionale attraverso
      l’utilizzo con le transazioni verso la Pubblica Amministrazione, che consente di stimolare il
      mercato e favorire, a tendere, una maggiore concorrenza nel mercato dei servizi di pagamento
      ed un livellamento delle commissioni.

Il Sistema pagoPA è stato realizzato dall’Agenzia per l’Italia Digitale (AgID) in attuazione
dell’art. 5 del CAD , il quale precisa che “Al fine di dare attuazione a quanto disposto
dall'articolo 5, l’Agenzia per l’Italia Digitale (già DigitPA) mette a disposizione, attraverso il
Sistema pubblico di connettività, una piattaforma tecnologica per l'interconnessione e
l’interoperabilità tra le pubbliche amministrazioni e i prestatori di servizi di pagamento
abilitati, al fine di assicurare, attraverso strumenti condivisi di riconoscimento unificati,
l'autenticazione certa dei soggetti interessati all'operazione in tutta la gestione del processo di
pagamento”.

IL CAD inoltre ha affidato all’Agenzia per l’Italia Digitale, sentita la Banca d'Italia, il compito
di definire le Linee guida per la specifica delle modalità tecniche e operative per l’esecuzione dei
pagamenti elettronici ed introdotto all’articolo 15, comma 5 bis, del D.L. n. 179/2012,
l’obbligatorietà dell’uso di una piattaforma tecnologica messa a disposizione dall’Agenzia per
l’Italia Digitale per le Pubbliche Amministrazioni e i Gestori di Pubblico Servizio.

Il presente documento denominato “\ *Specifiche Attuative del Nodo dei Pagamenti-SPC*\ ” rappresenta
l’\ **Allegato B** alle *“Linee guida per l'effettuazione dei pagamenti a favore delle pubbliche
amministrazioni e dei gestori di pubblici servizi”* (di seguito, Linee guida) e deve essere
utilizzato in combinazione con il documento *"Specifiche attuative dei codici identificativi di
versamento, riversamento e rendicontazione"* (**Allegato A)**, nonché con le stesse Linee guida;
documenti ai quali si rimanda per tutte le voci e gli argomenti non specificatamente qui indicati.

La presente versione delle Specifiche Attuative del Nodo dei Pagamenti-SPC (di seguito, NodoSPC) è
il frutto di una diversa scelta editoriale per la presentazione dei contenuti. Le modifiche
apportate al presente documento riguardano una riorganizzazione del testo, al fine di migliorarne la
leggibilità e l’utilizzo come documento tecnico per diverse tipologie di lettori.

A tal fine il documento è suddiviso nelle seguenti quattro sezioni:

-  Sezione I – Modello Generale del Sistema, in cui si fornisce una visione d’insieme e di alto
   livello del Sistema pagoPA, con un linguaggio ed un livello di dettaglio fruibile anche ai non
   addetti ai lavori

-  Sezione II – Regole di funzionamento del Sistema, in cui sono dettagliati i diversi processi
   gestiti dal Sistema pagoPA. Lo scopo è quello di esplicitare ai diversi soggetti coinvolti le
   responsabilità connesse al loro ruolo. Nella Sezione II sono altresì dettagliati, in maniera
   descrittiva, i controlli funzionali effettuati dal NodoSPC e le possibili eccezioni

-  Sezione III – Specifiche funzionali e tecniche del Sistema, in cui sono dettagliati gli oggetti,
   i messaggi, i flussi informativi, gli stati del pagamento e gli errori gestiti sul NodoSPC. Tale
   sezione include anche i casi di test da eseguire per l’autovalutazione del proprio software.

-  Sezione IV – Procedure di adesione ed esercizio, in cui sono dettagliare le procedure tecniche e
   amministrative da seguire per aderire al Sistema pagoPA, per attivare i servizi e per gestire gli
   adempimenti richiesti all’esercizio del sistema e per accedere ai servizi di assistenza e
   supporto.

N.B. Si fa presente che i paragrafi per i quali è prevista una proposta evolutiva per la versione
3.0 delle Specifiche Attuative di prossima pubblicazione, saranno contrassegnati dalla seguente
dicitura:

+----------+-----------------------------------------------+
| |image0| | **Paragrafo soggetto a proposta di modifica** |
+----------+-----------------------------------------------+

.. |image0| image:: media_Introduzione/media/image1.png
   :width: 0.81568in
   :height: 0.4403in
