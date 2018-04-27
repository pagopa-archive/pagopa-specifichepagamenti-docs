+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+---------------------------------------+
| **Capitolo 6. GIORNALE DEGLI EVENTI** |
+---------------------------------------+

Giornale degli Eventi
=====================

La funzione di Giornale degli Eventi è quella di consentire la
tracciabilità di ogni operazione di pagamento attivata per il tramite
del Nodo dei Pagamenti-SPC.

L'operazione di pagamento si sviluppa mediante la cooperazione
applicativa tra sistemi diversi delle amministrazioni pubbliche, del
Nodo dei Pagamenti-SPC e dei prestatori dei servizi di pagamento. è
quindi necessario, per ricostruire il processo complessivo, che ognuno
dei sistemi interessati dal pagamento telematico, si doti di funzioni
specifiche per registrare i passaggi principali del trattamento
dell'operazione di pagamento. Gli eventi di ingresso e di uscita dal
sistema, ovvero le operazioni di interfaccia, sono punti cardine da
tracciare obbligatoriamente, ai quali si aggiungono cambi di stato
intermedi significativi per il singolo sistema.

Le tracce registrate dai singoli sistemi, in caso di richiesta di
verifica, devono essere estratte e confrontate con le analoghe
informazioni prodotte da tutti i sistemi di collaborazione coinvolti
nelle operazioni interessate.

Ai fini del confronto sono state individuate due aree di identificazione
dell'operazione di pagamento: l'identificazione del pagamento
telematico, basata sui campi chiave che rendono univoco il riferimento
al pagamento, e l'identificazione dello scambio dei messaggi di
interfaccia basata sui parametri dei messaggi stessi che collegano in
modo inequivocabile tali messaggi con il pagamento specifico.

Nella Tabella 29 sono indicate le informazioni e le specifiche di
rappresentazione dei dati che i soggetti appartenenti al Dominio sono
tenuti a fornire per le verifiche di cui sopra. Questi dati sono altresì
le informazioni "minime" da archiviare nel Giornale degli Eventi (`cfr. §
3.2.10 <../08-Capitolo_3/Capitolo3.rst#giornale-degli-eventi>`__). Tali informazioni devono essere memorizzate presso le strutture
che scambiano le informazioni (Enti Creditori, PSP, Intermediari
tecnologici, Nodo dei Pagamenti-SPC) e devono essere accessibili a
richiesta, nei formati che saranno concordati.

**Tabella** **29 - Informazioni "minime" da archiviare nel "Giornale degli Eventi "**

+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
|            **Dato**           | **Liv** | **Genere** | **Occ** | **Len** | **Contenuto**                                       |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| dataOraEvento                 | 1       | s          | 1..1    | 19      | Indica                                              |
|                               |         |            |         |         | la data e l’ora dell’evento secondo il formato      |
|                               |         |            |         |         | ISO 8601, alla risoluzione del                      |
|                               |         |            |         |         | millisecondo e sempre riferito al GMT. Formato      |
|                               |         |            |         |         | **[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss.sss]**             |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| identificativoDominio         | 1       | an         | 1..1    | 1..35   | Campo alfanumerico contenente                       |
|                               |         |            |         |         | il codice fiscale dell’Ente Creditore               |
|                               |         |            |         |         | che invia la richiesta di pagamento.                |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| identificativoUnivoco         | 1       | an         | 1..1    | 1..35   | Riferimento univoco assegnato al                    |
| Versamento                    |         |            |         |         | pagamento dall’ente beneficiario e                  |
|                               |         |            |         |         | presente nel messaggio che ha originato             |
|                               |         |            |         |         | l’evento.                                           |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| codiceContestoPagamento       | 1       | an         | 1..1    | 1..35   | Codice univoco necessario a                         |
|                               |         |            |         |         | definire il contesto nel quale viene                |
|                               |         |            |         |         | effettuato il versamento presente nel               |
|                               |         |            |         |         | messaggio che ha originato l’evento.                |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| identificativoPrestatore      | 1       | an         | 1..1    | 1..35   | identificativo del Prestatore servizi               |
| ServiziPagamento              |         |            |         |         | di Pagamento univoco nel Dominio                    |
|                               |         |            |         |         | scelto dall’utilizzatore finale e/o                 |
|                               |         |            |         |         | dall’Ente Creditore                                 |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| tipoVersamento                | 1       | an         | 0..1    | 1..35   | Forma tecnica di pagamento presente nel             |
|                               |         |            |         |         | messaggio che ha originato l’evento.                |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| componente                    | 1       | an         | 1..1    | 1..35   | Sistema o sottosistema che ha                       |
|                               |         |            |         |         | generato l’evento (es. FESP, WFESP)                 |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| categoriaEvento               | 1       | an         | 1..1    | 1..35   | INTERNO/INTERFACCIA, indica se                      |
|                               |         |            |         |         | l'evento tracciato è relativo un'operazione         |
|                               |         |            |         |         | di interfaccia con altri sistemi oppure se          |
|                               |         |            |         |         | rappresenta un'operazione interna                   |
|                               |         |            |         |         | (es. cambio di stato) al proprio sistema            |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| tipoEvento                    | 1       | an         | 1..1    | 1..35   | Identificativo del tipo di                          |
|                               |         |            |         |         | evento. Nel caso di interazioni SOAP è              |
|                               |         |            |         |         | il nome del metodo SOAP.                            |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| sottoTipoEvento               | 1       | an         | 1..1    | 1..35   | Nel caso di interazioni SOAP                        |
|                               |         |            |         |         | sincrone assume i valori req/rsp per                |
|                               |         |            |         |         | indicare rispettivamente SOAP Request e             |
|                               |         |            |         |         | SOAP Response                                       |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| identificativoFruitore        | 1       | an         | 1..1    | 1..35   | Nel caso di eventi di tipo INTERFACCIA              |
|                               |         |            |         |         | si deve utilizzare l’Identificativo del             |
|                               |         |            |         |         | sistema del Soggetto richiedente nell’ambito        |
|                               |         |            |         |         | del Dominio.                                        |
|                               |         |            |         |         | (Es. *identificativoStazioneIntermediarioPA*        |
|                               |         |            |         |         | nel caso della *nodoInviaRPT*)                      |
|                               |         |            |         |         |                                                     |
|                               |         |            |         |         | Nel caso di eventi di tipo INTERNO, si può          |
|                               |         |            |         |         | utilizzare un nome di componente o sotto            |
|                               |         |            |         |         | componente che genera l’evento.                     |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| identificativoErogatore       | 1       | an         | 1..1    | 1..35   | Nel caso di eventi di tipo INTERFACCIA              |
|                               |         |            |         |         | si deve utilizzare l’Identificativo del             |
|                               |         |            |         |         | sistema del Soggetto rispondente nell’ambito        |
|                               |         |            |         |         | del Dominio.                                        |
|                               |         |            |         |         | (Es. *“NodoDeiPagamentiSPC”* nel caso della         |
|                               |         |            |         |         | *nodoInviaRPT*)                                     |
|                               |         |            |         |         |                                                     |
|                               |         |            |         |         | Nel caso di eventi di tipo INTERNO, si può          |
|                               |         |            |         |         | utilizzare un nome di componente o sotto            |
|                               |         |            |         |         | componente che processa l’evento.                   |
|                               |         |            |         |         | Per quest’ultima tipologia il valore può            |
|                               |         |            |         |         | coincidere con l’*identificativoFruitore*,          |
|                               |         |            |         |         | qualora non vi sia un                               |
|                               |         |            |         |         | componente che risponde all’evento stesso.          |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| identificativoStazione        | 1       | an         | 0..1    | 1..35   | identificativo della Stazione                       |
| IntermediarioPA               |         |            |         |         | dell’intermediario dell’Ente Creditore nel sistema  |
|                               |         |            |         |         | del Nodo dei Pagamenti SPC,                         |
|                               |         |            |         |         | da cui è transitata la RPT/RT.                      |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| canalePagamento               | 1       | an         | 0..1    | 1..35   | identificativo del Canale del                       |
|                               |         |            |         |         | PSP nel sistema del Nodo dei Pagamenti              |
|                               |         |            |         |         | SPC da cui è transitata/si vuole far transitare     |
|                               |         |            |         |         | la RPT/RT.                                          |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| parametriSpecificiInterfaccia | 1       | an         | 0..1    | 1..512  | parametri specifici utilizzati                      |
|                               |         |            |         |         | nell’interfaccia dal PSP o dall’Ente                |
|                               |         |            |         |         | Creditore nel modello di pagamento                  |
|                               |         |            |         |         | 1 o 3                                               |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+
| Esito                         | 1       | an         | 0..1    | 1..35   | Campo opzionale in base allo stato dell’operazione  |
|                               |         |            |         |         | al momento della registrazione dell’evento.         |
|                               |         |            |         |         |                                                     |
|                               |         |            |         |         | **Obbligatorio nel caso di richieste SOAP.**        |
+-------------------------------+---------+------------+---------+---------+-----------------------------------------------------+

Si precisa per i PSP che deve essere sempre registrato, all’interno del
Giornale degli Eventi, l’evento relativo alla generazione della RT
(avente sia esito positivo, sia esito negativo): in questo caso
valorizzare il dato:

-  categoriaEvento a “INTERNO”;

-  identificativoErogatore a “GENERAZIONE-RT”.

`Torna all'indice <../../index.rst>`__

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
