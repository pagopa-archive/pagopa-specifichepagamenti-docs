+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+------------------------------------------------------------------+
| **Capitolo 14. Specifiche Attuative del Nodo dei Pagamenti-SPC** |
+------------------------------------------------------------------+

Specifiche – WSDL
=================

Di seguito si riportano i WSDL del web *services* da implementare per
realizzare lo scambio dei flussi di pagamento descritto sopra. Tutti i
file WSDL elencati nel seguito sono forniti in formato elettronico
nell’apposita sezione del sito dell’Agenzia per l’Italia Digitale.

Interazione tra Amministrazione e Nodo dei Pagamenti-SPC
--------------------------------------------------------
.. _Interazione tra Amministrazione e Nodo dei Pagamenti-SPC:

L'interazione tra amministrazione e Nodo dei Pagamenti-SPC è fondata sul
paradigma del web service in modalità sincrona. Sono stati previsti tre
servizi distinti in base alle esigenze espresse dalle amministrazioni e
in conformità con il modello di collaborazione applicativa SPCoop.

L'alternanza, delle parti erogatrici e fruitrici tra Nodo dei
Pagamenti-SPC e i sistemi dell'amministrazione, consente di ridurre al
minimo i tempi di trattamento dei messaggi e complessivamente i tempi di
risposta.

WSDL NodoPerPa
~~~~~~~~~~~~~~
.. _WSDL NodoPerPa:

Questo WSDL definisce i metodi e i parametri di interfaccia del Nodo dei
Pagamenti-SPC con cui gli Enti Creditori possono inviare le Richieste di
Pagamento Telematico (RPT) e verificarne lo stato di avanzamento.

WSDL PaPerNodo
~~~~~~~~~~~~~~
.. _WSDL PaPerNodo:

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare per ricevere le Ricevute Telematiche (RT).

WSDL PaPerNodoPagamentoPSP
~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL PaPerNodoPagamentoPSP:

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare per gestire il modello di pagamento
attivato presso il PSP e quindi per ricevere e trattare le richieste di
verifica e attivazione delle Richieste di Pagamento in attesa.

WSDL PaPerNodoRichiestaAvvisi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL PaPerNodoRichiestaAvvisi:

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare per gestire il modello di pagamento
spontaneo attivato presso il PSP (modello 4) e quindi per ricevere e
trattare le richieste di generazione del codice avviso.

WSDL NodoPerPaAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL NodoPerPaAvvisiDigitali:

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare, nell’ambito del processo di Avvisatura
digitale *push* (`vedi § 2.9 <../07-Capitolo_2/Capitolo2.rst#avvisatura-digitale-push-su-iniziativa-dellente-creditore>`_), per inviare al NodoSPC un avviso digitale da recapitare al PSP.

WSDL PaPerNodoChiediElencoAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL PaPerNodoChiediElencoAvvisiDigitali:

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare, nell’ambito del processo di Avvisatura
digitale *pull* (`vedi § 2.10 <../07-Capitolo_2/Capitolo2.rst#avvisatura-digitale-pull-verifica-della-posizione-debitoria>`_), 
per ricevere dal NodoSPC una richiesta relativa alla posizione debitoria di un dato utilizzatore finale.

*Web service* tra Nodo dei Pagamenti-SPC e PSP
----------------------------------------------
.. _*Web service* tra Nodo dei Pagamenti-SPC e PSP:

L’interfaccia di comunicazione tra Nodo dei Pagamenti-SPC e PSP
definisce i web services e i metodi per realizzare il protocollo di
scambio necessario ai tre modelli di pagamento previsti.

L’interfaccia è basata su due servizi: uno esposto dai PSP per ricevere
le Richieste di Pagamento Telematico (RPT) e restituire le Ricevute
Telematiche (RT), l’altro esposto dal Nodo dei Pagamenti-SPC per
trattare i metodi specifici del modello di pagamento attivato presso il
PSP.

WSDL PspPerNodo
~~~~~~~~~~~~~~~
.. _WSDL PspPerNodo:

Questo WSDL definisce i metodi e i parametri di interfaccia del PSP con
cui il Nodo dei Pagamenti-SPC è in grado inviare le Richieste di
Pagamento Telematico (RPT) e verificarne lo stato di avanzamento, nonché
per richiedere le Ricevute Telematiche (RT) e trattare i segnali di
conferma.

WSDL NodoPerPsp
~~~~~~~~~~~~~~~
.. _WSDL NodoPerPsp:

Questo WSDL definisce i metodi ed i parametri di interfaccia
implementate dal Nodo dei Pagamenti-SPC per il trattamento delle
richieste specifiche del modello di pagamento attivato presso il PSP e
quindi per ricevere e trattare le richieste di verifica e attivazione
delle Richieste di Pagamento in attesa. Fornisce altresì il supporto per
le funzioni ancillari di trasferimento flussi (Rendicontazione e Totali
di traffico).

WSDL NodoPerPspRichiestaAvvisi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL NodoPerPspRichiestaAvvisi:

Questo WSDL definisce i metodi e i parametri di interfaccia implementate
dal Nodo dei Pagamenti-SPC per il trattamento delle richieste specifiche
del modello di pagamento spontaneo attivato presso il PSP (modello 4) e
quindi per inviare le richieste di generazione del codice avviso.

WSDL NodoPerPSPIscrizioniAvvisatura
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL NodoPerPSPIscrizioniAvvisatura:

Questo WSDL definisce i metodi e i parametri di interfaccia che i PSP
devono implementare per gestire, nell’ambito del processo di Avvisatura
digitale *push* (`vedi § 2.9 <../07-Capitolo_2/Capitolo2.rst#avvisatura-digitale-push-su-iniziativa-dellente-creditore>`_), 
le operazioni di iscrizione e cancellazione di un loro cliente.

WSDL PSPPerNodoAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL PSPPerNodoAvvisiDigitali:

Questo WSDL definisce i metodi e i parametri di interfaccia che i PSP
devono implementare per gestire, nell’ambito del processo di Avvisatura
digitale *push* (`vedi § 2.9 <../07-Capitolo_2/Capitolo2.rst#avvisatura-digitale-push-su-iniziativa-dellente-creditore>`_),
il recapito di un avviso digitale al proprio cliente.

WSDL NodoPerPSPChiediElencoAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _WSDL NodoPerPSPChiediElencoAvvisiDigitali:

Questo WSDL definisce i metodi e i parametri di interfaccia che i PSP
devono implementare, nell’ambito del processo di Avvisatura digitale
*pull* (`vedi § 2.10 <../07-Capitolo_2/Capitolo2.rst#avvisatura-digitale-pull-verifica-della-posizione-debitoria>`_),
per inviare al NodoSPC una richiesta relativa alla posizione debitoria di un dato utilizzatore finale.

`Torna all'indice <../../index.rst>`__

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
