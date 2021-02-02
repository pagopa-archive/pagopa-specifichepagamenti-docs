# Funzioni accessorie


## Attestazione del pagamento

L'attestazione di avvenuto pagamento è rappresentata dal documento informatico (Ricevuta Telematica) che l'EC riceve dal PSP.

L'EC deve rendere disponibile, su richiesta dell'Utilizzatore finale, tale documento, sia sotto forma di duplicato
informatico che sotto forma di copia analogica dello stesso. Poiché nelle ricevute telematiche possono essere contenuti da 1 a 5 pagamenti aventi lo stesso Ente beneficiario, sarà cura dell'EC, se del caso, produrre tante copie analogiche quanti sono i pagamenti effettuati contenuti nella stessa Ricevuta Telematica.

Laddove l'EC sia chiamato a predisporre un'attestazione del pagamento ricevuto da parte del pagatore e debba indicare in tale attestazione la data e l'orario del pagamento, si dovrà tenere conto della data e dell'orario dell'interazione che il pagatore ha eseguito per finalizzare il pagamento con l'EC o con il PSP, rispettivamente per i pagamenti eseguiti presso l'EC e per i pagamenti eseguiti presso il PSP.

In particolare, l'EC dovrà comportarsi come segue:

* per i pagamenti eseguiti presso l'EC, fa fede la data e l'orario indicato nella RPT, a condizione ovviamente che tale RPT abbia dato come esito una RT positiva;
* per i pagamenti eseguiti presso il PSP, fa fede la data e l'orario indicati nell'attestazione (scontrino) rilasciato dal PSP.

Nel caso di pagamento attivato presso il PSP, questi fornisce direttamente all'Utilizzatore finale un documento (ricevuta, scontrino, ecc.) che rappresenta un estratto analogico del documento informatico che il PSP stesso invierà successivamente all'EC. Tale documento può essere utilizzato dall'Utilizzatore finale per ottenere quietanza da parte dell'EC.

Le copie analogiche prodotte dall'EC o dai PSP devono necessariamente contenere, oltre al logo del sistema pagoPA, almeno le seguenti informazioni:

* Data e ora dell'operazione
* Codice fiscale e denominazione dell'EC
* Identificativo univoco versamento (IUV) - Identificativo univoco assegnato dall'EC
* Codice identificativo del PSP
* Numero univoco assegnato al pagamento dal PSP
* Importo dell'operazione
* Causale del versamento indicata nella richiesta di pagamento telematico.

## Riconciliazione dei pagamenti

Con rifermento alle macro-fasi del processo, una volta effettuata la fase di "Regolamento contabile" da parte del PSP, l'EC provvede a riconciliare le ricevute telematiche (RT) con le informazioni contabili fornite dal proprio istituto tesoriere, o da Poste Italiane, in relazione agli incassi avvenuti sui c/c postali (ad esempio: Giornale di Cassa per le Pubbliche Amministrazioni che utilizzano il formato OIL/OPI; altre modalità per le Pubbliche Amministrazioni centrali che possono richiedere tali informazioni alla Ragioneria Generale dello Stato).

Secondo quanto indicato dalle Linee guida e dal suo Allegato A *"Specifiche attuative dei codici identificativi di versamento, riversamento e rendicontazione*", il PSP che riceve l'ordine dal proprio cliente o che esegue l'incasso per conto dell'EC può regolare contabilmente l'operazione in modalità singola o in modalità cumulativa, il che comporta per l'Ente Creditore due diverse modalità di riconciliazione. `[TBD chk SACI modalità singola ancora presente ? --> e' ancora presente ma facciamo come se fosse inesistente. il riconciliamento è gia descritto nei paragrafi precedenti]`

### Riconciliazione in modalità multipla

Qualora il PSP effettui un'unica disposizione cumulativa di pagamento nei confronti dell'EC per regolare contabilmente i pagamenti relativi agli esiti contenuti in una o più ricevute telematiche, si parla di Riconciliazione in modalità multipla che viene effettuata dall'EC sulla base dei dati forniti dal proprio istituto tesoriere e di quelli contenuti nel flusso di rendicontazione che il PSP deve inviare all'EC stesso.

La riconciliazione deve essere effettuata in due fasi:

* nella prima fase il dato identificativo del flusso - presente nella causale del SEPA Credit Transfer inviato dal PSP all'EC - deve essere abbinato con quello presente nel Flusso di Rendicontazione inviato all'EC dal PSP che ha eseguito i pagamenti.
* nella seconda fase della riconciliazione l'EC abbinerà i dati contenuti nel Flusso di Rendicontazione di cui sopra con i dati presenti nelle ricevute telematiche (RT) memorizzate presso di sé sulla base della seguente coppia di informazioni:
	* (a) Identificativo univoco versamento (IUV) presente sulla Ricevuta Telematica inviata all'EC che deve coincidere con lo stesso dato presente nella struttura dati del Flusso di Rendicontazione;
	* (b) importo presente sulla Ricevuta Telematica inviata all'EC che deve coincidere con il dato omonimo presente nella struttura dati del Flusso di Rendicontazione.

Il Nodo fornisce apposite funzioni centralizzate a disposizione dei PSP e degli EC, con le quali i primi possono inviare il Flusso di Rendicontazione e gli altri ricevere i dati ivi contenuti.

### Pagamento contenente più accrediti

`[TBD da verificare] -> in realtà la riconciliazione deve avvenire per IUR e non IUV`

Qualora l'Utilizzatore finale presenti al PSP una RPT contenente più pagamenti, ovvero presenti un "carrello" di richieste di pagamento telematico aventi più beneficiari, il PSP deve effettuare un unico addebito verso l'Utilizzatore finale al quale attribuisce lo stesso identificativo univoco di riscossione: pertanto l'EC dovrà opportunamente tenerne conto nelle proprie procedure applicative di riconciliazione.

## Altre funzioni accessorie

Seppur meno utilizzate nella pratica comune, si citano di seguito alcune ulteriori funzione accessorie messe a disposizione dal sistema pagoPA:

* Richiesta di una copia della ricevuta telematica
* Richiesta dell'elenco delle richieste di pagamento telematico pendenti
* Gestione della ricevuta telematica di notifica decorrenza termini

I dettagli relativi alle suddette funzioni sono riportati nella Sezione III `[TBD o Sez.3]` `[TBD check presenza nella Sez.3] -> eliminerei`
