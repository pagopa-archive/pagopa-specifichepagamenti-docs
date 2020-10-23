Back-office
===========

Riconciliazione
---------------

All’interno di questo paragrafo vengono descritti i casi d’uso che
descrivono il processo contabile operato dall’Ente Creditore al fine di
riconciliare i pagamenti effettuati dall’Utilizzatore finale.

Attori del processo di Riconciliazione Contabile e casi d’uso
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Gli attori coinvolti nel processo di riconciliazione sono i seguenti:

-  **Ente Creditore:** rappresenta una Pubblica Amministrazione che ha
   ricevuto i pagamenti effettuati dall’Utilizzatore finale e necessita
   di riconciliare i pagamenti a suo favore
-  **PSP:** rappresenta un Prestatore di Servizi di Pagamento che ha
   accreditato il conto di un EC con le somme incassate nella giornata
   operativa
-  **Banca Tesoriera/ Cassiera:** rappresenta il Prestatore di Servizi
   di Pagamento che gestisce il conto di incasso di un EC. E’ il
   destinatario del flusso di riversamento SCT e notifica all’EC
   l’avvenuto incasso su sistemi esterni a pagoPA.

Worflow di Riconciliazione
~~~~~~~~~~~~~~~~~~~~~~~~~~

Il processo di riconciliazione comporta il seguente *workflow* dove
saranno utilizzati i seguenti termini:

-  Giorno D: giorno lavorativo in cui è stato eseguito il pagamento
-  Giorno D+1: giorno lavorativo successivo al giorno D
-  Giorno D+2: giorno lavorativo successivo al giorno D+1
-  *Cut-off*: orario di termine della giornata operativa. (NB la
   giornata operativa pagoPA termina alle ore 13)

+------+---------------------------------------------------------------+
| P    | -  L’EC ha ricevuto dei pagamenti su un conto destinato       |
| re-C |    all’incasso tramite pagoPA                                 |
| o    | -  Entro D+1 il PSP accredita (con uno o più SCT) il conto    |
| ndiz |    dell’EC per l’importo delle somme relative a RPT con       |
| ione |    valore del *tag* *dataOraMessaggioRichiesta* antecedente   |
|      |    al *cut-off* della giornata operativa pagoPA del giorno D. |
|      | -  Per ogni SCT cumulativo di più pagamenti, il PSP genera un |
|      |    flusso di rendicontazione, contenente la distinta dei      |
|      |    pagamenti cumulati.                                        |
|      | -  Entro D+2 il PSP sottomette al NodoSPC il flusso di        |
|      |    rendicontazione di cui al punto precedente.                |
|      | -  Il Nodo valida la richiesta e archivia il flusso           |
|      |    rendendolo disponibile per l’EC.                           |
+------+---------------------------------------------------------------+
| T    | L’EC riconcilia gli accrediti SCT ricevuti sul conto indicato |
| rigg | nelle RPT                                                     |
| er   |                                                               |
+------+---------------------------------------------------------------+
| D    | -  L’EC richiede la lista dei flussi disponibili sul Nodo     |
| escr |    relativa ai pagamenti da riconciliare.                     |
| i    | -  L’EC richiede il flusso di interesse, lo riceve e procede  |
| zion |    alla riconciliazione dei pagamenti.                        |
| e    |                                                               |
+------+---------------------------------------------------------------+
| P    | Il pagamento transisce allo stato *Pagamento Rendicontato*    |
| ost- |                                                               |
| C    |                                                               |
| ondi |                                                               |
| z    |                                                               |
| ione |                                                               |
+------+---------------------------------------------------------------+

**Tabella** **7: Worflow di Riconciliazione**

L’evoluzione temporale è la seguente:

|image1|

**Figura** **5: Diagramma di sequenza del processo di riconciliazione
contabile**

1. il PSP genera il flusso di rendicontazione componendo il file XML di
   rendicontazione codificato in *base64*;
2. il PSP accredita con SCT il conto di un EC. L’importo dello SCT può
   essere pari all’importo di un singolo pagamento ovvero pari
   all’importo cumulativo di più pagamenti, purché tali pagamenti siano
   stati incassati a favore del medesimo EC nella medesima giornata
   operativa pagoPA.

Nel caso di riversamento cumulativo, l’SCT dovrà riportare all’interno
dell’attributo AT-05 *(Unstructured Remittance Information*) il valore:

/PUR/LGPE-RIVERSAMENTO/URI/<identificativoFlusso>,

dove *identificativoFlusso* specifica il dato relativo all’informazione
di rendicontazione inviata al NodoSPC.

Nel caso di riversamento singolo, l’SCT dovrà riportare all’interno
dell’attributo AT-05 *(Unstructured Remittance Information*) il valore
della causale di versamento indicato nella RPT.

3.  il PSP, mediante la primitiva *nodoInviaFlussoRendicontazione*,
    invia al NodoSPC il flusso di rendicontazione generato, valorizzando
    i parametri di input *identificativoFlusso* con l’identificativo del
    flusso di rendicontazione da trasmettere e il parametro
    *xmlRendicontazione* con il file XML di rendicontazione codificato
    in base64.

4.  il NodoSPC verifica il file XML di rendicontazione;

5.  il NodoSPC elabora il file XML di rendicontazione\ *;*

6.  il NodoSPC esegue l’archiviazione del flusso di rendicontazione
    sulle proprie basi di dati;

7.  il NodoSPC replica fornendo esito OK alla primitiva
    *nodoInviaFlussoRendicontazione;*

8.  l’EC, mediante la primitiva *nodoChiediElencoFlussiRendicontazione,*
    richiede al NodoSPC la lista dei flussi di rendicontazione
    disponibili;

9.  il NodoSPC elabora la richiesta;

10. il NodoSPC, a seguito della validazione della richiesta, replica con
    *response* OK fornendo in output la lista completa di tutti i flussi
    disponibili per l’EC;

11. l’EC richiede al NodoSPC uno specifico flusso di rendicontazione
    presente nella lista, mediante la primitiva
    *nodoChiediFlussoRendicontazione* valorizzando nella *request* il
    parametro di input *identificativoFlusso* con l’identificativo del
    flusso di rendicontazione richiesto\ *;*

12. il NodoSPC elabora la richiesta.

13. il Nodo invia all’Ente Creditore il flusso richiesto mediante
    *response* positiva alla primitiva di cui al punto 11.

14. l’EC elabora il flusso di rendicontazione veicolandolo verso i
    propri sistemi di riconciliazione;

15. l’EC riceve dalla propria Banca di Tesoreria in modalità digitale un
    flusso contenente i movimenti registrati sul proprio conto; in caso
    di utilizzo da parte dell’EC di SIOPE+, tale flusso è rappresentato
    dal Giornale di Cassa nel formato OPI;

16. L’EC, sulla base dell’identificativo flusso ricevuto nel file XML di
    rendicontazione e delle RT archiviate, effettua la riconciliazione
    contabile.

Motore di Riconciliazione
~~~~~~~~~~~~~~~~~~~~~~~~~

L’obiettivo del presente paragrafo è quello di tratteggiare in termini
essenziali il modello concettuale di un algoritmo (il Motore di
riconciliazione) che consenta al singolo EC di riconciliare i flussi
informativi degli incassi messi a disposizioni da pagoPA con quelli
finanziari. Nel flusso sono altresì riportate, sempre in ottica del
singolo EC, le attività che ci si attende siano compiute dalla singola
controparte PSP.

Nell’ipotesi semplificativa in cui la data richiesta per il pagamento
coincida con la data di invio della richiesta di pagamento, il processo
di riconciliazione opera riproducendo ricorsivamente un ciclo di quattro
passi da compiersi nella successione riportata di seguito per ogni PSP
aderente al NodoSPC:

+-----------------+-----------------+-----------------+-----------------+
| **Passo**       | **Descrizione** | **Attività EC** | **Attività      |
|                 |                 |                 | PSP**           |
+=================+=================+=================+=================+
| 1.              | Quadratura      | A chiusura del  | A chiusura      |
|                 | degli incassi   | giorno          | della giornata  |
|                 |                 | lavorativo (D), | operativa il    |
|                 |                 | il motore       | PSP, controlla  |
|                 |                 | individua le    | la quadratura   |
|                 |                 | RPT inviate     | degli incassi   |
|                 |                 | prima del       | eseguiti per    |
|                 |                 | cut-off. Per    | l’EC            |
|                 |                 | ognuna di tali  | determinando:   |
|                 |                 | RPT il motore   |                 |
|                 |                 | seleziona le    | -  Gli IUV per  |
|                 |                 | corrispondenti  |    cui ha       |
|                 |                 | RT, ne          |    emesso RT+   |
|                 |                 | controlla la    | -  Gli IUV da   |
|                 |                 | quadratura e    |    rendicontare |
|                 |                 | distingue,      |    con codice 9 |
|                 |                 | accantonandole, |                 |
|                 |                 | quelle relative | Determina       |
|                 |                 | a un incasso    | inoltre gli     |
|                 |                 | (RT+). Ai fini  | importi dello   |
|                 |                 | dei successivi  | SCT Cumulativo  |
|                 |                 | passi del       | e degli SCT     |
|                 |                 | processo di     | singoli da      |
|                 |                 | rendicontazione | eseguire.       |
|                 |                 | sarà altresì    |                 |
|                 |                 | necessario      |                 |
|                 |                 | individuare gli |                 |
|                 |                 | IUV per i       |                 |
|                 |                 | quali, a causa  |                 |
|                 |                 | di una          |                 |
|                 |                 | eccezione,      |                 |
|                 |                 | l’incasso,      |                 |
|                 |                 | benché sia      |                 |
|                 |                 | stato           |                 |
|                 |                 | effettuato non  |                 |
|                 |                 | corrisponde a   |                 |
|                 |                 | una RT. Tali    |                 |
|                 |                 | incassi saranno |                 |
|                 |                 | rendicontati    |                 |
|                 |                 | mediante        |                 |
|                 |                 | *co             |                 |
|                 |                 | diceEsitoSingol |                 |
|                 |                 | oPagamento* 9   |                 |
|                 |                 | nel caso di     |                 |
|                 |                 | riversamento    |                 |
|                 |                 | cumulativo.     |                 |
+-----------------+-----------------+-----------------+-----------------+
| 2.              | Ricezione SCT   | nel giorno D+1, | Esegue SCT di   |
|                 |                 | la Banca        | cui al punto 1  |
|                 |                 | Cas             |                 |
|                 |                 | siera/Tesoriera |                 |
|                 |                 | dell’EC riceve  |                 |
|                 |                 | dal PSP,        |                 |
|                 |                 | tramite SCT, i  |                 |
|                 |                 | flussi          |                 |
|                 |                 | finanziari      |                 |
|                 |                 | relativi agli   |                 |
|                 |                 | incassi del     |                 |
|                 |                 | giorno D. In    |                 |
|                 |                 | generale, per   |                 |
|                 |                 | ogni PSP, l’EC  |                 |
|                 |                 | può ricevere un |                 |
|                 |                 | SCT cumulativo  |                 |
|                 |                 | e un numero     |                 |
|                 |                 | indeterminato   |                 |
|                 |                 | di SCT singoli  |                 |
|                 |                 | relativi a una  |                 |
|                 |                 | sola RT+        |                 |
+-----------------+-----------------+-----------------+-----------------+
| 3.              | Quadratura FDR  | nel giorno D+2  | Il PSP genera   |
|                 |                 | il motore,      | il FDR,         |
|                 |                 | interrogando il | associandolo    |
|                 |                 | NodoSPC, può    | allo SCT di cui |
|                 |                 | effettuare il   | al punto 2 con  |
|                 |                 | downloading del | il dato         |
|                 |                 | Flusso di       | ide             |
|                 |                 | Rendicontazione | ntificativoFlus |
|                 |                 | (FDR) relativo  | so, indicando:  |
|                 |                 | al giorno D. Il |                 |
|                 |                 | motore può      | -  Gli IUV per  |
|                 |                 | quindi          |    i quali ha   |
|                 |                 | controllare la  |    emesso RT+   |
|                 |                 | quadratura      |                 |
|                 |                 | dello FDR,      |  codiceEsitoSin |
|                 |                 | abbinando ad    |                 |
|                 |                 | esso, in base   |   goloPagamento |
|                 |                 | allo IUV, le    |    pari a 0     |
|                 |                 | RT+ relative al | -  Gli IUV      |
|                 |                 | giorno D, gli   |    rendicontati |
|                 |                 | ulteriori       |    con          |
|                 |                 | incassi non     |                 |
|                 |                 | corrispondenti  |  codiceEsitoSin |
|                 |                 | a una RT e gli  |                 |
|                 |                 | ER (Esito       |   goloPagamento |
|                 |                 | Revoca)         |    pari a 9     |
|                 |                 | eventualmente   | -  IUV          |
|                 |                 | contenuti nel   |    associati a  |
|                 |                 | FDR. In questo  |    un Estio     |
|                 |                 | ultimo caso il  |    Revoca       |
|                 |                 | motore esclude  |    accettato    |
|                 |                 | gli ER          |    dall’EC      |
|                 |                 | rendicontati    |    (ER+)        |
|                 |                 | dal novero      |                 |
|                 |                 | degli ER da     | Infine mette a  |
|                 |                 | controllare.    | disposizione    |
|                 |                 | Inoltre il      | dell’EC il FDR  |
|                 |                 | motore, nel     | relativo al     |
|                 |                 | processo di     | giorno D        |
|                 |                 | quadratura,     |                 |
|                 |                 | distingue gli   |                 |
|                 |                 | importi a       |                 |
|                 |                 | compensazione   |                 |
|                 |                 | (in eccesso o   |                 |
|                 |                 | difetto)        |                 |
|                 |                 | eventualmente   |                 |
|                 |                 | contenuti nel   |                 |
|                 |                 | FDR. Per ogni   |                 |
|                 |                 | PSP, il motore  |                 |
|                 |                 | distingue e     |                 |
|                 |                 | accantona le    |                 |
|                 |                 | RT+ non         |                 |
|                 |                 | abbinate a un   |                 |
|                 |                 | FDR (RTS)       |                 |
+-----------------+-----------------+-----------------+-----------------+
| 4.              | Quadratura      | A chiusura del  |                 |
|                 | riversamenti    | giorno          |                 |
|                 | SCT             | lavorativo D+2  |                 |
|                 |                 | il motore       |                 |
|                 |                 | elabora tutte   |                 |
|                 |                 | le notifiche di |                 |
|                 |                 | incasso         |                 |
|                 |                 | relative al     |                 |
|                 |                 | giorno D+1      |                 |
|                 |                 | ricevute dalla  |                 |
|                 |                 | Banca           |                 |
|                 |                 | Cas             |                 |
|                 |                 | siera/Tesoriera |                 |
|                 |                 | (nel caso       |                 |
|                 |                 | SIOPE+ la       |                 |
|                 |                 | notifica è      |                 |
|                 |                 | rappresentata   |                 |
|                 |                 | dal “Giornale   |                 |
|                 |                 | di Cassa” OPI). |                 |
|                 |                 | Per ogni PSP il |                 |
|                 |                 | motore conclude |                 |
|                 |                 | il processo di  |                 |
|                 |                 | riconciliazione |                 |
|                 |                 | eseguendo le    |                 |
|                 |                 | seguenti        |                 |
|                 |                 | elaborazioni:   |                 |
|                 |                 |                 |                 |
|                 |                 | 1. Esegue la    |                 |
|                 |                 |    quadratura   |                 |
|                 |                 |    di ogni      |                 |
|                 |                 |    riversamento |                 |
|                 |                 |    singolo in   |                 |
|                 |                 |    abbinamento  |                 |
|                 |                 |    con la       |                 |
|                 |                 |                 |                 |
|                 |                 |  corrispondente |                 |
|                 |                 |    RTS          |                 |
|                 |                 |    controllando |                 |
|                 |                 |    che:         |                 |
|                 |                 | 2.              |                 |
|                 |                 |  L’Identificati |                 |
|                 |                 |    vo univoco   |                 |
|                 |                 |    versamento   |                 |
|                 |                 |    (IUV) che    |                 |
|                 |                 |    identifica   |                 |
|                 |                 |    la singola   |                 |
|                 |                 |    RTs coincida |                 |
|                 |                 |    con la       |                 |
|                 |                 |    componente   |                 |
|                 |                 |                 |                 |
|                 |                 |  “identificativ |                 |
|                 |                 |    o univoco    |                 |
|                 |                 |    versamento”  |                 |
|                 |                 |    nel dato     |                 |
|                 |                 |                 |                 |
|                 |                 |  “*Unstructured |                 |
|                 |                 |    Remittanced  |                 |
|                 |                 |                 |                 |
|                 |                 |   Information*” |                 |
|                 |                 |    di cui al    |                 |
|                 |                 |    tracciato    |                 |
|                 |                 |    del SEPA     |                 |
|                 |                 |    Credit       |                 |
|                 |                 |    Transfer nel |                 |
|                 |                 |    caso di      |                 |
|                 |                 |    versamento   |                 |
|                 |                 |    effettuato   |                 |
|                 |                 |    tramite SCT  |                 |
|                 |                 |    ovvero nel   |                 |
|                 |                 |    campo        |                 |
|                 |                 |    causale nel  |                 |
|                 |                 |    caso di      |                 |
|                 |                 |    versamento   |                 |
|                 |                 |    effettuato   |                 |
|                 |                 |    tramite      |                 |
|                 |                 |    bollettino   |                 |
|                 |                 |    di conto     |                 |
|                 |                 |    corrente     |                 |
|                 |                 |    postale.     |                 |
|                 |                 | 3. Il valore    |                 |
|                 |                 |    del tag      |                 |
|                 |                 |                 |                 |
|                 |                 |  *importoTotale |                 |
|                 |                 |    Pagato*      |                 |
|                 |                 |    della stessa |                 |
|                 |                 |    RTs          |                 |
|                 |                 |    corrisponda  |                 |
|                 |                 |    con          |                 |
|                 |                 |    l’importo    |                 |
|                 |                 |                 |                 |
|                 |                 |  effettivamente |                 |
|                 |                 |    trasferito.  |                 |
|                 |                 | 4. Esegue la    |                 |
|                 |                 |    quadratura   |                 |
|                 |                 |    di ogni      |                 |
|                 |                 |    riversamento |                 |
|                 |                 |    cumulativo,  |                 |
|                 |                 |    in           |                 |
|                 |                 |    abbinamento  |                 |
|                 |                 |    con il       |                 |
|                 |                 |                 |                 |
|                 |                 |  corrispondente |                 |
|                 |                 |    FDR          |                 |
|                 |                 |    controllando |                 |
|                 |                 |    che:         |                 |
|                 |                 | 5.              |                 |
|                 |                 |  L’Identificati |                 |
|                 |                 |    vo del FDR   |                 |
|                 |                 |    coincida con |                 |
|                 |                 |    la           |                 |
|                 |                 |    componente   |                 |
|                 |                 |                 |                 |
|                 |                 |  “identificativ |                 |
|                 |                 |    o flusso     |                 |
|                 |                 |    versamento”  |                 |
|                 |                 |    nel dato     |                 |
|                 |                 |                 |                 |
|                 |                 |  “*Unstructured |                 |
|                 |                 |    Remittance   |                 |
|                 |                 |                 |                 |
|                 |                 |   Information*” |                 |
|                 |                 |    di cui al    |                 |
|                 |                 |    tracciato    |                 |
|                 |                 |    del SEPA     |                 |
|                 |                 |    Credit       |                 |
|                 |                 |    Transfer nel |                 |
|                 |                 |    caso di      |                 |
|                 |                 |    versamento   |                 |
|                 |                 |    effettuato   |                 |
|                 |                 |    tramite SCT  |                 |
|                 |                 | 6. Il valore    |                 |
|                 |                 |    del tag      |                 |
|                 |                 |                 |                 |
|                 |                 |  *importoTotale |                 |
|                 |                 |    Pagamenti*   |                 |
|                 |                 |    nel FDR      |                 |
|                 |                 |    corrisponda  |                 |
|                 |                 |    con          |                 |
|                 |                 |    l’importo    |                 |
|                 |                 |                 |                 |
|                 |                 |  effettivamente |                 |
|                 |                 |    trasferito.  |                 |
+-----------------+-----------------+-----------------+-----------------+

**Tabella** **8: Motore di Riconciliazione**

Gestione degli errori
~~~~~~~~~~~~~~~~~~~~~

Il paragrafo mostra le strategie di risoluzione per gli errori che
possono verificarsi durante l’esecuzione del processo di quadratura
mediante il motore di riconciliazione, rispetto ai passi presi in esame
nella descrizione dell’MDR stesso.

Passo3: Quadratura FDR
^^^^^^^^^^^^^^^^^^^^^^

-  **FDR non quadra**

Passo4: Quadratura riversamenti SCT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  **Riversamento in difetto**

-  **SCT ad integrazione di un riversamento Cumulativo in difetto:** la
   Causale del SCT dovrà essere valorizzata come segue:
   **/PUR/LGPE-INTEGRAZIONE/URI/< identificativoFlusso >**
   identificativoFlusso identifica lo FDR per il quale è stato
   effettuato un riversamento in difetto.

-  **SCT ad integrazione di un riversamento Singolo**: la causale del
   SCT dovrà essere valorizzata come segue:

   -  /RFS/<IUV>/<importo>[/TXT/Integrazione]

-  /RFB/<IUV>[/<importo>][/TXT/Integrazione]

-  **Riversamento in eccesso**

Nel presente scenario l’EC riscontra condizioni di squadratura in
eccesso tra gli SCT riversati dai PSP e le somme specificate nella RTs o
dal FDR nel caso di riversamento singolo o cumulativo, rispettivamente.
In tale circostanza la compensazione avviene in modalità manuale da
concordare tra le controparti attraverso il tavolo operativo.

.. _gestione-degli-errori-1:

Gestione degli errori
---------------------

Gestione degli errori di riconciliazione
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Il paragrafo descrive la gestione degli errori che possono verificarsi
durante l’esercizio del processo di riconciliazione contabile. In
particolare sono prese in esame le eccezioni per le quali si riscontra
il fallimento delle primitive in gioco oppure l’esito negativo del
*workflow* di riconciliazione; tutte le eccezioni riportate non
permettono al pagamento di transire allo stato “Pagamento riconciliato”.
I casi di errore descritti prevedono l’attivazione del Tavolo Operativo
 [1]_ nel caso in cui i soggetti erogatori e fruitori dei servizi
applicativi risultassero impossibilitati a procedere in autonomia nella
risoluzione delle anomalie oppure l’azione di controllo suggerita non
risultasse risolutiva.

**SCT singolo in assenza di RPT**

+----+---------------------------------------------------------------+
| P  | Il PSP ha incassato diversi servizi                           |
| re |                                                               |
| -c |                                                               |
| o  |                                                               |
| nd |                                                               |
| iz |                                                               |
| io |                                                               |
| ne |                                                               |
+----+---------------------------------------------------------------+
| D  | Nell’elaborare un SCT singolo di riversamento relativamente   |
| es | ad un flusso di rendicontazione in assenza di RPT ( codice 9  |
| cr | ), il PSP evidenzia la mancanza di il PSP non evidenzia la    |
| i  | mancanza della RPT.                                           |
| zi |                                                               |
| on |                                                               |
| e  |                                                               |
+----+---------------------------------------------------------------+
| P  | N/A                                                           |
| os |                                                               |
| t- |                                                               |
| c  |                                                               |
| on |                                                               |
| di |                                                               |
| z  |                                                               |
| io |                                                               |
| ne |                                                               |
+----+---------------------------------------------------------------+

In caso di mancanza di RPT, il PSP non è in grado di valorizzare
l’attributo AT-05 con la causale di versamento in quanto tale
informazione sarebbe dovuta essere reperibile all’interno della RPT non
ricevuta.

Le possibili azioni di controllo sono riportate nella tabella
successiva:

+-------------------+--------------+---------------------------------+
| Strategia di      | Tipologia    | Azione di Controllo Suggerita   |
| risoluzione       | Errore       |                                 |
+-------------------+--------------+---------------------------------+
|                   | Flusso       | E’ necessario attivare un       |
|                   | codice 9     | TAVOLO OPERATIVO                |
+-------------------+--------------+---------------------------------+

**Invio flusso rifiutato dal NodoSPC**

+------------+-------------------------------------------------------+
| Pre        | Il PSP invia al NodoSPC un flusso di rendicontazione  |
| -condizion |                                                       |
| e          |                                                       |
+------------+-------------------------------------------------------+
| D          | Il NodoSPC esegue la validazione del flusso fornendo  |
| escrizione | *response* negativa                                   |
+------------+-------------------------------------------------------+
| Pos        | Lo stato del pagamento permane in *RT_PAGATA*         |
| t-condizio |                                                       |
| ne         |                                                       |
+------------+-------------------------------------------------------+

.. figure:: ../diagrams/sdd_err_flusso_rendicontazione.png
   :alt: errore flusso rendicontazione

   errore flusso rendicontazione

**Figura** **15: Evoluzione temporale dello scenario flusso rifiutato
dal Nodo**

L’evoluzione temporale dello scenario è la seguente:

1. il PSP genera il flusso di rendicontazione componendo il file XML di
   rendicontazione codificato in *base64*;
2. il PSP, mediante la primitiva *nodoInviaFlussoRendicontazione*, invia
   al NodoSPC il flusso di rendicontazione generato, valorizzando i
   parametri di input *identificativoFlusso* con l’identificativo del
   flusso di rendicontazione da trasmettere e il parametro
   *xmlRendicontazione* con il file XML di rendicontazione codificato in
   base64.
3. il NodoSPC verifica il file XML di rendicontazione;

Eseguito uno degli scenari alternativi, il flusso procede come segue:

4. il Nodo replica negativamente alla primitiva precedente fornendo
   *response* con esito KO emanando un *faultBean* il cui
   *faultBean.faultCode* rappresenta l’errore riscontrato; in
   particolare:

   -  PPT_FLUSSO_SCONOSCIUTO: il NodoSPC non riscontra alcuna congruenza
      tra il valore del parametro di input *identificativoFlusso* della
      primitiva di richiesta ed il valore del parametro
      *identificativoFlusso* nel file XML di rendicontazione;
   -  PPT_SEMANTICA nel caso di riscontro di errori nel tracciato *xml*
      del file XML di rendicontazione.

Le possibili azioni di controllo sono riportate nella tabella
successiva:

+--------+-------+---------------------------------------------------+
| Str    | Tip   | Azione di Controllo Suggerita                     |
| ategia | ologi |                                                   |
| di     | a     |                                                   |
| ris    | E     |                                                   |
| oluzio | rrore |                                                   |
| ne     |       |                                                   |
+--------+-------+---------------------------------------------------+
|        | PP    | Verificare la composizione della SOAP *request*   |
|        | T_FLU | *nodoInviaFlussoRendicontazione* ed il contenuto  |
|        | SS    | del file XML di rendicontazione                   |
|        | O_SCO |                                                   |
|        | NOS   |                                                   |
|        | CIUTO |                                                   |
+--------+-------+---------------------------------------------------+
|        | PP    | Verificare la composizione del file XML di        |
|        | T_SEM | rendicontazione (vedi documento “Elenco Controlli |
|        | A     | Primitive NodoSPC” per la relativa                |
|        | NTICA | primitiva/*FAULT_CODE*)                           |
+--------+-------+---------------------------------------------------+

**Tabella** **19: Strategia di risoluzione dello scenario Flusso
rifiutato dal Nodo**

**Timeout invio flusso di rendicontazione**

Il seguente scenario, nel trattare in generale il caso di timeout
successivo all’invio del flusso di rendicontazione, si sofferma sulla
gestione dei messaggi di errore maggiormente rappresentativi.

+---------+----------------------------------------------------------+
| Pre     | Il tempo di attesa della *response* del NodoSPC supera   |
| -condiz | il *timeout* di cui al documento Livelli di Servizio     |
| ione    |                                                          |
+=========+==========================================================+
| Des     | Il NodoSPC manifesta condizioni di *timeout* ed il PSP   |
| crizion | esegue il relativo processo di gestione                  |
| e       |                                                          |
+---------+----------------------------------------------------------+
| Pos     | Lo stato del pagamento permane in RT_EC                  |
| t-condi |                                                          |
| zione   |                                                          |
+---------+----------------------------------------------------------+

L’evoluzione temporale è la seguente:

.. figure:: ../diagrams/sd_err_flusso_timeout.png
   :alt: Timeout FLusso

   Timeout FLusso

**Figura** **16: Timeout invio flusso di rendicontazione**

1. il PSP genera il flusso di rendicontazione componendo il file XML di
   rendicontazione codificato in *base64*.
2. il PSP accredita con SCT il conto dell’EC per l’importo delle somme
   incassate (l’SCT contiene l’indicazione del flusso di
   rendicontazione)
3. il PSP invia al NodoSPC il file XML di rendicontazione da elaborare
   mediante la primitiva *nodoInviaFlussoRendicontazione;*

il NodoSPC non risponde manifestando una condizione di *timeout*;

4. il PSP richiede lo stato di elaborazione del flusso di
   rendicontazione inviato mediante la primitiva
   *nodoChiediStatoElaborazioneFlussoRendicontazione* valorizzando il
   parametro di input *identificativoFlusso* con il valore
   dell’identificativo flusso di cui richiedere lo stato;
5. Il NodoSPC effettua il controllo sullo stato di elaborazione del
   flusso inviato;
6. Il NodoSPC replica mediante *response* OK alla primitiva di cui al
   punto 8 fornendo lo stato di elaborazione del flusso di
   rendicontazione; in particolare:

   -  FLUSSO_IN_ELABORAZIONE: il NodoSPC deve terminare le operazioni di
      archiviazione dei flussi sulle proprie basi di dati;
   -  FLUSSO_ELABORATO: il NodoSPC ha elaborato il flusso di
      rendicontazione inviato dal PSP;

7. il PSP gestisce lo stato riscontrato dal NodoSPC eliminando il file
   XML di rendicontazione nel caso di FLUSSO_ELABORATO oppure attendendo
   oltre nel caso di FLUSSO_IN_ELABORAZIONE.

**Richiesta lista flussi di rendicontazione rifiutata dal NodoSPC**

+-------+------------------------------------------------------------+
| Pre   | La posizione debitoria si trova nello stato *PAGATA* e lo  |
| -cond | stato del pagamento è in *RT_EC.* L’EC richiede la lista   |
| i     | dei flussi di rendicontazione                              |
| zioni |                                                            |
+=======+============================================================+
| Des   | L’EC non riceve la lista dei flussi di rendicontazione     |
| crizi | richiesta ed è impossibilitato a procedere alla            |
| one   | riconciliazione dei pagamenti                              |
+-------+------------------------------------------------------------+
| Pos   | Lo stato del pagamento è in *RT_EC*                        |
| t-con |                                                            |
| di    |                                                            |
| zione |                                                            |
+-------+------------------------------------------------------------+

|image2|

**Figura** **17: Richiesta lista flussi di rendicontazione rifiutata dal
NodoSPC**

L’evoluzione temporale dello scenario è la seguente:

1. l’EC richiede, mediante la primitiva
   *nodoChiediElencoFlussiRendicontazione,* la lista dei flussi di
   rendicontazione archiviata sul NodoSPC\ *;*
2. Il NodoSPC valida negativamente la richiesta ed emana *response*
   negativa con esito KO e *faultBean.FaultCode* rappresentativo
   dell’errore riscontrato.

+--------+-------+--------------------------------------------------+
| Str    | Tip   | Azione di Controllo Suggerita                    |
| ategia | ologi |                                                  |
| di     | a     |                                                  |
| ris    | E     |                                                  |
| oluzio | rrore |                                                  |
| ne     |       |                                                  |
+========+=======+==================================================+
|        | PP    | Verificare la composizione della SOAP *request*  |
|        | T_SIN | (vedi documento “Elenco Controlli Primitive      |
|        | TA    | NodoSPC” per la relativa primitiva/*FAULT_CODE*) |
|        | SSI_E |                                                  |
|        | XT    |                                                  |
|        | RAXSD |                                                  |
+--------+-------+--------------------------------------------------+
|        | PP    | Verificare il parametro *identificativoPSP*      |
|        | T_PSP | nella SOAP *request*                             |
|        | \_S   |                                                  |
|        | CONOS |                                                  |
|        | CIUTO |                                                  |
+--------+-------+--------------------------------------------------+

**Tabella** **20: Strategia di risoluzione dello scenario richiesta
lista flussi rifiutata dal Nodo**

**Richiesta Flusso Rifiutata dal Nodo / Nessun flusso presente**

+------+-------------------------------------------------------------+
| Pre  | La posizione debitoria si trova nello stato *PAGATA* e lo   |
| -con | stato del pagamento è in *RT_EC e* L’EC richiede uno        |
| diz  | specifico flusso di rendicontazione                         |
| ione |                                                             |
+======+=============================================================+
| Des  | L’Ente Creditore non riceve lo specifico flusso richiesto   |
| criz |                                                             |
| ione |                                                             |
+------+-------------------------------------------------------------+
| Pos  | Lo stato del pagamento è in RT_EC                           |
| t-co |                                                             |
| ndi  |                                                             |
| zion |                                                             |
| e    |                                                             |
+------+-------------------------------------------------------------+

|image3|

**Figura** **18: Evoluzione temporale dello scenario richiesta Flusso
rifiutata dal Nodo / Flusso mancate**

L’evoluzione temporale dello scenario è la seguente:

1. l’EC richiede al NodoSPC uno specifico flusso di rendicontazione
   mediante la primitiva *nodoChiediFlussoRendicontazione;*
2. il Nodo replica negativamente alla richiesta fornendo *response* con
   esito KO emanando un *faultBean* il cui *faultBean.faultCode*
   rappresenta l’errore riscontrato; in particolare:

   -  PPT_SINTASSI_EXTRAXSD: nel caso di errori di invocazione della
      SOAP *request;*
   -  PPT_ID_FLUSSO_SCONOSCIUTO: nel caso l’EC richieda un flusso il cui
      *identificativoFlusso* risulti non registrato nelle basi di dati
      del NodoSPC;
   -  PPT_SYSTEM_ERROR: nel caso in cui il NodoSPC riscontri errori di
      sistema nell’elaborazione della richiesta;

+--------+---------+-------------------------------------------------+
| Str    | Ti      | Azione di Controllo Suggerita                   |
| ategia | pologia |                                                 |
| di     | Errore  |                                                 |
| ris    |         |                                                 |
| oluzio |         |                                                 |
| ne     |         |                                                 |
+========+=========+=================================================+
|        | PP      | Verificare la composizione della richiesta SOAP |
|        | T_SINTA | (vedi documento “Elenco Controlli Primitive     |
|        | SS      | NodoSPC” per la relativa                        |
|        | I_EXTRA | primitiva/*FAULT_CODE*)                         |
|        | XSD     |                                                 |
+--------+---------+-------------------------------------------------+
|        | PP      |                                                 |
|        | T_SEMAN |                                                 |
|        | TICA    |                                                 |
+--------+---------+-------------------------------------------------+
|        | P       | Verificare il valore del parametro di input     |
|        | PT_ID_F | IDFLUSSO nella richiesta SOAP                   |
|        | LU      |                                                 |
|        | SSO_SCO |                                                 |
|        | N       |                                                 |
|        | OSCIUTO |                                                 |
+--------+---------+-------------------------------------------------+
|        | PP      | Ritentare nuovamente la richiesta del flusso di |
|        | T_SYSTE | rendicontazione, altrimenti innescare il Tavolo |
|        | M_ERROR | Operativo                                       |
+--------+---------+-------------------------------------------------+

**Tabella** **21: Richiesta Flusso Rifiutata dal Nodo / Nessun flusso
presente**

.. [1]
   Per i dettagli del Tavolo Operativo si rimanda alla sezione IV.

.. |image1| image:: ../diagrams/sdd_riconciliazione.png
.. |image2| image:: ../diagrams/sdd_err_chiedi_flusso_nodo.png
.. |image3| image:: ../diagrams/sdd_err_flusso_nodo.png
