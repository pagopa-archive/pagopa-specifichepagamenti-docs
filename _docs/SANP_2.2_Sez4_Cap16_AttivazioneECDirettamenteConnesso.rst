Attivazione di un EC direttamente connesso
==========================================

Il Referente Pagamenti di un Ente Creditore che abbia deciso di attivarsi su pagoPA collegandosi direttamente all’infrastruttura del Nodo-SPC, deve
censire sul Portale delle Adesioni una connessione logica diretta indicando i modelli di pagamento su cui l’Ente Creditore intende attivarsi;
contestualmente è tenuto a nominare la figura del Referente Tecnico.

Il Referente Tecnico, ricevuta la nomina e le credenziali di accesso al Portale delle Adesioni, dovrà innanzitutto individuare la soluzione più
adeguata per realizzare il **collegamento fisico** al Nodo-SPC.

Il **collegamento fisico** si riferisce alla tipologia del supporto di rete utilizzato per connettere la piattaforma del soggetto aderente al
Nodo-SPC; l’individuazione del collegamento fisico prevede la raccolta delle informazioni tecniche che lo rendono possibile: indirizzi IP, porte
assegnate, ecc.

Le modalità di collegamento con cui un Ente Creditore può connettersi al Nodo-SPC sono descritte nel documento “\ *Specifiche di connessione al
Sistema pagoPA*\ ”.

Il Nodo-SPC è strutturato in due ambienti distinti e indipendenti: un ambiente di Test Esterno (disponibile per eseguire tutti i test di attivazione e
integrazione previsti da AgID) ed uno per l'Esercizio.

Ogni aderente al Nodo potrà quindi, in qualsiasi momento, effettuare test di integrazione interfacciandosi, presso l'ambiente di test del Nodo-SPC, o
con un emulatore PSP o con gli ambienti di test predisposti dai PSP aderenti al Nodo.

Gli ambienti del Nodo-SPC saranno allineati alle Specifiche Attuative di riferimento, pubblicate sul sito istituzionale dell’Agenzia, tranne nei
periodi transitori di modifica per l'implementazione di nuove specifiche.

Processo di avvio in Esercizio
------------------------------

Il processo di avvio in Esercizio di un Ente Creditore collegato direttamente all’infrastruttura del Nodo-SPC prevede il soddisfacimento di alcuni
prerequisiti riguardanti la predisposizione di un ambiente di Collaudo e di un ambiente di Esercizio e un piano per il *disaster recovery*.

L’Ente Creditore che intenda infatti iniziare il processo che lo porterà a rendere disponibili i propri servizi attraverso l’esecuzione di operazioni
di pagamento sul Sistema pagoPA secondo i modelli dichiarati, sarà tenuto ad attivare un collegamento fisico (di Collaudo) con l’ambiente di Test
Esterno del Nodo-SPC ed un collegamento fisico (di Esercizio) con l’ambiente di Esercizio del Nodo-SPC.

Per completare le configurazioni dovrà inoltre fornire tutte le informazioni necessarie all’attivazione di almeno una Stazione in ambiente di Collaudo
ed almeno una Stazione in ambiente di Esercizio. La definizione della Stazione è di competenza del soggetto collegato direttamente all’infrastruttura
del Nodo-SPC.

Ogni collegamento fisico può avere un numero variabile di Stazioni, in funzione dei modelli di pagamento implementati e delle regole/preferenze del
soggetto direttamente connesso al Nodo. La configurazione di un Ente sul Nodo-SPC si completa con l’associazione dell’Ente stesso ad almeno una delle
sue Stazioni. Il RT può portare a termine tutte le attività descritte utilizzando il Portale delle Adesioni (per i dettagli si rimanda al Manuale
Utente disponibile sul sito dell’Agenzia).

Per completare il processo di avvio in Esercizio l’Ente Creditore deve soddisfare un ulteriore requisito: la compilazione di un documento di manleva
all'esecuzione dei servizi oggetto dei casi di test indicati da AgID. Il documento di manleva deve essere recapitato ad AgID, firmato digitalmente,
dal Referente Tecnico dell’Ente Creditore al fine di completare il processo di attivazione in Esercizio.

Nel documento di manleva il RT dichiara di voler rendere disponibili i propri servizi attraverso l’esecuzione di operazioni di pagamento sul sistema
pagoPA e garantisce di aver effettuato con esito positivo, sia in ambiente di Test Esterno che in ambiente di Esercizio, tutti i casi di test previsti
da AgID alla data di sottoscrizione del documento. Il documento di manleva è disponibile sul sito istituzionale dell’Agenzia.

Soddisfatti tutti i requisiti iniziali il Referente Tecnico, utilizzando il Portale delle Adesioni, può avviare il processo procedendo come segue:

1. Accede alla funzionalità preposta e crea una nuova pianificazione indicando tutti i Modelli di Pagamento su cui intende attivare l’Ente Creditore.

2. Decide se procedere o meno con l’esecuzione dei test previsti in ambiente di Collaudo con il supporto del personale AgID. Se decide di eseguire i
   test deve:

   a. Fornire gli IBAN di accredito da utilizzare in ambiente di Collaudo;

   b. Proporre ad AgID una data di inizio dei test al fine di coordinare le attività previste;

3. Configurati gli IBAN di Collaudo ed ultimati i test con il supporto di AgID, il RT deve compilare il “Verbale di Collaudo” e rimanere in attesa che
   AgID lo validi per chiudere formalmente la fase di Collaudo;

4. Terminata la fase di Collaudo (3.c) oppure avendo deciso di non coinvolgere AgID in tale fase, il RT esprime la volontà di procedere o meno con
   l’esecuzione dei test previsti in ambiente di Esercizio con il supporto del personale AgID. Se decide di eseguire i test deve:

   c. Fornire gli IBAN di accredito da utilizzare in ambiente di Esercizio (ne potrebbe inserire di nuovi o utilizzare IBAN già attivi per
      quell’Ente);

   d. Proporre ad AgID una data di inizio dei test al fine di coordinare le attività previste;

   e. Configurati gli IBAN in fase di Pre-Esercizio ed ultimati i test con il supporto di AgID, il RT deve compilare il “Verbale di Pre-Esercizio” e
      rimanere in attesa che AgID lo validi per chiudere le attività di Pre-Esercizio.

5. Ultimata la fase di Pre-Esercizio oppure avendo deciso di non coinvolgere AgID in tale fase, il RT deve compilare il documento di manleva affinchè
   AgID lo possa validare e chiudere formalmente la fase di Pre-Esercizio;

6. Al fine di completare la procedura di avvio in esercizio dell'Ente Creditore il RT deve:

   f. Fornire la "Tabella delle Controparti";

   g. Indicare tutte le informazioni riguardanti il “Tavolo operativo”.

7. AgID autorizza all’Esercizio l’Ente Creditore invitando il Referente Pagamenti dell’Ente ad attivare sul PdA (qualora non ne esistano) almeno un
   IBAN di accredito.

Per tutti i dettagli fare riferimento al Manuale Utente disponibile sul sito dell’Agenzia.
