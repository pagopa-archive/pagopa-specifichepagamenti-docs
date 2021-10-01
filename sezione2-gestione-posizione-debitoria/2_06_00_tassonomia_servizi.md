# Tassonomia dei servizi erogati

A fine di migliorare l'erogazione dei servizi delle Pubbliche Amministrazioni per i quali sia stato disposto il pagamento tramite pagoPA viene introdotta una "Tassonomia dei servizi erogati" che consente ad ogni EC di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la Piattaforma pagoPA.

Nella creazione della Posizione Debitoria, l'EC - in accordo con il proprio Partner Tecnologico, ove presente - deve attribuire al campo "dati Specifici di riscossione" il valore desunto dalla Tassonomia in base al tipo di entrata richiesta.

Con il termine "dati Specifici di riscossione" si fa riferimento al campo `datiSpecificiRiscossione` presente all’interno della struttura `datiSingoloVersamento` della RPT, ovvero al campo `transferCategory` (es: primitiva `paSendRT`).

**Osservazioni e Note**

* Nel caso in cui un EC, ad esempio un Comune, incassi la TEFA per conto di un altro ente territoriale, allora su ogni riga della RPT dovrà indicare il codice Tassonomico collegato a tale Ente/Incasso.
* Nel caso in cui il campo "dati Specifici di riscossione" è già utilizzato per il passaggio di informazioni, tali informazioni possono continuare a coesistere con il codice tassonomico rispettando il seguente formato che prevede un carattere separatore "/": `<codice tassonomico>/<altre informazioni>` (es: "9/0101002IM/<altri dati opzionali>"). Mentre per il campo `transferCategory`, non ricadendo in questo caso, va valorizzato il solo codice tassonomico (es: "0101002IM")
* Nel caso in cui vi sia una tipologia di incasso che ingloba al suo interno sia una percentuale a titolo di imposta che una percentuale a titolo di tassa, l'indicazione segue la tipologia *del tributo prevalente*.
* Dall'entrata a regime del nuovo Processo di pagamento presso il PSP con Ente multi-beneficiario, si dovrà indicare per ogni stringa di RPT l'ulteriore dettaglio, che deve essere inserito nel campo `transferCategory` nella response alla primitiva `paGetPayment`.

**Inizio e fine validità & Codice versione della Tassonomia**
Per ogni codice tassonomico vengono indicate anche il numero della versione, la data di inizio e fine validità con lo scopo che eventuali modifiche possano essere facilmente individuate da parte degli attori coinvolti.

## Decorrenza

A decorrere dalla data dell'entrata in vigore, la Piattaforma pagoPA attuerà dei controlli per verificare l'effettiva aderenza a quanto specificato in questa sezione in merito alla tipologia di servizio recependo le indicazioni già pubblicate nella Monografia dedicata (rif. "Monografia - Tassonomia dei servizi di incasso") nel mese di settembre 2020.

Le Posizioni Debitorie emesse prima dalla data dell'entrata in vigore, e che hanno una data di scadenza successiva a tale data, dovranno essere adeguate ai codici tassonomici pubblicati da PagoPA S.p.A.

La suddetta data di entrata in vigore della Tassonomia dei Servizi viene resa pubblica sul sito di PagoPA S.p.A.
