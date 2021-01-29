Integrazione di un metodo nel wallet
====================================

Il presente capitolo descrive le molteplici possibilità di integrazione di un metodo di pagamento nel wallet.In particolare :

- Pagamenti con carte di credito 
- Pagamenti tramite portali web ( es. homeBanking )
- MyBank ( nel ruolo di Banca Seller )
- BancomatPay

Indipendentemente dal tipo di servizio integrato, il processo di pagamento verso il PSP può essere ricondotto al seguente schema

![sd_pagamento_wallet](../diagrams/sd_pagamento_wallet.png)

1. la piattaforma notifica al PSP un insieme di richieste di pagamento. La primitiva utilizzata può dipendere dal tipo di integrazione.
2. il PSP verifica le informazioni ed accetta le richieste pervenute.
3. il PSP notifica la conclusione del pagamento emettendo una ricevuta dell'operazione.
4. la piattaforma notifica la ricezione della ricevuta.
