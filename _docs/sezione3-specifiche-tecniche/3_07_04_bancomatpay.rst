BancomatPay
-----------

|work-in-progress| **Soggetto a proposta di modifica**

.. _bancomatpay-1:

BancomatPay
~~~~~~~~~~~

Forma del parametriProfiloPagamento: non è valorizzato. Forma del
parametriPagamentoImmediato: idBruciatura= Forma del parametroWisp:
cell=&psp= dove :

-  cell: numero di telefono associato alla carta BancomatPay criptato
-  psp: codice abi del PSP incaricato di eseguire la transazione

Esempio di URL di redirezione WFESP->PSP:
``<urlPortalePSP>?[idDominio=<valore>]&cell=<numeroTelefonoCriptato>&psp=<abi>&idBruciatura=<valore>[&lang]``
Esempio di URL di redirezione PSP->WFESP:
``<urlWeb-FESP>?[idDominio=<valore>]&idBruciatura=<valore>&codiceRitorno=<valoreCodiceRitorno>``

con codiceRitorno che può assumere i seguenti valori (traduzione WFESP
per PA):

-  OK: Processo concluso con esito positivo (OK)
-  ERROR: Processo concluso con esito negativo (ERROR)
-  DIFFERITO: Processo concluso con esito dubbio (DIFFERITO)

MyBank-Banca Seller
~~~~~~~~~~~~~~~~~~~

Per tutte le Banche Seller integrate (ovvero sui canali il cui
tipoVersamento corrisponde a MYBK)

Forma del parametriProfiloPagamento:

-  IDVS= : rappresenta l’identificativo della Banca Buyer a cui
   rendirizzare l’utente per concludere il pagamento.

Forma del parametriPagamentoImmediato:

-  idBruciatura= : identifica univocamente l’operazione di pagamento.

Esempio di URL di redirezione WFESP PSP:
``<urlPortalePSP>?IDVS=<Validation Service ID>&idBruciatura=<valore>[&idCarrello=<valore>][&lang=<language>]``

Esempio di URL di redirezione PSP WFESP:
``<urlWeb-FESP>?[idDominio=<valore>]&idBruciatura=<valore>&codiceRitorno=<valoreCodiceRitorno>``

con codiceRitorno che può assumere i seguenti valori (traduzione WFESP
per PA):

-  OK: Processo concluso con esito positivo (OK)
-  KO: Processo concluso con esito negativo (ERROR)
-  DIFFERITO: Processo concluso con esito differito (DIFFERITO)

.. |work-in-progress| image:: ../images/wip.png
