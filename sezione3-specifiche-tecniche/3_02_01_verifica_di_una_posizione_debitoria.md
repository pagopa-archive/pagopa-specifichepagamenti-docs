Verifica di una posizione debitoria
===================================

Un EC connesso alla Piattaforma pagoPA deve offrire il servizio di interrogazione delle proprie posizioni  debitorie con la primitiva *paVerifyPaymentNotice*.

Ogni posizione debitoria ottenuta deve contenere un'unica opzione di pagamento, che definisce: un importo, una data di scadenza ed una descrizione.

Inoltre, si noti che per mezzo del parametro `allCCP` si dovrà sempre indicare se la posizione debitoria è associabile - o meno - a tutti conti correnti postali.

L'interfaccia *paaVerificaRPT* - già contenuta nelle precedenti versioni - continuerà ad essere utilizzata e supportata sino al 31/12/2021.
