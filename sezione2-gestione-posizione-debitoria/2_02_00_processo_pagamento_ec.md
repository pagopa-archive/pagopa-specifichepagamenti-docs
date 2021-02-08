# Il Processo di pagamento attivato presso l'Ente Creditore

Rientrano in questa categoria di pagamenti quelli richiesti dall'Utilizzatore finale attraverso i siti web o *mobile app* o altri strumenti tecnologici messi a disposizione dagli Enti Creditori per i pagamenti elettronici. Il processo di pagamento attivato presso l'Ente Creditore risulta particolarmente congeniale al caso di pagamenti spontanei (con generazione della posizione debitoria), ma deve gestire anche il caso in cui l'utilizzatore finale abbia ricevuto un avviso di pagamento. 

Le attività a carico degli Enti Creditori per gestire il processo sono rappresentate dalla realizzazione delle procedure di pagamento (sia in termini organizzativi, che informatici); le procedure di pagamento potranno essere più o meno strettamente integrate con i servizi cui fanno riferimento.

la piattaforma pagoPA mette a disposizione degli EC aderenti un servizio di pagamento on-line attraverso il quale l'utente, una volta selezionata la posizione debitoria da pagare direttamente presso il sito dell'EC, può navigare tra gli strumenti di pagamento offerti dai PSP e completare le operazioni di pagamento.

Ogni pagamento all'interno del servizio web può avvenire in due modalità :

- modalità *guest*, in questo caso l'utente non effettua alcuna registrazione al servizio e procede al pagamento semplicemente inserendo una e-mail, che verrà utilizzata per inviare la ricevuta dell'esito dell'operazione.
- modalità *registrato*, in questo caso l'utente può registrarsi utilizzando credenziali SPID ( livello 2); i metodi di pagamento utilizzati saranno salvati all'interno del suo wallet personale e riutilizzabili all'interno di altri prodotti/iniziative di PagoPA ( esempio appIO )

Gli strumenti di pagamento a disposizione dell'utente sono raggruppati all'interno di tre sezioni :

- Pagamento con carta di credito, dove l'utente può utilizzare una carta di credito/debito abilitata ai pagamenti on-line dei circuiti supportati.
- Addebito in conto , dove sono collezionati gli strumenti di pagamento relativi agli HomeBanking e similari
- Altri metodi, al cui interno sono collezionati gli strumenti di pagamento di ultima generazione

Al termine del pagamento:

- l'utente riceve una ricevuta alla sua e-mail
- l'EC riceve una ricevuta telematica che contiene tutti gli elementi del pagamento.

L'EC può mettere a disposizione dell'Utilizzatore finale una ricevuta  e terminare il processo. Sul portale dell'EC devono essere messe a disposizione le funzioni che permettono all'Utilizzatore finale di interrogare lo stato della sua richiesta di pagamento, scaricare una copia di ricevuta o quietanza di pagamento, scaricare copia analogica e/o duplicato del documento informatico Ricevuta Telematica.

## Accredito e rendiconto

Nella giornata successiva all'incasso (D+1), il PSP accredita le somme sul conto dell'EC ed entro la giornata successiva (D+2), invierà il flusso di rendicontazione per ogni accreditamento effettuato.
Tramite le informazioni presenti all'interno dei flussi (resi disponibili immediatamente all'EC e conservati per non oltre 10 giorni), e le ricevute telematiche acquisite, l'EC è in grado di riconciliare i pagamenti avvenuti all'interno di una singola giornata (D).

## Riconciliazione dei pagamenti 

Una volta effettuata la fase di "Regolamento contabile" da parte del PSP, l'EC provvede a riconciliare le ricevute telematiche con le informazioni contabili fornite dal proprio istituto tesoriere, o da Poste Italiane, in relazione agli incassi avvenuti sui c/c postali (ad esempio: Giornale di Cassa per le Pubbliche Amministrazioni che utilizzano il formato OIL/OPI; altre modalità per le Pubbliche Amministrazioni centrali che possono richiedere tali informazioni alla Ragioneria Generale dello Stato).

La riconciliazione deve essere effettuata in due fasi:

* nella prima fase il dato identificativo del flusso - presente nella causale del SEPA Credit Transfer inviato dal PSP all'EC - deve essere abbinato con quello presente nel Flusso di Rendicontazione inviato all'EC dal PSP che ha eseguito i pagamenti.
* nella seconda fase della riconciliazione l'EC abbinerà i dati contenuti nel Flusso di Rendicontazione di cui sopra con i dati presenti nelle ricevute telematiche memorizzate presso di sé sulla base della seguente coppia di informazioni:
    * (a) identificavito univoco di riscossione (IUR) presente all'interno del flusso pari all'identidificativo univoco della ricevuta.
    * (b) identificazione del versamento all'interno della ricevuta tramite i dati di importo, IUV, IBAN, ed indice del versamento.