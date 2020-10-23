Back-office
===========

Riconciliazione
---------------

All’interno di questo paragrafo vengono descritti i casi d’uso che
descrivono il processo contabile operato dall’Ente Creditore al fine di
riconciliare i pagamenti effettuati dall’Utilizzatore finale.

### Attori del processo di Riconciliazione Contabile e casi d’uso

Gli attori coinvolti nel processo di riconciliazione sono i seguenti:

-   **Ente Creditore:** rappresenta una Pubblica Amministrazione che ha
    ricevuto i pagamenti effettuati dall’Utilizzatore finale e necessita
    di riconciliare i pagamenti a suo favore
-   **PSP:** rappresenta un Prestatore di Servizi di Pagamento che ha
    accreditato il conto di un EC con le somme incassate nella giornata
    operativa
-   **Banca Tesoriera/ Cassiera:** rappresenta il Prestatore di Servizi
    di Pagamento che gestisce il conto di incasso di un EC. E’ il
    destinatario del flusso di riversamento SCT e notifica all’EC
    l’avvenuto incasso su sistemi esterni a pagoPA.

### Worflow di Riconciliazione

Il processo di riconciliazione comporta il seguente *workflow* dove
saranno utilizzati i seguenti termini:

-   Giorno D: giorno lavorativo in cui è stato eseguito il pagamento
-   Giorno D+1: giorno lavorativo successivo al giorno D
-   Giorno D+2: giorno lavorativo successivo al giorno D+1
-   *Cut-off*: orario di termine della giornata operativa. (NB la
    giornata operativa pagoPA termina alle ore 13)

+-------+--------------------------------------------------------------------+
| Pre-C | -   L’EC ha ricevuto dei pagamenti su un conto destinato           |
| ondiz |     all’incasso tramite pagoPA                                     |
| ione  | -   Entro D+1 il PSP accredita (con uno o più SCT) il conto        |
|       |     dell’EC per l’importo delle somme relative a RPT con valore    |
|       |     del *tag* *dataOraMessaggioRichiesta* antecedente al *cut-off* |
|       |     della giornata operativa pagoPA del giorno D.                  |
|       | -   Per ogni SCT cumulativo di più pagamenti, il PSP genera un     |
|       |     flusso di rendicontazione, contenente la distinta dei          |
|       |     pagamenti cumulati.                                            |
|       | -   Entro D+2 il PSP sottomette al NodoSPC il flusso di            |
|       |     rendicontazione di cui al punto precedente.                    |
|       | -   Il Nodo valida la richiesta e archivia il flusso rendendolo    |
|       |     disponibile per l’EC.                                          |
+-------+--------------------------------------------------------------------+
| Trigg | L’EC riconcilia gli accrediti SCT ricevuti sul conto indicato      |
| er    | nelle RPT                                                          |
+-------+--------------------------------------------------------------------+
| Descr | -   L’EC richiede la lista dei flussi disponibili sul Nodo         |
| izion |     relativa ai pagamenti da riconciliare.                         |
| e     | -   L’EC richiede il flusso di interesse, lo riceve e procede alla |
|       |     riconciliazione dei pagamenti.                                 |
+-------+--------------------------------------------------------------------+
| Post- | Il pagamento transisce allo stato *Pagamento Rendicontato*         |
| Condi |                                                                    |
| zione |                                                                    |
+-------+--------------------------------------------------------------------+

**Tabella** **7: Worflow di Riconciliazione**

L’evoluzione temporale è la seguente:

![](../diagrams/sdd_riconciliazione.png)

**Figura** **5: Diagramma di sequenza del processo di riconciliazione
contabile**

1.  il PSP genera il flusso di rendicontazione componendo il file XML di
    rendicontazione codificato in *base64*;
2.  il PSP accredita con SCT il conto di un EC. L’importo dello SCT può
    essere pari all’importo di un singolo pagamento ovvero pari
    all’importo cumulativo di più pagamenti, purché tali pagamenti siano
    stati incassati a favore del medesimo EC nella medesima giornata
    operativa pagoPA.

Nel caso di riversamento cumulativo, l’SCT dovrà riportare all’interno
dell’attributo AT-05 *(Unstructured Remittance Information*) il valore:

/PUR/LGPE-RIVERSAMENTO/URI/\<identificativoFlusso\>,

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
5.  il NodoSPC elabora il file XML di rendicontazione*;*
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
    flusso di rendicontazione richiesto*;*
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

### Motore di Riconciliazione

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

+--------------------+--------------------+--------------------+--------------------+
| **Passo**          | **Descrizione**    | **Attività EC**    | **Attività PSP**   |
+====================+====================+====================+====================+
| 1.                 | Quadratura degli   | A chiusura del     | A chiusura della   |
|                    | incassi            | giorno lavorativo  | giornata operativa |
|                    |                    | (D), il motore     | il PSP, controlla  |
|                    |                    | individua le RPT   | la quadratura      |
|                    |                    | inviate prima del  | degli incassi      |
|                    |                    | cut-off. Per       | eseguiti per l’EC  |
|                    |                    | ognuna di tali RPT | determinando:      |
|                    |                    | il motore          |                    |
|                    |                    | seleziona le       | -   Gli IUV per    |
|                    |                    | corrispondenti RT, |     cui ha emesso  |
|                    |                    | ne controlla la    |     RT+            |
|                    |                    | quadratura e       | -   Gli IUV da     |
|                    |                    | distingue,         |     rendicontare   |
|                    |                    | accantonandole,    |     con codice 9   |
|                    |                    | quelle relative a  |                    |
|                    |                    | un incasso (RT+).  | Determina inoltre  |
|                    |                    | Ai fini dei        | gli importi dello  |
|                    |                    | successivi passi   | SCT Cumulativo e   |
|                    |                    | del processo di    | degli SCT singoli  |
|                    |                    | rendicontazione    | da eseguire.       |
|                    |                    | sarà altresì       |                    |
|                    |                    | necessario         |                    |
|                    |                    | individuare gli    |                    |
|                    |                    | IUV per i quali, a |                    |
|                    |                    | causa di una       |                    |
|                    |                    | eccezione,         |                    |
|                    |                    | l’incasso, benché  |                    |
|                    |                    | sia stato          |                    |
|                    |                    | effettuato non     |                    |
|                    |                    | corrisponde a una  |                    |
|                    |                    | RT. Tali incassi   |                    |
|                    |                    | saranno            |                    |
|                    |                    | rendicontati       |                    |
|                    |                    | mediante           |                    |
|                    |                    | *codiceEsitoSingol |                    |
|                    |                    | oPagamento*        |                    |
|                    |                    | 9 nel caso di      |                    |
|                    |                    | riversamento       |                    |
|                    |                    | cumulativo.        |                    |
+--------------------+--------------------+--------------------+--------------------+
| 2.                 | Ricezione SCT      | nel giorno D+1, la | Esegue SCT di cui  |
|                    |                    | Banca              | al punto 1         |
|                    |                    | Cassiera/Tesoriera |                    |
|                    |                    | dell’EC riceve dal |                    |
|                    |                    | PSP, tramite SCT,  |                    |
|                    |                    | i flussi           |                    |
|                    |                    | finanziari         |                    |
|                    |                    | relativi agli      |                    |
|                    |                    | incassi del giorno |                    |
|                    |                    | D. In generale,    |                    |
|                    |                    | per ogni PSP, l’EC |                    |
|                    |                    | può ricevere un    |                    |
|                    |                    | SCT cumulativo e   |                    |
|                    |                    | un numero          |                    |
|                    |                    | indeterminato di   |                    |
|                    |                    | SCT singoli        |                    |
|                    |                    | relativi a una     |                    |
|                    |                    | sola RT+           |                    |
+--------------------+--------------------+--------------------+--------------------+
| 3.                 | Quadratura FDR     | nel giorno D+2 il  | Il PSP genera il   |
|                    |                    | motore,            | FDR, associandolo  |
|                    |                    | interrogando il    | allo SCT di cui al |
|                    |                    | NodoSPC, può       | punto 2 con il     |
|                    |                    | effettuare il      | dato               |
|                    |                    | downloading del    | identificativoFlus |
|                    |                    | Flusso di          | so,                |
|                    |                    | Rendicontazione    | indicando:         |
|                    |                    | (FDR) relativo al  |                    |
|                    |                    | giorno D. Il       | -   Gli IUV per i  |
|                    |                    | motore può quindi  |     quali ha       |
|                    |                    | controllare la     |     emesso RT+     |
|                    |                    | quadratura dello   |     codiceEsitoSin |
|                    |                    | FDR, abbinando ad  | goloPagamento      |
|                    |                    | esso, in base allo |     pari a 0       |
|                    |                    | IUV, le RT+        | -   Gli IUV        |
|                    |                    | relative al giorno |     rendicontati   |
|                    |                    | D, gli ulteriori   |     con            |
|                    |                    | incassi non        |     codiceEsitoSin |
|                    |                    | corrispondenti a   | goloPagamento      |
|                    |                    | una RT e gli ER    |     pari a 9       |
|                    |                    | (Esito Revoca)     | -   IUV associati  |
|                    |                    | eventualmente      |     a un Estio     |
|                    |                    | contenuti nel FDR. |     Revoca         |
|                    |                    | In questo ultimo   |     accettato      |
|                    |                    | caso il motore     |     dall’EC (ER+)  |
|                    |                    | esclude gli ER     |                    |
|                    |                    | rendicontati dal   | Infine mette a     |
|                    |                    | novero degli ER da | disposizione       |
|                    |                    | controllare.       | dell’EC il FDR     |
|                    |                    | Inoltre il motore, | relativo al giorno |
|                    |                    | nel processo di    | D                  |
|                    |                    | quadratura,        |                    |
|                    |                    | distingue gli      |                    |
|                    |                    | importi a          |                    |
|                    |                    | compensazione (in  |                    |
|                    |                    | eccesso o difetto) |                    |
|                    |                    | eventualmente      |                    |
|                    |                    | contenuti nel FDR. |                    |
|                    |                    | Per ogni PSP, il   |                    |
|                    |                    | motore distingue e |                    |
|                    |                    | accantona le RT+   |                    |
|                    |                    | non abbinate a un  |                    |
|                    |                    | FDR (RTS)          |                    |
+--------------------+--------------------+--------------------+--------------------+
| 4.                 | Quadratura         | A chiusura del     |                    |
|                    | riversamenti SCT   | giorno lavorativo  |                    |
|                    |                    | D+2 il motore      |                    |
|                    |                    | elabora tutte le   |                    |
|                    |                    | notifiche di       |                    |
|                    |                    | incasso relative   |                    |
|                    |                    | al giorno D+1      |                    |
|                    |                    | ricevute dalla     |                    |
|                    |                    | Banca              |                    |
|                    |                    | Cassiera/Tesoriera |                    |
|                    |                    | (nel caso SIOPE+   |                    |
|                    |                    | la notifica è      |                    |
|                    |                    | rappresentata dal  |                    |
|                    |                    | "Giornale di       |                    |
|                    |                    | Cassa" OPI). Per   |                    |
|                    |                    | ogni PSP il motore |                    |
|                    |                    | conclude il        |                    |
|                    |                    | processo di        |                    |
|                    |                    | riconciliazione    |                    |
|                    |                    | eseguendo le       |                    |
|                    |                    | seguenti           |                    |
|                    |                    | elaborazioni:      |                    |
|                    |                    |                    |                    |
|                    |                    | 1.  Esegue la      |                    |
|                    |                    |     quadratura di  |                    |
|                    |                    |     ogni           |                    |
|                    |                    |     riversamento   |                    |
|                    |                    |     singolo in     |                    |
|                    |                    |     abbinamento    |                    |
|                    |                    |     con la         |                    |
|                    |                    |     corrispondente |                    |
|                    |                    |     RTS            |                    |
|                    |                    |     controllando   |                    |
|                    |                    |     che:           |                    |
|                    |                    | 2.  L’Identificati |                    |
|                    |                    | vo                 |                    |
|                    |                    |     univoco        |                    |
|                    |                    |     versamento     |                    |
|                    |                    |     (IUV) che      |                    |
|                    |                    |     identifica la  |                    |
|                    |                    |     singola RTs    |                    |
|                    |                    |     coincida con   |                    |
|                    |                    |     la componente  |                    |
|                    |                    |     “identificativ |                    |
|                    |                    | o                  |                    |
|                    |                    |     univoco        |                    |
|                    |                    |     versamento”    |                    |
|                    |                    |     nel dato       |                    |
|                    |                    |     “*Unstructured |                    |
|                    |                    |     Remittanced    |                    |
|                    |                    |     Information*”  |                    |
|                    |                    |     di cui al      |                    |
|                    |                    |     tracciato del  |                    |
|                    |                    |     SEPA Credit    |                    |
|                    |                    |     Transfer nel   |                    |
|                    |                    |     caso di        |                    |
|                    |                    |     versamento     |                    |
|                    |                    |     effettuato     |                    |
|                    |                    |     tramite SCT    |                    |
|                    |                    |     ovvero nel     |                    |
|                    |                    |     campo causale  |                    |
|                    |                    |     nel caso di    |                    |
|                    |                    |     versamento     |                    |
|                    |                    |     effettuato     |                    |
|                    |                    |     tramite        |                    |
|                    |                    |     bollettino di  |                    |
|                    |                    |     conto corrente |                    |
|                    |                    |     postale.       |                    |
|                    |                    | 3.  Il valore del  |                    |
|                    |                    |     tag            |                    |
|                    |                    |     *importoTotale |                    |
|                    |                    | Pagato*            |                    |
|                    |                    |     della stessa   |                    |
|                    |                    |     RTs            |                    |
|                    |                    |     corrisponda    |                    |
|                    |                    |     con l’importo  |                    |
|                    |                    |     effettivamente |                    |
|                    |                    |     trasferito.    |                    |
|                    |                    | 4.  Esegue la      |                    |
|                    |                    |     quadratura di  |                    |
|                    |                    |     ogni           |                    |
|                    |                    |     riversamento   |                    |
|                    |                    |     cumulativo, in |                    |
|                    |                    |     abbinamento    |                    |
|                    |                    |     con il         |                    |
|                    |                    |     corrispondente |                    |
|                    |                    |     FDR            |                    |
|                    |                    |     controllando   |                    |
|                    |                    |     che:           |                    |
|                    |                    | 5.  L’Identificati |                    |
|                    |                    | vo                 |                    |
|                    |                    |     del FDR        |                    |
|                    |                    |     coincida con   |                    |
|                    |                    |     la componente  |                    |
|                    |                    |     “identificativ |                    |
|                    |                    | o                  |                    |
|                    |                    |     flusso         |                    |
|                    |                    |     versamento”    |                    |
|                    |                    |     nel dato       |                    |
|                    |                    |     “*Unstructured |                    |
|                    |                    |     Remittance     |                    |
|                    |                    |     Information*”  |                    |
|                    |                    |     di cui al      |                    |
|                    |                    |     tracciato del  |                    |
|                    |                    |     SEPA Credit    |                    |
|                    |                    |     Transfer nel   |                    |
|                    |                    |     caso di        |                    |
|                    |                    |     versamento     |                    |
|                    |                    |     effettuato     |                    |
|                    |                    |     tramite SCT    |                    |
|                    |                    | 6.  Il valore del  |                    |
|                    |                    |     tag            |                    |
|                    |                    |     *importoTotale |                    |
|                    |                    | Pagamenti*         |                    |
|                    |                    |     nel FDR        |                    |
|                    |                    |     corrisponda    |                    |
|                    |                    |     con l’importo  |                    |
|                    |                    |     effettivamente |                    |
|                    |                    |     trasferito.    |                    |
+--------------------+--------------------+--------------------+--------------------+

**Tabella** **8: Motore di Riconciliazione**

### Gestione degli errori

Il paragrafo mostra le strategie di risoluzione per gli errori che
possono verificarsi durante l’esecuzione del processo di quadratura
mediante il motore di riconciliazione, rispetto ai passi presi in esame
nella descrizione dell’MDR stesso.

#### Passo3: Quadratura FDR

-   **FDR non quadra**

#### Passo4: Quadratura riversamenti SCT

-   **Riversamento in difetto**

-   **SCT ad integrazione di un riversamento Cumulativo in difetto:** la
    Causale del SCT dovrà essere valorizzata come segue:
    **/PUR/LGPE-INTEGRAZIONE/URI/\< identificativoFlusso \>**
    identificativoFlusso identifica lo FDR per il quale è stato
    effettuato un riversamento in difetto.
-   **SCT ad integrazione di un riversamento Singolo**: la causale del
    SCT dovrà essere valorizzata come segue:
    -   /RFS/\<IUV\>/\<importo\>[/TXT/Integrazione]

-   /RFB/\<IUV\>[/\<importo\>][/TXT/Integrazione]

-   **Riversamento in eccesso**

Nel presente scenario l’EC riscontra condizioni di squadratura in
eccesso tra gli SCT riversati dai PSP e le somme specificate nella RTs o
dal FDR nel caso di riversamento singolo o cumulativo, rispettivamente.
In tale circostanza la compensazione avviene in modalità manuale da
concordare tra le controparti attraverso il tavolo operativo.

Gestione degli errori
---------------------

### Gestione degli errori di riconciliazione

Il paragrafo descrive la gestione degli errori che possono verificarsi
durante l’esercizio del processo di riconciliazione contabile. In
particolare sono prese in esame le eccezioni per le quali si riscontra
il fallimento delle primitive in gioco oppure l’esito negativo del
*workflow* di riconciliazione; tutte le eccezioni riportate non
permettono al pagamento di transire allo stato “Pagamento riconciliato”.
I casi di errore descritti prevedono l’attivazione del Tavolo Operativo
[^3] nel caso in cui i soggetti erogatori e fruitori dei servizi
applicativi risultassero impossibilitati a procedere in autonomia nella
risoluzione delle anomalie oppure l’azione di controllo suggerita non
risultasse risolutiva.

**SCT singolo in assenza di RPT**

  ----- ------------------------------------------------------------------
  Pre-c Il PSP ha incassato diversi servizi
  ondiz 
  ione  

  Descr Nell’elaborare un SCT singolo di riversamento relativamente ad un
  izion flusso di rendicontazione in assenza di RPT ( codice 9 ), il PSP
  e     evidenzia la mancanza di il PSP non evidenzia la mancanza della
        RPT.

  Post- N/A
  condi 
  zione 
  ----- ------------------------------------------------------------------

In caso di mancanza di RPT, il PSP non è in grado di valorizzare
l’attributo AT-05 con la causale di versamento in quanto tale
informazione sarebbe dovuta essere reperibile all’interno della RPT non
ricevuta.

Le possibili azioni di controllo sono riportate nella tabella
successiva:

  --------------------- --------------- -----------------------------------
  Strategia di          Tipologia       Azione di Controllo Suggerita
  risoluzione           Errore          

                        Flusso codice 9 E’ necessario attivare un TAVOLO
                                        OPERATIVO

                                        
  --------------------- --------------- -----------------------------------

**Invio flusso rifiutato dal NodoSPC**

  ------------- ----------------------------------------------------------
  Pre-condizion Il PSP invia al NodoSPC un flusso di rendicontazione
  e             

  Descrizione   Il NodoSPC esegue la validazione del flusso fornendo
                *response* negativa

  Post-condizio Lo stato del pagamento permane in *RT\_PAGATA*
  ne            
  ------------- ----------------------------------------------------------

![errore flusso rendicontazione](../diagrams/sdd_err_flusso_rendicontazione.png)

**Figura** **15: Evoluzione temporale dello scenario flusso rifiutato
dal Nodo**

L’evoluzione temporale dello scenario è la seguente:

1.  il PSP genera il flusso di rendicontazione componendo il file XML di
    rendicontazione codificato in *base64*;
2.  il PSP, mediante la primitiva *nodoInviaFlussoRendicontazione*,
    invia al NodoSPC il flusso di rendicontazione generato, valorizzando
    i parametri di input *identificativoFlusso* con l’identificativo del
    flusso di rendicontazione da trasmettere e il parametro
    *xmlRendicontazione* con il file XML di rendicontazione codificato
    in base64.
3.  il NodoSPC verifica il file XML di rendicontazione;

Eseguito uno degli scenari alternativi, il flusso procede come segue:

4.  il Nodo replica negativamente alla primitiva precedente fornendo
    *response* con esito KO emanando un *faultBean* il cui
    *faultBean.faultCode* rappresenta l’errore riscontrato; in
    particolare:
    -   PPT\_FLUSSO\_SCONOSCIUTO: il NodoSPC non riscontra alcuna
        congruenza tra il valore del parametro di input
        *identificativoFlusso* della primitiva di richiesta ed il valore
        del parametro *identificativoFlusso* nel file XML di
        rendicontazione;
    -   PPT\_SEMANTICA nel caso di riscontro di errori nel tracciato
        *xml* del file XML di rendicontazione.

Le possibili azioni di controllo sono riportate nella tabella
successiva:

  --------- -------- ------------------------------------------------------
  Strategia Tipologi Azione di Controllo Suggerita
  di        a        
  risoluzio Errore   
  ne                 

            PPT\_FLU Verificare la composizione della SOAP *request*
            SSO\_SCO *nodoInviaFlussoRendicontazione* ed il contenuto del
            NOSCIUTO file XML di rendicontazione

            PPT\_SEM Verificare la composizione del file XML di
            ANTICA   rendicontazione (vedi documento “Elenco Controlli
                     Primitive NodoSPC” per la relativa
                     primitiva/*FAULT\_CODE*)
  --------- -------- ------------------------------------------------------

**Tabella** **19: Strategia di risoluzione dello scenario Flusso
rifiutato dal Nodo**

**Timeout invio flusso di rendicontazione**

Il seguente scenario, nel trattare in generale il caso di timeout
successivo all’invio del flusso di rendicontazione, si sofferma sulla
gestione dei messaggi di errore maggiormente rappresentativi.

  ------------------------------------------------------------------------
  Pre-condiz Il tempo di attesa della *response* del NodoSPC supera il
  ione       *timeout* di cui al documento Livelli di Servizio
  ---------- -------------------------------------------------------------
  Descrizion Il NodoSPC manifesta condizioni di *timeout* ed il PSP esegue
  e          il relativo processo di gestione

  Post-condi Lo stato del pagamento permane in RT\_EC
  zione      
  ------------------------------------------------------------------------

L’evoluzione temporale è la seguente:

![Timeout FLusso](../diagrams/sd_err_flusso_timeout.png)

**Figura** **16: Timeout invio flusso di rendicontazione**

1.  il PSP genera il flusso di rendicontazione componendo il file XML di
    rendicontazione codificato in *base64*.
2.  il PSP accredita con SCT il conto dell’EC per l’importo delle somme
    incassate (l’SCT contiene l’indicazione del flusso di
    rendicontazione)
3.  il PSP invia al NodoSPC il file XML di rendicontazione da elaborare
    mediante la primitiva *nodoInviaFlussoRendicontazione;*

il NodoSPC non risponde manifestando una condizione di *timeout*;

4.  il PSP richiede lo stato di elaborazione del flusso di
    rendicontazione inviato mediante la primitiva
    *nodoChiediStatoElaborazioneFlussoRendicontazione* valorizzando il
    parametro di input *identificativoFlusso* con il valore
    dell’identificativo flusso di cui richiedere lo stato;
5.  Il NodoSPC effettua il controllo sullo stato di elaborazione del
    flusso inviato;
6.  Il NodoSPC replica mediante *response* OK alla primitiva di cui al
    punto 8 fornendo lo stato di elaborazione del flusso di
    rendicontazione; in particolare:
    -   FLUSSO\_IN\_ELABORAZIONE: il NodoSPC deve terminare le
        operazioni di archiviazione dei flussi sulle proprie basi di
        dati;
    -   FLUSSO\_ELABORATO: il NodoSPC ha elaborato il flusso di
        rendicontazione inviato dal PSP;

7.  il PSP gestisce lo stato riscontrato dal NodoSPC eliminando il file
    XML di rendicontazione nel caso di FLUSSO\_ELABORATO oppure
    attendendo oltre nel caso di FLUSSO\_IN\_ELABORAZIONE.

**Richiesta lista flussi di rendicontazione rifiutata dal NodoSPC**

  ------------------------------------------------------------------------
  Pre-cond La posizione debitoria si trova nello stato *PAGATA* e lo stato
  izioni   del pagamento è in *RT\_EC.* L’EC richiede la lista dei flussi
           di rendicontazione
  -------- ---------------------------------------------------------------
  Descrizi L’EC non riceve la lista dei flussi di rendicontazione
  one      richiesta ed è impossibilitato a procedere alla riconciliazione
           dei pagamenti

  Post-con Lo stato del pagamento è in *RT\_EC*
  dizione  
  ------------------------------------------------------------------------

![](../diagrams/sdd_err_chiedi_flusso_nodo.png)

**Figura** **17: Richiesta lista flussi di rendicontazione rifiutata dal
NodoSPC**

L’evoluzione temporale dello scenario è la seguente:

1.  l’EC richiede, mediante la primitiva
    *nodoChiediElencoFlussiRendicontazione,* la lista dei flussi di
    rendicontazione archiviata sul NodoSPC*;*
2.  Il NodoSPC valida negativamente la richiesta ed emana *response*
    negativa con esito KO e *faultBean.FaultCode* rappresentativo
    dell’errore riscontrato.

  ------------------------------------------------------------------------
  Strategia Tipologi Azione di Controllo Suggerita
  di        a        
  risoluzio Errore   
  ne                 
  --------- -------- -----------------------------------------------------
            PPT\_SIN Verificare la composizione della SOAP *request* (vedi
            TASSI\_E documento “Elenco Controlli Primitive NodoSPC” per la
            XTRAXSD  relativa primitiva/*FAULT\_CODE*)

            PPT\_PSP Verificare il parametro *identificativoPSP* nella
            \_SCONOS SOAP *request*
            CIUTO    
  ------------------------------------------------------------------------

**Tabella** **20: Strategia di risoluzione dello scenario richiesta
lista flussi rifiutata dal Nodo**

**Richiesta Flusso Rifiutata dal Nodo / Nessun flusso presente**

  ------------------------------------------------------------------------
  Pre-con La posizione debitoria si trova nello stato *PAGATA* e lo stato
  dizione del pagamento è in *RT\_EC e* L’EC richiede uno specifico flusso
          di rendicontazione
  ------- ----------------------------------------------------------------
  Descriz L’Ente Creditore non riceve lo specifico flusso richiesto
  ione    

  Post-co Lo stato del pagamento è in RT\_EC
  ndizion 
  e       
  ------------------------------------------------------------------------

![](../diagrams/sdd_err_flusso_nodo.png)

**Figura** **18: Evoluzione temporale dello scenario richiesta Flusso
rifiutata dal Nodo / Flusso mancate**

L’evoluzione temporale dello scenario è la seguente:

1.  l’EC richiede al NodoSPC uno specifico flusso di rendicontazione
    mediante la primitiva *nodoChiediFlussoRendicontazione;*
2.  il Nodo replica negativamente alla richiesta fornendo *response* con
    esito KO emanando un *faultBean* il cui *faultBean.faultCode*
    rappresenta l’errore riscontrato; in particolare:
    -   PPT\_SINTASSI\_EXTRAXSD: nel caso di errori di invocazione della
        SOAP *request;*
    -   PPT\_ID\_FLUSSO\_SCONOSCIUTO: nel caso l’EC richieda un flusso
        il cui *identificativoFlusso* risulti non registrato nelle basi
        di dati del NodoSPC;
    -   PPT\_SYSTEM\_ERROR: nel caso in cui il NodoSPC riscontri errori
        di sistema nell’elaborazione della richiesta;

  -------------------------------------------------------------------------
  Strategia Tipologia  Azione di Controllo Suggerita
  di        Errore     
  risoluzio            
  ne                   
  --------- ---------- ----------------------------------------------------
            PPT\_SINTA Verificare la composizione della richiesta SOAP
            SSI\_EXTRA (vedi documento “Elenco Controlli Primitive NodoSPC”
            XSD        per la relativa primitiva/*FAULT\_CODE*)

            PPT\_SEMAN 
            TICA       

            PPT\_ID\_F Verificare il valore del parametro di input IDFLUSSO
            LUSSO\_SCO nella richiesta SOAP
            NOSCIUTO   

            PPT\_SYSTE Ritentare nuovamente la richiesta del flusso di
            M\_ERROR   rendicontazione, altrimenti innescare il Tavolo
                       Operativo
  -------------------------------------------------------------------------

**Tabella** **21: Richiesta Flusso Rifiutata dal Nodo / Nessun flusso
presente**

[^1]: Attività da considerarsi solo nel caso di Revoca per Charge-Back

[^2]: Attività da considerarsi solo nel caso di Revoca per Charge-Back

[^3]: Per i dettagli del Tavolo Operativo si rimanda alla sezione IV.
