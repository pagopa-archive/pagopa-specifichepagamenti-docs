Attivazione di un EC direttamente connesso
==========================================

Il Referente Pagamenti di un Ente Creditore che abbia deciso di
attivarsi su pagoPA collegandosi direttamente alla piattaforma deve
censire, sul Portale delle Adesioni, una connessione “diretta”,
specificando i modelli di pagamento che l’Ente Creditore intende
attivare; contestualmente è tenuto a nominare la figura del Referente
Tecnico.

Il Referente Tecnico, ricevuta la nomina e le credenziali di accesso al
Portale delle Adesioni, dovrà individuare la soluzione più adeguata per
realizzare il collegamento fisico alla piattaforma e fornire tutte le
informazioni tecniche richieste.

La modalità di collegamento con cui un Ente Creditore può connettersi
alla piattaforma è descritta nel documento “Specifiche di connessione al
Sistema pagoPA”, disponibile sul sito di PagoPA S.p.A..

La piattaforma dei pagamenti dispone di due ambienti, distinti e
indipendenti:

-  un ambiente di Test Esterno (disponibile per eseguire tutti i test di
   attivazione e integrazione previsti da PagoPA S.p.A.);
-  un ambiente di Esercizio.

Gli ambienti di Test Esterno e di Esercizio della piattaforma dei
pagamenti saranno sempre allineati alle Specifiche Attuative di
riferimento, eccezion fatta per i periodi in cui si lavorerà
all’implementazione di nuove specifiche. Ad esempio può accadere che
l’ambiente di Test Esterno stia recependo delle evoluzioni di prossimo
rilascio in ambiente di Esercizio.

Processo di avvio in Esercizio
------------------------------

Il processo di avvio in Esercizio di un Ente Creditore direttamente
connesso prevede il soddisfacimento di alcuni prerequisiti che
riguardano la predisposizione di un ambiente di Collaudo, di un ambiente
di Esercizio e di un piano per il disaster recovery.

Infatti, l’Ente Creditore che sulla base dei modelli dichiarati vuole
rendere disponibili i propri servizi di pagamento sul Sistema pagoPA è
tenuto ad attivare:

-  Un collegamento fisico (di Test Esterno);
-  Un collegamento fisico (di Esercizio).

L’Ente, per completare la configurazione, dovrà fornire anche tutte le
informazioni necessarie all’attivazione di almeno una Stazione in
ambiente di Test Esterno ed almeno una Stazione in ambiente di
Esercizio. La definizione della Stazione è di competenza del soggetto
collegato direttamente alla piattaforma.

Ogni collegamento fisico può avere, in funzione dei modelli di pagamento
implementati e delle regole/preferenze del soggetto direttamente
connesso, un numero variabile di Stazioni. La configurazione di un Ente
sulla piattaforma si completa con l’associazione dell’Ente ad almeno una
delle sue Stazioni. Tutte queste attività devono essere eseguite dal
Referente Tecnico attraverso il Portale delle Adesioni (per ulteriori
dettagli si rimanda al Manuale Utente).

In ultimo, l’Ente Creditore deve adempiere ad un ulteriore obbligo: la
compilazione di un documento di manleva all’esecuzione dei servizi
oggetto dei casi di test indicati da PagoPa S.p.A.. Il documento di
manleva deve essere recapitato a PagoPA S.p.A., debitamente compilato e
firmato digitalmente dal Referente Tecnico dell’Ente Creditore.

Nel documento di manleva, il Referente Tecnico dichiara di voler rendere
disponibili i propri servizi attraverso l’esecuzione di operazioni di
pagamento sul sistema pagoPA e garantisce di aver effettuato con esito
positivo, sia in ambiente di Test Esterno che in ambiente di Esercizio,
tutti i casi di test previsti da PagoPA S.p.A. alla data di
sottoscrizione del documento.

Per l’avvio in esercizio di un Ente Creditore, il Referente Tecnico può
agire come segue:

1. Decidere se procedere o meno con i test previsti per l’ambiente di
   Test Esterno, magari avvalendosi del supporto del personale di PagoPA
   S.p.A. Nel caso in cui decida di effettuare i test deve:

   -  fornire gli IBAN di accredito da utilizzare in ambiente di Test
      Esterno;
   -  proporre a PagoPA S.p.A. una data di inizio dei test, al fine di
      coordinare le attività previste;

2. Configurati gli IBAN di Test Esterno ed ultimati i test con il
   supporto di PagoPA S.p.A., il RT compila il “Verbale di Collaudo” e
   rimane in attesa che PagoPA S.p.A. lo validi e chiuda formalmente la
   fase di Collaudo;
3. Terminata la fase di Collaudo (2), che può avvenire anche senza il
   diretto coinvolgimento di PagoPA S.p.A., il RT decide se procedere
   con l’esecuzione dei test previsti per l’ambiente di Esercizio,
   magari avvalendosi del supporto del personale PagoPA S.p.A.. Nel caso
   in cui decida di effettuare i test deve:

   -  fornire gli IBAN di accredito da utilizzare in ambiente di
      Esercizio (potrebbe inserirne di nuovi o utilizzare IBAN già
      attivi per quell’Ente);
   -  configurati gli IBAN in fase di Pre-Esercizio ed ultimati i test
      con il supporto di PagoPA S.p.A., il RT compila il “Verbale di
      Pre-Esercizio” e rimane in attesa che PagoPA S.p.A. lo validi per
      chiudere le attività.

4. Ultimata la fase di Pre-Esercizio, che può avvenire anche senza il
   diretto coinvolgimento di PagoPA S.p.A., il RT compila il documento
   di manleva e attende che PagoPA S.p.A. lo validi e chiuda formalmente
   l’attivazione dell’Ente sulla piattaforma;
5. Nel caso in cui l’Ente abbia configurato il pagamento attivato presso
   il PSP (c.d. Modello 3), il RT deve fornire a PagoPA S.p.A. la
   “Tabella delle Controparti”.
6. PagoPA S.p.A. autorizza all’Esercizio l’Ente Creditore invitando il
   Referente Pagamenti dell’Ente ad attivare sul PdA almeno un IBAN di
   accredito, qualora non ne fosse presente nemmeno uno.

Per ulteriori dettagli e approfondimenti si può fare riferimento al
“Manuale Utente” disponibile sul sito di PagoPA S.p.A.
