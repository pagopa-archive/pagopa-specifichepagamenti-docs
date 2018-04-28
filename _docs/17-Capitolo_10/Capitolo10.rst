+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+----------------------------------------+
| **Capitolo 10. GESTIONE DEGLI ERRORI** |
+----------------------------------------+

Gestione degli Errori
=====================

In questo capitolo sono fornite le specifiche necessarie per gestire gli
errori all’interno del sistema pagoPA.

La struttura faultBean
----------------------
.. _La struttura faultBean:

Per la **Gestione degli errori** all’interno dei messaggi scambiati tra
i soggetti aderenti (EC e PSP) ed il NodoSPC viene utilizzata la
struttura **faultBean** composta così come indicato in Tabella 51.

**Tabella** **51 - Elementi che compongono la struttura faultBean**

+-----------------------+-----------------------+-----------------------+
| **Componente**        | **Occ.**              | **Descrizione**       |
+=======================+=======================+=======================+
| id                    | 1..1                  | Soggetto che emette   |
|                       |                       | l'errore.             |
+-----------------------+-----------------------+-----------------------+
| faultCode             | 1..1                  | Codice di errore.     |
+-----------------------+-----------------------+-----------------------+
| faultString           | 1..1                  | Specifica del codice  |
|                       |                       | di errore.            |
+-----------------------+-----------------------+-----------------------+
| description           | 0..1                  | Descrizione           |
|                       |                       | aggiuntiva.           |
+-----------------------+-----------------------+-----------------------+
| serial                | 0..1                  | Posizione             |
|                       |                       | dell’elemento nella   |
|                       |                       | lista a cui fa        |
|                       |                       | riferimento.          |
+-----------------------+-----------------------+-----------------------+
| originalFaultCode     | 0..1                  | Codice di errore      |
|                       |                       | generato dalla        |
|                       |                       | controparte.          |
+-----------------------+-----------------------+-----------------------+
| originalFaultString   | 0..1                  | Specifica del codice  |
|                       |                       | di errore generato    |
|                       |                       | dalla controparte.    |
+-----------------------+-----------------------+-----------------------+
| originalDescription   | 0..1                  | Descrizione           |
|                       |                       | aggiuntiva del codice |
|                       |                       | di errore generato    |
|                       |                       | dalla controparte.    |
+-----------------------+-----------------------+-----------------------+

+-----------------------------------------------------------------------+
| **id:**                                                               |
+-----------------------------------------------------------------------+
| Soggetto che emette l'errore.                                         |
|                                                                       |
| *Formato:* stringa.                                                   |
|                                                                       |
| *Valori Ammessi:*                                                     |
|                                                                       |
| “NodoDeiPagamentiSPC” costante che identifica il NodoSPC              |
|                                                                       |
| <identificativoDominio> dato variabile idDominio dell'Ente            |
| Creditore che emette il fault                                         |
|                                                                       |
| <identificativoPSP > dato variabile identificativoPSP del PSP che     |
| emette il fault                                                       |
+-----------------------------------------------------------------------+
| **faultCode:**                                                        |
+-----------------------------------------------------------------------+
| Codice dell’errore, proprio del soggetto che lo emette. Si veda       |
| la colonna faultCode della Tabella 38 – “Valori da utilizzare         |
| nella struttura faultBean”.                                           |
|                                                                       |
| *Formato:* stringa.                                                   |
+-----------------------------------------------------------------------+
| **faultString:**                                                      |
+-----------------------------------------------------------------------+
| Specifica del codice di errore, proprio del soggetto che lo           |
| emette, Si veda la colonna faultString della Tabella 38 – “Valori     |
| da utilizzare nella struttura faultBean”.                             |
|                                                                       |
| *Formato:* stringa.                                                   |
+-----------------------------------------------------------------------+
| **description:**                                                      |
+-----------------------------------------------------------------------+
| Descrizione aggiuntiva dell’errore impostata dal NodoSPC,             |
| dall’Ente Creditore o dal PSP.                                        |
|                                                                       |
| Nella emissione di un **faultCode** *PAA_SEMANTICA* (EC) o            |
| *CANALE_SEMANTICA* (PSP), i soggetti erogatori (EC o PSP)             |
| dovranno indicare nel presente dato lo specifico errore legato        |
| all’elaborazione dell’oggetto ricevuto.                               |
|                                                                       |
| Nel caso in cui il NodoSPC riceva un **faultCode** uguale a           |
| *PPT_ERRORE_EMESSO_DA_PAA* o *PPT_CANALE_ERRORE,* il campo è          |
| valorizzato con l’intero **faultBean** ricevuto dal NodoSPC e         |
| convertito in formato stringa.                                        |
|                                                                       |
| *Formato:* stringa.                                                   |
+-----------------------------------------------------------------------+
| **serial:**                                                           |
+-----------------------------------------------------------------------+
| Posizione dell’elemento nella lista a cui fa riferimento. Utile       |
| quando si fornisce un parametro in forma di vettore (ad esempio,      |
| nella primitiva **nodoInviaCarrelloRPT**).                            |
|                                                                       |
| Nel caso in cui l'errore sia generato dall'EC o dal PSP, il dato      |
| riporta il valore del dato faultBean.serial impostato dall'EC o       |
| dal PSP.                                                              |
|                                                                       |
| *Formato:* Numerico intero.                                           |
+-----------------------------------------------------------------------+
| **originalFaultCode:**                                                |
+-----------------------------------------------------------------------+
| Codice dell’errore generato dalla controparte. Non è presente se      |
| l'errore è generato dal NodoSPC.                                      |
|                                                                       |
| *Formato:* stringa.                                                   |
+-----------------------------------------------------------------------+
| **originalFaultString:**                                              |
+-----------------------------------------------------------------------+
| Specifica del codice di errore generato dalla controparte. Non è      |
| presente se l'errore è generato dal NodoSPC.                          |
|                                                                       |
| *Formato:* Numerico stringa.                                          |
+-----------------------------------------------------------------------+
| **originalDescription:**                                              |
+-----------------------------------------------------------------------+
| Descrizione aggiuntiva dell’errore generato dalla controparte.        |
| Non è presente se l'errore è generato dal NodoSPC.                    |
|                                                                       |
| *Formato:* Numerico stringa.                                          |
+-----------------------------------------------------------------------+

Codici di errore
----------------
.. _Codici di errore:

Questo paragrafo riporta nella Tabella 52 i codici di errore
(**faultCode**) e la relativa **faultString**, restituiti dalle
primitive nella struttura **faultBean** (vedi sopra).

Si precisa che, il **faultCode** ha la seguente struttura:

<erogatore>_<codice errore>

dove <erogatore> può assumere uno dei seguenti valori:

+----------+-----------------------------------------------------+
| *PPT*    | errore emesso da Nodo dei Pagamenti-SPC             |
+----------+-----------------------------------------------------+
| *PAA*    | errore emesso da Ente Creditore                     |
+----------+-----------------------------------------------------+
| *CANALE* | errore emesso da Prestatore di servizi di pagamento |
+----------+-----------------------------------------------------+

I **faultCode** <erogatore>_SYSTEM_ERROR possono essere restituiti da
qualsiasi primitiva, sono perciò riportati solo in Tabella 52, ma non
nella **Gestione degli errori** delle singole primitive.

**Tabella** **52 - Valori da utilizzare nella struttura faultBean**

+-----------------------------------+--------------------------------------------------------------------------------------------+
| **faultCode**                     | **faultString**                                                                            |
+===================================+============================================================================================+
| *CANALE_AVVISO_DUPLICATO*         | Messaggio di Warning per Avviso                                                            |
|                                   | duplicato                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_BUSTA_ERRATA*             | Messaggio dismesso                                                                         |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_ER_DUPLICATA*             | ER duplicata.                                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_FIRMA_SCONOSCIUTA*        | Messaggio dismesso                                                                         |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_INDISPONIBILE*            | Servizio non disponibile.                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_RICHIEDENTE_ERRATO*       | Identificativo richiedente non                                                             |
|                                   | valido.                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_RPT_DUPLICATA*            | RPT duplicata.                                                                             |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_RPT_RIFIUTATA*            | RPT rifiutata.                                                                             |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_RPT_SCONOSCIUTA*          | RPT sconosciuta.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_RT_NON_DISPONIBILE*       | `Vedi § 9.2.2.2 <../16-Capitolo_9/Capitolo9.rst#pspchiedirt>`_  **pspChiediRT** e          |
|                                   | `§ 9.2.2.4 <../16-Capitolo_9/Capitolo9.rst#pspchiedilistart>`_  **pspChiediListaRT**       |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_RT_SCONOSCIUTA*           | RT sconosciuta.                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_SEMANTICA*                | Errore semantico.                                                                          |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_SINTASSI_EXTRAXSD*        | Errore di sintassi extra XSD.                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_SINTASSI_XSD*             | Errore di sintassi XSD.                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *CANALE_SYSTEM_ERROR*             | Errore generico.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
|*PAA_ATTIVA_RPT_IMPORTO_NON_VALIDO*| L’importo del pagamento in attesa                                                          |
|                                   | non è congruente con il dato                                                               |
|                                   | indicato dal PSP                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_ER_DUPLICATA*                | Esito Revoca duplicato                                                                     |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_ERRORE_FORMATO_BUSTA_FIRMATA*| Formato busta di firma errato o                                                            |
|                                   | non corrispondente al tipoFirma.                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_FIRMA_ERRATA*                | Errore di firma.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_FIRMA_INDISPONIBILE*         | Impossibile firmare.                                                                       |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_ID_DOMINIO_ERRATO*           | La PAA non corrisponde al Dominio                                                          |
|                                   | indicato.                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_ID_INTERMEDIARIO_ERRATO*     | Identificativo intermediario non                                                           |
|                                   | corrispondente.                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_PAGAMENTO_ANNULLATO*         | Pagamento in attesa risulta                                                                |
|                                   | annullato all’Ente Creditore.                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_PAGAMENTO_DUPLICATO*         | Pagamento in attesa risulta                                                                |
|                                   | concluso all’Ente Creditore.                                                               |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_PAGAMENTO_IN_CORSO*          | Pagamento in attesa risulta in                                                             |
|                                   | corso all’Ente Creditore.                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_PAGAMENTO_SCADUTO*           | Pagamento in attesa risulta                                                                |
|                                   | scaduto all’Ente Creditore.                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_PAGAMENTO_SCONOSCIUTO*       | Pagamento in attesa risulta                                                                |
|                                   | sconosciuto all’Ente Creditore.                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_RPT_SCONOSCIUTA*             | La RPT risulta sconosciuta.                                                                |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_RT_DUPLICATA*                | La RT è già stata accettata.                                                               |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_RT_SCONOSCIUTA*              | RT sconosciuta.                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_SEMANTICA*                   | Errore semantico.                                                                          |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_SINTASSI_EXTRAXSD*           | Errore di sintassi extra XSD.                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_SINTASSI_XSD*                | Errore di sintassi XSD.                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_STAZIONE_INT_ERRATA*         | Stazione intermediario non                                                                 |
|                                   | corrispondente.                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_SYSTEM_ERROR*                | Errore generico.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PAA_TIPOFIRMA_SCONOSCIUTO*       | Il campo tipoFirma non                                                                     |
|                                   | corrisponde ad alcun valore                                                                |
|                                   | previsto.                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_AUTENTICAZIONE*              | Errore di autenticazione.                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_AUTORIZZAZIONE*              | Il richiedente non ha i diritti                                                            |
|                                   | per l’operazione.                                                                          |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_DISABILITATO*         | Canale conosciuto ma disabilitato                                                          |
|                                   | da configurazione.                                                                         |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_ERR_PARAM_PAG_IMM*    | Parametri restituiti dal Canale                                                            |
|                                   | per identificare il pagamento non                                                          |
|                                   | corretti                                                                                   |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_ERRORE*               | Errore restituito dal Canale.                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_ERRORE_RESPONSE*      | La *response* ricevuta dal Canale                                                          |
|                                   | è vuota o non corretta                                                                     |
|                                   | sintatticamente o semanticamente                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_INDISPONIBILE*        | Nessun canale utilizzabile e                                                               |
|                                   | abilitato.                                                                                 |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_IRRAGGIUNGIBILE*      | Errore di connessione verso il                                                             |
|                                   | Canale.                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_NONRISOLVIBILE*       | Il canale non è specificato, e                                                             |
|                                   | nessun canale risulta                                                                      |
|                                   | utilizzabile secondo                                                                       |
|                                   | configurazione.                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_SCONOSCIUTO*          | Canale sconosciuto.                                                                        |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_SERVIZIO_NONATTIVO*   | Il Servizio Applicativo del                                                                |
|                                   | Canale non è attivo.                                                                       |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CANALE_TIMEOUT*              | Timeout risposta dal Canale.                                                               |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_CODIFICA_PSP_SCONOSCIUTA*    | Valore di codificaInfrastruttura                                                           |
|                                   | PSP non censito.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_DOMINIO_DISABILITATO*        | Dominio disabilitato.                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_DOMINIO_SCONOSCIUTO*         | IdentificativoDominio                                                                      |
|                                   | sconosciuto.                                                                               |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_ERRORE_EMESSO_DA_PAA*        | Errore restituito dall’Ente                                                                |
|                                   | Creditore.                                                                                 |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_ERRORE_FORMATO_BUSTA_FIRMATA*| Formato busta di firma errato o                                                            |
|                                   | non corrispondente al tipoFirma.                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_FIRMA_INDISPONIBILE*         | Impossibile firmare.                                                                       |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_IBAN_NON_CENSITO*            | Il codice IBAn indicato dal EC                                                             |
|                                   | non è presente nella lista degli                                                           |
|                                   | IBAN comunicati al sistema                                                                 |
|                                   | pagoPA.                                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_ID_CARRELLO_DUPLICATO*       | Identificativo Carrello RPT                                                                |
|                                   | duplicato.                                                                                 |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_ID_FLUSSO_SCONOSCIUTO*       | Identificativo flusso                                                                      |
|                                   | sconosciuto.                                                                               |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *cPPT_ISCRIZIONE_NON_PRESENTE*    | Iscrizione non presente in                                                                 |
|                                   | archivio.                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_OPER_NON_REVOCABILE*         | Operazione non revocabile.                                                                 |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_OPER_NON_STORNABILE*         | Operazione non stornabile.                                                                 |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_PSP_DISABILITATO*            | PSP conosciuto ma disabilitato da                                                          |
|                                   | configurazione                                                                             |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_PSP_SCONOSCIUTO*             | PSP sconosciuto                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_RPT_DUPLICATA*               | RPT duplicata.                                                                             |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_RPT_NON_INOLTRABILE*         | La RPT richiesta e fornita dalla                                                           |
|                                   | PA non può essere inoltrata in                                                             |
|                                   | quanto non corretta formalmente.                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_RPT_SCONOSCIUTA*             | RPT sconosciuta.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_RT_DUPLICATA*                | La RT inviata dal PSP è già stata                                                          |
|                                   | inviata (RT push).                                                                         |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_RT_NONDISPONIBILE*           | RT non ancora pronta.                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_RT_SCONOSCIUTA*              | RT sconosciuta.                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_SEMANTICA*                   | Errore semantico.                                                                          |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_SINTASSI_EXTRAXSD*           | Errore di sintassi extra XSD.                                                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_SINTASSI_XSD*                | Errore di sintassi XSD.                                                                    |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_STAZIONE_INT_PA_DISABILITATA*| Stazione disabilitata.                                                                     |
|                                   |                                                                                            |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_STAZIONE_INT_PA_IRRAGGIUNGIB*| Errore di connessione verso la                                                             |
| *ILE*                             | Stazione                                                                                   |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_STAZIONE_INT_PA_SCONOSCIUTA* | IdentificativoStazioneRichiedente                                                          |
|                                   | sconosciuto.                                                                               |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_STAZIONE_INT_PA_SERVIZIO_NON*| Il Servizio Applicativo della                                                              |
| *ATTIVO*                          | Stazione non è attivo                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_SUPERAMENTOSOGLIA*           | Una qualche soglia fissata per                                                             |
|                                   | PPT è temporaneamente superata e                                                           |
|                                   | la richiesta è quindi rifiutata.                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_SYSTEM_ERROR*                | Errore generico.                                                                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_TIPOFIRMA_SCONOSCIUTO*       | Il campo tipoFirma non                                                                     |
|                                   | corrisponde ad alcun valore                                                                |
|                                   | previsto.                                                                                  |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_ULTERIORE_ISCRIZIONE*        | Ulteriore iscrizione                                                                       |
|                                   | precedentemente censita.                                                                   |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_WISP_SESSIONE_SCONOSCIUTA*   | La tripletta                                                                               |
|                                   | idDominio+keyPA+keyWISP non                                                                |
|                                   | corrisponde ad alcuna sessione                                                             |
|                                   | memorizzata nella componente                                                               |
|                                   | WISP.                                                                                      |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| *PPT_WISP_TIMEOUT_RECUPERO_SCELTA*| La tripletta                                                                               |
|                                   | idDominio+keyPA+keyWISP è                                                                  |
|                                   | relativa ad una scelta effettuata                                                          |
|                                   | scaduta.                                                                                   |
+-----------------------------------+--------------------------------------------------------------------------------------------+

Spiegazione di alcuni faultCode
-------------------------------
.. _Spiegazione di alcuni faultCode:

Ricordato che, nel caso di primitive sincrone, il NodoSPC provvede a far
pervenire il codice di errore alla controparte interessata (Ente
Creditore o PSP), di seguito sono date maggiori indicazioni circa alcuni
faultCode emessi dai vari soggetti:

+-----------------------------------------------------------------------+
| **<erogatore>_SEMANTICA** significa che il soggetto erogatore,        |
| superate le fasi di validazione sintattica delle buste SOAP in        |
| input e degli oggetti XML eventualmente trasportati, è incorso in     |
| un errore di validazione semantica e funzionale dei parametri in      |
| input.                                                                |
|                                                                       |
| Tali errori possono verificarsi nel caso in cui i parametri, nei      |
| loro valori, implicano verifiche funzionali che danno esito           |
| negativo.                                                             |
|                                                                       |
| Ad esempio, nel caso di una RPT ricevuta dal NodoSPC mediante         |
| **nodoInviaRPT** che contiene più versamenti singoli che,             |
| sommati tra loro, non corrispondono all’importo totale indicato       |
| nella RPT.                                                            |
|                                                                       |
| Oppure nel caso in cui il codiceContestoPagamento indicato non        |
| sia conforme al tipo di versamento specificato nella RPT, ecc.        |
+-----------------------------------------------------------------------+
| **<erogatore>_SINTASSI_EXTRAXSD** significa che il soggetto           |
| erogatore è incorso in un errore di validazione delle buste SOAP      |
| rappresentative di request applicative alle primitive che lo          |
| stesso espone alle controparti.                                       |
+-----------------------------------------------------------------------+
| **<erogatore>_SINTASSI_XSD** significa che il soggetto                |
| erogatore è incorso in un errore di validazione degli oggetti XML     |
| trasportati in-line all’interno di specifici campi delle buste        |
| SOAP (RPT, RT, flussi di rendicontazione, ecc.)                       |
+-----------------------------------------------------------------------+
| **PPT_\*_DISABILITATO/A** significano che il NodoSPC ha               |
| individuato, nei suoi archivi di configurazione interna, gli          |
| elementi topologici associati a tali identificativi, ma che tali      |
| elementi si trovano in stato "disabilitato" (sia essa momentanea      |
| o definitiva).                                                        |
+-----------------------------------------------------------------------+
| **PPT_\*_SCONOSCIUTO/A** significano che il NodoSPC non ha            |
| individuato, nei suoi archivi di configurazione interna, gli          |
| elementi topologici associati a tali identificativi.                  |
+-----------------------------------------------------------------------+
| **PPT_AUTENTICAZIONE** significa che il NodoSPC non trova             |
| corrispondenza tra la password indicata dalla controparte nella       |
| *Request* della primitiva e la password presente nei suoi archivi     |
| per la stazioneIntermediarioPA (primitive PA -> NodoSPC) o il         |
| CANALE (primitive PSP -> NodoSPC) indicato.                           |
+-----------------------------------------------------------------------+
| **PPT_AUTORIZZAZIONE** significa che il NodoSPC ha verificato         |
| l’effettiva presenza nei suoi archivi dei singoli elementi            |
| topologici indicati nella *Request*, ma che non esiste in             |
| configurazione una relazione valida ed abilitata tra gli stessi.      |
|                                                                       |
| Ad esempio, per un’invocazione di primitiva che il NodoSPC riceve     |
| da un Ente Creditore, il NodoSPC verifica la presenza e               |
| l’abilitazione nella sua configurazione interna dei singoli           |
| elementi identificati dai parametri identificativoDominio,            |
| identificativoIntermediarioPA e                                       |
| identificativoStazioneIntermediarioPA ma non riesce ad                |
| individuare una relazione topologica tra gli stessi.                  |
+-----------------------------------------------------------------------+
| **PPT_CANALE_ERRORE** è il codice standard usato dal PSP per          |
| segnalare un errore sollevato dai suoi sistemi, durante               |
| l’elaborazione della richiesta.                                       |
+-----------------------------------------------------------------------+
| **PPT_CANALE_ERRORE_RESPONSE** significa che il NodoSPC ha            |
| ricevuto dal PSP una *response* non corretta o non                    |
| interpretabile.                                                       |
+-----------------------------------------------------------------------+
| **PPT_CANALE_TIMEOUT** significa che è scaduto il timeout             |
| sull’attesa della *response* a livello web service.                   |
+-----------------------------------------------------------------------+
| **PPT_STAZIONE_INT_PA_IRRAGGIUNGIBILE** ed il suo duale               |
| **PPT_CANALE_IRRAGGIUNGIBILE** stanno a significare che il            |
| NodoSPC, nella sua azione di invocazione *client* di una              |
| primitiva esposta da una controparte, non è stato in grado di         |
| raggiungere telematicamente l’\ *endpoint* a cui, secondo             |
| configurazione, avrebbe dovuto trovarsi il servizio.                  |
|                                                                       |
| A livello tecnico, tale situazione si presenta quando la              |
| controparte non è fisicamente raggiungibile.                          |
+-----------------------------------------------------------------------+
| **PPT_STAZIONE_INT_PA_SERVIZIO_NONATTIVO** ed il suo duale            |
| **PPT_CANALE_SERVIZIO_NONATTIVO** stanno a significare che il         |
| NodoSPC, nella sua azione di invocazione *client* di una              |
| primitiva esposta da una controparte, ha ricevuto una risposta        |
| che indica che il servizio non risulta attivo.                        |
|                                                                       |
| A livello tecnico, tale situazione potrebbe presentarsi, ad           |
| esempio, quando la controparte è fisicamente raggiungibile, ma        |
| l’invocazione del servizio porta ad un errore interno del             |
| soggetto erogatore.                                                   |
|                                                                       |
| Il nome in chiaro del PSP presso il quale è presente la               |
| precedente iscrizione è riportato nell'elemento                       |
| faultBean.description.                                                |
+-----------------------------------------------------------------------+
| **PPT_ULTERIORE_ISCRIZIONE**                                          |
|                                                                       |
| Si sta richiedendo l'iscrizione al servizio di avvisatura per un      |
| soggetto che ha già aderito in precedenza.                            |
+-----------------------------------------------------------------------+
| **PPT_ISCRIZIONE_NON_PRESENTE**                                       |
|                                                                       |
| Si sta richiedendo la disattivazione di un'iscrizione al servizio     |
| di avvisatura per un soggetto sconosciuto.                            |
+-----------------------------------------------------------------------+

Errori nella gestione del messaggio di ackRT
--------------------------------------------
.. _Errori nella gestione del messaggio di ackRT:

In Tabella 53 sono riportati i codici di errore utilizzati per la
valorizzazione dell’elemento codiceErrore qualora, nel messaggio di
conferma di ricezione della RT al PSP, l'elemento
statoMessaggioReferenziato assuma il valore **RJCT** (`vedi §§ 5.3.10 <../11-Capitolo_5/Capitolo5.rst#messaggio-di-conferma-ricezione-della-rt-ack>`__ e `9.2.2.3 <../16-Capitolo_9/Capitolo9.rst#pspinviaackrt>`__).

**Tabella** **53 - Valori dei codici di errore da utilizzare nella struttura XML ackRT**

+-----------------------------------+-----------------------------------+
| **codiceErrore**                  | **Spiegazione**                   |
+===================================+===================================+
| *VALXSD*                          | Il contenuto non è conforme allo  |
|                                   | schema XSD.                       |
+-----------------------------------+-----------------------------------+
| *CTRLFOR*                         | I campi contengono errori         |
|                                   | sintattici extra XSD.             |
+-----------------------------------+-----------------------------------+
| *FIRMASCN*                        | Parametro tipoFirma non valido.   |
+-----------------------------------+-----------------------------------+
| *BUSTAERR*                        | Formato busta di firma errato o   |
|                                   | non corrispondente al tipoFirma.  |
+-----------------------------------+-----------------------------------+
| *CANCTMOUT*                       | Notifica di cancellazione per     |
|                                   | decorrenza termini di una RPT     |
|                                   | pendente.                         |
+-----------------------------------+-----------------------------------+

`Torna all'indice <../../index.rst>`__

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
