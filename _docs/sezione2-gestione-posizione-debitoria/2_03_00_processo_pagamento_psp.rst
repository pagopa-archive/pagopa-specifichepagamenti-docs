Processo di pagamento attivato presso il Prestatore di Servizi di Pagamento
===========================================================================

Questo processo prevede che l’esecuzione del pagamento avvenga presso le
infrastrutture messe a disposizione dal PSP quali, ad esempio, sportelli
ATM, applicazioni di *Home banking* e *mobile* *payment*, uffici
postali, punti della rete di vendita dei generi di Monopolio (Tabaccai),
SISAL e Lottomatica, casse predisposte presso la Grande Distribuzione
Organizzata, etc.

Per rendere possibile il pagamento l’EC ha l’obbligo di recapitare
all’utilizzatore finale un avviso con gli estremi del pagamento da
effettuare. Tale recapito deve obbligatoriamente avvenire sia in
modalità analogica (tramite servizi postali), che digitale. L’EC può
inoltre adottare ulteriori misure per la diffusione degli avvisi di
pagamento, per esempio rendere disponibili funzioni di stampa on line
tramite il proprio sito.

Nello schema che segue è trattato il caso in cui l’utilizzatore finale,
già in possesso dell’avviso di pagamento analogico fornito dall’Ente, si
rechi presso le strutture del PSP e comunichi il codice dell’avviso di
pagamento. Si tenga presente che il caso d’uso descritto non dipende
dalla concreta modalità in cui tale dato entra in possesso del PSP: il
codice potrebbe essere comunicato a un operatore di sportello, letto
automaticamente tramite dispositivi ottici, inserito manualmente dal
soggetto versante su interfacce messe a disposizione dai PSP (un
terminale ATM, una pagina WEB, etc), ovvero, da ultimo, comunicato
tramite avviso digitale.

Al fine di rendere processo di pagamento attraverso il PSP
immediatamente leggibile la descrizione del suo *workflow* è stata
aggregata in sotto-paragrafi secondo lo schema logico che segue:

.. figure:: ../images/process_psp.png
   :alt: flow-pagamento-psp

   flow-pagamento-psp

Nel processo schematizzato sono coinvolti quattro soggetti:

-  Utilizzatore finale
-  Ente Creditore (EC)
-  NodoSPC
-  Prestatore Servizi di Pagamento (PSP) dell’Utilizzatore finale

.. figure:: ../images/bpmn_psp.png
   :alt: bpmn-pagamento-psp

   bpmn-pagamento-psp

Avvio del pagamento
-------------------

L’Utilizzatore finale può eseguire un pagamento con due itinerari
distinti (*Gateway* G2.2.1) discriminati dal fatto che esista una
posizione debitoria. Nel caso che la posizione debitoria esista
l’Utilizzatore finale dispone di un avviso di pagamento, altrimenti
occorre che il PSP interagisca con l’EC per generarne una.

Generazione posizione debitoria per pagamento spontaneo
-------------------------------------------------------

La generazione della posizione debitoria è l’evento che costituisce la
premessa al pagamento sul Sistema pagoPA.

In determinate circostanze, previste nello specifico dalla vigente
normativa, un soggetto matura un debito in favore di una Pubblica
Amministrazione (centrale o locale). In questo caso lo stesso EC assume
l’iniziativa di generare una posizione debitoria e provvede a notificare
l’avviso di pagamento al soggetto pagatore. Questa casistica prende il
nome di *pagamento dovuto*. Nel caso che l’EC sia tenuto ad accompagnare
la notifica con un avviso di pagamento analogico, provvede anche a
inviare al NodoSPC di un avviso digitale. Con questi strumenti si
innesca il pagamento presso il PSP.

Nel caso in cui non sussistano le circostanze sopra indicate e quindi
l’Utilizzatore finale non sia in possesso di un avviso digitale,
l’Utilizzatore stesso può assumere l’iniziativa di avviare il pagamento
(si parla in questo caso di *pagamento spontaneo*), purché il PSP
disponga della relativa funzione. In questo caso l’Utilizzatore finale
interagisce con uno specifico servizio messo a disposizione dal PSP e,
tramite questo, richiede all’EC la generazione della posizione debitoria
(*Task* T2.2.1). L’EC risponde con l’invio al PSP di un avviso (*Task*
T2.2.2) che può entrare nella disponibilità all’Utilizzatore finale
(*Task* T2.2.3) il quale dunque dispone degli elementi per decidere se
autorizzare il pagamento (*Task* T2.2.8). Dopo tale fase preliminare il
workflow di pagamento risulta indistinguibile da quello innescato da un
avviso.
``[TBD- eliminerei il pagamento spontaneo, in quanto al momento esiste solo il bollo auto ed è un eccezione al modello]``

Verifica posizione debitoria e attivazione della richiesta di pagamento
-----------------------------------------------------------------------

Nel caso in cui l’Utilizzatore finale inneschi il pagamento con un
avviso, il PSP dispone di due primitive per gestire il *workflow*:

-  La funzione opzionale di verifica per controllare lo stato della
   posizione debitoria attraverso l’EC, verificando la sussistenza e la
   consistenza del debito, che può aver subito variazioni decorsi i
   termini del pagamento (per esempio potrebbe essere variato l’importo
   a causa dell’aggiungersi di interessi di mora)
-  La funzione necessaria di attivazione che richiede la creazione di
   una sessione di pagamento esclusiva dell’avviso.
   ``[TBD rifrasare meglio per il nuovo mod 3 ? -->updated]``

È facoltà del Prestatore di Servizi di Pagamento eseguire
preliminarmente la verifica della posizione debitoria (*Gateway* G2.2.3)
dando luogo a una diramazione del processo:

1. Nel caso venga eseguita la verifica, il PSP acquisisce i dati
   riguardo la posizione debitoria, nonché le possibili variazioni
   dell’importo dovute ad eventi successivi all’invio dell’avviso e le
   diverse opzioni di pagamento previste all’interno dell’avviso.
   L’invocazione della funzione di verifica non ha effetti sullo stato
   della posizione debitoria. In caso di sussistenza della posizione
   debitoria l’Utilizzatore finale deve decidere se procedere (*Gateway*
   G2.2.2):

   -  

      (a) Se l’Utilizzatore finale rifiuta di procedere il processo
          termina (*Task* T2.2.4), senza alcuna segnalazione all’EC.

   -  

      (b) Se l’Utilizzatore finale decide di procedere, il PSP con la
          creazione della sessione di pagamento , l’incasso e la
          generazione di un’esito dell’operazione
          ``[TBD chk --> updated]``

2. Il PSP, che ha facoltà di non eseguire la diramazione precedente,
   richiede una sessione di pagamento. L’invocazione della funzione di
   attivazione genera un token di pagamento che, oltre ad avere effetto
   sullo stato della posizione debitoria che viene posta nello stato
   “paying”, inibisce l’apertura di sessioni di pagamento concorrenti
   per la stessa posizione debitoria. Il PSP chiede all’Utilizzatore
   finale di autorizzare il pagamento (*Gateway* G2.2.4):

   -  Se il pagamento è autorizzato, il PSP incassa il pagamento (*Task*
      T2.2.9) e genera un esito positivo (*Task* T2.2.11)
   -  Se il pagamento non è autorizzato, il PSP genera un’esito negativo
      (*Task* T2.2.10) ``[TBD check--> updated]``

Nel caso di emissione di esito positivo il PSP consegna all’Utilizzatore
finale un’attestazione di pagamento, contenente le informazioni
specificate nella Sez-III. Tale attestazione è opponibile all’EC.

Le ricevute telematiche vengono trasmesse al NodoSPC. Il NodoSPC mette
la ricevuta telematica a disposizione dell’EC (*Task* 2.2.12) che a sua
volta può mettere a disposizione dell’Utilizzatore finale una ricevuta
(*Task* T2.2.13).

L’Utilizzatore finale a questo punto può ottenere la ricevuta (*Task*
T2.2.14) e terminare il processo.

Trasmissione dati di accredito e rendicontazione
------------------------------------------------

``[TBD uniformare al caso di pagamento presso EC ?]``

Il PSP accrediterà le somme sui conti dell’EC ricevuti durante la
creazione della sessione di pagamento , per mezzo di bonifico SCT, il
giorno successivo ( D+1 ), mentre entro due giorni ( D+2 ) invierà il
flusso di rendicontazione dettagliando l’elenco puntuali dei pagamenti
contenuti all’interno dei diversi bonifici effettuati.

Il NodoSPC mette a disposizione i dati di rendicontazione per l’EC
(*Task* T2.2.17).

L’EC recupera i dati di rendicontazione (*Task* T2.2.18) e può quindi
avviare il processo di riconciliazione.
