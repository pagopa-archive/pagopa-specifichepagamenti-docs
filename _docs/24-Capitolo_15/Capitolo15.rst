+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+-----------------------------------+
| **Capitolo 15. SPECIFICHE – XSD** |
+-----------------------------------+

Specifiche – XSD
================
.. _Specifiche – XSD:

Di seguito si riportano gli schemi XML (XSD) descrittivi del contenuto
dei file XML utilizzati per l’esecuzione dei pagamenti informatici.
Tutti i file XSD elencati nel seguito e la relativa documentazione di
dettaglio sono forniti in formato elettronico nell’apposita sezione del
sito dell’Agenzia per l’Italia Digitale.

Oggetti scambiati per la gestione del processo di pagamento
-----------------------------------------------------------
.. _Oggetti scambiati per la gestione del processo di pagamento:

La Richiesta di Pagamento Telematico (RPT) e la Ricevuta Telematica (RT)
sono i documenti fondamentali del processo di pagamento 
(`vedi anche §§ 5.3.1 <../11-Capitolo_5/Capitolo5.rst#richiesta-pagamento-telematico-rpt>`_ e `5.3.2 della Sezione II <../11-Capitolo_5/Capitolo5.rst#ricevuta-telematica-rt>`_): sono predisposte rispettivamente dall’Ente Creditore e dal prestatore di servizi di pagamento interessato; la trasmissione alle controparti avviene tramite il Nodo dei Pagamenti-SPC.

Lo schema XSD di tali oggetti è disponibile con il file

**PagInf_RPT_RT_<versione>.xsd.**

Altri oggetti sono la Richiesta di Revoca (RR) e l'Esito Revoca (ER),
utilizzati al momento per la gestione del processo di storno (`vedi §§ 2.1.4 <../07-Capitolo_2/Capitolo2.rst#storno-del-pagamento>`_, `5.3.3 <../11-Capitolo_5/Capitolo5.rst#richiesta-di-revoca-rr>`_, `5.3.4 <../11-Capitolo_5/Capitolo5.rst#esito-della-revoca-er>`_); la trasmissione alle controparti avviene tramite
il Nodo dei Pagamenti-SPC.

Lo schema XSD di tali oggetti è disponibile con il file

**RR_ER_ <versione>.xsd.**

Per il pagamento della marca da bollo digitale (`vedi § 2.8 <../07-Capitolo_2/Capitolo2.rst#acquisto-della-marca-da-bollo-digitale>`_) la RT trasporta la marca da bollo, richiesta tramite la RPT, come allegato, il cui schema XSD è disponibile con il file

**MarcaDaBollo_ <versione>.xsd.**

Avvisatura digitale
-------------------
.. _Avvisatura digitale:

Il processo di avvisatura digitale *push* prevede lo scambio di avvisi
digitali sia tramite l’utilizzo di *web services* (`vedi § 8.2.7 <../15-Capitolo_8/Capitolo8.rst#avvisatura-digitale-push-su-iniziativa-dellente-creditore>`_), sia via file transfer (`vedi § 8.5.2 <../15-Capitolo_8/Capitolo8.rst#specifiche-di-interfaccia-per-il-trasferimento-delle-richieste-di-avviso-digitale>`_); in quest’ultimo caso l’Ente Creditore
invia flussi contenenti gli avvisi e riceve l’esito di tale invio
attraverso un apposito flusso

Gli schemi schema XSD di tali oggetti sono disponibili con i file

**avvisi-digitali_<versione>.xsd** e **presa-in-carico_1.0_<versione>.xsd**.

Gli schemi XSD sopra indicati condividono con il WSDL
**NodoPerPaAvvisiDigitali** alcune definizioni attraverso il file

**sac-common-types_<versione>.xsd.**

Informazioni per gli aderenti al sistema
----------------------------------------
.. _Informazioni per gli aderenti al sistema:

Il Nodo dei Pagamenti-SPC assolve l'obbligo di raccogliere dagli enti
aderenti al Nodo dei Pagamenti-SPC una serie di informazioni necessarie
al funzionamento del sistema (`cfr. § 4.2 <../09-Capitolo_4/Capitolo4.rst#strutture-dati-di-supporto>`_) e renderle quindi disponibili
agli Enti Creditori ed ai PSP.

Nella tabella delle controparti sono indicate le condizioni tecniche ed
i livelli di servizio relativi previsti da parte degli Enti Creditori
nei confronti dell’utilizzatore finale.

Informativa da Ente Creditore
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Informativa da Ente Creditore:

Gli schemi appresso indicati definiscono la struttura che le gli Enti
Creditori devono utilizzare per compilare il documento elettronico da
inviare al Nodo dei Pagamenti-SPC tramite PEC in fase di adesione,
ovvero quando si devono apportare modifiche al profilo dell’ente.

Nel caso del pagamento attivato presso il PSP, gli Enti Creditori devono
indicare il periodo in cui l'archivio dei pagamenti in attesa è
disponibile, ciò al fine di evitare disservizi all’utente finale e
richieste senza risposta negli orari in cui i servizi degli Enti
Creditori non sono disponibili; le informazioni contenute in questo
schema sono quelle riportate nella Tabella 7 del `§ 5.3.6.1 <../11-Capitolo_5/Capitolo5.rst#informazioni-inviate-dagli-enti-creditori>`_.

Lo schema XSD di tale oggetto è disponibile con il file

**TabellaDelleControparti_<versione>.xsd**

Gli enti Creditori forniscono al NodoSPC anche le informazioni inerenti
i c/c da accreditare; le informazioni contenute in questo schema sono
quelle riportate nella Tabella 8 del `§ 5.3.6.1 <../11-Capitolo_5/Capitolo5.rst#informazioni-inviate-dagli-enti-creditori>`_.

Lo schema XSD di tale oggetto è disponibile con il file

**InformativaContoAccredito_<versione>.xsd.**

Informativa fornita dal Nodo ai PSP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Informativa fornita dal Nodo ai PSP:

Il Nodo dei Pagamenti-SPC rende disponibili ai PSP le informazioni
fornite dagli Enti Creditori mediante il metodo
**nodoChiediInformativaPA** (`vedi § 9.2.10.1 <../16-Capitolo_9/Capitolo9.rst#nodochiediinformativapa>`_) 
dell'interfaccia **NodoPerPsp**.

In particolare viene restituita al PSP un’aggregazione di nome
listaInformativaControparte che contiene da 1 a n elementi
corrispondenti alle informazioni raccolte e dettagliata nella Tabella 6
al `§ 5.3.6 <../11-Capitolo_5/Capitolo5.rst#tabella-delle-controparti>`_.

Lo schema XSD di tale oggetto è disponibile con il file

**TabellaDelleContropartiEstesa_<versione>.xsd.**

Catalogo Dati Informativi
~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Catalogo Dati Informativi:

Nel catalogo informativo è riportato l’elenco dei PSP aderenti e dei
servizi che questi mettono a disposizione, corredato delle condizioni
economiche massime praticate all’utilizzatore finale.

Le informazioni contenute in questo schema sono quelle riportate nella
Tabella 9 del `§ 5.3.7 <../11-Capitolo_5/Capitolo5.rst#catalogo-dati-informativi>`_.

Per facilitarne la compilazione dei dati da trasmettere, il Nodo dei
Pagamenti-SPC mette a disposizione dei PSP un *template* precompilato
con i dati di configurazione del prestatore di servizi di pagamento, da
completare con le informazioni richieste in sede di prima attivazione,
ovvero quando si devono apportare modifiche.

Il PSP può richiedere il *template* mediate il metodo
**nodoChiediTemplateInformativaPSP** (`vedi § 9.2.10.2 <../16-Capitolo_9/Capitolo9.rst#nodochieditemplateinformativapsp>`_) del WSDL
**NodoPerPsp**.

Il *template* è referenziato nello schema XSD di cui alla Tabella 12 del
`§ 5.3.7 <../11-Capitolo_5/Capitolo5.rst#catalogo-dati-informativi>`_.

Lo schema XSD di tale oggetto è disponibile con il file

**CatalogoDatiInformativi_<versione>.xsd.**

Informativa fornita dal Nodo all’Ente Creditore
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Informativa fornita dal Nodo all’Ente Creditore:

Il Nodo dei Pagamenti-SPC ha il compito di raccogliere tutte le
informazioni fornite dai PSP e renderle disponibili agli Enti Creditori
mediante il metodo **nodoChiediInformativaPSP** (`vedi §§ 8.2.6 <../15-Capitolo_8/Capitolo8.rst#ricezione-del-flusso-di-rendicontazione>`_ e `8.5.1 <../15-Capitolo_8/Capitolo8.rst#specifiche-di-interfaccia-per-il-trasferimento-dei-flussi-di-rendicontazione>`_) dell'interfaccia **NodoPerPa**.

In particolare viene restituita all'Ente creditore un file XML
referenziato nello schema XSD di cui alla Tabella 12 del `§ 5.3.7 <../11-Capitolo_5/Capitolo5.rst#catalogo-dati-informativi>`_.

Lo schema XSD di tale oggetto è disponibile con il file

**CatalogoDatiInformativi_<versione>.xsd.**

Totali dei flussi di traffico
-----------------------------
.. _Totali dei flussi di traffico:

Il Nodo dei Pagamenti-SPC implementa il servizio di tracciatura delle
operazioni di pagamento scambiate tra gli aderenti: sulla base di queste
informazioni è poi i grado di elaborare la sintesi periodica di quanto
scambiato tra Enti Creditori e PSP, producendo quindi un file XML
specifico per aderente; tale flusso consente agli aderenti di verificare
il totale delle informazioni trasmesse e ricevute nell'arco del periodo
di riferimento con le singole controparti (cosiddetta quadratura dei
flussi).

Il file XML è fornito dal Nodo dei Pagamenti-SPC al richiedente mediante
i metodi web service dell'interfaccia di riferimento del richiedente
(Ente Creditore o PSP).

Flussi di traffico per gli Enti Creditori
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Flussi di traffico per gli Enti Creditori:

Questo schema XML rappresenta la struttura di informazioni utili alla
quadratura da eseguire da parte degli Enti Creditori (`vedi § 5.3.7 <../11-Capitolo_5/Capitolo5.rst#catalogo-dati-informativi>`_), nel
quale sono rappresentati - nel periodo di osservazione indicato - gli
oggetti scambiati con ciascuna controparte PSP: totale delle Richieste
di Pagamento Telematico (RPT) trasmesse e totale delle Ricevute
Telematiche (RT) ricevute dall’Ente Creditore richiedente.

Gli Enti Creditori possono richiedere l'elenco dei flussi di totali
disponibili presso il Nodo dei Pagamenti-SPC mediante il metodo
**nodoChiediElencoQuadraturePA** e ottenere il singolo file di totali
di traffico con il metodo **nodoChiediQuadraturaPA** (`vedi § 8.2.10 <../15-Capitolo_8/Capitolo8.rst#ricezione-dei-totali-di-traffico>`_),
nell’ambito del WSDL **NodoPerPa**.

Lo schema XSD di tale oggetto è disponibile con il file

**QuadraturePA_<versione>.xsd.**

Flussi di traffico per PSP
~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Flussi di traffico per PSP:

Questo schema XML rappresenta la struttura di informazioni utili alla
quadratura da eseguire da parte del PSP (`vedi § 5.3.9 <../11-Capitolo_5/Capitolo5.rst#flusso-totali-di-traffico-per-i-prestatori-di-servizi-di-pagamento>`_), nel quale sono
rappresentati - nel periodo di osservazione indicato - gli oggetti
scambiati con ciascuna controparte Ente Creditore: totale delle
Richieste di Pagamento Telematico (RPT) ricevute e totale delle Ricevute
Telematiche (RT) trasmesse dal PSP richiedente.

Il PSP può richiedere l'elenco dei flussi di totali disponibili presso
il Nodo dei Pagamenti-SPC mediante il metodo
**nodoChiediElencoQuadraturePSP** e ottenere il singolo file di totali
con il metodo **nodoChiediQuadraturaPSP** (`vedi § 9.2.11 <../16-Capitolo_9/Capitolo9.rst#ricezione-totali-di-traffico>`_), nell’ambito
del WSDL **NodoPerPsp**.

Identificazione RPT in attesa
-----------------------------
.. _Identificazione RPT in attesa:

Il trattamento dei codici grafici (stampati sugli avvisi di pagamento)
presso le strutture collegate al PSP avviene attraverso l'invocazione di
metodi specifici del Nodo dei Pagamenti-SPC che supportano la funzione
per la verifica delle informazioni riportate sull’avviso di pagamento
(`vedi §§ 9.2.3 <../16-Capitolo_9/Capitolo9.rst#pagamenti-in-attesa-e-richiesta-di-generazione-della-rpt>`_).

Tali metodi definiscono alcuni parametri necessari per portare a termine
la funzione richiesta, in particolare è necessario trasferire le
informazioni tratte dai codici grafici stampate sull’avviso di
pagamento. Queste informazioni, nella loro rappresentazione, dipendono
dal tipo di codice grafico adottato, perciò, ai fini della corretta
individuazione, il PSP che riconosce il codice grafico è tenuto ad
utilizzare uno degli schemi XSD specifici da indicare all’interno del
parametro codiceIdRPT del WSDL interessato.

Per inviare al Nodo dei Pagamenti-SPC i dati relativi a
codiceIdentificativoEnte, numeroAvviso e importoVersamento (vedi Tabella
30 a pagina 111) sono stati implementati tre specifici XSD che, ad oggi,
gestiscono in modo specifico i codici grafici maggiormente utilizzati.
Tali dati servono per costruire il parametro di input codiceIdRPT.

Lo XSD specifico che il PSP deve utilizzare per codificare il parametro
di input codiceIdRPT (parametro I-7 della primitiva
**nodoVerificaRPT** e parametro I-9 della primitiva
**nodoAttivaRPT**) deve essere indicato al Nodo dei Pagamenti-SPC
mediante il parametro codificaInfrastrutturaPSP (parametro I-6 della
primitiva **nodoVerificaRPT** e parametro I-8 della primitiva
**nodoAttivaRPT**); tale dato, in funzione della tipologia del
supporto di input, può assumere i valori indicati in Tabella 54.

**Tabella** **54 - Valori del parametro codificaInfrastrutturaPSP e XSD da utilizzare**

+-----------------------------------+-----------------------------------------+-------------------------------+
| **supporto in input**             | **ParametrocodificaInfrastrutturaPSP**  | **Schema XSD dautilizzare**   |
+===================================+=========================================+===============================+
| QR-Code o input da terminale [1]_ | QR-CODE                                 | IdRPT_QR_Code_<versione>.xsd  |
+-----------------------------------+-----------------------------------------+-------------------------------+
| Barcode GS1-128                   | BARCODE-GS1-128                         | IdRPT_GS1_128_<versione>.xsd  |
+-----------------------------------+-----------------------------------------+-------------------------------+
| Barcode 128 AIM USS-128 tipo C    | BARCODE-128-AIM                         | IdRPT_128_AIM_<versione>.xsd  |
+-----------------------------------+-----------------------------------------+-------------------------------+

Si precisa che in tutti e tre gli schemi XSD implementati il dato
numeroAvviso è segmentato nelle tre componenti <aux digit>, <application
code> e <IUV>, così come definite al `paragrafo 7.4.1 <../13-Capitolo_7/Capitolo7.rst#il-numero-avviso-e-larchivio-dei-pagamenti-in-attesa>`_; in particolare, nei tre XSD, il primo corrisponde a AuxDigit, il secondo corrisponde a
CodStazPA ed il terzo corrisponde a CodIUV .

**Tabella** **55 - Codifica dell'Ente Creditore da utilizzare**

+--------------------------------+---------------------------------+-----------------------+
| **supporto in input**          | **Codifica dell'EnteCreditore** | **Element Name**      |
+================================+=================================+=======================+
| QR-Code o input da terminale   | Codice Fiscale                  | CF                    |
+--------------------------------+---------------------------------+-----------------------+
| Barcode GS1-128                | Codice GLN                      | GLN                   |
+--------------------------------+---------------------------------+-----------------------+
| Barcode 128 AIM USS-128 tipo C | c/c Postale                     | CCPost                |
+--------------------------------+---------------------------------+-----------------------+

In Tabella 55 è indicato l'*element name* da utilizzare per la
codifica dell'Ente Creditore in funzione della tipologia del supporto di
input. Si precisa che Il Nodo dei Pagamenti-SPC gestisce in maniera
automatica detti codici convertendoli sempre nel corretto dato
codiceIdentificativoEnte dello specifico Ente Creditore.

Acknowledgement Pagamenti Telematici
------------------------------------
.. _Acknowledgement Pagamenti Telematici:

I metodi di interfaccia che prevedono un esito esteso utilizzano questo
schema XML per rappresentare le informazioni in forma strutturata (`vedi §§ 5.3.10 <../11-Capitolo_5/Capitolo5.rst#messaggio-di-conferma-ricezione-della-rt-ack>`_ e `9.2.2.3 <../16-Capitolo_9/Capitolo9.rst#pspinviaackrt>`_).

Questo XSD è utilizzato nell'interfaccia definita dal WSDL
**PspPerNodo**.

Lo schema XSD di tale oggetto è disponibile con il file

**ACK_PagamentiTelematici_<versione>.xsd.**

`Torna all'indice <../../index.rst>`__

.. [1]
   Il terminale può essere un ATM, quello dell'operatore del PSP ovvero
   quell'utilizzatore finale che utilizza le funzioni di home banking
   messe disposizione dal PSP.

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
