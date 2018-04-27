+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+---------------------------------------------------------------+
| **Capitolo 4. IL SISTEMA PAGOPA E IL NODO DEI PAGAMENTI-SPC** |
+---------------------------------------------------------------+

Il sistema pagoPA e il Nodo dei Pagamenti-SPC
=============================================

|image1|

**Figura** **21 – Schema architetturale del sistema pagoPA**

L’interconnessione tra le pubbliche amministrazioni e le piattaforme di
incasso e pagamento dei prestatori dei servizi di pagamento avviene, ai
sensi della normativa vigente, attraverso lo scambio dei flussi previsti
dalle presenti specifiche per il tramite del Nodo dei Pagamenti.

Nella Figura 21 a pagina 60 sono evidenziate le componenti ed i soggetti
che interagiscono tra di loro per consentire lo svolgersi del processo
di pagamento telematico secondo i modelli descritti in precedenza.

Nel presente capitolo saranno brevemente introdotte le caratteristiche
relative alla connettività tra le parti ed i correlati servizi erogati
dal NodoSPC nei confronti dei soggetti aderenti.

Connessione al sistema pagoPA
-----------------------------
.. _Connessione al sistema pagoPA:

In Figura 21 è rappresentato lo schema architetturale del sistema
pagoPA, dove il Nodo dei Pagamenti-SPC costituisce l’*Hub*
(piattaforma) attraverso la quale Enti Creditori e prestatori di servizi
di pagamento colloquiano per consentire agli utilizzatori finali di
effettuare i pagamenti all'interno del sistema.

Le tipologie ammesse di connessione al sistema pagoPA, unitamente alle
specifiche di qualità e sicurezza richieste, sono requisiti di sistema
che devono essere necessariamente conformi al Piano triennale per
l’informatica nella Pubblica amministrazione 2017 – 2019 approvato dal
Presidente del Consiglio dei Ministri il 31 maggio 2017, il quale
prevede, tra l’altro, a carico di AgID la definizione di un “Modello di
interoperabilità”.

Le modalità di attuazione di tale Modello di Interoperabilità
nell’ambito del sistema pagoPA sono specificate in dettaglio in un
documento separato, ancorché collegato alle SANP “Specifiche di
Connessione al sistema pagoPA”, che verrà reso disponibile a aggiornato
mediante la pubblicazione sul sito istituzionale dell’Agenzia per
l’Italia Digitale.

Nelle more di tale pubblicazione resta vigente quanto indicato nella
precedente versione delle SANP. Un ulteriore riferimento può essere
assunto dalle “Linee guida per transitare al nuovo Modello di
interoperabilità”, anche esso pubblicato sul sito istituzionale
dell’Agenzia.

Strutture dati di supporto
--------------------------
.. _Strutture dati di supporto:

Il Dominio è gestito nel Nodo dei Pagamenti-SPC mediante strutture dati
finalizzate all’indirizzamento ed alla gestione di dati a carattere
informativo.

Ai fini dell’indirizzamento, il Nodo dei Pagamenti-SPC censisce gli Enti
Creditori, i prestatori di servizi di pagamento, i loro intermediari
tecnologici ed i sistemi di comunicazione tramite i quali si
interfacciano al Nodo stesso.

Tali informazioni, funzionali alle logiche di instradamento, sono
registrate in una tabella di configurazione a cura dei gestori del Nodo
dei Pagamenti-SPC.

Ai fini della gestione di dati a carattere informativo, vengono
utilizzati le tabelle seguenti:

-  Tabella delle controparti (aderenti lato Ente Creditore)

-  Catalogo Dati Informativi (aderenti lato PSP)

-  Tabella dei c/c da accreditare (aderenti lato Ente Creditore)

-  Catalogo dei servizi generalizzati delle PA

Tabella delle controparti
~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Tabella delle controparti:

La “Tabella delle controparti” è il documento informatico, inviato dal
Nodo dei Pagamenti-SPC ad ogni prestatore di servizi di pagamento, che
contiene l’elenco degli Enti Creditori aderenti al Nodo dei
Pagamenti-SPC e le informazioni sull'erogazione dei servizi dell’Ente
Creditore stesso, compresa l'indicazione relativa alla disponibilità del
pagamento attivato presso il PSP (cosiddetto "Modello 3").

La “Tabella delle controparti” contiene inoltre l'elenco dei codici IBAN
di accredito che gli Enti Creditori sono tenuti a comunicare al Nodo dei
Pagamenti-SPC (`vedi successivo § 4.2.3 <../09-Capitolo_4/Capitolo4.rst#tabella-dei-cc-di-accredito>`__).

La “Tabella delle controparti” viene aggiornata e pubblicata con cadenza
giornaliera.

Catalogo Dati Informativi
~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Catalogo Dati Informativi:

Ai fini della trasparenza delle operazioni, il Nodo dei Pagamenti-SPC
censisce per i PSP i dati sulle condizioni di pagamento (costi massimi
del servizio, pagine web con descrizione dei servizi, ecc.) in un
catalogo alimentato dai PSP stessi mediante il tramite tecnico del
Canale.

Funzionalità di interrogazione del catalogo sono esposte dal Nodo dei
Pagamenti-SPC verso gli Enti Creditori, che le possono utilizzare per le
opportune comunicazioni agli utilizzatori finali.

Il Catalogo dei Dati Informativi viene aggiornato e pubblicato con
cadenza giornaliera.

Tabella dei c/c di accredito
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Tabella dei c/c di accredito:

Al fine di garantire la sicurezza delle transazioni processate, il Nodo
dei Pagamenti-SPC verifica che i codici IBAN presenti nelle Richieste di
pagamento telematico (RPT) siano congruenti con quelli memorizzati in un
apposito archivio sulla base delle informazioni fornite dagli Enti
Creditori.

A tale scopo questi ultimi sono tenuti ad inviare al Nodo dei
Pagamenti-SPC l'elenco dei codici IBAN sui quali effettuare l'accredito
delle somme dovute.

Catalogo dei servizi
~~~~~~~~~~~~~~~~~~~~
.. _Catalogo dei servizi:

Il Catalogo dei Servizi è il *repository* che contiene l’elenco dei
servizi generalizzati, attivati dagli Enti Creditori, relativo al
processo di pagamento attivato presso i PSP in modalità spontanea (`vedi
§ 2.2.3 <../07-Capitolo_2/Capitolo2.rst#pagamento-spontaneo-presso-i-psp>`__).

Il Catalogo dei Servizi viene aggiornato e pubblicato con cadenza
giornaliera.

Controlli
---------
.. _Controlli:

Tutti i flussi/dati scambiati e previsti dai Servizi di Nodo devono
risultare conformi agli Standard di Servizio.

Qualora fosse riscontrata una mancata conformità a detti Standard di
Servizio, il soggetto ricevente ha l’obbligo:

-  di bloccare l’esecuzione del relativo flusso elaborativo e di
   trattamento i dati;

-  rendere disponibile un’evidenza dello stato del flusso a fronte di
   una eventuale situazione di blocco del flusso stesso.

Servizi applicativi di base
---------------------------
.. _Servizi applicativi di base:

Rientrano in questa tipologia tutte le attività per il corretto
svolgimento delle interazioni finalizzate all’inoltro della Richiesta di
Pagamento Telematico – RPT da parte dell’Ente Creditore aderente verso
un PSP e all’inoltro della Ricevuta Telematica – RT da parte di un PSP
verso un Enti Creditori aderente.

Richiesta di Pagamento Telematico
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Richiesta di Pagamento Telematico:

Il Servizio RPT apre il contesto del pagamento telematico. È costituito
dalle operazioni di ricezione delle RPT dagli Enti Creditori aderenti,
di verifica diagnostica, di tracciatura temporale e di inoltro al PSP di
riferimento secondo le indicazioni fornite dall'utilizzatore finale
ovvero secondo regole predefinite di instradamento.

Il Servizio prevede due tipologie di interazione:

-  Ente Creditore Aderente verso Nodo dei Pagamenti-SPC, per la
   ricezione e il trattamento delle RPT inviate dagli Enti Creditori
   aderenti

-  Nodo dei Pagamenti-SPC verso il PSP, per la spedizione delle RPT ai
   PSP e il trattamento dell'esito di accettazione delle RPT.

I flussi di ingresso RPT sono sottoposti a controlli di conformità agli
Standard di Servizio e sono accettati se trasmessi da Enti Creditori e
diretti a PSP appartenenti al Dominio.

Pagamenti multi beneficiario o multi pagatore
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Pagamenti multi beneficiario o multi pagatore:

Il processo di pagamento presso l'Ente Creditore consente di gestire
anche pagamenti di diversi pagatori destinati a molteplici beneficiari
(Enti Creditori) a fronte di un’unica transazione di addebito nei
confronti dell’utilizzatore finale attraverso l’invio al Nodo dei
Pagamenti-SPC di un insieme di RPT [1]_; tale insieme viene denominato
“carrello di RPT” e può essere veicolato nel sistema a condizione che
tutti gli Enti Creditori mittenti presenti nel “carrello RPT” si servano
dello stesso intermediario tecnologico.

Ricevuta Telematica
~~~~~~~~~~~~~~~~~~~
.. _Ricevuta Telematica:

Il Servizio RT chiude il contesto di pagamento telematico ed è
complementare al Servizio RPT. È costituito dalle operazioni di
ricezione delle RT dai PSP, verifica diagnostica, tracciatura temporale
e inoltro all’Ente Creditore aderente di riferimento secondo le
indicazioni memorizzate nella RPT di riferimento che ne determinano
l'instradamento.

Il Servizio prevede due tipologie di interazione:

-  PSP aderente verso Nodo dei Pagamenti-SPC, per la ricezione ed il
   trattamento delle RT inviate;

-  Nodo dei Pagamenti-SPC verso l’Ente Creditore aderente, per la
   spedizione delle RT agli Enti Creditori aderenti e seguente
   trattamento dell'esito di accettazione delle RT. Il contesto di
   pagamento è considerato concluso dopo l'accettazione finale della RT
   da parte dell’Ente Creditore aderente che ha generato la RPT.

I flussi RT di ricezione:

-  sono sottoposti a controlli di conformità agli Standard di Servizio e
   sono accettati se trasmessi da PSP appartenenti al Dominio e riferiti
   a RPT in corso di trattamento presso il Nodo dei Pagamenti-SPC.

Revoca della Ricevuta Telematica
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Revoca della Ricevuta Telematica:

`Come visto nel § 2.1.3.2 <../07-Capitolo_2/Capitolo2.rst#individuazione-del-psp-in-caso-di-pagamento-con-carta>`__ la Revoca della RT si esplica nell’invio di una
richiesta di revoca (RR) da parte del PSP, contenente i riferimenti
della RT oggetto della revoca, al quale corrisponde la valutazione
dell’Ente Creditore e la restituzione al PSP dell’esito di revoca (ER)
che conclude il processo di revoca.

Il Servizio del Nodo dei Pagamenti-SPC prevede quattro tipologie di
interazione tra:

-  Il PSP aderente verso Nodo dei Pagamenti-SPC - invio del documento
   XML Richiesta Revoca - RR con gli estremi della RT che si intende
   revocare;

-  il Nodo dei Pagamenti-SPC verso l’Ente Creditore aderente - inoltro
   della RR e registrazione nel giornale eventi delle tracce
   dell'operazione. Il Nodo considera conclusa l'operazione di richiesta
   revoca dopo la consegna della RR all’Ente Creditore;

-  l’Ente Creditore aderente verso il Nodo dei Pagamenti-SPC - invio
   dell'XML Esito Revoca - ER con l'indicazione di accettazione o
   rifiuto della richiesta di revoca connessa alla RT di riferimento;

-  il Nodo dei Pagamenti-SPC verso il PSP - inoltro della ER e
   registrazione nel giornale eventi delle tracce dell'operazione. Il
   Nodo considera conclusa l'operazione di esito revoca dopo la consegna
   della ER al PSP.

Storno di un pagamento
~~~~~~~~~~~~~~~~~~~~~~
.. _Storno di un pagamento:

`Come visto nel § 2.1.4 <../07-Capitolo_2/Capitolo2.rst#storno-del-pagamento>`__ lo storno di un pagamento si esplica nell’invio
di una richiesta di revoca (RR) da parte dell’Ente Creditore, contenente
i riferimenti della RT oggetto dello storno, al quale corrisponde la
valutazione del PSP e la restituzione all’Ente Creditore dell’esito di
revoca (ER) che conclude il processo di storno.

Il Servizio del Nodo dei Pagamenti-SPC prevede quattro tipologie di
interazione tra:

-  l’Ente Creditore aderente verso Nodo dei Pagamenti-SPC - invio del
   documento XML Richiesta Revoca - RR con gli estremi della RT che si
   intende revocare;

-  il Nodo dei Pagamenti-SPC verso Il PSP aderente - inoltro della RR e
   registrazione nel giornale eventi delle tracce dell'operazione. Il
   Nodo considera conclusa l'operazione di richiesta revoca dopo la
   consegna della RR al PSP;

-  il PSP verso il Nodo dei Pagamenti-SPC - invio dell'XML Esito Revoca
   - ER con l'indicazione di accettazione o rifiuto della richiesta di
   revoca connessa alla RT di riferimento;

-  il Nodo dei Pagamenti-SPC verso l’Ente Creditore - inoltro della ER e
   registrazione nel giornale eventi delle tracce dell'operazione. Il
   Nodo considera conclusa l'operazione di esito revoca dopo la consegna
   della ER all’Ente Creditore.

I flussi RR e ER sono sottoposti a controlli di conformità agli Standard
di Servizio e sono accettati se trasmessi da Enti Creditori appartenenti
al Dominio.

Rendicontazione per gli Enti Creditori
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Rendicontazione per gli Enti Creditori:

Il Servizio “Rendicontazione” mette a disposizione degli Enti Creditori
un flusso, generato da ogni PSP (`si confronti il § 2.7 <../07-Capitolo_2/Capitolo2.rst#riconciliazione-dei-pagamenti>`__), 
che riporta le informazioni necessarie per consentire all’Ente Creditore di procedere
alla riconciliazione tra le RT ricevute e gli importi trasferiti dal PSP
del debitore al PSP dell’Ente Creditore.

Il Nodo dei Pagamenti-SPC mette a disposizione dell’Ente Creditore e del
PSP gli strumenti per lo scambio di tali flussi (vedi anche `§§ 8.1.5 <../15-Capitolo_8/Capitolo8.rst#processo-di-riconciliazione-dei-pagamenti-eseguiti>`__ e `9.2.6 <../16-Capitolo_9/Capitolo9.rst#invio-flusso-di-rendicontazione>`__).

Il periodo temporale durante il quale saranno disponibili le
informazioni relative a tali flussi non sarà inferiore a quindici e non
superiore a trenta giorni lavorativi.

Chiusura operazioni pendenti
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Chiusura operazioni pendenti:

Con riferimento al modello di pagamento ad esecuzione differita (`cfr. § 2.1.2 <../07-Capitolo_2/Capitolo2.rst#processo-di-pagamento-con-autorizzazione-gestita-dal-psp>`_), ma applicabile a tutti i processi di pagamento previsti, è
possibile che una Richiesta di pagamento Telematica (RPT) non abbia
ricevuto la corrispondente Ricevuta Telematica nel periodo durante il
quale il Nodo dei Pagamenti-SPC rende disponibili le RPT in attesa del
relativo esito (`si veda il paragrafo 12.3.1 <../20-Capitolo_12/Capitolo12.rst#periodo-di-ritenzione-delle-rpt-senza-esito>`__ "Periodo di ritenzione delle
RPT senza esito" della Sezione IV).

Al termine di detto periodo il Nodo dei Pagamenti-SPC genera in via
automatica una RT avente esito del pagamento non determinato e la invia
all’Ente Creditore che ha generato la RPT, nello stesso tempo
interagisce con il PSP interessato per richiedere la cancellazione della
RPT dall’archivio per decorrenza dei termini (vedi anche §§ 9.1.7 `vedi anche §§ 9.1.7 <../16-Capitolo_9/Capitolo9.rst#processo-di-notifica-di-chiusura-delle-operazioni-pendenti>`__ e `9.2.9 nella Sezione III <../16-Capitolo_9/Capitolo9.rst#notifica-di-chiusura-delle-operazioni-pendenti>`_).

Modalità Unica d'Interazione - MUI
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Modalità Unica d'Interazione - MUI:

In relazione ai diversi modelli di processo sopra descritti, il Servizio
MUI del Nodo dei Pagamenti-SPC, che non ha interfacce verso i soggetti
aderenti, svolge la funzione di normalizzazione del colloquio tra Ente
Creditore aderente e PSP, svincolando i criteri specifici d'interazione
rispetto ad ogni PSP e rendendo questa differenze trasparenti all’Ente
Creditore.

In particolare, MUI normalizza i flussi operativi per realizzare il
processo di pagamento attuato presso il Portale di Pagamento del PSP
appositamente predisposto dal PSP stesso (`cfr. anche §2.2 <../07-Capitolo_2/Capitolo2.rst#processo-di-pagamento-attivato-presso-il-psp>`_).

Accentramento della scelta del PSP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Accentramento della scelta del PSP:

Il Nodo dei Pagamenti-SPC mette a disposizione degli Enti Creditori
apposite pagine esposte su internet che realizzano le funzionalità WISP
raggiungendo lo scopo di consentire all'utilizzatore finale di scegliere
il servizio di pagamento che più si addice alle proprie esigenze e
consente di standardizzare a livello nazionale la *user experience* dei
pagamenti verso la Pubblica Amministrazione.

Rendicontazione per l’Agenzia delle Entrate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Rendicontazione per l’Agenzia delle Entrate:

Nell’ambito della gestione dell’acquisto della marca da bollo digitale,
una specifica funzione del Nodo dei Pagamenti-SPC provvederà
periodicamente ad inviare all’Agenzia delle entrate, per conto di tutti
gli Enti Creditori accreditati sul Nodo dei Pagamenti-SPC, il flusso di
rendicontazione previsto al punto 5.4 del Provvedimento del Direttore
dell’Agenzia delle Entrate del 19 settembre 2014.

Sincronizzazione con la componente di gestione SFTP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Sincronizzazione con la componente di gestione SFTP:

Il Nodo dei Pagamenti-SPC mette a disposizione degli Enti Creditori e
dei PSP la possibilità di completare la ricezione e l'invio di flussi
massivi di informazioni, che oggi avviene attraverso modalità SOAP
sincrona (ad esempio: flussi di rendicontazione, totali di traffico,
ecc.), in modalità file transfer sicuro (SFTP).

**La funzione è al momento attiva solo per la ricezione dei flussi di**
**rendicontazione** (`vedi § 5.3.5 <../11-Capitolo_5/Capitolo5.rst#flusso-di-rendicontazione>`__) **da parte degli Enti Creditori.**

Servizi applicativi opzionali
-----------------------------
.. _Servizi applicativi opzionali:

Rientrano in questa tipologia tutte le funzioni che il Servizio mette a
disposizione dei soggetti appartenenti al Dominio e che possono da
questi essere utilizzate nell’ambito dello svolgimento delle proprie
attività.

Totali di traffico
~~~~~~~~~~~~~~~~~~
.. _Totali di traffico:

Il Servizio di Quadratura dei flussi di traffico mette a disposizione
dei soggetti appartenenti al Dominio che ne facciano richiesta, un
flusso periodico relativo a tutte le interazioni (RPT e RT) transitate
attraverso il Nodo dei Pagamenti-SPC e di stretta pertinenza del singolo
richiedente.

Il Nodo dei Pagamenti-SPC mette a disposizione dell’Ente Creditore e del
PSP gli strumenti per la ricezione di tali flussi (`vedi §§ 8.1.5 <../15-Capitolo_8/Capitolo8.rst#processo-di-riconciliazione-dei-pagamenti-eseguiti>`__ e `9.2.11 <../16-Capitolo_9/Capitolo9.rst#ricezione-totali-di-traffico>`__).

Il periodo temporale durante il quale saranno disponibili i flussi
relativi ai “Totali di Traffico” non potrà superare i 10 giorni di
calendario e sarà comunque pubblicato sul sito dell’Agenzia per l’Italia
Digitale.

Servizi operativi
-----------------
.. _Servizi operativi:

Sono classificati come Servizi Operativi tutte le attività propedeutiche
o a supporto dell’erogazione del Servizio.

Tavolo Operativo e gestione delle anomalie (*Incident*)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Tavolo Operativo e gestione delle anomalie (*Incident*):

Il Servizio rende disponibile un Tavolo operativo di primo livello, il
quale:

-  costituisce il punto unico di contatto per ogni soggetto – Enti
   Creditori e PSP aderenti;

-  recepisce le richieste provenienti da Enti Creditori e PSP aderenti,
   ovvero rileva le segnalazioni di incidente riscontrate o supposte -
   proveniente dai citati soggetti utenti del Servizio, dal proprio
   sistema di monitoraggio o dal proprio personale aziendale;

-  registra e classifica le richieste/segnalazioni mediante *Trouble Ticketing*
   e dà inizio, per ognuna di queste, a tutte le attività
   necessarie all’identificazione della soluzione.

Qualora il primo livello operativo non sia in grado di fornire una
soluzione adeguata alle necessità, la richiesta è assegnata alle
strutture di supporto di secondo livello per la presa in carico della
richiesta medesima, l’individuazione del problema e la sua eventuale
risoluzione.

A seguito dell’analisi effettuata dal secondo livello, qualora emergesse
un problema nel software applicativo, è aperto un *Change Order* al
terzo livello di supporto per l’opportuno intervento correttivo.

Per l’accesso ai servizi del tavolo operativo si faccia riferimento al
sito dell’Agenzia.

Monitoring e controllo
~~~~~~~~~~~~~~~~~~~~~~
.. _Monitoring e controllo:

Il Servizio prevede la disponibilità di un sistema di tracciamento degli
eventi e di strumenti per controllo avanzamento/stati a disposizione dei
Tavoli Operativi di Enti Creditori e PSP aderenti.

È previsto un sistema di controllo focalizzato sulla verifica della
corretta applicazione degli Standard di Servizio (p.e. norme di
comportamento, livelli di servizio garantiti, ecc.) e dei processi che
da questi derivano.

A supporto del sistema di controllo, ogni componente del Servizio, per
ogni singolo evento rilevante dal punto di vista applicativo, effettua
una scrittura che ne tenga traccia nel registro degli eventi. L’insieme
di tali registrazioni costituisce il “Giornale degli Eventi”, il quale
riporta gli estremi degli eventi verificatisi così come indicato negli
Standard di Servizio.

Reporting
~~~~~~~~~
.. _Reporting:

Il Servizio rende disponibile la consultazione, l’analisi e
l’esportazione di:

-  dati e statistiche di tipo Amministrativo;

-  dati da Giornale degli Eventi;

-  statistiche sui flussi scambiati nell’ambito del Dominio, nel
   rispetto delle regole di riservatezza e competenza delle
   registrazioni.

Report “Commissioni a carico PA”
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Report “Commissioni a carico PA”:

Premesso che le presenti linee guida hanno come presupposto le
disposizioni primarie in materia di pagamenti, si evidenzia che i PSP
abilitati sul Nodo dei Pagamenti-SPC operano in qualità di PSP del
pagatore e, pertanto, potranno richiedere le loro commissioni
esclusivamente all’utilizzatore finale, indipendentemente che
quest’ultimo si configuri quale cliente abituale o occasionale.

La pubblica amministrazione potrà essere chiamata al pagamento di
commissioni relative alle operazioni di pagamento in suo favore eseguite
attraverso il Nodo dei Pagamenti-SPC, se del caso, solo previo
convenzionamento del/i PSP attraverso CONSIP e/o le centrali di
committenza regionali.

In tale evenienza, nell’ambito del servizio di *reporting*, il sistema -
**quale terza parte fidata** - mette a disposizione di Enti Creditori e
PSP, ciascuno per le informazioni di propria competenza, un documento
contente l’elenco ed i relativi totali, per controparte, delle RPT
scambiate nel mese di riferimento che contengono un valore non nullo nel
dato commissioneCaricoPA presente nella struttura della RPT denominata
datiSingoloVersamento (`vedi § 5.3.1 della Sezione II <../11-Capitolo_5/Capitolo5.rst#richiesta-pagamento-telematico-rpt>`__).

Per ogni coppia Ente Creditore / PSP sarà generata un elenco contenente
il dettaglio delle RPT che hanno dato luogo ad una RT recepita dal Nodo
dei Pagamenti-SPC (e non necessariamente inoltrata all’Ente Creditore).

In particolare, per ogni occorrenza della coppia formata da
datiSingoloVersamento della RPT + datiSingoloPagamento della RT (vedi §
della Sezione II), saranno fornite le seguenti informazioni:

-  codice IUV

-  data e ora RPT

-  data e ora RT

-  importo versamento (da RPT)

-  importo commissione a carico dell'Ente Creditore (da RPT)

-  importo commissione applicata dal PSP (da RT, se presente)

-  codice esito (da RT)

i relativi totali saranno forniti sia per le RT aventi esito positivo,
sia per quelle aventi esito negativo.

A richiesta, è possibile ricevere dette informazioni in modalità
elettronica e codificate all’interno di un file di testo in formato CSV
(*Comma-Separated Values*).

`Torna all'indice <../../index.rst>`__

.. [1]
   Ogni Richiesta di Pagamento Telematico (RPT) consente pagamenti
   indirizzati ad un unico ente beneficiario.

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
.. |image1| image:: ./myMediaFolder/media/image2.png
   :width: 5.51181in
   :height: 3.85849in
