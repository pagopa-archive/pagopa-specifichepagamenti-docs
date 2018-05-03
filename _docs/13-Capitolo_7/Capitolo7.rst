+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+------------------------------------------------+
| **Capitolo 7. IDENTIFICAZIONE DEL VERSAMENTO** |
+------------------------------------------------+

Identificazione del versamento
==============================

Nel presente capitolo sono date indicazioni circa le modalità con le
quali deve essere gestito il codice che identifica in modo univoco, a
livello di Ente Creditore, l’operazione di pagamento nell’ambito del
“Sistema pagoPA”.

Identificativo Univoco Versamento
---------------------------------
.. _Identificativo Univoco Versamento:

L’elemento “IdentificativoUnivocoVersamento” (detto anche codice IUV) è
presente nelle strutture dati definite nel CAPITOLO 5 (Richiesta di
Pagamento Telematico **RPT**, Ricevuta Telematica **RT**, ecc.) e
rappresenta, insieme al codice fiscale dell’Ente Creditore, il modo con
il quale il pagamento è univocamente riconosciuto all’interno del
Sistema.

Il codice IUV è generato dell’Ente Creditore ovvero da un soggetto terzo
da questi autorizzato con le modalità indicate nella Sezione I del
documento Allegato A alle Linee guida.

Causale di versamento
---------------------
.. _Causale di versamento:

L’informazione denominata “causaleVersamento” è un dato obbligatorio
presente sia nella struttura dati della RPT, sia nella struttura dati
della RT (`cfr. §§ 5.3.1 <../11-Capitolo_5/Capitolo5.rst#richiesta-pagamento-telematico-rpt>`__ e `5.3.2 <../11-Capitolo_5/Capitolo5.rst#ricevuta-telematica-rt>`__). Tale dato contiene il codice IUV o
l’identificativo del Flusso di Rendicontazione e deve esser conforme
alle indicazioni riportate nella Sezione I delle Allegato A alle Linee
guida.

Codice Contesto Pagamento
-------------------------
.. _Codice Contesto Pagamento:

L’informazione denominata “codiceContestoPagamento” è un dato
obbligatorio presente sia nella struttura dati della RPT, sia nella
struttura dati della RT (`cfr. §§ 5.3.1 <../11-Capitolo_5/Capitolo5.rst#richiesta-pagamento-telematico-rpt>`__ e `5.3.2 <../11-Capitolo_5/Capitolo5.rst#ricevuta-telematica-rt>`__) e serve a
contestualizzare e rendere univoco lo specifico pagamento insieme ai
dati Codice Fiscale dell’Ente Creditore e codice IUV.

Pagamenti attivati presso l’Ente Creditore
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Pagamenti attivati presso l’Ente Creditore:

Nel caso in cui il processo di pagamento sia attivato presso l’Ente
Creditore (`cfr. § 2.1 <../07-Capitolo_2/Capitolo2.rst#processo-di-pagamento-attivato-presso-lente-creditore>`__), il dato codiceContestoPagamento è impostato
dall’Ente Creditore stesso.

Per tutte le tipologie di pagamenti che non prevedono la generazione di
un avviso di pagamento si raccomanda di utilizzare il valore
“**n/a**” (già indicato nelle versioni precedenti delle presenti
specifiche).

Pagamenti attivati presso le strutture del PSP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Pagamenti attivati presso le strutture del PSP:

Nel caso in cui il processo di pagamento sia attivato presso le
strutture del PSP (`cfr. § 2.2 <../07-Capitolo_2/Capitolo2.rst#processo-di-pagamento-attivato-presso-il-psp>`__), il dato codiceContestoPagamento contiene
un codice univoco [1]_ generato a cura del prestatore di servizi di
pagamento e fornito all’Ente Creditore dal Nodo dei Pagamenti-SPC
nell’ambito delle varie fasi del processo (`cfr. § 9.1.2 della Sezione
III <../16-Capitolo_9/Capitolo9.rst#pagamenti-attivati-presso-il-psp>`__).

Il dato codiceContestoPagamento non compare sull’avviso di pagamento
analogico (`vedi § 2.4 <../07-Capitolo_2/Capitolo2.rst#avviso-di-pagamento>`__); tale informazione serve, in combinazione con il
codice IUV, ad identificare univocamente la specifica operazione di
pagamento da parte del PSP. Le specifiche di interconnessione con il
Nodo dei Pagamenti-SPC prevedono infatti che l'Ente Creditore - che
riceve detto codice attraverso funzioni specifiche del NodoSPC - lo
debba inserire nella RPT da lui stesso generata; tale informazione sarà
poi riportata anche nella RT generata a cura del PSP. In questo modo è
possibile garantire l'identificazione corretta delle tre fasi del
pagamento che saranno rintracciabili anche con l'ausilio del Giornale
degli eventi (`vedi capitolo 6 <../12-Capitolo_6/Capitolo6.rst>`__).

Identificazione del versamento presso le strutture dei PSP
----------------------------------------------------------
.. _Identificazione del versamento presso le strutture dei PSP:

Nel caso in cui il processo di pagamento sia attivato presso le
strutture del PSP (`vedi § 2.2 <../07-Capitolo_2/Capitolo2.rst#processo-di-pagamento-attivato-presso-il-psp>`__), è necessario predisporre in modo
appropriato le informazioni necessarie al PSP per consentire il corretto
svolgimento dell’operazione e favorire la gestione automatica del
processo stesso, che viene supportato da un avviso di pagamento relativo
ad ogni istanza pagamento in attesa generato dall’Ente Creditore.

Oltre al codice IUV, è necessario che gli Enti Creditori indichino in
chiaro negli avvisi di pagamento analogici le informazioni indicate
nella Tabella 30 a pagina 111, al fine di consentire all’utilizzatore
finale di inserire le richiamate informazioni all’atto del pagamento.

Inoltre è altresì necessario che gli Enti Creditori riproducano negli
avvisi di pagamento analogici uno o più codici grafici mono o
bidimensionali (così come indicato nel `§ 7.4.2 <../13-Capitolo_7/Capitolo7.rst#automazione-dellavviso-di-pagamento-analogico>`__) che contengono le stesse
informazioni già indicate in chiaro: il tutto al fine di consentire al
PSP l’automazione della lettura delle richiamate informazioni atte ad
identificare l’avviso di pagamento per poi procedere
all’inizializzazione della relativa operazione.

Il Numero Avviso e l’archivio dei pagamenti in attesa
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Il Numero Avviso e l’archivio dei pagamenti in attesa:

Sulla base dei requisiti sopra indicati gli Enti Creditori devono
definire e alimentare l’Archivio dei pagamenti in attesa, che è
rappresentato dall’insieme di uno più archivi fisici o logici,
eventualmente ripartito secondo le necessità dell’Ente Creditore (ad
esempio: diverse sedi anche presso diversi intermediari, applicazioni
dedicate, ecc.).

Per accedere a questo archivio è necessario impostare un codice
(**Numero Avviso**) che gli Enti Creditori devono rendere disponibile
sul singolo avviso di pagamento in più versioni, in funzione dei
possibili diversi strumenti messi a disposizioni dal PSP.

Come indicato nel capitolo 2 dell’Allegato A alle Linee guida, il
formato del **Numero Avviso** è il seguente:

+----------------------------------------------------------------+--------------------------------------------------------+
| <aux digit (1n)>[<application code> (2n)]<codice IUV (15|17n)>   (A) [2]_                                               |
+================================================================+========================================================+
| **aux digit**                                                  | Valore numerico che definisce la struttura del codice  |
|                                                                | IUV in funzione del numero di punti di generazione     |
|                                                                | dello stesso;                                          |
+----------------------------------------------------------------+--------------------------------------------------------+
| **application code**                                           | Valore numerico che serve ad individuare la porzione   |
|                                                                | dell’archivio dei pagamenti in attesa interessata      |
|                                                                | dall’operazione. Il dato è presente o meno in funzione |
|                                                                | del componente <aux digit>;                            |
+----------------------------------------------------------------+--------------------------------------------------------+
| **codice IUV**                                                 | Rappresenta l'identificativo univoco di versamento,    |
|                                                                | così come definito nel paragrafo 7.1 delle Linee       |
|                                                                | guida. Ad un singolo pagamento in attesa può essere    |
|                                                                | associato uno ed un solo codice IUV, indipendentemente |
|                                                                | dai possibili diversi strumenti messi a disposizioni   |
|                                                                | dal PSP.                                               |
+----------------------------------------------------------------+--------------------------------------------------------+

La componente <**application code>** identifica, quando presente, il
singolo archivio di pagamenti in attesa che viene indirizzato mediante i
meccanismi di configurazione del NodoSPC, che sarà in questo modo in
grado di individuare il canale corretto di inoltro delle richieste di
verifica e attivazione di pagamento (`cfr. § 8.2.3 della Sezione III <../15-Capitolo_8/Capitolo8.rst#pagamenti-in-attesa-e-richiesta-di-generazione-della-rpt>`__).

Automazione dell’avviso di pagamento analogico
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Automazione dell’avviso di pagamento analogico:

Al fine di gestire gli avvisi di pagamento con strumenti che consentano
l’acquisizione automatica dei dati presenti sull’avviso stesso, gli Enti
Creditori devono tenere presente il contesto nel quale tale documento
verrà utilizzato presso le strutture dei vari PSP e formattare in modo
adeguato le codifiche previste (ad esempio: aggiungere eventuali codici
di controllo quando richiesti per l’elaborazione del pagamento).

Come indicato nella monografia “*L’Avviso di pagamento analogico nel*
*sistema pagoPA*”, pubblicata sul sito AgID, l’Ente Creditore deve
stampare sull’avviso di pagamento uno o più codici grafici mono o
bidimensionali che contengono le informazioni necessarie per
identificare in modo automatico il pagamento (vedi anche i paragrafi 0 e
`7.4.4 <../13-Capitolo_7/Capitolo7.rst#utilizzo-del-codice-a-barre-sullavviso-di-pagamento>`__).

Le informazioni inerenti il versamento, da codificare all’interno dei
codici grafici (mono o bidimensionali) sono quelle indicate in Tabella
30.

**Tabella** **30 - Dati per automazione dell'avviso di pagamento**

+--------------------------+---------+------------+---------+---------+-----------------------------------------------------+
|         **Dato**         | **Liv** | **Genere** | **Occ** | **Len** | **Contenuto**                                       |
+--------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| codiceIdentificativoEnte | 1       | n          | 1..1    | 11..13  | Identificativo dell’Ente Creditore.                 |
|                          |         |            |         |         | Può assumere il valore di Codice Fiscale,           |
|                          |         |            |         |         | ovvero un valore definito dalla specifica           |
|                          |         |            |         |         | codifica adottata.                                  |
+--------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| numeroAvviso             | 1       | n          | 1..1    | 8..18   | È il numero che l’Ente Creditore attribuisce        |
|                          |         |            |         |         | all’avviso di pagamento. È composto secondo         |
|                          |         |            |         |         | il formato indicato al paragrafo                    |
|                          |         |            |         |         | `7.4.1 <../13-Capitolo_7/Capitolo7.rst#il-numero-   |
|                          |         |            |         |         | avviso-e-larchivio-dei-pagamenti-in-attesa>`_       |
+--------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| importoVersamento        | 1       | an         | 1..1    | 3..12   | Campo numerico (due cifre per la parte decimale,    |
|                          |         |            |         |         | il separatore dei centesimi è il punto “.”),        |
|                          |         |            |         |         | indicante l’importo relativo alla somma da versare. |
|                          |         |            |         |         |                                                     |
|                          |         |            |         |         | **Deve essere diverso da “0.00”.**                  |
+--------------------------+---------+------------+---------+---------+-----------------------------------------------------+

Qualora l’importo del pagamento non sia conosciuto al momento della
stampa dell’avviso, il dato importoVersamento sarà impostato al valore
di comodo 0: in questo caso il PSP, che recepisce tale dato
decodificando i codici grafici stampati sull’avviso, gestisce
l’eccezione richiedendo all’utilizzatore finale l’importo da pagare e lo
utilizza nell’invocazione delle primitive modello 3 (`vedi §§ 9.2.3.1 <../16-Capitolo_9/Capitolo9.rst#nodoverificarpt>`_ e
`9.2.3.2 <../16-Capitolo_9/Capitolo9.rst#nodoattivarpt>`_).

È compito dell’Ente Creditore recepire tale informazione e interagire di
conseguenza con il proprio archivio dei pagamenti in attesa.

Utilizzo del QR code sull’avviso di pagamento
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Utilizzo del QR code sull’avviso di pagamento:

Il Codice QR (in inglese QR Code) è un codice a barre bidimensionale
adottato da ISO (*ISO/IEC 18004:2015 Information technology - Automatic*
*identification and data capture techniques - QR Code bar code symbology*
*specification*) ed impiegato per memorizzare informazioni generalmente
destinate ad essere lette tramite diversi dispositivi, tra cui anche
smartphone, tablet, ATM, ecc.

La stringa dati codificata all'interno del QRcode è quella riportata in
Tabella 31.

**Tabella** **31 - Dati per la stringa da inserire all’interno del QRcode**

+----------------------+---------+------------+---------+---------+----------------------------------------------+
|       **Dato**       | **Liv** | **Genere** | **Occ** | **Len** | **Contenuto**                                |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Codiceidentificativo | 1       | an         | 1..1    | 6       | Assume il valore fisso: “PAGOPA”.            |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Separatore           | 1       | an         | 1..1    | 1       | Separatore dei dati: costituito dalla barra  |
|                      |         |            |         |         | verticale ("|"), ASCII 124.                  |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Versione             | 1       | an         | 1..1    | 3       | Assume il valore fisso “002”.                |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Separatore           | 1       | an         | 1..1    | 1       | Separatore dei dati.                         |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| NumeroAvviso         | 1       | an         | 1..1    | 8..18   | Contiene il Numero Avviso composto dalla     |
|                      |         |            |         |         | concatenazione dei dati: aux, digit,         |
|                      |         |            |         |         | application code, codice IUV                 |
|                      |         |            |         |         | (vedi Tabella 30)                            |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Separatore           | 1       | an         | 1..1    | 1       | Separatore dei dati.                         |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| IdentificativoEnte   | 1       | an         | 1..1    | 11      | Codice fiscale dell’Ente Creditore, che      |
|                      |         |            |         |         | corrisponde al dato codiceIdentificativoEnte |
|                      |         |            |         |         | (vedi Tabella 30)                            |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Separatore           | 1       | an         | 1..1    | 1       | Separatore dei dati.                         |
+----------------------+---------+------------+---------+---------+----------------------------------------------+
| Importo              | 1       | n          | 1..1    | 2..10   | Importo del pagamento in centesimi di euro   |
|                      |         |            |         |         | (vedi Tabella 30)                            |
+----------------------+---------+------------+---------+---------+----------------------------------------------+

+-----------------------------------+-----------------------------------+
| Stante quanto indicato nella      | |NuovoQR.png|                     |
| tabella sopra riportata, la       |                                   |
| stringa di dati da codificare     |                                   |
| all'interno del QRcode potrebbe   |                                   |
| assumere la configurazione        |                                   |
| seguente:                         |                                   |
|                                   |                                   |
| **PAGOPA|002|123456789012345678|**|                                   |
| **12345678901|1234567801**        |                                   |
|                                   |                                   |
| (si tenga presente che la stringa |                                   |
| sopra riportata presuppone        |                                   |
| l’inserimento dei dati previsti   |                                   |
| nella loro massima estensione)    |                                   |
+-----------------------------------+-----------------------------------+

In Tabella 32 sono riportate le caratteristiche tecniche che devono
essere applicate nella generazione del QRcode.

**Tabella** **32 - Parametri per la generazione del QRcode**

+--------------------+-------------------------------+
| **Caratteristica** | **Valore da utilizzare**      |
+====================+===============================+
| Symbol Version     | 4                             |
+--------------------+-------------------------------+
| Modules            | 33x33                         |
+--------------------+-------------------------------+
| Modules width      | 3 pixels                      |
+--------------------+-------------------------------+
| ECC level          | M (correzione errore max 15%) |
+--------------------+-------------------------------+
| Character set      | UTF-8                         |
+--------------------+-------------------------------+

Utilizzo del codice a barre sull’avviso di pagamento
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Utilizzo del codice a barre sull’avviso di pagamento:

Per codificare le informazioni di cui sopra all’interno di codici a bare
monodimensionali si potrà fare riferimento, a titolo di esempio, alla
codifica C del Codice GS1-128 che è oggi largamente impiegata per
l’effettuazione dei pagamenti delle bollette delle “utilities” (energia
elettrica, gas, acqua, ecc.) presso le casse dei supermercati e gli
sportelli delle reti SISAL, Lottomatica e Tabaccai ovvero al codice
monodimensionale Code 128 AIM USS-128 tipo C, utilizzato principalmente
sui bollettini di conto corrente postale.

Si precisa altresì che il dato codiceIdentificativoEnte (vedi Tabella
30) è rappresentato, nel caso della codifica C del Codice GS1-128, dal
Global Location Number (GLN, Application Identifier 415) dell’Ente
Creditore (13 caratteri numerici), mentre nel caso del Code 128 AIM
USS-128 tipo C, tale dato è rappresentativo del codice di conto corrente
postale.

Il Nodo dei Pagamenti-SPC si fa carico di gestire, con apposite
funzioni, le varie codifiche supportate (`cfr. § 9.1.2 <../16-Capitolo_9/Capitolo9.rst#pagamenti-attivati-presso-il-psp>`__).

Le modalità di predisposizione dei codici a barre sopra citati sono
indicate nella Sezione II della monografia “*L’Avviso di pagamento*
*analogico nel sistema pagoPA*”, pubblicata sul sito AgID.

Comunicazioni all'utilizzatore finale
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Comunicazioni all'utilizzatore finale:

Nel *workflow* del processo di pagamento attivato presso le strutture
del PSP è importante fornire all'utilizzatore finale informazioni circa
il pagamento contenuto nell'Avviso che si accinge ad eseguire, quali le
possibili variazioni dell'importo dovute ad eventi successivi all'invio
dell'Avviso stesso (ad esempio: superamento della data di scadenza del
pagamento).

Per tale comunicazione l'Ente Creditore deve utilizzare l'apposito
parametro causaleVersamento previsto come output dalla primitiva
**paaVerificaRPT** (`vedi § 8.2.3.1 <../15-Capitolo_8/Capitolo8.rst#paaverificarpt>`__, parametro O-2), dato che sarà
fornito al PSP come risposta alla primitiva **nodoVerificaRPT** (`vedi
§ 9.2.3.1 <../16-Capitolo_9/Capitolo9.rst#nodoverificarpt>`__, parametro O-2-f).

Al fine di automatizzare anche la fase di comunicazioni con
l'utilizzatore finale presso il PSP, è stato definito uno standard di
formattazione per il dato causaleVersamento che può assumere i formati
indicati in Tabella 33.

**Tabella** **33 - Formati previsti per il dato causaleVersamento nella**
**response delle primitive SOAP**

**Formato A**

+-------------------+---------+------------+---------+---------+----------------------------------------------+
|      **Dato**     | **Liv** | **Genere** | **Occ** | **Len** | **Contenuto**                                |
+-------------------+---------+------------+---------+---------+----------------------------------------------+
| causaleVersamento | 1       | an         | 1..1    | 140     | Testo libero a disposizione dell’Ente        |
|                   |         |            |         |         | per descrivere le motivazioni del pagamento. |
+-------------------+---------+------------+---------+---------+----------------------------------------------+

**Formato B**

+-----------------------------+---------+------------+---------+---------+----------------------------------------+
|               **Dato**      | **Liv** | **Genere** | **Occ** | **Len** | **Contenuto**                          |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+
| spezzoniCausaleVersamento   | 1       | s          | 1..1    |         | Testo libero a disposizione dell’Ente  |
|                             |         |            |         |         | per descrivere le motivazioni del      |
|                             |         |            |         |         | pagamento.                             |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+
| spezzoneCausaleVersamento   | 2       | an         | 1..6    | 35      | Spezzone di testo libero.              |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+
| **Oppure, in alternativa a spezzoneCausaleVersamento, la struttura sotto indicata**                             |
|                                                                                                                 |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+
| spezzoneStrutturato         | 2       | s          | 1..6    |         | Spezzone strutturato.                  |
| CausaleVersamento           |         |            |         |         |                                        |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+
| causaleSpezzone             | 3       | an         | 1..1    | 25      | Causale di pagamento legata al         |
|                             |         |            |         |         | singolo spezzone.                      |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+
| importoSpezzone             | 3       | an         | 1..1    | 10      | Campo numerico (due cifre per la       |
|                             |         |            |         |         | parte decimale, il separatore dei      |
|                             |         |            |         |         | centesimi è il punto “.”), indicante   |
|                             |         |            |         |         | l’importo relativo alla somma facente  |
|                             |         |            |         |         | capo allo spezzone.                    |
+-----------------------------+---------+------------+---------+---------+----------------------------------------+

L'Ente Creditore può scegliere quale tipo di formato utilizzare; il PSP
rende disponibili tali informazioni all'utilizzatore finale.

`Torna all'indice <../../index.rst>`__

.. [1]
   ad esempio: il GUID (Globally Unique IDentifier, identificatore unico
   globale) nelle forme compatibili con la lunghezza massima del dato
   stesso, prevista in 35 caratteri.

.. [2]
   Si noti come, nella rappresentazione dello schema (A), il componente
   all'interno delle parentesi quadre (<**application code>**) potrebbe
   non essere presente nel Numero Avviso.

   La previsione del carattere di controllo dello IUV non comporta per
   il PSP l’obbligo bensì la facoltà di verifica, consentendo al PSP
   stesso di controllare il Numero Avviso, con evidente efficientamento
   del processo di pagamento in quanto evita preventivamente la
   ricezione di risposte negative inviate dall’Ente Creditor

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
.. |NuovoQR.png| image:: ./myMediaFolder/media/image2.png
   :width: 1.03125in
   :height: 1.03125in
