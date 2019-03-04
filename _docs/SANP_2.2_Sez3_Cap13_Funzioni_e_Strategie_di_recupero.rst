Funzioni e strategie di recupero
================================

Scenari, casi d’uso e attori
----------------------------

Le funzionalità ausiliarie disponibili all’interno del Sistema pagoPA rappresentano funzionalità accessorie per la gestione dei processi correlati
alle operazioni di pagamento e possono essere utilizzate dagli EC per il rientro da situazioni anomale o per le quali si renda necessario il
ripristino di situazioni precedenti.

Tali funzioni sono utilizzate anche dai PSP al fine di interrogare le basi di dati messe a disposizione dal NodoSPC per l’esercizio del ciclo di vita
del pagamento. Si fa presente che le funzionalità ausiliarie sono offerte dal NodoSPC attraverso interfacce SOAP consumabili dagli attori coinvolti. A
sua volta, anche il NodoSPC, in qualità di fruitore, utilizza le funzionalità ausiliarie messe a disposizione dai PSP per la verifica e gestione degli
errori nei processi di pagamento.

|Intro|

**Figura** **1: Rappresentazione degli erogatori e fruitori delle funzionalità di supporto**

Funzioni Ausiliarie per L’Ente Creditore
----------------------------------------

Il paragrafo si focalizza sulle funzioni ausiliarie del NodoSPC, ovvero quelle funzioni, dedicate all’EC, che permettono l’espletamento dei processi
correlati alle operazioni di pagamento e/o consentono la risoluzione di eventuali situazioni anomale o il rientro a stati preesistenti.

Richiesta della copia di una RT
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

L’EC ha facoltà di richiedere una copia della RT precedentemente recapitata.

+-----------------+-----------------------------------------------------------------------------------------------------------------------------------+
| Pre-Condizione  | L’EC riscontra delle condizioni anomale sui pagamenti effettuati dagli utilizzatori finali o riscontra la perdita di una o più RT |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------+
| Trigger         | Necessità di ripristino di una RT                                                                                                 |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------+
| Descrizione     | L’EC sottomette la richiesta di ricevere una specifica RT precedentemente ricevuta                                                |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------+
| Post-Condizione | L’EC riceve la RT                                                                                                                 |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------+

**Tabella** **1: Richiesta della copia di una RT**

   |nodoChiediCopiaRT|

**Figura** **2: Richiesta della copia di una RT**

1. L’EC sottomette al NodoSPC la richiesta di ricevere una copia della RT mediante la primitiva *nodoChiediCopiaRT*;

..

   **Caso OK**

2. La RT è correttamente trovata dal NodoSPC e restituita all’EC in allegato alla *response* positiva alla primitiva di cui al punto 1;

..

   **Caso KO**

3. Il NodoSPC replica negativamente alla richiesta precedente fornendo response KO alla primitiva di cui al punto 1 emanando un *faultBean* il cui
   *faultBean.faultCode* è rappresentativo dell’errore riscontrato; in particolare:

   -  PPT_SINTASSI_XSD: nel caso di errore di validazione della richiesta

   -  PPT_SINTASSI_EXTRAXSD: nel caso di errore di validazione della SOAP request

   -  PPT_SEMANTICA: nel caso di errori semantici

   -  PPT_RT_SCONOSCIUTA: i parametri di input specificati nella richiesta non consentono di trovare alcuna RT

   -  PPT_RT_NONDOSPONIBILE: la RT richiesta non è disponibile.

Richiesta della Lista delle RPT Pendenti
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

L’EC ha facoltà di domandare la lista delle RPT correttamente inviate al PSP tramite il NodoSPC per le quali ancora non sono state ricevute le RT.

+-----------------+------------------------------------------------------------------------------+
| Pre-Condizione  | L’EC ha sottomesso al NodoSPC un certo numero di RPT e non ha ricevuto le RT |
+-----------------+------------------------------------------------------------------------------+
| Trigger         | Necessità di riconciliazione o chiusura delle posizioni pendenti             |
+-----------------+------------------------------------------------------------------------------+
| Descrizione     | L’EC sottomette la richiesta di ricevere la lista delle RPT pendenti         |
+-----------------+------------------------------------------------------------------------------+
| Post-Condizione | L’EC riceve la lista delle RPT                                               |
+-----------------+------------------------------------------------------------------------------+

**Tabella** **2: Richiesta della Lista delle RPT Pendenti**

|nodoChiediRPTPendenti|

**Figura** **3: Richiesta della Lista delle RPT Pendenti**

1. l’EC, mediante la primitiva *nodoChiediListaPendentiRPT* richiede al NodoSPC il numero e le RPT correttamente sottomesse ai PSP per le quali ancora
   non è stata ricevuta alcuna RT;

..

   **Caso OK**

2. il NodoSPC replica con esito OK indicando il numero totale e le RPT pendenti consegnate al PSP scelto dall’Utilizzatore finale per le quali ancora
   non è stata consegnata al NodoSPC alcuna RT;

..

   **Caso KO**

3. il NodoSPC replica con esito KO alla primitiva di cui al punto 1 emanando un *faultBean* il cui *faultBean.faultCode* è rappresentativo dell’errore
   riscontrato; in particolare:

   -  PPT_SINTASSI_EXTRAXSD: nel caso di errori nella SOAP *request*

   -  PPT_SEMANTICA: nel caso di errori semantici.

Verifica dello stato di una RPT
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------+-------------------------------------------------------------------------+
| Pre-Condizione  | L’EC ha sottomesso al NodoSPC una RPT                                   |
+-----------------+-------------------------------------------------------------------------+
| Trigger         | L’EC necessita di conoscere l’evoluzione temporale di una specifica RPT |
+-----------------+-------------------------------------------------------------------------+
| Descrizione     | L’EC sottomette la richiesta di conoscere lo stato di una specifica RPT |
+-----------------+-------------------------------------------------------------------------+
| Post-Condizione | L’EC riceve le informazioni inerenti lo stato della RPT                 |
+-----------------+-------------------------------------------------------------------------+

**Tabella** **3: Verifica dello stato di una RPT**

|nodoChiediStatoRPT|

**Figura** **4: Verifica dello stato di una RPT**

L’evoluzione temporale è la seguente:

1. l’EC richiede di conoscere lo stato di una RPT mediante la primitiva *nodoChiediStatoRPT.*

**Caso OK**

2. il NodoSPC replica positivamente alla primitiva di cui al punto 1 fornendo nella *response* le informazioni peculiari per il tracciamento della RPT
   stessa; in particolare:

   -  *Redirect*: specifica se il pagamento prevede o meno una *redirect*

   -  *URL*: eventuale URL di *redirezione*

   -  *STATO*: stato della RPT

   -  *Descrizione*: descrizione dello stato della RPT

   -  *versamentiLista*: struttura contenente una lista di elementi che identificano gli stati assunti da ogni singolo versamento presente nella RPT
      da quando la RPT è stata ricevuta dal PSP. Ogni elemento della lista è costituito da:

      -  *progressivo*: numero del versamento nella RPT

      -  *data*: data relativa allo stato del versamento

      -  *stato*: stato della RPT alla data indicata

      -  *descrizione*: descrizione dello stato alla data

**Caso KO**

3. il NodoSPC fornisce esito KO alla primitiva di cui al punto 1 emanando un *fault.Bean* il cui *faultBean.faultCode* è rappresentativo dell’errore
   riscontrato; in particolare:

   -  PPT_RPT_SCONOSCIUTA: la RPT di cui si chiede lo stato non è stata trovata

   -  PPT_SEMANTICA: nel caso di errori semantici

   -  PPT_SINTASSI_EXTRAXSD: Errore nella composizione della SOAP *request*

Richiesta Catalogo Dati Informativi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------+-------------------------------------------------------------------------------------------------------------------------+
| Pre-Condizione  | n.a.                                                                                                                    |
+-----------------+-------------------------------------------------------------------------------------------------------------------------+
| Trigger         | L’EC necessita di conoscere il Catalogo Dati Informativi elaborato dal NodoSPC per verificare i servizi erogati dai PSP |
+-----------------+-------------------------------------------------------------------------------------------------------------------------+
| Descrizione     | L’EC sottomette la richiesta di scaricare il Catalogo Dati Informativi messo a disposizione dal NodoSPC                 |
+-----------------+-------------------------------------------------------------------------------------------------------------------------+
| Post-Condizione | L’EC riceve il Catalogo Dati Informativi                                                                                |
+-----------------+-------------------------------------------------------------------------------------------------------------------------+

**Tabella** **4: Richiesta Catalogo Dati Informativi**

|image4|

**Figura** **5: Richiesta Catalogo Dati Informativi**

L’evoluzione temporale è la seguente:

1. l’EC richiede al NodoSPC il Catalogo Dati Informativi mediante la primitiva *nodoChiediInformativaPSP;*

..

   **Caso OK - Ricezione mediante SOAP response**

2. il NodoSPC replica all’invocazione precedente fornendo *response* OK ed il file XML relativo al Catalogo Dati Informativi dei PSP codificato in
   Base64;

..

   **Caso KO**

3. il NodoSPC replica negativamente alla richiesta di cui al punto 1 emanando un *faultBean* il cui *faultBean*.\ *faultCode* è rappresentativo
   dell’errore riscontrato; in particolare:

   -  PPT_SINTASSI_EXTRAXSD: Errore nella SOAP *request*

   -  PPT_SEMANTICA: Errore semantico

   -  PPT_INFORMATIVAPSP_PRESENTE: il NodoSPC ha già depositato il file XML richiesto nella directory assegnata all’EC sulla componente SFTP_NodSPC

   -  PPT_SYSTEM_ERROR: errore nella generazione del file XML richiesto.

Funzioni ausiliarie per il PSP
------------------------------

Richiesta del Catalogo dei Servizi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Il PSP interroga la base di dati del NodoSPC al fine di scaricare l’ultima versione del Catalogo dei Servizi offerti dagli EC, da utilizzare
nell’ambito del Pagamento Spontaneo presso i PSP.

+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Pre-Condizione                                                           | Il PSP decide di supportare i pagamenti spontanei pressi i propri        |
|                                                                          | sportelli                                                                |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Trigger                                                                  | Necessità di conoscere i servizi offerti dalle PA                        |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Descrizione                                                              | Il PSP sottomette la richiesta di ricevere il file XML Catalogo dei      |
|                                                                          | Servizi attestante i servizi offerti dagli EC o da uno specifico Ente    |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Post-Condizione                                                          | Il PSP riceve il Catalogo dei Servizi degli EC                           |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+

**Tabella** **5: Richiesta del Catalogo dei Servizi**

|SD_nodoChiediCatalogoServizi|

**Figura** **6: Richiesta del Catalogo dei Servizi**

1. il PSP richiede al NodoSPC di ricevere il Catalogo dei Servizi offerto dagli EC mediante la primitiva *nodoChiediCatalogoServizi;*

..

   **Caso OK**

2. il NodoSPC replica con *response* OK fornendo il tracciato XML del Catalogo dei Servizi codificato in Base64;

..

   **Caso KO**

3. Il NodoSPC replica con *response* KO emanando un *faultBean* il cui *faultBean*.\ *faultCode* è PPT_SINTASSI_EXTRAXSD.

Richiesta template del Catalogo Dati Informativi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Il PSP ha facoltà di richiedere al NodoSPC l’ultima versione del Catalogo Dati Informativi comunicato per motivazioni di verifica o aggiornamenti

+-----------------+--------------------------------------------------------------------------------------------------+
| Pre-Condizione  | Il PSP ha (o meno) precedentemente comunicato al Nodo il Catalogo Dati Informativi               |
+-----------------+--------------------------------------------------------------------------------------------------+
| Trigger         | Necessità del PSP di aggiornare il proprio Catalogo                                              |
+-----------------+--------------------------------------------------------------------------------------------------+
| Descrizione     | Il PSP sottomette la richiesta di ricevere il file XML attestante l’ultimo Catalogo Dati inviato |
+-----------------+--------------------------------------------------------------------------------------------------+
| Post-Condizione | Il PSP riceve il Catalogo Dati Informativi di propria competenza (o il *template*)               |
+-----------------+--------------------------------------------------------------------------------------------------+

**Tabella** **6: Richiesta template del Catalogo Dati Informativi**

|SD_nodoChiediTemplateInformativaPSP|

**Figura** **7: Richiesta template del Catalogo Dati Informativi**

1. il PSP richiede al NodoSPC, attraverso la primitiva *nodoChiediTemplateInformativaPSP,* l’ultima versione del Catalogo Dati Informativi
   precedentemente inviato;

..

   **Caso OK – precedente invio Catalogo Dati Informativi**

2. il PSP riceve *response* OK ed il file XML del Catalogo Dati Informativi in formato Base64 precedentemente inviato;

..

   **Caso OK – nessun invio precedente Catalogo Dati Informativi**

3. il PSP riceve *response* OK e solo il *template* del Catalogo Dati Informativi;

..

   **Caso KO**

4. il PSP riceve *response KO* emanando un *faultBean* il cui *faultBean*.\ *faultCode* è PPT_SINTASSI_EXTRAXSD.

Richiesta informativa PA
~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------+--------------------------------------------------------------------------------------------------------+
| Pre-Condizione  | L’EC ha sottomesso al Nodo la Tabella delle Controparti                                                |
+-----------------+--------------------------------------------------------------------------------------------------------+
| Trigger         | Il PSP necessita di conoscere la disponibilità dei servizi offerti dagli EC e i dati ad essi correlati |
+-----------------+--------------------------------------------------------------------------------------------------------+
| Descrizione     | Il PSP sottomette al NodoSPC la richiesta della Tabella delle Controparti                              |
+-----------------+--------------------------------------------------------------------------------------------------------+
| Post-Condizione | Il PSP riceve dal Nodo la Tabella delle Controparti                                                    |
+-----------------+--------------------------------------------------------------------------------------------------------+

**Tabella** **7: Richiesta informativa PA**

|SD_nodoChiediInformativaPA|

**Figura** **8: Richiesta informativa PA**

1. il PSP, mediante la primitiva *nodoChiediInformativaPA,* richiede al NodoSPC la Tabella delle Controparti degli EC.

..

   **Caso OK**

2. il NodoSPC replica con esito OK fornendo in output il documento XML codificato in Base64 rappresentante la Tabella delle Controparti degli EC;

..

   **Caso KO**

3. il NodoSPC replica con esito KO emanando un *faultBean* il cui *faultBean*.\ *faultCode* è PPT_SINTASSI_EXTRAXSD.

Richiesta Stato Elaborazione Flusso di Rendicontazione
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------+--------------------------------------------------------------------------------------------------------------------------------+
| Pre-Condizione  | Il PSP ha sottomesso un file XML di rendicontazione al NodoSPC (mediante SOAP *request* o componente SFTP_NodoSPC)             |
+-----------------+--------------------------------------------------------------------------------------------------------------------------------+
| Trigger         | Il PSP necessita di conoscere lo stato di elaborazione del file XML di rendicontazione                                         |
+-----------------+--------------------------------------------------------------------------------------------------------------------------------+
| Descrizione     | Il PSP sottomette la richiesta passando come parametro di input *l’identificativoFlusso* del flusso di rendicontazione inviato |
+-----------------+--------------------------------------------------------------------------------------------------------------------------------+
| Post-Condizione | Il NodoSPC replica fornendo lo stato di elaborazione del flusso di rendicontazione                                             |
+-----------------+--------------------------------------------------------------------------------------------------------------------------------+

**Tabella** **8: Richiesta Stato Elaborazione Flusso di Rendicontazione**

|sd_nodoChiediStatoElaborazioneFlussoRendicontazione|

**Figura** **9: Richiesta Stato Elaborazione Flusso di Rendicontazione**

1. il PSP, attraverso la primitiva *nodoChiediStatoFlussoRendicontazione*, sottomette al NodoSPC la richiesta di conoscere lo stato di elaborazione di
   un flusso XML di rendicontazione precedentemente inviato valorizzando il parametro di input *identificaficativoFlusso*

**Caso OK**

2. il NodoSPC replica positivamente alla primitiva precedente fornendo lo stato di elaborazione del flusso XML; in particolare:

   a. FLUSSO_IN_ELABORAZIONE: il flusso XML è in fase di elaborazione/storicizzazione sulle basi di dati del NodoSPC

   b. FLUSSO_ELABORATO: Il flusso è stato correttamente elaborato e storicizzato dal NodoSPC

   c. FLUSSO_SCONOSCIUTO: il Nodo non conosce il flusso richiesto

   d. FLUSSO_DUPLICATO: il Nodo rileva che il flusso inviato è già stato sottomesso.

**Caso KO**

3. Il NodoSPC il NodoSPC replica con esito KO emanando un *faultBean* il cui *faultBean*.\ *faultCode* è PPT_SEMANTICA.

Strategie di *retry* per il recapito della RT 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Pre-Condizione                                                           | Il pagamento è nello stato RT-PSP                                        |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Trigger                                                                  | Il PSP ha tentato l’invio di una RT e                                    |
|                                                                          |                                                                          |
|                                                                          | -  il NodoSPC ha replicato mediante *response* KO emanando un            |
|                                                                          |    *faultBean* il cui *faultBean.faultCode* è pari a                     |
|                                                                          |    PPT_STAZIONE_INT_PA_TIMEOUT oppure                                    |
|                                                                          |    PPT_STAZIONE_INT_PA_IRRAGGIUNGIBILE                                   |
|                                                                          |                                                                          |
|                                                                          | oppure                                                                   |
|                                                                          |                                                                          |
|                                                                          | -  non ha ricevuto risposta entro i termini previsti                     |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Descrizione                                                              | Il PSP esegue fino a cinque tentativi di invio della RT in modalità PUSH |
|                                                                          | attendendo intervalli di tempo crescenti.                                |
|                                                                          |                                                                          |
|                                                                          | Se l’esecuzione di tutti i tentativi di invio non ha esito positivo,     |
|                                                                          | pone la RT nella coda PULL                                               |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+
| Post-Condizione                                                          | Al termine della procedura il pagamento transisce nello stato RT_EC      |
+--------------------------------------------------------------------------+--------------------------------------------------------------------------+

**Tabella** **9: Strategie di retry per il recapito della RT**

|image9|

**Figura** **10: meccanismi di recovery per RT PUSH**

1. Il PSP sottomette al NodoSPC la RT attraverso la primitiva *nodoInviaRT*:

Si possono presentare i seguenti due scenari alternativi:

**EC indisponibile**

2. Il NodoSPC replica emanando un *faultBean* il cui *faultBean.faultCode* è pari a: PPT_STAZIONE_INT_PA_TIMEOUT (indisponibilità funzionale della
   controparte) oppure PPT_STAZIONE_INT_PA_IRRAGGIUNGIBILE (mancata raggiungibilità della controparte); il PSP pone la RT nella coda PULL.

*NB: nel caso di indisponibilità funzionale della controparte, per gestire l’eventualità di interruzione del servizio di breve durata, il PSP ha
facoltà di reiterare l’invio della RT in modalità PUSH.*

**Nodo non disponibile**

3. Il PSP non riceve alcuna risposta alla primitiva di cui al punto 1

4. Il PSP ritenta nuovamente l’invio della RT in modalità PUSH per un massimo di ulteriori cinque tentativi di recupero, attenendosi alla seguente
   schedulazione:

+-----------------------------+----------------------+
| **# Tentativo di recupero** | **Attesa (secondi)** |
+=============================+======================+
| 1                           | 5                    |
+-----------------------------+----------------------+
| 2                           | 10                   |
+-----------------------------+----------------------+
| 3                           | 20                   |
+-----------------------------+----------------------+
| 4                           | 40                   |
+-----------------------------+----------------------+
| 5                           | 80                   |
+-----------------------------+----------------------+

Si possono presentare i seguenti due scenari alternativi:

**Response ad uno dei tentativi di recupero**

5. Il PSP riceve la *response*, termina qualsiasi attività di recupero della RT

**Esaurimento dei tentativi di recupero**

6. Il PSP non riceve alcuna *response* nei tempi previsti all’invocazione di cui al punto 4

7. Il PSP colloca la RT nella coda PULL terminando le azioni di recupero

**Processo di recupero RT in modalità PULL**

8.  Il NodoSPC, mediante la SOAP *request* *pspChiediListaRT* chiede al PSP la lista delle RT da recuperare

9.  Il PSP replica alla primitiva di cui al punto precedente fornendo *response* OK e la lista delle RT da prelevare

10. Il NodoSPC preleva la RT mediante la primitiva *pspChiediRT*

11. Il PSP replica con *response* OK fornendo al RT richiesta

12. Il NodoSPC valida la RT prelevata precedentemente

Si possono presentare i seguenti due scenari alternativi:

**In caso di RT corretta**

13. Il NodoSPC invia conferma al PSP dell’avvenuta ricezione della RT mediante la primitiva *pspInviaAckRT*. Il messaggio di ackRT riporterà nel dato
    *statoMessaggioReferenziato* il valore ACTC.

14. Il PSP elimina la RT dalla coda PULL

15. Il PSP replica fornendo esito OK alla primitiva di cui al punto 14.

**In caso di RT non corretta**

16. Il NodoSPC notifica al PSP il rifiuto della RT mediante la primitiva *pspInviaAckRT*. Il messaggio di *ackRT* riporterà nel dato
    *statoMessaggioReferenziato* il valore RJCT.

17. Il PSP replica fornendo esito OK alla primitiva di cui al punto precedente

Funzioni Ausiliarie per il NodoSPC
----------------------------------

Richiesta avanzamento RPT
~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------+--------------------------------------------------------------------------------------------+
| Pre-Condizione  | Il NodoSPC ha sottomesso una RPT o un carrello di RPT al PSP                               |
+-----------------+--------------------------------------------------------------------------------------------+
| Trigger         | Il NodoSPC necessita di verificare lo stato di avanzamento di una RTP o di un              |
+-----------------+--------------------------------------------------------------------------------------------+
| Descrizione     | Il NodoSPC sottomette la richiesta di ricevere lo stato di una RPT o di un carrello di RPT |
+-----------------+--------------------------------------------------------------------------------------------+
| Post-Condizione | Il NodoSPC riceve lo stato della RPT o del carrello di RPT                                 |
+-----------------+--------------------------------------------------------------------------------------------+

**Tabella** **10: Richiesta avanzamento RPT**

|pspChiediAvanzamentoRPT|

**Figura** **11: Richiesta avanzamento RPT**

1. il NodoSPC, mediante la primitiva *pspChiediAvanzamentoRPT,* richiede al PSP informazioni in merito allo stato di avanzamento di una RPT o di un
   carrello di RPT.

**Caso OK**

2. il PSP replica con esito OK fornendo lo stato della RPT o del carrello di RPT;

**Caso KO**

3. il PSP replica con esito KO emanando un *faultBean* il cui *faultBean*.\ *faultCode* è rappresentativo dell’errore riscontrato; in particolare:

   -  CANALE_RPT_SCONOSCIUTA: non è possibile trovare la RPT o il carrello di RPT per cui si richiede lo stato di elaborazione

   -  CANALE \_RPT_RIFIUTATA: la RPT o il carrello di RPT sottomessi dal NodoSPC sono stati rifiutati dal PSP.

Richiesta di avanzamento RT
~~~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------+----------------------------------------------------------------------------------------------------------------------------------+
| Pre-Condizione  | Il NodoSPC verifica lo stato avanzamento di una RT                                                                               |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------+
| Trigger         | Il NodoSPC necessita di verificare lo stato di avanzamento della produzione della RT associata ad una RPT o a un carrello di RPT |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------+
| Descrizione     | Il NodoSPC sottomette la richiesta di ricevere lo stato di una RT                                                                |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------+
| Post-Condizione | Il NodoSPC riceve lo stato della RT                                                                                              |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------+

**Tabella** **11: Richiesta di avanzamento RT**

|pspChiediAvanzamentoRT|

**Figura** **12: Richiesta di avanzamento RT**

1. il NodoSPC, mediante la primitiva *pspChiediAvanzamentoRT,* richiede al PSP informazioni in merito allo stato di avanzamento della RT;

2. Il PSP ricerca la RT nel proprio archivio;

..

   **Caso OK**

3. il PSP replica con esito OK fornendo lo stato della RT, specificando eventualmente il tempo richiesto per la sua generazione ed invio;

..

   **Caso KO**

4. il PSP replica con esito KO emanando un *faultBean* il cui *faultBean.faultCode* è rappresentativo dell’errore riscontrato; in particolare:

   -  CANALE_RT_SCONOSCIUTA: non è stata trovata la RT per la quale si richiede di conoscere lo stato di avanzamento

   -  CANALE_RT_RIFIUTATA_EC: la RT è stata rifiutata dall’EC.

.. |Intro| image:: media_FunzioniStrategieRecupero/media/image1.png
   :width: 6.68681in
   :height: 3.60903in
.. |nodoChiediCopiaRT| image:: media_FunzioniStrategieRecupero/media/image2.png
   :width: 4.44375in
   :height: 3.24375in
.. |nodoChiediRPTPendenti| image:: media_FunzioniStrategieRecupero/media/image3.png
   :width: 6.55625in
   :height: 2.63472in
.. |nodoChiediStatoRPT| image:: media_FunzioniStrategieRecupero/media/image4.png
   :width: 5.56528in
   :height: 2.94792in
.. |image4| image:: media_FunzioniStrategieRecupero/media/image5.png
   :width: 5.375in
   :height: 3.23958in
.. |SD_nodoChiediCatalogoServizi| image:: media_FunzioniStrategieRecupero/media/image6.png
   :width: 4.90417in
   :height: 2.63472in
.. |SD_nodoChiediTemplateInformativaPSP| image:: media_FunzioniStrategieRecupero/media/image7.png
   :width: 6.43472in
   :height: 3.21736in
.. |SD_nodoChiediInformativaPA| image:: media_FunzioniStrategieRecupero/media/image8.png
   :width: 5.53889in
   :height: 2.47847in
.. |sd_nodoChiediStatoElaborazioneFlussoRendicontazione| image:: media_FunzioniStrategieRecupero/media/image9.png
   :width: 6.69583in
   :height: 2.54792in
.. |image9| image:: media_FunzioniStrategieRecupero/media/image10.png
   :width: 6.09091in
   :height: 7.55518in
.. |pspChiediAvanzamentoRPT| image:: media_FunzioniStrategieRecupero/media/image11.png
   :width: 5.91319in
   :height: 2.98264in
.. |pspChiediAvanzamentoRT| image:: media_FunzioniStrategieRecupero/media/image12.png
   :width: 5.74792in
   :height: 2.98264in
