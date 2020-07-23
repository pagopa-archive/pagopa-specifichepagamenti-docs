Processo di pagamento attivato presso il Prestatore di Servizi di Pagamento
===========================================================================

Questo processo prevede che l’esecuzione del pagamento avvenga presso le
infrastrutture messe a disposizione dal Prestatore di Servizi di
Pagamento quali, ad esempio, sportelli ATM, applicazioni di *Home
banking* e *mobile* *payment*, uffici postali, punti della rete di
vendita dei generi di Monopolio (Tabaccai), SISAL e Lottomatica, casse
predisposte presso la Grande Distribuzione Organizzata, ecc.

L’Ente Creditore beneficiario del pagamento deve rendere accessibile ai
Prestatori di Servizi di Pagamento, con le modalità mediate dal NodoSPC,
un archivio nel quale siano state preventivamente memorizzate le
posizioni debitorie (Archivio Pagamenti in Attesa).

Per rendere possibile il pagamento l’Ente Creditore ha l’obbligo di
recapitare all’utilizzatore finale un avviso con gli estremi del
pagamento da effettuare. Tale recapito deve obbligatoriamente avvenire
sia in modalità analogica (tramite servizi postali), che digitale.
L’Ente Creditore può inoltre adottare ulteriori misure per la diffusione
degli avvisi di pagamento, per esempio rendere disponibili funzioni di
stampa on line tramite il proprio sito.

Nello schema di Figura 10 è trattato il caso in cui l’utilizzatore
finale, già in possesso dell’avviso di pagamento analogico fornito
dall’Ente, si rechi presso le strutture del Prestatore di Servizi di
Pagamento e comunichi il codice dell'avviso di pagamento. Si tenga
presente che il caso d’uso descritto non dipende dalla concreta modalità
in cui tale dato entra in possesso del Prestatore di Servizi di
Pagamento: il codice potrebbe essere comunicato a un operatore di
sportello, letto automaticamente tramite dispositivi ottici, inserito
manualmente dal soggetto versante su interfacce messe a disposizione dai
Prestatori di Servizi di Pagamento (un terminale ATM, una pagina WEB,
ecc.), ovvero, da ultimo, comunicato tramite avviso digitale.

Il diagramma di Figura 10 descrive il processo pagamento operato presso
il Prestatore di Servizi di Pagamento. Al fine di rendere tale diagramma
immediatamente leggibile la descrizione del *workflow* è stata aggregata
in paragrafi secondo lo schema logico che segue (**Figura 1**).

.. figure:: ../images/process_psp.png
   :alt: image0
   :width: 6.63533in
   :height: 0.91405in

   image0

**Figura** **1 Schema logico del processo di business del pagamento
presso il Prestatore di Servizi di Pagamento**

Nel processo in oggetto (**Figura 2**) sono coinvolti quattro soggetti:

-  Utilizzatore finale
-  Ente Creditore
-  NodoSPC
-  Prestatore Servizi di Pagamento dell’Utilizzatore finale

.. figure:: ../images/bpmn_psp.png
   :alt: image1
   :width: 12.68504in
   :height: 8.54545in

   image1

**Figura** **2 Il processo del pagamento attivato presso il Prestatore
di Servizi di Pagamento**

Avvio del pagamento
-------------------

L’Utilizzatore finale può eseguire un pagamento con due itinerari
distinti (gateway G2.2.1) discriminati dal fatto che esista una
posizione debitoria. Nel caso che la posizione debitoria esista
l’Utilizzatore finale dispone di un avviso di pagamento, altrimenti
occorre che il PSP interagisca con l’Ente Creditore per generarne una.

Generazione posizione debitoria per pagamento spontaneo
-------------------------------------------------------

La generazione della posizione debitoria è l’evento che costituisce la
premessa al pagamento sul Sistema pagoPA.

In determinate circostanze, previste nello specifico dalla vigente
normativa, un soggetto matura un debito in favore di una Pubblica
Amministrazione (centrale o locale). In questo caso lo stesso Ente
Creditore assume l’iniziativa di generare una posizione debitoria e
provvede a notificare l’avviso di pagamento al soggetto pagatore. Questa
casistica prende il nome di pagamento dovuto. Nel caso che l’EC sia
tenuto ad accompagnare la notifica con un avviso di pagamento analogico,
provvede anche a inviare al NodoSPC di un avviso digitale. Con questi
strumenti si innesca il pagamento presso il PSP.

Nel caso in cui non sussistano le circostanze sopra indicate e quindi
l’Utilizzatore finale non sia in possesso di un avviso digitale,
l’Utilizzatore stesso può assumere l’iniziativa di avviare il pagamento
(pagamento spontaneo), purché il PSP disponga della relativa funzione.
In questo caso l’Utilizzatore finale interagisce con uno specifico
servizio messo a disposizione dal Prestatore di Servizi di Pagamento e,
tramite questo, richiede all’Ente Creditore la generazione della
posizione debitoria (*Task* T2.2.1). L’Ente Creditore risponde con
l’invio al Prestatore Servizi di Pagamento di un avviso (*Task* T2.2.2)
che può entrare nella disponibilità all’Utilizzatore finale (Task
T2.2.3) il quale dunque dispone degli elementi per decidere se
autorizzare il pagamento (*Task* T2.2.8). Dopo tale fase preliminare il
workflow di pagamento risulta indistinguibile da quello innescato da un
avviso.

Verifica posizione debitoria e attivazione della richiesta di pagamento
-----------------------------------------------------------------------

Nel caso in cui l’Utilizzatore finale inneschi il pagamento con un
avviso, il PSP dispone di due primitive per gestire il *workflow*:

-  La funzione opzionale di verifica per controllare lo stato della
   posizione debitoria attraverso l’Ente Creditore, verificando la
   sussistenza e la consistenza del debito, che può aver subito
   variazioni decorsi i termini del pagamento (per esempio potrebbe
   essere variato l’importo a causa dell’aggiungersi di interessi di
   mora)
-  La funzione necessaria di attivazione che, dopo aver eseguito gli
   stessi controlli previsti dalla funzione di verifica, richiede
   all’Ente Creditore l’invio di una Richiesta di pagamento telematica
   (RPT), ovvero il documento necessario a regolare il pagamento.

È facoltà del Prestatore di Servizi di Pagamento eseguire
preliminarmente la verifica della posizione debitoria (*Gateway* G2.2.3)
dando luogo a una diramazione del processo:

1) Nel caso venga eseguita la verifica l’Ente Creditore risponde (Task
   T2.2.5) fornendo i dati previsti riguardo lo stato della posizione
   debitoria, nonché le possibili variazioni dell'importo dovute ad
   eventi successivi all'invio dell'avviso. L’invocazione della funzione
   di verifica non ha effetti sullo stato della posizione debitoria. In
   caso di sussistenza della posizione debitoria l’Utilizzatore finale
   deve decidere se procedere (*Gateway* G2.2.2)

   a. Se l’Utilizzatore finale rifiuta di procedere il processo termina
      (*Task* T2.2.4), senza alcuna segnalazione all’EC.
   b. Se l’Utilizzatore finale decide di procedere, il PSP esegue
      l’incasso e il processo prosegue, nella seconda diramazione, con
      l’attivazione della RPT (*Task* T2.2.7) e la generazione di una RT
      positiva (*Task* T2.2.11)

2) Il PSP, che ha facoltà di non eseguire la diramazione precedente,
   richiede l’attivazione della RPT (*Task* T2.2.6). L’Ente Creditore
   risponde (Task T2.2.7) fornendo, come nel caso della funzione di
   verifica, i dati riguardo lo stato della posizione debitoria, nonché
   le possibili variazioni dell'importo dovute ad eventi successivi
   all'invio dell'avviso. L’invocazione della funzione di attivazione
   provoca l’invio della RPT e quindi ha effetto sullo stato della
   posizione debitoria che viene posta nello stato “In pagamento”
   dall’EC. il PSP chiede all’Utilizzatore finale di autorizzare il
   pagamento (*Gateway* G2.2.4):

-  Se il pagamento è autorizzato, il Prestatore di Servizi di Pagamento
   incassa il pagamento (*Task* T2.2.9) e genera una RT positiva (*Task*
   T2.2.11)
-  Se il pagamento non è autorizzato, il Prestatore di Servizi di
   Pagamento genera una RT negativa (*Task* T2.2.10)

Nel caso di emissione di ricevuta telematica positiva il Prestatore di
Servizi di Pagamento consegna all’Utilizzatore finale un’attestazione di
pagamento, contenente le informazioni specificate nella sezione III.
Tale attestazione è opponibile all’EC.

Le ricevute telematiche vengono trasmesse al NodoSPC. Il NodoSPC mette
la ricevuta telematica a disposizione dell’Ente Creditore (*Task*
2.2.12) che a sua volta può mettere a disposizione dell’Utilizzatore
finale una ricevuta (*Task* T2.2.13).

L’Utilizzatore finale a questo punto può ottenere la ricevuta (Task
T2.2.14) e terminare il processo.

Trasmissione dati di accredito e rendicontazione
------------------------------------------------

Dopo aver effettuato il pagamento, il Prestatore Servizi di Pagamento
accredita il conto dell’Ente Creditore specificato dalla richiesta di
pagamento telematico ed invia al NodoSPC i dati relativi alla ricevuta
telematica accreditata (*Task* T2.2.15

Nel caso che in cui venga effettuato un accredito cumulativo il
Prestatore Servizi di Pagamento invia i dati relativi alla
rendicontazione al NodoSPC (*Task* T2.2.16).

Il NodoSPC mette a disposizione i dati di rendicontazione per l’Ente
Creditore (*Task* T2.2.17). Quando l’Ente Creditore scarica i dati di
rendicontazione (*Task* T2.2.18).

Attivazione della richiesta di pagamento
----------------------------------------

Il NodoSPC non controlla l’effettiva sequenza operativa scelta dal
Prestatore di Servizi di Pagamento, relativa alle fasi del processo
descritte in precedenza: pertanto, un Prestatore di Servizi di Pagamento
potrebbe effettuare la richiesta di attivazione della richiesta di
pagamento telematico senza aver preventivamente effettuato la fase di
verifica. Con questo approccio è sconsigliato far precedere l’incasso
alla richiesta di attivazione della richiesta di pagamento telematico
(*Task* T2.2.6), in quanto sul Sistema pagoPA non è gestito
automaticamente il caso in cui l'Ente Creditore non riesca a inviare la
richiesta di pagamento telematico prevista dal *workflow*: per esempio,
nel caso in cui il pagamento sia già stato eseguito con un altro canale
oppure perché l'importo dovuto sia diverso da quello stampato
sull'avviso.

In questo caso il Prestatore di Servizi di Pagamento avrebbe incassato
dei fondi ai quali non può essere associata una Ricevuta Telematica da
inviare all'Ente Creditore. Per questo caso, nella sezione III, sono
previste delle gestioni semi-manuali. A tal proposito si ricorda che, ai
sensi delle Linee guida, i pagamenti effettuati attraverso il NodoSPC
sono liberatori del debito a condizione che la Ricevuta Telematica sia
congruente con le informazioni presenti sulla relativa richiesta di
pagamento telematico e quindi sull'archivio dei pagamenti in attesa.
