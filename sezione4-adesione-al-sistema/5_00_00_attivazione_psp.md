Attivazione di un PSP sul sistema pagoPA
========================================

Nell'Accordo di adesione a pagoPA il Prestatore Aderente nomina un proprio "Referente" che, avendone ricevuto delega, comunica a PagoPA S.p.A., tramite sistemi di PEC o altro mezzo indicato da PagoPA stessa, tutti i dati tecnici e amministrativi, ivi inclusi quelli bancari, necessari all'attivazione e alla configurazione dei servizi oggetti dell'Accordo e le eventuali modifiche e/o aggiornamenti che dovessero intervenire, anche con riferimento alla modifica e/o aggiornamento del Catalogo Dati Informativi, nonché dei nominativi presenti nell'Accordo stesso.

Il Prestatore Aderente delega, altresì, il Referente a ricevere ogni comunicazione proveniente da PagoPA S.p.A, anche nel caso in cui queste comportino la pronta attuazione delle indicazioni ivi contenute.

Il Prestatore Aderente, esclusivamente nella sua qualità di Intermediario Tecnologico, ovvero nel caso in cui non abbia esercitato la facoltà di avvalersi di un Intermediario Tecnologico, delega il Referente a fornire a PagoPA S.p.A.:

* le informazioni relative al tavolo operativo, pena l'impossibilità di procedere all'attivazione dei Servizi della Piattaforma pagoPA; 
* i nominativi del responsabile dell'assistenza da erogare tramite il tavolo operativo di cui sopra e del responsabile dell'adeguamento tecnologico infrastrutturale e applicativo.

Il Prestatore Aderente si impegna, inoltre, a comunicare, tramite il proprio Referente, qualsiasi variazione rispetto alle figure di cui sopra, pena l'impossibilità da parte di PagoPA S.p.A. di garantire la continuità operativa dei Servizi della Piattaforma pagoPA.

Il *Catalogo dei Dati Informativi* è lo strumento con il quale il PSP comunica a PagoPA S.p.A. le informazioni relative ai servizi di pagamento offerti, comprese le condizioni di utilizzo ed i costi massimi di commissione applicati.

Il processo di avvio in Esercizio sul sistema pagoPA di un PSP dipende dai modelli di pagamento e/o dai servizi di pagamento che il PSP intende erogare.

Se il PSP aderente intende implementare i modelli di pagamento attivati presso l'Ente Creditore e/o quelli attivati presso il PSP è necessario che si colleghi direttamente all'infrastruttura della piattaforma pagoPA oppure si faccia intermediare da un altro PSP già attivo su quei modelli di pagamento. In ogni caso, il PSP dovrà rappresentare i servizi offerti all'utenza all'interno del Catalogo Dati Informativi.

Per i PSP che intendono erogare servizi quali CBILL e/o MyBank o che vogliono svolgere il ruolo di Acquirer non è necessaria la presenza di un collegamento diretto alla piattaforma.

## Attivazione di un PSP che si collega direttamente al Nodo

Il Referente del Prestatore che intende attivarsi sul sistema pagoPA attraverso un collegamento diretto alla piattaforma deve individuare la soluzione più adeguata per realizzare un collegamento fisico atto a garantire i livelli di servizio imposti da PagoPA S.p.A. e prevedere anche un piano per il disaster recovery.
Il processo di avvio in Esercizio del Prestatore che si collega direttamente alla piattaforma dei pagamenti prevede il soddisfacimento di alcuni requisiti: 

* l'attivazione di un collegamento fisico con l'ambiente di Test Esterno della piattaforma; 
* l'attivazione di un collegamento fisico con l'ambiente di Esercizio della piattaforma.

Stabiliti i collegamenti, il Referente del PSP può avviare il processo operando come segue:

1. compila il Catalogo Dati Informativi da utilizzare in ambiente di Test Esterno e, insieme ad esso, fornisce a PagoPA S.p.A. tutte le informazioni necessarie a completare la configurazione dei Canali di Pagamento indicati nel Catalogo;
2. procede con l'esecuzione dei test previsti in ambiente di Test Esterno, avvalendosi o meno del supporto del personale di PagoPA S.p.A. per la validazione formale dei risultati dei casi d'uso indicati nel Piano di Test (messo a disposizione da PagoPA S.p.A. sul sito istituzionale).
3. terminata la fase di Collaudo in Test Esterno, il Referente del PSP compila il Catalogo Dati Informativi e, insieme ad esso, fornisce a PagoPA S.p.A. tutte le informazioni necessarie a completare la configurazione dei Canali di Pagamento in ambiente di Esercizio;
4. procede con l'esecuzione dei test previsti in tale ambiente avvalendosi o meno del supporto del personale di PagoPA S.p.A. per la validazione formale dei risultati dei casi d'uso indicati nel Piano di Test;
5. fornisce a PagoPA S.p.A. le informazioni riguardanti il "Tavolo operativo".

Al fine di ultimare il processo di attivazione, il Referente del Prestatore compila il documento di manleva all'esecuzione dei servizi oggetto dei casi di test e lo recapita a PagoPA S.p.A. debitamente firmato. Con la consegna della manleva, il Referente garantisce di aver effettuato con esito positivo, sia in ambiente di Test Esterno che in ambiente di Esercizio, tutti i casi di test previsti da PagoPA S.p.A. alla data di sottoscrizione del documento stesso.

## Attivazione di un PSP che svolge il ruolo di Acquirer

L'attivazione di un PSP che intende svolgere il ruolo di Acquirer comporta l'indicazione da parte dello stesso dell'utilizzo di un Payment Gateway di proprietà o tramite il servizio VPOS di SIA SpA.

## Attivazione di un PSP che offre il servizio CBILL

I Prestatori di Servizi di Pagamento che intendono offrire agli utenti finali il servizio CBILL (del consorzio CBI - Customer to Business Interaction) sul sistema pagoPA hanno un iter di attivazione facilitato, in quanto il Consorzio CBI assume il ruolo di Intermediario Tecnologico ed il PSP ha il solo onere di inviare a PagoPA S.p.A. il "Catalogo Dati Informativi" corredato di tutte le informazioni relative al canale di pagamento CBILL.

## Attivazione di un PSP intermediato

I Prestatori di Servizi di Pagamento aderenti che intendono utilizzare il sistema pagoPA indirettamente, possono servirsi di Intermediari a cui delegano lo svolgimento di tutte le attività tecniche. Per tali attività il PSP "intermediato" farà riferimento alla figura tecnica designata dall'intermediario tecnologico scelto, senza facoltà di nomina o sostituzione in forza dell'avvenuta delega delle attività tecniche.
