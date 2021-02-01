# Gestione della Posizione Debitoria

I due diversi *workflow* gestiti sul Sistema pagoPA si differenziano principalmente in base al soggetto che innesca il pagamento. Si avrà quindi un processo diverso se l'utilizzatore finale accede al servizio di pagamento attraverso tecnologie e funzioni messe a disposizione da un Ente Creditore ovvero attraverso tecnologie e funzioni messe a disposizione da un Prestatore di Servizi di Pagamento.

Nella presente sezione è modellato il processo di scambio dati tra i sistemi informativi dei tre soggetti che partecipano, sempre, a ogni processo di pagamento mediati dal NodoSPC.

La modellazione risultante descrive quindi, da una parte, le specifiche che definiscono il comportamento progettato del NodoSPC, riportando un set di informazioni certe e conosciute (le primitive rese disponibili dai Web Services, i dati di configurazione, etc.) e, in un'altra parte, il comportamento atteso dei sistemi intermediati riportando l'insieme di informazioni minime indispensabili alle funzioni informatiche effettivamente sviluppate dai soggetti aderenti in qualità di Enti Creditori o Prestatori di Servizi di Pagamento.

La modellazione segue le notazioni dello standard *Business Process Model and Notation* (BPMN) versione 2.0, di cui si riportano i simboli utilizzati e il loro significato:

![bpmn_elements](../images/bpmn_elements.png)


La posizione debitoria
======================

Come previsto dalle Linee guida, tutte le tipologie di pagamento gestite dal Sistema pagoPA prevedono che l'Ente Creditore, per rendere realizzabile un pagamento, registri e metta a disposizione dell'utilizzatore finale le informazioni necessarie per effettuare il pagamento. Si definisce "posizione debitoria" l'insieme di tali informazioni.

Nel Sistema pagoPA ogni pagamento presuppone la creazione propedeutica, nel sistema informativo dell'Ente Creditore, di una posizione debitoria. All'Ente Creditore compete la gestione degli stati del ciclo di vita della posizione debitoria, che, in linea generale, corrispondono alle attività di:

1.  Creazione. La posizione debitoria viene creata dall'Ente Creditore e posta nello stato di "Aperta". Si sottolinea che in questa sede si definisce "posizione debitoria" sia la creazione che avviene su iniziativa dell'Ente Creditore (es. maturazione delle condizioni per il pagamento di una imposta) sia quella che avviene su iniziativa dell'Utilizzatore finale (es. richiesta di un servizio), anche se in quest'ultimo caso l'Utilizzatore finale stesso non è effettivamente in debito con l'Ente Creditore.
2.  Aggiornamento. La posizione debitoria viene aggiornata dall'Ente Creditore ogni qualvolta intervengano eventi che ne modificano le informazioni associate (es sanzioni per decorrenza dei termini). L'attività di aggiornamento provoca un avanzamento di versione della posizione debitoria che permane nello stato di "Aperta". 
3.  Trasferimento. La posizione debitoria è posta nello stato di "Trasferita" nel caso in cui la competenza dell'incasso passi a un altro Ente Creditore (es. iscrizione in ruolo). 
4.  Chiusura. L'Ente Creditore pone la posizione debitoria nello stato "Chiusa" ogni qualvolta viene effettuato un pagamento che salda il debito o intervengano eventi che la rendano non più pagabile. Tale stato è reversibile nel caso in cui intervenga una revoca del pagamento che pone di nuovo la posizione debitoria in una nuova versione dello stato di "Aperta".

Contestualmente alla creazione di una posizione debitoria, l'Ente Creditore, se ne ricorrono le condizioni, deve predisporre un avviso di pagamento che rappresenta lo strumento che rende possibile l'innesco del pagamento stesso presso i PSP.

L'Ente Creditore genera il tradizionale avviso di pagamento **analogico** (sotto forma di avviso cartaceo o file stampabile) ogni qualvolta le norme lo obbligano a notificare a un debitore (cittadino o impresa) l'insorgenza di una posizione debitoria aperta nei suoi confronti. Tutte le norme di dettaglio che regolano la produzione di un avviso di pagamento analogico sono incluse nel documento collegato *"Il nuovo avviso di pagamento analogico nel sistema pagoPA"* ([disponibile qui](https://github.com/pagopa/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/guidatecnica_avvisoanalogico_v2.2.1_con_alleg.pdf)).

L'EC continua a recapitare l'avviso analogico all'Utilizzatore finale con le modalità tradizionali a cui può affiancare funzioni di stampa a carico dell'Utilizzatore finale dopo il downloading del documento.

L'avviso di pagamento analogico, oltre al logotipo del Sistema pagoPA, contiene le informazioni indispensabili per l'esecuzione del pagamento, che sono dettagliate nella Sezione III. `[TBD oppure usiamo "Sez.3" ? -> direi che il riferimento sopra dovrebbe rispondere a questa frase.]`

Si noti che l'importo contenuto nell'avviso di pagamento analogico è quello corrispondente al momento della produzione di tale documento e quindi può essere soggetto a variazioni (in più o in meno) al momento in cui ne viene richiesto il pagamento da parte dell'utilizzatore finale, nel caso sia intervenuto un aggiornamento della posizione debitoria, purché tale possibilità sia stata effettivamente esplicitata in una avvertenza sull'avviso.

La peculiarità di alcune postazioni messe a disposizione dai Prestatori di Servizi di Pagamento rende necessario automatizzare l'acquisizione dei dati presenti sull'avviso di pagamento. Per questo motivo tale documento deve essere corredato, oltre che dati essenziali sopra citati, anche da un insieme di elementi grafici facilmente leggibili e decodificabili da apposite apparecchiature.

I processi di creazione, aggiornamento, chiusura o annullamento di una posizione debitoria sono interni al sistema informativo dell'Ente Creditore. Nei casi previsti tali operazioni possono scatenare l'invio di un avviso di pagamento con strumenti digitali.

