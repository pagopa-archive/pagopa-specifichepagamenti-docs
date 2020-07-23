ATTIVAZIONE DI UN PSP SUL SISTEMA PAGOPA
========================================

Per aderire a pagoPA il PSP sottoscrive con AgID un atto, l'**Accordo di
servizio**, che delinea oneri e responsabilità connesse al ruolo,
permette di utilizzare l'infrastruttura del Nodo-SPC e di usufruire dei
servizi di supporto connessi.

Come previsto dalle Linee Guida, un PSP eroga su pagoPA servizi di
pagamento direttamente o può altresì utilizzare il servizio di
intermediazione tecnologica erogato da terzi per altri servizi di
pagamento. In altri termini, un PSP può risultare - a sua scelta - sia
erogatore di servizi, sia soggetto intermediato, a seconda del servizio
di pagamento offerto.

Con l'Accordo di servizio è nominato il "Referente dei Servizi" (RS) del
PSP che svolge funzioni di unico interlocutore nei confronti di AgID per
ogni attività tecnica ed è delegato a gestire ogni informazione inerente
dati tecnici e amministrativi, ivi inclusi quelli bancari, necessari
alla configurazione e all\'attivazione del PSP nonché gestire tutti gli
aggiornamenti che dovessero intervenire successivamente.

Il **Catalogo dei Dati Informativi**, la cui struttura è ampiamente
descritta nella Sezione III delle SANP, è lo strumento con il quale il
PSP comunica ad AgID le informazioni basilari relative ai servizi di
pagamento offerti comprese le condizioni di utilizzo ed i costi massimi
di commissione applicati.

Il processo di avvio in Esercizio sul sistema pagoPA di un PSP dipende
dai modelli di pagamento e/o dai servizi di pagamento che il PSP intende
erogare.

Se il PSP aderente intende implementare i modelli di pagamento attivati
presso l'Ente Creditore e/o quelli attivati presso il PSP è necessario
che si colleghi direttamente all'infrastruttura del Nodo-SPC oppure si
faccia intermediare da un altro PSP già attivo su quei modelli di
pagamento.

Se il PSP aderente intende erogare servizi di pagamento CBill e MyBank
non è necessario che si colleghi direttamente al Nodo-SPC. Anche nel
caso in cui un PSP aderente intenda svolgere il ruolo di Acquirer sul
sistema pagoPA non è necessario che si colleghi direttamente al
Nodo-SPC.

Attivazione di un PSP che si collega direttamente al Nodo
---------------------------------------------------------

Il Referente dei Servizi di un PSP che debba attivarsi su pagoPA
collegandosi direttamente all'infrastruttura del Nodo-SPC, deve
configurare un collegamento fisico con l'infrastruttura del Nodo-SPC
individuando la soluzione più adeguata per realizzarlo e garantire i
livelli di servizio imposti dall'Agenzia, prevedendo anche un piano per
il *disaster recovery*.

Per collegarsi al Nodo-SPC i PSP devono utilizzare una linea dedicata.

Il processo di avvio in Esercizio di un PSP collegato direttamente
all'infrastruttura del Nodo-SPC prevede il soddisfacimento di alcuni
prerequisiti: l'attivazione di un collegamento fisico (di Collaudo) con
l'ambiente di Test Esterno del Nodo-SPC ed un collegamento fisico (di
Esercizio) con l'ambiente di Esercizio del Nodo-SPC.

Per completare il processo di avvio il PSP deve soddisfare un ulteriore
requisito: la compilazione di un documento di manleva all\'esecuzione
dei servizi oggetto dei casi di test indicati da AgID.

Il documento di manleva firmato digitalmente deve essere recapitato ad
AgID dal Referente dei Servizi del PSP al fine completare il processo di
attivazione in Esercizio. In esso il Referente garantisce di aver
effettuato con esito positivo, sia in ambiente di Test Esterno che in
ambiente di Esercizio tutti i casi di test previsti da AgID alla data di
sottoscrizione del documento.

Il documento di manleva è disponibile sul sito istituzionale
dell'Agenzia.

Soddisfatti tutti i pre-requisiti il Referente dei Servizi, può avviare
il processo operando come segue:

1.  Compila il Catalogo Dati Informativi da utilizzare in ambiente di
    Collaudo;
2.  Fornisce al Nodo tutti le informazioni necessarie a completare la
    configurazione dei Canali di Pagamenti presenti nel Catalogo;
3.  Decide di procedere o meno con l'esecuzione dei test previsti in
    ambiente di Collaudo con il supporto del personale AgID. Se decide
    di eseguire i test deve:
    a.  Proporre ad AgID una data di inizio dei test al fine di
        coordinare le attività previste;
    b.  Ultimati i test con il supporto di AgID, il RS deve compilare il
        "Verbale di Collaudo" e rimanere in attesa che AgID lo validi
        per chiudere formalmente la fase di Collaudo;
4.  Terminata la fase di Collaudo (3.b) oppure avendo deciso di non
    coinvolgere AgID in tale fase, il RS compila il Catalogo Dati
    Informativi da utilizzare in ambiente di Esercizio;
5.  Fornisce al Nodo tutte le informazioni necessarie a completare la
    configurazione dei Canali di Pagamenti presenti nel Catalogo di
    Esercizio;
6.  Decide di procedere o meno con l'esecuzione dei test previsti in
    fase di Pre-Esercizio con il supporto del personale AgID. Se decide
    di eseguire i test deve:
    c.  Proporre ad AgID una data di inizio dei test al fine di
        coordinare le attività previste;
    d.  Terminati i test con il supporto di AgID, il RS deve compilare
        il "Verbale di Pre-Esercizio" e rimanere in attesa che AgID lo
        validi per chiudere le attività di Pre-Esercizio.
7.  Ultimata la fase di Pre-Esercizio oppure avendo deciso di non
    coinvolgere AgID in tale fase, il RS deve compilare il documento di
    manleva affinchè AgID lo possa validare e chiudere formalmente la
    fase di Pre-Esercizio;

Al fine di completare il processo, il RS deve fornire ad AgID tutte le
informazioni riguardanti il "Tavolo operativo".

Configurazione del POS virtuale
-------------------------------

I PSP che intendono accettare pagamenti con carta tramite pagoPA devono
configurare, sul POS virtuale centralizzato esposto dal WISP, una coppia
di punti vendita per ogni circuito, uno dei quali sarà dedicato alla
transazione prive di CVV (MO/TO).

Per ogni punto vendita è necessario che il PSP comunichi i seguenti
dati: ShopName, Circuito, Merchant Id, Terminal Id e UID 3DS.

Per poter instradare correttamente i pagamenti con carta su pagoPA il
CDI del PSP deve includere almeno un canale specializzato a tale
tipologia di pagamenti. I canali, ognuno potenzialmente con diverso
profilo commissionale, che il PSP può includere sono di due tipi:

1.  **Tipo "not on us":** canale utilizzato sul WISP per la selezione
    del PSP da parte dell'Utilizzatore finale;
2.  **Tipo "on us":** dedicato alle transazioni con carte emesse dallo
    stesso PSP (transazioni "*on us*"), che non prevedono una esplicita
    selezione del PSP. Tale canale sarà identificato da un IdCanale
    concatenato alla stringa "\_ONUS".

Per completare la configurazione il PSP comunica l'associazione fra
canali e punti vendita e i *bin table range* che il NodoSPC utilizza per
riconoscere le transazioni di tipo "*on u*s".

Attivazione di un PSP che offre il servizio MyBank
--------------------------------------------------

Il servizio MyBank consente di ottenere, in tempo reale,
un'autorizzazione per il trasferimento di fondi dal conto bancario del
cliente a quello dell'esercente online, utilizzando un bonifico SEPA.

Il modello di funzionamento del servizio si identifica con il "processo
di pagamento con re-indirizzamento online".

La sottoscrizione dell'Accordo di servizio è un atto formale
indispensabile per poter utilizzare il servizio MyBank. I PSP possono
svolgere sul Nodo-SPC sia il ruolo di banca del debitore (c.d. *Buyer
Bank*) sia il ruolo di banca dell\'esercente (c.d. *Seller Bank*).

### PSP che intendono svolgere il ruolo di Banca Buyer

I PSP che intendono svolgere il ruolo di Banca Buyer devono inviare ad
AgID tutte le informazioni necessarie sul loro Catalogo Dati
Informativi. La procedura di abilitazione per l\'avvio in esercizio
viene attivata su richiesta del RS ed ha l'obiettivo di verificare che
l'operatività dei modelli di pagamento implementati corrisponda alle
specifiche attuative vigenti e viene certificata mediante un verbale
semplificato in cui si attesta la corretta esecuzione di almeno un
bonifico SCT.

I dettagli del CDI per PSP di Buyer Bank sono riportati nella
**monografia** intitolata "Erogazione del servizio MyBank attraverso il
Nodo del Pagamenti-SPC" disponibile sul sito istituzionale dell'Agenzia.

### PSP che intendono svolgere il ruolo di Banca Seller

I PSP che intendono offrire servizi sul Nodo-SPC attraverso il servizio
MyBank in qualità di **Seller** Bank per le operazioni di pagamenti
eseguite in favore degli Enti Creditori che abbiano in essere un
rapporto di conto corrente con il Prestatore Aderente devono rispettare
quanto previsto nella **monografia** intitolata \"Transazioni MyBank
attraverso il Nodo dei Pagamenti-SPC\", disponibile sul sito
istituzionale dell'Agenzia. Anche in questo caso, i PSP che intendono
svolgere il ruolo di Banca Seller devono inviare ad AgID tutte le
informazioni necessarie sul loro Catalogo Dati Informativi.

Al fine di consentire all'utilizzatore finale di eseguire operazioni di
pagamento in favore di un Ente Creditore mediante la soluzione MyBank,
con accredito su un conto corrente intestato a detto Ente, il PSP
aderente nel ruolo di *Seller Bank* presterà il servizio di *Routing
Service*, anche tramite uno specifico soggetto terzo detto *Routing
Service Provider*, purché rispetti le specifiche di interfacciamento del
servizio di routing.

La *Seller Bank* accrediterà gli importi versati dagli utilizzatori
finali in favore di Singoli Enti Creditori mediante il Nodo-SPC,
assicurando il rispetto della normativa di riferimento pro tempore
vigente.

Attivazione di un PSP che offre il servizio CBILL
-------------------------------------------------

In questo paragrafo sono descritte le attività che devono essere
effettuate dai Prestatori di Servizi di Pagamento che intendono
utilizzare il servizio CBILL del consorzio CBI (Customer to Business
Interaction) per interagire con il Nodo-SPC.

I dettagli sul funzionamento del servizio CBILL in pagoPA sono riportati
nella **monografia** intitolata "Erogazione del servizio CBILL
attraverso il Nodo dei Pagamenti-SPC", disponibile sul sito
dell'Agenzia.

La sottoscrizione dell'Accordo di servizio è un atto formale
indispensabile per poter utilizzare il servizio CBILL, tuttavia i PSP
che intendono offrire il servizio CBILL sul sistema pagoPA hanno un iter
di attivazione facilitato, in quanto le fasi di realizzazione del
collegamento al Nodo-SPC sono già state effettuate dal Consorzio CBI,
che assume il ruolo di \"Intermediario Tecnologico\" nei confronti dei
propri aderenti. Per completare la fase di avvio in esercizio è
necessario inviare ad AgID tutte le informazioni relative al "Catalogo
Dati Informativi" utilizzato.

Invece, i PSP che sono già aderenti a pagoPA ed al Nodo-SPC, e che
vogliono erogare i servizi di pagamento in argomento, devono fare
riferimento alle sole attività previste per l'invio delle informazioni
relative al "Catalogo Dati Informativi".

> Attivazione di un PSP intermediato

------------------------------------------------------------------------

I PSP aderenti che intendono utilizzare il Sistema pagoPA
indirettamente, possono servirsi di Intermediari a cui delegano lo
svolgimento di tutte le attività tecniche (connessione al Nodo-SPC). Per
tutte le attività in carico al Referente Servizi il PSP farà riferimento
alla figura tecnica designata dall'intermediario tecnologico scelto,
senza facoltà di nomina o sostituzione in forza dell'avvenuta delega
delle attività tecniche.

Sarà cura dell'Agenzia censire i PSP che intendono aderire al sistema
pagoPA e completare il processo di adesione, indicando le modalità per
procedere con la configurazione dei canali di connessione e del catalogo
dati informativo.
