Integrazione di uno strumento di pagamento
==========================================

Il presente capitolo descrive le molteplici possibilità di integrazione di uno strumento di pagamento con la componente PCI (Payment Manager) della piattaforma pagoPA. 
Si distinguono due modalità di integrazione: 

- integrazione _light_, ovvero un'integrazione dove non è necessaria l'autenticazione a priori dell'utente Rientrano in tale categoria: 
    - Pagamenti tramite portali web (es. homeBanking) 
    - MyBank (nel ruolo di Banca Seller)
    - BancomatPay
- integrazione _full_, ovvero un'integrazione che prevede l'autenticazione a priori dell'utente tramite SPID o CIE. In tale scenario l'utente potrà inserire il metodo di pagamento all'interno del proprio wallet (validandone la titolarità) e successivamente utilizzarlo durante le operazione di pagamento. Rientrano in tale categoria:
    - Pagamenti con carte 
    - PayPal

Indipendentemente dal tipo di servizio integrato e dalla modalità di integrazione, il processo di pagamento può essere così sintetizzato : 

1. la piattaforma inizia il pagamento, innescata dalla lettura di un avviso o tramite altra modalità
2. la piattaforma colloquia con il servizio predisposto dal PSP per l'esecuzione della transazione (ogni integrazione avrà proprie modalità, descritte nel seguito). I fondi vengono trasferiti su un conto tecnico del PSP stesso.
3. la piattaforma notifica al PSP la transazione eseguita e le modalità di riversamento
4. il PSP verifica le informazioni ed accetta le richieste pervenute
5. la piattaforma conclude il pagamento dandone evidenza all'utente
6. il PSP notifica la conclusione del pagamento emettendo una ricevuta
7. la piattaforma notifica la ricezione della ricevuta all'EC

Successivamente il PSP riverserà le somme verso i conti correnti indicati, in modalità cumulativa. 


### Primitiva pspInviaCarrelloRPTCarte [DEPRECATA]

Il processo di pagamento attraverso la `pspInviaCarrelloRPTCarte` è deprecato, a partire dal 01/11/2021 non sarà più possibile integrare nuovi PSP che utilizzino tale primitiva. 
Per i PSP attualmente integrati, la primitiva sarà disponibile fino al 01/06/2022. Nuove funzionalità saranno disponibili solo ed esclusivamente sul nuovo flusso di pagamento.