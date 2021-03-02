# Premessa alla Codifica delle versioni

Il presente capitolo descrive le convenzioni e i processi adottati per gestire i cambiamenti della documentazione tecnica pagoPA.

Sulla base delle seguenti necessità:

* comunicare con il minimo sforzo sia la risoluzione di problemi interpretativi sia l'introduzione di nuove funzionalità;
* coordinare con il minimo sforzo il test di nuove versioni delle Specifiche Attuative;
* garantire la compatibilità delle nuove versioni delle Specifiche Attuative con quelle precedenti per un periodo di tempo necessario all'adeguamento del software, delle configurazioni e dei Livelli di Servizio;

Il processo di *change management* introduce:

* una modalità di codifica delle versioni delle Specifiche Attuative che esprime l'entità dei cambiamenti introdotti in ogni nuova versione;
* un processo di aggiornamento che tenga conto del graduale adeguamento software, delle configurazioni e dei Livelli di Servizio;
* meccanismi per descrivere in modo succinto e rendere facilmente consultabili sia i cambiamenti introdotti in una nuova versione sia i cambiamenti pianificati in future versioni.

## Codifica delle versioni

Rappresentare l'entità dei cambiamenti attraverso una codifica delle versioni permette di comunicare in modo semplice la natura dei cambiamenti effettuati. Tale codifica riprende, adattandoli alle circostanze, i principi del *versioning* semantico.

Nel seguito sono descritte le regole che esprimono la semantica della codifica adottata:

1. La base documentale pagoPA è costituita da diversi documenti reperibili sul sito DOCS Italia. Come riferimento orientativo, segue un elenco non esaustivo e soggetto a evoluzione nel tempo:
	* Linee guida
		* Linee Guida per l'Effettuazione dei Pagamenti Elettronici a favore delle Pubbliche Amministrazioni e dei Gestori di Pubblici Servizi
		* Allegato A - Specifiche Attuative dei Codici Identificativi di versamento, riversamento e rendicontazione (SACI)
		* Allegato B - Specifiche Attuative del Nodo dei Pagamenti-SPC (SANP)
	* Regolamento logo
		* Regolamento d’uso del marchio collettivo pagoPA
		* Allegato 1 Brand Guidelines
		* Allegato 2 Richiesta di concessione del Marchio pagoPA
	* Documentazione tecnica collegata
		* Il nuovo avviso di pagamento analogico nel sistema pagoPA
		* Specifiche di connessione al sistema pagoPA.
		* Transazioni MyBank attraverso il Nodo dei pagamenti-SPC
		* Indicatori di qualità per i soggetti aderenti
		* Il pagamento presso POS fisici nel sistema pagoPA
		* Allegato tecnico Agenzia delle entrate-Riscossione per integrazione su pagoPA di bollettini RAV per pagamento presso PSP
		* Allegato tecnico Pagamento della Tassa Automobilistica presso i PSP
	* Materiale per sviluppatori
		* WSDL
		* Schema XSD
2. Ogni elemento documentale pubblicato è caratterizzato da una versione espressa da una tripletta numerica: **Major.Minor.Patch**. Una versione di pre-rilascio PUÒ essere indicata aggiungendo immediatamente dopo la versione **Patch** un trattino e una serie di identificatori separati dal punto. Una versione di pre-rilascio indica comunque una versione instabile che non riflette il comportamento del sistema.
3. Una volta che un documento versionato è stato rilasciato, i contenuti NON POSSONO essere modificati. Qualsiasi modifica DEVE essere rilasciata come una nuova versione dello stesso documento.
4. Ogni numero della tripletta è un intero positivo maggiore o uguale a zero, il cui incremento rappresenta l'entità ed il significato delle modifiche intervenute nel testo. Le convenzioni sui numeri di versione, ed il modo in cui essi cambiano, comunicano il significato complessivo relativamente a cosa è stato modificato nell'avanzamento di versione.
5. L'incremento del numero di versione **Patch** avviene solo nel caso siano effettuate modifiche che non introducono novità nel testo ma lo rendono pienamente utilizzabile eliminando errori materiali o elementi di ambiguità. Esempi di tale tipo di modifiche sono: le correzioni ortografiche, l'aggiunta al testo di esempi o di precisazioni esplicative e perfino la riformulazione di una porzione di testo ambigua e quindi inutilizzabile. L'incremento della versione **Patch** avviene inoltre con le seguenti regole:
	* l'efficacia è immediata;
	* non impone alle controparti processi di adeguamento del software o della configurazione.
6. L'incremento del numero di versione **Minor** avviene a valle di modifiche retro-compatibili con la versione precedente. L'incremento della versione **Minor** avviene anche nel caso in cui venga introdotta (o segnata come deprecata) una nuova funzionalità, purché non critica e/o opzionale. L'incremento della versione **Minor** avviene inoltre con le seguenti regole:
	* è preceduta dalla pubblicazione di una versione di pre-rilascio, per un periodo di condivisione ritenuto congruo.
	* la data di pubblicazione sarà annunciata da una comunicazione preventiva e accompagnata da:
		* casi di test;
		* cambiamenti alla configurazione;
		* piano di rilasci;
	* NON PUÒ includere contemporanee modifiche di livello **Patch**;
	* la versione **Patch** DEVE essere reimpostata a 0 quando la versione **Minor** è incrementata.
7. L'incremento del numero di versione **Major** è introdotto nel caso di qualsiasi modifica non retro-compatibile. L'incremento della versione **Major** avviene anche nel caso in cui venga introdotta (o segnata come deprecata) una nuova funzionalità, purché non tale da provocare solo un avanzamento **Minor**. L'incremento della versione **Major** avviene inoltre con le seguenti regole:
	* è preceduta dalla pubblicazione di una versione di pre-rilascio, per un periodo di condivisione ritenuto congruo;
	* la data di pubblicazione sarà annunciata da una comunicazione preventiva e accompagnata da:
		* casi di test;
		* cambiamenti alla configurazione;
		* piano di rilasci;
		* termini ultimi di adeguamento delle controparti;
	* NON PUÒ includere contemporanee modifiche di livello **Minor** e **patch**.
	* le versioni **Patch** e **Minor** DEVONO essere reimpostate a 0 quando la versione **Major** è incrementata.
8. La precedenza si riferisce a come le versioni sono confrontate l'una con l'altra quando poste in relazione d'ordine. La precedenza DEVE essere calcolata separando gli identificatori nell’ordine seguente: **Major**, **Minor**, **Patch** e **Pre**-**release**. La precedenza è determinata dalla prima discrepanza quando si confrontano ognuno di tali identificatori da sinistra a destra.
