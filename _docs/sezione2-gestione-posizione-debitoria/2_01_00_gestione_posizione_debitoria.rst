Gestione della Posizione Debitoria
==================================

I due diversi *workflow* gestiti sul Sistema pagoPA si differenziano
principalmente in base al punto di innesco del pagamento:

-  sito istituzionale dell’Ente Creditore
-  servizio offerto direttamente del PSP (sportello, ATM, APP, web, etc)

Si avrà quindi un processo diverso se l’utilizzatore finale accede al
servizio di pagamento attraverso tecnologie e funzioni messe a
disposizione da un Ente Creditore ovvero attraverso tecnologie e
funzioni messe a disposizione da un Prestatore di Servizi di Pagamento.

La posizione debitoria
----------------------

Come previsto dalle Linee guida, tutte le tipologie di pagamento gestite
dal Sistema pagoPA prevedono che l’Ente Creditore, per rendere
realizzabile un pagamento, registri e metta a disposizione
dell’Utilizzatore finale le informazioni necessarie per effettuare il
pagamento. Si definisce “posizione debitoria” l’insieme di tali
informazioni.

Nel Sistema pagoPA ogni pagamento presuppone la creazione propedeutica,
nel sistema informativo dell’Ente Creditore, di una posizione debitoria.
All’Ente Creditore compete la gestione degli stati del ciclo di vita
della posizione debitoria, che, in linea generale, corrispondono alle
attività di:

1. Creazione. La posizione debitoria viene creata dall’Ente Creditore e
   posta nello stato di “Aperta”. Si sottolinea che in questa sede si
   definisce “posizione debitoria” sia la creazione che avviene su
   iniziativa dell’Ente Creditore (es. maturazione delle condizioni per
   il pagamento di un’imposta) sia quella che avviene su iniziativa
   dell’Utilizzatore finale (es. richiesta di un servizio), anche se in
   quest’ultimo caso l’Utilizzatore finale stesso non è effettivamente
   in debito con l’Ente Creditore.
2. Aggiornamento. La posizione debitoria viene aggiornata dall’Ente
   Creditore ogni qualvolta intervengano eventi che ne modificano le
   informazioni associate (es sanzioni per decorrenza dei termini).
   L’attività di aggiornamento provoca un avanzamento di versione della
   posizione debitoria che permane nello stato di “Aperta”. Le
   operazioni di pagamento assicurano che la posizione debitoria sia
   sempre aggiornata.
3. Trasferimento. La posizione debitoria è posta nello stato di
   “Trasferita” nel caso in cui la competenza dell’incasso passi a un
   altro Ente Creditore (es. iscrizione in ruolo).
4. Chiusura. L’Ente Creditore pone la posizione debitoria nello stato
   “Chiusa” ogni qualvolta viene effettuato un pagamento che salda il
   debito o intervengano eventi che la rendano non più pagabile. Tale
   stato è reversibile nel caso in cui intervenga una revoca del
   pagamento che pone di nuovo la posizione debitoria in una nuova
   versione dello stato di “Aperta”.

Ogni posizione debitoria è identificata dai seguenti elementi:

-  soggetto pagatore: intestatario della posizione
-  opzione di pagamento

Un’opzione di pagamento rappresenta la modalità di pagamento definita
dall’EC e consiste in un elenco di versamenti, ognuno dei quali è
specificato da:

-  codice fiscale dell’Ente beneficiario (che può non coincidere con
   l’EC)
-  importo
-  causale di versamento
-  tassonomia del servizio
-  conto corrente, dove accreditare le somme

Tassonomia dei servizi
~~~~~~~~~~~~~~~~~~~~~~

Il codice tassonomico identifica ogni singolo servizio incassato tramite
i versamenti descritti all’interno della posizione debitoria. Tale
codice è così composto:

-  *Tipo Ente Creditore*\ ​ (​due cifre):​ identifica la tipologia di Ente
   titolare dell’incasso;
-  *Numero progressivo macro-area* per Ente Creditore ​(due cifre):
   individua le singole macro-aree di aggregazione degli incassi;

   -  Macro-area: ​aggregazione di servizi sulla base di caratteristiche
      comuni (definiti da PagoPA S.p.A. per fini statistici);
   -  Descrizione macro area: ​descrizione caratteristiche comuni di
      aggregazione.

-  *Codice Tipologia Servizi* ​(tre cifre): identifica la singola voce
   di incasso;

   -  Tipo servizio:​ tipologia di incasso;
   -  Descrizione tipo servizio:​ descrizione dettagliata di ogni dovuto;

-  *Motivo giuridico* della riscossione:

   -  IM (Imposta) - Prelievo coattivo volto a finanziare genericamente
      l’attività dell’Amministrazione;
   -  TS (Tassa) - Tipo di ​tributo applicato come controprestazione per
      un’attività legata a una funzione erogata dall’Amministrazione;
   -  SP (Servizio Pubblico) - Corrispettivo pagato dal cittadino per
      usufruire di un servizio pubblico;
   -  SA (Sanzioni) - Pena pecuniaria irrogata a fronte della violazione
      di obblighi previsti dalla Legge (es:multe, ammende, sanzioni
      amministrative e civili);
   -  (AP) -​ Altri Pagamenti.

-  *Dati specifici di incasso*: codice identificativo dell’incasso
   composto dalla seguente concatenazione in una stringa:

   -  separatore (“/”) - ​Con tale simbolo è possibile far seguire al
      codice tassonomico ulteriori dati, a discrezione dell’EC, senza
      inficiare la descrizione dell’entrata.

::

   9/[Codice Ente creditore][Progressivo Macroarea][Codice tipologia servizio][Motivo giuridico riscossione][/]

Esempio:

-  Comune - Tributi - TARI - Imposta
-  ``9/0101002IM/``

L’elenco completo ed aggiornato della tassonomia è disponibile `nel
repository
Github <https://github.com/pagopa/pagopa-api/tree/develop/taxonomy>`__.

Maggiori dettagli sulla Tassonomia dei Servizi sono presenti
nell’apposito capitolo in questa stessa Sezione.

Avviso di Pagamento
-------------------

Contestualmente alla creazione di una posizione debitoria, l’Ente
Creditore, deve predisporre un avviso di pagamento che rappresenta lo
strumento che rende possibile l’innesco del pagamento stesso presso i
PSP.

Tutte le norme di dettaglio che regolano la produzione di un avviso di
pagamento analogico sono incluse nel documento collegato *“Il nuovo
avviso di pagamento analogico nel sistema pagoPA”* (`disponibile
qui <https://github.com/pagopa/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/guidatecnica_avvisoanalogico_v2.2.1_con_alleg.pdf>`__).
L’EC continua a recapitare l’avviso analogico all’Utilizzatore finale
con le modalità tradizionali a cui può affiancare funzioni di stampa a
carico dell’Utilizzatore finale dopo il download del documento stesso.

Si noti che l’importo contenuto nell’avviso di pagamento analogico è
quello corrispondente al momento della produzione di tale documento.
Quindi può essere soggetto a variazioni (in più o in meno) al momento in
cui ne viene richiesto il pagamento da parte dell’Utilizzatore finale,
nel caso sia intervenuto un aggiornamento della posizione debitoria,
purché tale possibilità sia stata effettivamente esplicitata in una
avvertenza sull’avviso.

Affiancato all’avviso *analogico* le medesime informazioni (in
particolare numeroAvviso e codice fiscale dell’EC) possono essere
veicolate digitalmente per mezzo della piattaforma IO.

Ricevuta di Pagamento
---------------------

Ogni operazione di pagamento è attestata con la generazione (e consegna)
all’EC di una Ricevuta Telematica, generata dalla piattaforma a fronte
dell’attività di validazione eseguita da PagoPA delle informazioni
acquisite dai soggetti interessati (EC e PSP).

L’EC deve rendere disponibile la Ricevuta Telematica, su richiesta
dell’Utilizzatore finale, sia sotto forma di duplicato informatico che
sotto forma di copia analogica dello stesso.

Le copie analogiche prodotte devono necessariamente contenere, oltre al
logo del sistema pagoPA, almeno le seguenti informazioni:

-  Data e ora dell’operazione - si intende la data e l’ora in cui
   l’utente finale ha iniziato l’operazione di pagamento sulla
   piattaforma ed è utile ai fini liberatori dell’utente.
-  Data Applicativa - si intende la data in cui il pagamento è stato
   registrato all’interno del PSP selezionato per il pagamento e
   determina la giornata operativa (cfr. Linee Guida e relativa
   definizione presente nelle SACI) in cui ricade l’operazione di
   pagamento.
-  Codice fiscale e denominazione dell’EC
-  Identificativo univoco versamento (IUV) - Identificativo univoco
   assegnato dall’EC
-  Identificazione del PSP (es: ragione sociale, codice fiscale, codice
   ABI)
-  Numero univoco assegnato al pagamento dal PSP
-  Importo dell’operazione
-  Causale del versamento indicata nella richiesta di pagamento
   telematico.
