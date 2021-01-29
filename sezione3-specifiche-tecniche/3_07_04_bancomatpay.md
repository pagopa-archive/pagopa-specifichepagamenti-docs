## BancomatPay

`[TBD todo  ## 3_07_04 BancomatPay  Credo lo possiamo cancellare per il momento.]`
Al fine di poter realizzare 

### BancomatPay

Forma del parametriProfiloPagamento:
non è valorizzato.
Forma del parametriPagamentoImmediato:
idBruciatura=<valore>
Forma del parametroWisp:
cell=<numeroTelefonoCriptato>&psp=<abi>
dove :

- cell: numero di telefono associato alla carta BancomatPay criptato 
- psp:  codice abi del PSP incaricato di eseguire la transazione
  
Esempio di URL di redirezione WFESP->PSP:
`<urlPortalePSP>?[idDominio=<valore>]&cell=<numeroTelefonoCriptato>&psp=<abi>&idBruciatura=<valore>[&lang]`
Esempio di URL di redirezione PSP->WFESP:
`<urlWeb-FESP>?[idDominio=<valore>]&idBruciatura=<valore>&codiceRitorno=<valoreCodiceRitorno>`

con codiceRitorno che può assumere i seguenti valori (traduzione WFESP per PA):

- OK:           Processo concluso con esito positivo (OK)
- ERROR:        Processo concluso con esito negativo (ERROR)
- DIFFERITO:    Processo concluso con esito dubbio (DIFFERITO)

### MyBank-Banca Seller

Per tutte le Banche Seller integrate (ovvero sui canali il cui tipoVersamento corrisponde a MYBK) 

Forma del parametriProfiloPagamento:

- IDVS=<valore> : rappresenta l'identificativo della Banca Buyer a cui rendirizzare l'utente per concludere il pagamento.

Forma del parametriPagamentoImmediato:

- idBruciatura=<valore> : identifica univocamente l'operazione di pagamento.

Esempio di URL di redirezione WFESP PSP:
`<urlPortalePSP>?IDVS=<Validation Service ID>&idBruciatura=<valore>[&idCarrello=<valore>][&lang=<language>]`

Esempio di URL di redirezione PSP WFESP:
`<urlWeb-FESP>?[idDominio=<valore>]&idBruciatura=<valore>&codiceRitorno=<valoreCodiceRitorno>`

con codiceRitorno che può assumere i seguenti valori (traduzione WFESP per PA):

- OK:   Processo concluso con esito positivo (OK)
- KO:   Processo concluso con esito negativo (ERROR)
- DIFFERITO:    Processo concluso con esito differito (DIFFERITO)