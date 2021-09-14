Integrazione di un metodo nel wallet
====================================

Il presente capitolo descrive le molteplici possibilità di integrazione di un metodo di pagamento nel wallet. 
Distiguiamo due modalità di integrazione : 

- integrazione _light_, ovvero un'integrazione dove non è necessaria l'autenticzione a priori dell'utente. Durante ogni operazione di pagamento l'utente dovrà inserire le proprie credenziali di autenticazione presso i servizi del PSP. Rientrano in tale categoria : 

    - Pagamenti tramite portali web (es. homeBanking) 
    - MyBank (nel ruolo di Banca Seller)
    - BancomatPay


- integrazione _full_, ovvero un'integrazione che prevede l'autenticazione a priori dell'utente tramite eIDAS. In tale scenario l'utente potrà inserire il metodo di pagamento all'interno del proprio wallet ( validandone la titolarità ) e successivamente utilizzarlo durante le operazione di pagamento.  Rientratno in tale categoria :

    - Pagamenti con carte 
    - Paypal

Indipendentemente dal tipo di servizio integrato e dalla modalità di integrazione ,il processo dipagamento può essere rincondotto al seguente schema : 

![sd_pagamento_wallet](../diagrams/sd_pagamento_wallet.png) 

1. la piattaforma inizia il pagamento, innescata dalla lettura di un avviso o tramite altra modalità.
2. la piattaforma colloquia con il servizio predisposto dal PSP per l'esecuzione della transazione ( ogni integrazione avrà proprie modalità, descritte nelle apposite pagine a seguire ). i fondi vengono trasferiti su un conto tecnico del PSP stesso.
3. la piattaforma notifica al PSP la transazione eseguita e le modalità di riversamento
4. il PSP verifica le informazioni ed accetta le richieste pervenute.
5. la piattaforma conclude il pagamento dandone evidenza all'utente.
6. il PSP notifica la conclusione del pagamento emettendo una ricevuta dell'operazione.
7. la piattaforma notifica la ricezione della ricevuta all'EC.

Successivamente il PSP riverserà le somme verso i conti correnti indicati in modalità cumulativa. 
