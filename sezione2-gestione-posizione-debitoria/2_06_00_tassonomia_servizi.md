# Tassonomia dei servizi erogati

A fine di migliorare l'erogazione dei servizi delle Pubbliche Amministrazioni per i quali sia stato disposto il pagamento tramite pagoPA viene introdotta una "Tassonomia dei servizi erogati" che consente ad  ogni EC di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la piattaforma pagoPA.

Nella creazione della Posizione Debitoria, l'EC - in accordo con il proprio Partner Tecnologico, ove presente - deve attribuire al campo "dati Specifici di riscossione" il valore desunto dalla Tassonomia in base al tipo di entrata richiesta.

Con il campo "dati Specifici di riscossione" si fa riferimento al campo `datiSpecificiRiscossione` presente all’interno della struttura `datiSingoloVersamento` della RPT. `[TBD check]`

`[TBD link ai valori della Tabella Tassonomica]`

## Composizione del codice tassonomico

Il codice tassonomico, per l'identificazione di ogni singolo servizio di incasso, è così composto:

- *Tipo Ente Creditore*​ (​due cifre):​ identifica la tipologia di Ente titolare dell'incasso;
- *Numero progressivo macro-area* per Ente Creditore ​(due cifre): individua le singole macro-aree di aggregazione degli incassi;
	- Macro-area: ​aggregazione di servizi sulla base di caratteristiche comuni (definiti da PagoPA S.p.A. per fini statistici);
	- Descrizione macro area: ​descrizione caratteristiche comuni di aggregazione.
- *Codice Tipologia Servizi* ​(tre cifre): identifica la singola voce di incasso;
	- Tipo servizio:​ tipologia di incasso;
	- Descrizione tipo servizio:​ descrizione dettagliata di ogni dovuto;
- *Motivo giuridico* della riscossione:
	- IM (Imposta) - Prelievo coattivo volto a finanziare genericamente l'attività dell'Amministrazione;
	- TS (Tassa) - Tipo di ​tributo applicato come controprestazione per un'attività legata a una funzione erogata dall'Amministrazione;
	- SP (Servizio Pubblico) - Corrispettivo pagato dal cittadino per usufruire di un servizio pubblico;
	- SA (Sanzioni) - Pena pecuniaria irrogata a fronte della violazione di obblighi previsti dalla Legge (es:multe, ammende, sanzioni amministrative e civili);
	- (AP) -​ Altri Pagamenti.
- *Dati specifici di incasso*: codice identificativo dell'incasso composto dalla seguente concatenazione in una stringa:
	- separatore ("/") - ​Con tale simbolo è possibile far seguire al codice tassonomico ulteriori dati, a discrezione dell'EC, senza inficiare la descrizione dell'entrata.

`9/[Codice Ente creditore][Progressivo Macroarea][Codice tipologia servizio][Motivo giuridico riscossione][/]`

Esempio:
	* Comune - Tributi - TARI - Imposta
	* `9/0101002IM/`

## Osservazioni e Note

Nel caso in cui un EC, nell’esempio un Comune, incassi la TEFA per conto di un altro ente territoriale, allora su ogni riga della RPT dovrà indicare il codice Tassonomico collegato a tale Ente/Incasso.

Nel caso in cui il campo "dati Specifici di riscossione" era già utilizzato per il passaggio di informazioni, tali informazioni possono continuare a coesistere con il codice tassonomico rispettando il seguente formato che prevede un carattere separatore "/": `<codice tassonomico>/<altre informazioni>`

Nel caso in cui vi sia una tipologia di incasso che ingloba al suo interno sia una percentuale a titolo di imposta che una percentuale a titolo di tassa, l'indicazione segue la tipologia *del tributo prevalente*. Dall'entrata a regime del nuovo Processo di pagamento presso il PSP con Ente multi-beneficiario `[TBD chk anche per mod.1]`, sarà possibile indicare per ogni stringa di RPT l'ulteriore dettaglio.

**Inizio e fine validità & Codice versione della Tassonomia**
Per ogni codice tassonomico vengono indicate anche il numero della versione, la data di inizio e fine validità con lo scopo che eventuali modifiche possano essere facilmente individuate da parte degli attori coinvolti. `[TBD link a documento e repo github per i codici tassonomici]`

## Decorrenza

Tali modifiche entrano in vigore a partire dal **01/03/2021**.

A decorrere dalla data di pubblicazione del documento monografico, gli Enti Creditori ed i Partner Tecnologici Pubblici e Privati, hanno 5 mesi di tempo per adeguare i loro automatismi in fase di creazione della RPT al fine dell'inserimento dei codici della Tassonomia in modo da avere le informazioni dettagliate su ogni singolo pagamento, ​*pena lo scarto della RPT*.​

Scaduti i 5 mesi successivi alla pubblicazione, la piattaforma pagoPA attuerà dei controlli per verificare l'effettiva aderenze a quanto specificato in questa sezione in merito alla tipologia di servizio.

Le Posizioni Debitorie emesse prima del 28/02/2021, che hanno una data di scadenza successiva al 28/02/2021, dovranno essere adeguate ai codici tassonomici pubblicati da PagoPA S.p.A.
