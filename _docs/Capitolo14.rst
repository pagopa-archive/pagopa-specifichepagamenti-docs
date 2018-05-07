
+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

.. _Capitolo14:

+------------------------------------------------------------------+
| **Capitolo 14. Specifiche Attuative del Nodo dei Pagamenti-SPC** |
+------------------------------------------------------------------+

.. _specifiche–wsdl:

Specifiche – WSDL
=================

Di seguito si riportano i WSDL del web *services* da implementare per
realizzare lo scambio dei flussi di pagamento descritto sopra. Tutti i
file WSDL elencati nel seguito sono forniti in formato elettronico
nell’apposita sezione del sito dell’Agenzia per l’Italia Digitale.

.. _interazione-tra-amministrazione-e-nodo-dei-pagamenti-spc:

Interazione tra Amministrazione e Nodo dei Pagamenti-SPC
--------------------------------------------------------

L'interazione tra amministrazione e Nodo dei Pagamenti-SPC è fondata sul
paradigma del web service in modalità sincrona. Sono stati previsti tre
servizi distinti in base alle esigenze espresse dalle amministrazioni e
in conformità con il modello di collaborazione applicativa SPCoop.

L'alternanza, delle parti erogatrici e fruitrici tra Nodo dei
Pagamenti-SPC e i sistemi dell'amministrazione, consente di ridurre al
minimo i tempi di trattamento dei messaggi e complessivamente i tempi di
risposta.

.. _wsdl-nodoperpa:

WSDL NodoPerPa
~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia del Nodo dei
Pagamenti-SPC con cui gli Enti Creditori possono inviare le Richieste di
Pagamento Telematico (RPT) e verificarne lo stato di avanzamento.

.. _wsdl-papernodo:

WSDL PaPerNodo
~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare per ricevere le Ricevute Telematiche (RT).

.. _wsdl-papernodopagamentopsp:

WSDL PaPerNodoPagamentoPSP
~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare per gestire il modello di pagamento
attivato presso il PSP e quindi per ricevere e trattare le richieste di
verifica e attivazione delle Richieste di Pagamento in attesa.

.. _wsdl-papernodorichiestaavvisi:

WSDL PaPerNodoRichiestaAvvisi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare per gestire il modello di pagamento
spontaneo attivato presso il PSP (modello 4) e quindi per ricevere e
trattare le richieste di generazione del codice avviso.

.. _wsdl-nodoperpaavvisidigitali:

WSDL NodoPerPaAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare, nell’ambito del processo di Avvisatura
digitale *push* (:ref:`vedi § 2.9 <avvisatura-digitale-push-su-iniziativa-dellente-creditore>`), 
per inviare al NodoSPC un avviso digitale da recapitare al PSP.

.. _wsdl-papernodochiedielencoavvisidigitali:

WSDL PaPerNodoChiediElencoAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che gli Enti
Creditori devono implementare, nell’ambito del processo di Avvisatura
digitale *pull* (:ref:`vedi § 2.10 <avvisatura-digitale-pull-verifica-della-posizione-debitoria>`), 
per ricevere dal NodoSPC una richiesta relativa alla posizione debitoria di un dato utilizzatore finale.

.. _web-service-tra-nodo-dei-pagamenti-spc-e-psp:

*Web service* tra Nodo dei Pagamenti-SPC e PSP
----------------------------------------------

L’interfaccia di comunicazione tra Nodo dei Pagamenti-SPC e PSP
definisce i web services e i metodi per realizzare il protocollo di
scambio necessario ai tre modelli di pagamento previsti.

L’interfaccia è basata su due servizi: uno esposto dai PSP per ricevere
le Richieste di Pagamento Telematico (RPT) e restituire le Ricevute
Telematiche (RT), l’altro esposto dal Nodo dei Pagamenti-SPC per
trattare i metodi specifici del modello di pagamento attivato presso il
PSP.

.. _wsdl-psppernodo:

WSDL PspPerNodo
~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia del PSP con
cui il Nodo dei Pagamenti-SPC è in grado inviare le Richieste di
Pagamento Telematico (RPT) e verificarne lo stato di avanzamento, nonché
per richiedere le Ricevute Telematiche (RT) e trattare i segnali di
conferma.

.. _wsdl-nodoperpsp:

WSDL NodoPerPsp
~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi ed i parametri di interfaccia
implementate dal Nodo dei Pagamenti-SPC per il trattamento delle
richieste specifiche del modello di pagamento attivato presso il PSP e
quindi per ricevere e trattare le richieste di verifica e attivazione
delle Richieste di Pagamento in attesa. Fornisce altresì il supporto per
le funzioni ancillari di trasferimento flussi (Rendicontazione e Totali
di traffico).

.. _wsdl-nodoperpsprichiestaavvisi:

WSDL NodoPerPspRichiestaAvvisi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia implementate
dal Nodo dei Pagamenti-SPC per il trattamento delle richieste specifiche
del modello di pagamento spontaneo attivato presso il PSP (modello 4) e
quindi per inviare le richieste di generazione del codice avviso.

.. _wsdl-nodoperpspiscrizioniavvisatura:

WSDL NodoPerPSPIscrizioniAvvisatura
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che i PSP
devono implementare per gestire, nell’ambito del processo di Avvisatura
digitale *push* (:ref:`vedi § 2.9 <avvisatura-digitale-push-su-iniziativa-dellente-creditore>`), 
le operazioni di iscrizione e cancellazione di un loro cliente.

.. _wsdl-psppernodoavvisidigitali:

WSDL PSPPerNodoAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che i PSP
devono implementare per gestire, nell’ambito del processo di Avvisatura
digitale *push* (:ref:`vedi § 2.9 <avvisatura-digitale-push-su-iniziativa-dellente-creditore>`),
il recapito di un avviso digitale al proprio cliente.

.. _wsdl-nodoperpspchiedielencoavvisidigitali:

WSDL NodoPerPSPChiediElencoAvvisiDigitali
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Questo WSDL definisce i metodi e i parametri di interfaccia che i PSP
devono implementare, nell’ambito del processo di Avvisatura digitale
*pull* (:ref:`vedi § 2.10 <avvisatura-digitale-pull-verifica-della-posizione-debitoria>`),
per inviare al NodoSPC una richiesta relativa alla posizione debitoria di un dato utilizzatore finale.


.. |AGID_logo_carta_intestata-02.png| image:: media/header.png
   :width: 5.90551in
   :height: 1.30277in
