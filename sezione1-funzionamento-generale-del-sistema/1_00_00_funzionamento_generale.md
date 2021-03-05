**SEZIONE I -- FUNZIONAMENTO GENERALE DEL SISTEMA**

# Funzionamento Generale del Sistema

Obiettivo strategico della Piattaforma pagoPA è quello di facilitare e diffondere, a beneficio dei cittadini e delle imprese, l'utilizzo di strumenti evoluti nei pagamenti in favore della Pubblica Amministrazione, delle Società a controllo pubblico e dei Gestori dei Pubblici servizi. Si denominano i soggetti che hanno aderito a pagoPA in attuazione dell'art. 5 del CAD, con il nome collettivo di **Ente Creditore**.

L'adesione a pagoPA di tutti i più importanti PSP, ovvero Prestatori di Servizi di Pagamento (Banche, Istituti di moneta elettronica e Istituti di pagamento) consente ai loro clienti l'accesso ad una vastissima gamma di strumenti di pagamento in continua espansione. Ad esempio, possono pagare con pagoPA i possessori di carte di credito dei circuiti Visa, Mastercard, American Express, i possessori di un account PayPal e di app per il pagamento con dispositivi _mobile_, nonché i titolari di Home banking integrati con la Piattaforma pagoPA o direttamente o tramite il servizio MyBank.

L'adesione a pagoPA consente all'Ente Creditore di beneficiare dei servizi di pagamento senza la necessità di instaurare una esplicita relazione con i PSP che li erogano ai loro clienti.

L'infrastruttura abilitante che consente il dialogo tecnico tra Enti Creditori e Prestatori di Servizi di Pagamento è la Piattaforma pagoPA. Tramite tale piattaforma l'Ente Creditore fornisce al PSP i dati necessari a erogare il servizio di pagamento e ottiene, in maniera standardizzata ed indipendente dallo strumento di pagamento utilizzato, i dati di rendicontazione necessari alla riconciliazione contabile,  semplificando così i processi di gestione del back office.

Il modello di funzionamento della Piattaforma pagoPA fa riferimento ai principi del Four Corners model definito dall'European Payment Council:

![four-corners-model](../images/four_corners_model.png)

La seguente tabella elenca i soggetti coinvolti nel pagamento:

| Termine | Significato |
| ------- | ----------- |
| PSP (Debtor Bank) | Prestatore Servizi di Pagamento: Banca, Istituto di moneta elettronica o Istituto di pagamento, autorizzato ad operare in Italia, che rende disponibili ai propri clienti servizi di pagamento tramite la Piattaforma pagoPA. |
| EC (Creditor) | Ente Creditore: Soggetto che aderisce a pagoPA per l'incasso di somme che gli sono a vario titolo dovute. |
| Soggetto debitore (Debtor) | Rappresenta il privato cittadino, il professionista o l'impresa che deve effettuare un pagamento in favore di un Ente Creditore o perché intende usufruire di un servizio o perché deve saldare una posizione debitoria come contribuente. |
| Utente, Utilizzatore finale o soggetto versante (User) | Rappresenta il soggetto che effettua pagamenti a favore di un EC attraverso i servizi pagoPA erogati dal PSP di cui è cliente |

Il perfezionamento delle operazioni disposte tramite pagoPA avviene attraverso il sistema di regolamento e compensazione (CSM) utilizzando le regole SEPA.

Il sistema pagoPA prevede la possibilità che le attività legate all'effettuazione dei pagamenti siano eseguite, in tutto od in parte, da Intermediari tecnologici (soggetti pubblici e/o privati) per conto sia degli Enti Creditori che dei Prestatori di Servizi di Pagamento. A tale proposito si definisce:

* **Intermediario tecnologico** come un soggetto appartenente alla Pubblica Amministrazione che offre - previa adesione alla Piattaforma pagoPA - ad altri soggetti aderenti, PSP e/o Enti Creditori, un servizio tecnologico per il collegamento e per lo scambio dei flussi con la Piattaforma pagoPA, nel pieno rispetto delle [Linee Guida](https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg) e dei relativi standard tecnici.
* **Partner tecnologico** è un soggetto imprenditoriale di cui l'Ente Creditore si avvale in via strumentale per l'esecuzione delle attività tecniche relative alla fornitura dei servizi IT, non necessariamente caratterizzabili, per l'interfacciamento con la Piattaforma pagoPA. Ciò ferma restando la responsabilità nei confronti di PagoPA in capo all'Ente Creditore.

## Ciclo di vita del pagamento

Il pagamento mediante la Piattaforma pagoPA è operazione complessa, composta di diverse fasi, che, in linea generale, seguono un preordinato "Ciclo di vita" schematizzato nella Figura 2.

![payment_lifecycle](../images/payment_lifecycle.png)

Si distinguono due processi di pagamento che differiscono per l'inizializzazione:

* Pagamento online: il pagamento si origina per iniziativa dell'Utilizzatore finale che utilizza servizi ICT resi disponibili dall'EC
* Pagamento con avviso: il pagamento si origina per iniziativa dell'EC che provvede a recapitare al soggetto debitore un avviso di pagamento.

**Pagamento online**

1. L'utilizzatore finale accede ai servizi ICT esposti dal portale/app dell'EC, compone un carrello di pagamenti e richiede il pagamento. In backend l'EC trasmette alla Piattaforma pagoPA la richiesta di pagamento.
2. Il controllo passa a un'interfaccia della Piattaforma pagoPA che consente di selezionare lo strumento, e autorizzare il pagamento, gestito da un PSP che riceve in backend la richiesta di pagamento;
3. Il PSP notifica l'esito del pagamento all'utilizzatore finale e, in backend, alla Piattaforma pagoPA;
4. Il controllo ritorna all'EC che, ricevendo in backend l'esito del pagamento, può dare all'utilizzatore finale la ricevuta del pagamento ed erogare il servizio;
5. La Ricevuta Telematica erogata dalla Piattaforma pagoPA è liberatoria del pagamento per il soggetto debitore e garantisce all'EC l'accredito dei fondi sul conto indicato nella richiesta di pagamento.

**Pagamento con avviso PagoPA**

1. L'Ente Creditore, generata una posizione debitoria, distribuisce o invia l'avviso di pagamento pagoPA al soggetto debitore. L'avviso può essere anche in formato digitale e ricevuto tramite [App IO](https://io.italia.it/)
2. Il debitore può pagare l'avviso in diverse modalità:
	* allo sportello di un ufficio postale
	* presso un esercizio commerciale di PSP che gestisce una rete di terminali
	* inquadrando il QRcode con un'App di pagamento o con l'App IO
	* accedendo alle funzioni internet banking di un PSP aderente alla piattaforma
	* accedendo al sito dell'Ente Creditore che ha emesso l'avviso
3. Il PSP che gestisce il pagamento, tramite la Piattaforma pagoPA, interopera con l'EC, garantendo la correttezza ed efficacia del pagamento;
4. La Piattaforma pagoPA genera la Ricevuta Telematica e la invia all'EC assumendosene la responsabilità. La RT garantisce all'EC la ricezione dei fondi.

La Piattaforma pagoPA, prodotto della omonima PagoPA S.p.A., funzionalmente assume un ruolo determinante all'interno del processo di esecuzione di un pagamento in favore di un EC:

* (a) per l'attivazione degli automatismi di allineamento dell'importo dovuto;
* (b) perché abilita il pagamento della posizione debitoria (e ne garantisce la sua estinzione) senza che vi sia un rapporto diretto tra PSP e EC;
* (c) per la garanzia assicurata all'Ente erogatore della finalizzazione del pagamento.

Queste funzionalità fanno assumere alla ricevuta emessa dalla PagoPA SpA ed inviata all'EC, il valore liberatorio del pagamento nei confronti del cittadino, garantendo all'EC l'accredito delle somme, autorizzando l'erogazione del servizio e consentendo inoltre l'attivazione di processi amministrativi digitalizzati.

Quindi è PagoPA S.p.A. che incide sulle posizioni giuridiche/patrimoniali sia dell'EC sia del cittadino, emettendo le ricevute dei pagamenti anche prima dell'addebito nei confronti del Cittadino e/o dell'accredito nei confronti dell'EC.

Gli aspetti sub (a), (b) e (c), nell'ambito del quadro generale di funzionamento fissato dalle Linee Guida e dalle convenzioni tra PagoPA S.p.A. e gli EC e tra PagoPA S.p.A. ed i PSP, trovano concreta esplicitazione nelle modalità di funzionamento dei singoli servizi erogati.

## L'adesione al Sistema pagoPA

L'utilizzo dei servizi messi a disposizione da pagoPA è attivato attraverso apposite procedure, descritte in maggior dettaglio nella Sez-IV, che prevedono:

* per gli EC l'invio a PagoPA S.p.A. di una lettera di adesione, di formato predeterminato, sottoscritta dal legale rappresentante;
* per i PSP la sottoscrizione con PagoPA S.p.A., su base volontaria, di un atto bilaterale denominato "Accordi di Servizio".

Ogni soggetto aderente che, per lo svolgimento delle attività tecniche di interfacciamento alla Piattaforma pagoPA, utilizza soggetti intermediari, rimane comunque responsabile in quanto mittente o destinatario logico dei flussi informativi.

## Sicurezza e conservazione

Tutte le informazioni trattate nell'ambito del Sistema saranno gestite dai diversi attori che interagiscono con la Piattaforma pagoPA, ciascuno nell'ambito della propria competenza e responsabilità, nel rispetto della vigente normativa in materia di conservazione dei documenti informatici e di sicurezza dei dati.

In merito, si rammenta che la conservazione è finalizzata a proteggere nel tempo i documenti informatici e i dati ivi contenuti, assicurandone, tra l'altro, l'integrità al fine di preservare il valore probatorio del documento informatico.
