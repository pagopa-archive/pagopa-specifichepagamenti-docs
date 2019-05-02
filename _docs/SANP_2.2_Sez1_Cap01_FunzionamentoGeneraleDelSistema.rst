+----------------------------------------------------+
| **SEZIONE I – FUNZIONAMENTO GENERALE DEL SISTEMA** |
+----------------------------------------------------+

Funzionamento generale del sistema
==================================

Obiettivo strategico del Sistema pagoPA è quello di facilitare e diffondere gli strumenti di pagamento elettronici, in particolare, quelli riferiti
agli incassi della Pubblica Amministrazione, che da un lato migliorino, nel rispetto delle situazioni già in essere, la gestione dei servizi di
tesoreria, dall’altro consentano alla Pubblica Amministrazione e ai gestori di Servizi Pubblici di esporre ai cittadini e alle imprese servizi evoluti
di pagamento, assicurando nel contempo un coordinamento a livello nazionale della concreta attuazione ed evoluzione nel tempo del sistema.

L’adesione a pagoPA consente agli Enti Creditori di eliminare gli onerosi processi di gestione del back office anche attraverso processi automatizzati
di riconciliazione. Identico beneficio è atteso per ogni operatore del settore dei pagamenti che aderisca all’iniziativa che si inquadra, da un lato,
nella più ampia regolamentazione europea in materia di servizi di pagamento introdotto con il progetto SEPA, dall’altro, nell’attuazione delle norme
introdotte dal nuovo articolo 5 del CAD in tema di pagamenti informatici.

Le suddette norme trovano concreta attuazione tramite l’infrastruttura abilitante, denominata Nodo dei Pagamenti-SPC (NodoSPC). Tale infrastruttura si
configura come una componente del Sistema Pubblico di Connettività che regola - a livello nazionale - le modalità organizzative e
tecnico-infrastrutturali di funzionamento dei pagamenti verso la Pubblica Amministrazione, senza alterare i rapporti commerciali tra i diversi attori
del processo, ma introducendo modalità semplificate di interazione.

In questo contesto l’impianto si configura come un sistema di livello nazionale definito anche come “Dominio dei Pagamenti della Pubblica
Amministrazione” (Dominio), che ha assunto a partire dalla fine dell'anno 2014, con la registrazione del correlato marchio, la denominazione di
Sistema pagoPA.

Il modello di funzionamento del Sistema fa riferimento ai principi del *Four Corners* *model* definito dall’European Payment Council ed è riportato
nel diagramma di Figura 1, nel quale l’infrastruttura costituita dal NodoSPC si pone quale facilitatore del colloquio i vari soggetti coinvolti:

+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| **Utilizzatore finale**                                                  | Rappresenta il privato cittadino, il professionista o l’impresa, che     |
|                                                                          | effettua pagamenti a favore della Pubblica Amministrazione.              |
| **(Debtor)**                                                             |                                                                          |
|                                                                          | Nell’ambito del processo di pagamento si distingue il ruolo del          |
|                                                                          | **soggetto debitore**, cioè colui che ha contratto un debito a favore    |
|                                                                          | dell’Ente Creditore, ovvero che effettua un pagamento spontaneo per      |
|                                                                          | ottenere a un servizio dallo stesso Ente creditore. Nel rapporto con     |
|                                                                          | Ente Creditore l’Utilizzatore finale coincide con il soggetto debitore.  |
|                                                                          |                                                                          |
|                                                                          | Si distingue infine il **soggetto versante**, ovvero come colui accede   |
|                                                                          | ai servizi informatici dal Prestatore dei Servizi di Pagamento, e        |
|                                                                          | dispone il pagamento a favore dell’Ente Creditore. Nel rapporto con il   |
|                                                                          | PSP l’Utilizzatore finale coincide con il soggetto versante.             |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| **Ente Creditore (EC)**                                                  | Soggetto che utilizza il sistema pagoPA per l’incasso delle somme a      |
|                                                                          | vario titolo dovute dall’Utilizzatore finale.                            |
| **(Creditor)**                                                           |                                                                          |
|                                                                          | L’EC utilizza SPID per il riconoscimento dell’identità dell’Utilizzatore |
|                                                                          | finale e per autorizzarne l’accesso ai propri servizi informatici. Per   |
|                                                                          | consentire il pagamento accede al NodoSPC direttamente o tramite un      |
|                                                                          | soggetto intermediario pubblico o privato.                               |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| **Prestatore di Servizi di Pagamento (PSP)**                             | Soggetto abilitato dalle norme vigenti in materia ad eseguire le         |
|                                                                          | richieste di pagamento ricevute dall’EC tramite il NodoSPC al quale      |
| **(Debtor e Creditor Bank)**                                             | restituisce ricevuta telematica di pagamento.                            |
|                                                                          |                                                                          |
|                                                                          | Il PSP offre i propri servizi di pagamento, direttamente o tramite terze |
|                                                                          | parti (intermediari), configurando sul NodoSPC canali di pagamento,      |
|                                                                          | fisici e telematici, con cui l’Utilizzatore finale può effettuare        |
|                                                                          | l’operazione.                                                            |
|                                                                          |                                                                          |
|                                                                          | L’utilizzo dell’infrastruttura del NodoSPC non altera in alcun modo i    |
|                                                                          | rapporti esistenti tra l’Ente Creditore ed il proprio istituto           |
|                                                                          | tesoriere.                                                               |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+

|image0|

**Figura 1 – EPC Four Corners model**

Il perfezionamento delle operazioni disposte tramite pagoPA avviene attraverso il sistema di regolamento e compensazione (CSM) utilizzando le regole
SEPA.

Il sistema supporta anche altri tipi di operazioni di pagamento che risultano dal collegamento tra più servizi di pagamento o tra servizi di pagamento
e altre operazioni ad essi contigue, così come definito dal Provvedimento Banca d’Italia del 5 luglio 2011 in materia di diritti e obblighi delle
parti nei servizi di pagamento.

Dal punto di vista organizzativo, la partecipazione al sistema pagoPA si attua attraverso la sottoscrizione di accordi di servizio tra l’Agenzia per
l’Italia Digitale e i Prestatori di Servizi di Pagamento, nonché la sottoscrizione di lettere di adesione da parte delle Pubbliche Amministrazioni e
dei Gestori di Pubblici Servizi: ciò consente di stabilire un rapporto di collaborazione “molti a molti”, accelerando il processo di attuazione del
sistema.

Il sistema pagoPA prevede inoltre la possibilità che le attività legate all’effettuazione dei pagamenti siano eseguite, in tutto od in parte, da
Intermediari tecnologici (soggetti pubblici e/o privati) per conto sia degli Enti Creditori che dei Prestatori di servizi di pagamento. A tale
proposito si definisce:

-  **Intermediario tecnologico** un soggetto già aderente al NodoSPC , che risulta responsabile delle attività tecniche di interfacciamento del
   soggetto intermediato.

-  **Partner tecnologico** un fornitore del soggetto intermediato, utilizzato in via strumentale per l’esecuzione delle attività tecniche di
   interfacciamento con il NodoSPC, ferma restando la responsabilità nei confronti di AgID in capo al soggetto intermediato.

Si precisa che è consentita la multi intermediazione cioè l’utilizzo di diversi Intermediari o Partner tecnologici da parte del medesimo soggetto
intermediato.

È consentito altresì che un PSP sia intermediato verso pagoPA da circuiti o consorzi costituiti in ambito finanziario, purché rimangano comunque
inalterate le responsabilità del PSP nei confronti di terze parti e, in particolare, degli Utilizzatori finali.

Il ciclo di vita del pagamento gestito sul Sistema pagoPA
---------------------------------------------------------

Nell’ambito delle relazioni tra l’Utilizzatore finale e gli Enti Creditori, la necessità di effettuare pagamenti a favore di questi ultimi è associata
a procedimenti amministrativi che, in linea generale, seguono un preordinato “Ciclo di vita” schematizzato nella Figura 2.

|image1|

**Figura 2 - Ciclo di vita del pagamento**

1. L’esigenza del pagamento può nascere in due modi che innescano processi di business differenti:

   -  su iniziativa dell’Utilizzatore finale che necessita dell’erogazione di un servizio da parte dell’EC

   -  su iniziativa dell’EC che deve richiedere all’Utilizzatore finale l’estinzione di un debito creatosi nei suoi confronti.

2. L’esigenza del pagamento si concretizza attraverso la generazione di una **posizione debitoria**, cioè l’insieme di informazioni che l’Ente
   Creditore deve memorizzare in appositi archivi per consentire il pagamento e la successiva fase di riconciliazione.

3. Il Prestatore di Servizi di Pagamento scelto dall’Utilizzatore finale, completata l’operazione di pagamento in base alla richiesta di pagamento
   dell’EC, incamera i fondi da destinare all’Ente Creditore.

4. Il Prestatore di Servizi di Pagamento esegue il regolamento contabile dell’operazione accreditando il conto indicato dall’Ente Creditore nella
   richiesta di pagamento con un SEPA Credit Transfer, salvo le eccezioni previste dalla vigente normativa di settore.

5. L’Ente Creditore estingue la posizione debitoria e esegue la fase di riconciliazione contabile del pagamento.

6. L’Ente Creditore rilascia ricevuta all’Utilizzatore finale e, se previsto, la quietanza di pagamento.

L’esecuzione di pagamenti tramite pagoPA prevede l’interazione tra i sistemi informativi dei vari attori aderenti al Dominio. Il NodoSPC è il centro
stella del sistema e assicura l’interoperabilità dei vari sistemi dei soggetti aderenti, rendendo disponibili primitive e metodi per l’interscambio
dei flussi di dati, nonché una interfaccia per la selezione del Prestatore di Servizi di Pagamento da parte del pagatore.

A tal fine il NodoSPC gestisce diversi *workflow* applicativi che prevedono lo scambio di oggetti contenenti le informazioni necessarie a garantire la
corretta gestione dei processi. Sebbene tali *workflow* siano dettagliati nella sezione III se ne fornisce qui una sommaria descrizione.

Per tutti i *workflow* applicativi le *funzioni primari*\ e sono assicurate dall’interscambio dei seguenti oggetti e informazioni:

-  *Identificativo Univoco Versamento* (IUV). Codice generato dall’Ente Creditore per identificare una posizione debitoria, conformemente alle regole
   di cui alla Sezione I del documento "Specifiche attuative dei codici identificativi di versamento, riversamento e rendicontazione" allegato A alle
   “Linee guida per l'effettuazione dei pagamenti a favore delle pubbliche amministrazioni e dei gestori di pubblici servizi”.

-  *Richiesta Pagamento Telematico* (RPT). Emessa dall’Ente Creditore per richiedere il pagamento di una posizione debitoria, reca i parametri
   necessari all’esecuzione dell’intero ciclo di vita del pagamento;

-  *Ricevuta Telematica* (RT). Generata dal PSP per ogni RPT ricevuta per qualificare l’esito dell’operazione di pagamento. Se il pagamento è andato a
   buon fine costituisce elemento liberatorio per il soggetto debitore nei confronti dell’EC;

-  *Codice Contesto Pagamento* (CCP). Codice che caratterizza la singola operazione di pagamento di una posizione debitoria, consentendo la
   rilavorazione dei pagamenti non andati a buon fine;

-  *Flusso di Rendicontazione* (FR). Documento informatico messo a disposizione dal PSP che raccoglie il dettaglio di un accredito cumulativo di un
   conto specificato dalla RPT ricevuta da un EC.

La piattaforma tecnologica del NodoSPC provvede all’istradamento di tali oggetti per inizializzare il pagamento e rendicontarne gli esiti:

-  L’Utilizzatore finale, innescando il pagamento, rende disponibile a un PSP di sua scelta la RPT relativa alla posizione debitoria che intende
   pagare. Le modalità variano se l’interazione è avvenuta con i sistemi degli EC o dei PSP

-  L’Utilizzatore finale può autorizzare un pagamento, tramite canali fisici o telematici messi a disposizione dal PSP.

-  Indipendentemente dal canale utilizzato, il PSP incassa il pagamento richiesto dall’EC, genera una RT, consegna all’Utilizzatore finale
   un’attestazione di pagamento e, nei tempi previsti dalle norme di settore, accredita i conti dell’EC.

-  La ricevuta telematica attraverso il NodoSPC è consegnata all’Ente Creditore che, in caso di esito positivo, può erogare il servizio richiesto.

-  L’EC può eseguire la riconciliazione dei pagamenti, sulla base delle RT e dei FR, e rilasciare quietanza.

Nell’ambito delle funzionalità esposte dal NodoSPC è previsto lo scambio di ulteriori oggetti applicativi e servizi applicativi opzionali che verranno
dettagliati nella Sezione III.

L’adesione al Sistema pagoPA
----------------------------

L’insieme degli Enti Creditori, Prestatori di Servizi di Pagamento aderenti e dei loro intermediari tecnologici, costituisce, come già detto, il
“Dominio dei Pagamenti dell’Ente Creditore” (o più brevemente Dominio). Implicitamente con il termine di Dominio ci si riferisce anche alle componenti
tecnico-organizzative di tali attori.

L’utilizzo dei servizi messi a disposizione dal NodoSPC è attivato attraverso apposite procedure, descritte in maggior dettaglio nella Sezione IV, che
prevedono:

-  per le Pubbliche Amministrazioni e i Gestori di Pubblici Servizi l’invio all’Agenzia per l’Italia Digitale di lettere di adesione unilaterali da
   loro sottoscritte;

-  per i PSP la sottoscrizione con l’Agenzia per l’Italia Digitale, su base volontaria, di atti bilaterali denominati “Accordi di Servizio”.

Ogni soggetto aderente che, per lo svolgimento delle attività tecniche di interfacciamento al NodoSPC, utilizza soggetti intermediari, rimane comunque
responsabile in quanto mittente o destinatario logico dei flussi informativi.

Nel Dominio, le attività di pertinenza di ogni soggetto sono effettuate conformemente ai requisiti di riservatezza e di protezione da accessi non
autorizzati previsti dalla normativa vigente.

Obblighi degli Enti Creditori
-----------------------------

Al fine di gestire nel modo migliore l’iter del processo di pagamento gli Enti Creditori hanno l’obbligo di rendere disponibili direttamente
all’Utilizzatore finale, attraverso opportuni servizi informatici offerti direttamente o tramite intermediari:

-  le modalità per effettuare i pagamenti informatici e ogni altra informazione che abbia il fine di agevolarne l’esecuzione;

-  l’accesso all’archivio delle RT relative ai pagamenti disposti. Fino a prescrizione, è fatto obbligo all’Ente Creditore di conservare le
   informazioni di ogni pagamento;

-  le modalità di gestione, nel rispetto della normativa vigente, delle procedure attinenti ai pagamenti (reclami, rimborsi, storni), anche usufruendo
   delle funzionalità messe a disposizione dalla piattaforma.

Si sottolinea inoltre che l’Ente Creditore, responsabile della relazione con il soggetto pagatore, dovrà erogare un adeguato servizio di assistenza
agli utenti, opportunamente pubblicizzato e con adeguata disponibilità temporale.

Ogni Ente Creditore infine ha l’obbligo di costituire un tavolo operativo per interloquire con l’analoga struttura del NodoSPC e collaborare alla
risoluzione delle anomalie o incidenti che si dovessero verificare. La disponibilità del tavolo operativo è la stessa dei sistemi di pagamento per i
quali è necessario un presidio.

Interfaccia WISP 
-----------------

Per garantire la trasparenza dell’operazione di pagamento nei confronti dell’Utilizzatore finale, il NodoSPC mette a disposizione una applicazione che
consente ai PSP di esporre on line i costi del servizio, differenziati per strumento e/o canale di pagamento, in modo da rendere consapevole la scelta
effettuata dagli Utilizzatori finali.

Tali informazioni sono rese disponibili da una interfaccia WEB, denominata WISP (Wizard Interattivo per la Scelta del PSP), caratterizzata dalla
stessa *user experience*, indipendentemente dall’EC che ha innescato il pagamento.

Per supportare gli Enti Creditori nello sviluppo di App *mobile* è disponibile un SDK (Software Development Kit) fornito in modalità nativa per le
tecnologie IOS e Android.

La funzione WISP mantiene inalterata la facoltà in capo al Prestatore di Servizi di Pagamento di stabilire costi di servizio di maggior favore per
gruppi o singoli Utilizzatori finali, purché non ricada sul NodoSPC l’onere di promuovere e pubblicizzare tali specificità.

Funzioni accessorie di controllo 
---------------------------------

Il Sistema prevede modalità di controllo focalizzate sulla verifica della corretta applicazione degli Standard di Servizio (p.e. norme di
comportamento, livelli di Servizio garantiti, ecc.) e dei processi che da questi derivano.

A supporto di tali funzioni, ogni soggetto (Enti Creditori e Prestatori di Servizi di Pagamento aderenti, NodoSPC) deve registrare all’interno del
proprio sistema ogni singolo evento significativo dal punto di vista applicativo al fine di tenerne traccia.

L’insieme di tali registrazioni, indipendentemente dalle peculiarità tecniche delle soluzioni adottate da ciascun soggetto che definisce in autonomia
tali aspetti, costituisce il “Giornale degli Eventi” che riporta gli estremi di tutte le situazioni verificatesi nell’esecuzione dell’operazione di
pagamento nelle varie tratte coinvolte (tra Enti Creditori e NodoSPC, nel NodoSPC, tra NodoSPC e Prestatori di Servizi di Pagamento).Tali informazioni
devono essere rese disponibili ai tavoli operativi nei formati definiti in Sezione III).

Sicurezza e conservazione
-------------------------

Tutte le informazioni trattate nell’ambito del Sistema saranno gestite dai diversi attori che interagiscono con il NodoSPC, ciascuno nell’ambito della
propria competenza e responsabilità, nel rispetto della vigente normativa in materia di conservazione dei documenti informatici e di sicurezza dei
dati.

In merito, si rammenta che la conservazione è finalizzata a proteggere nel tempo i documenti informatici e i dati ivi contenuti, assicurandone, tra
l’altro, l'integrità al fine di preservare il valore probatorio del documento informatico.

*Software Development KIT* per applicazioni “mobile”
----------------------------------------------------

Per supportare lo sviluppo di App *mobile* rilasciate dagli Enti Creditori, che includano funzionalità di pagamento, l’Agenzia per l’Italia Digitale
rende disponibile un SDK (Software Development Kit) che consente una rapida integrazione delle funzioni del NodoSPC.

Lo SDK è disponibile in download, previa sottoscrizione di un apposito *disclaimer*, fra gli strumenti GitHub del sito https://developers.italia.it/ e
fornito in modalità nativa per le due principali tecnologie presenti sul mercato: IOS e Android.

.. |image0| image:: media_FunzionamentoGeneraleDelSistema/media/image1.png
   :width: 3.39472in
   :height: 2.11312in
.. |image1| image:: media_FunzionamentoGeneraleDelSistema/media/image2.png
   :width: 6.43198in
   :height: 0.93413in
