Integrazione di un metodo nel wallet
====================================

`[TBD ## 3_07_01 on-line]`
`[TBD ## 3_07_02 Acquirer]`
`[TBD ## 3_07_03 Banca Seller]` 
`[TBD ## 3_07_04 BancomatPay]`

## on-line

`[TBD rif https://github.com/pagopa/pagopa-api/blob/master/ec/wisp.md]`

Il presente capitolo vuole dare indicazioni circa i parametri da utilizzare nella gestione della re-direzione del browser dell'utente nell'ambito del modello di pagamento presso il sito web dell'EC.

La sintassi dello URL che il Portale dell'Ente Creditore deve utilizzare per re-indirizzare il browser dell’utilizzatore finale **verso il WISP** è:

	`<wispURL>[&lang="xy”][&logo="1239338234242_01"]`

dove :

* _wispURL_: la stringa fornita all'EC dal Nodo nella response della primitiva _nodoInviaCarrelloRPT_. Essa è così composta: "`<urlWeb-FESP>?idSession=<idSession>`", dove:
		* _urlWeb-FESP_: è lo URL della componente Web-FESP del Nodo
		* _idSession_: è generato dal Nodo ed identifica in modo univoco l’operazione di pagamento
* _lang_: specifica il linguaggio scelto dall'utilizzatore finale sul Portale dell'EC, secondo la codifica standard ISO 693-1 (la lingua di default è l'italiano). Esempio per la lingua inglese: `<wispURL>&lang="en"`
* _logo_: codice identificativo del logo dell'EC configurato (tipo file: png o jpg , formato 220x220 pixel)

Mentre la sintassi dello URL restituito dal Web-FESP al browser dell’utilizzatore finale per il re-indirizzamento **verso il Portale dell'EC** è la seguente:

	`<urlPortalePA>?&idSession=<idSession>&esito=<esito>[&<URLesitoPSP>]`

dove:

* _urlPortalePA_: è lo URL del Portale dell'EC così come configurato all'interno della stazione dalla quale è stato richiesto il pagamento (es: http://www.giustizia.it/pagamenti)
* _idSession_: è generato dal Nodo ed identifica in modo univoco l’operazione di pagamento
* _esito_: corrisponde alla traduzione dell’esito della transazione on-line fornito dal Portale del PSP nella re-direzione di ritorno al Web-FESP, dopo che l’utilizzatore finale ha interagito con il Portale PSP. Può essere utilizzato opzionalmente dal Portale dell'EC per scegliere automaticamente una pagina da presentare all’utilizzatore finale in base all’esito della transazione. Si ricorda che, in ogni caso, l’esito certo del pagamento è dato dalla RT. I valori ammessi per l'esito sono:
	 * _OK_: il pagamento presso il Portale PSP è stato eseguito con successo; quest’ultimo fornirà a breve una RT positiva
	 * _ERROR_: il pagamento presso il Portale PSP non è stato eseguito con successo; quest’ultimo ha segnalato al Web-FESP l’esito negativo.
	 * _DIFFERITO_: l’esito del pagamento eseguito dall’utilizzatore finale presso il Portale PSP sarà noto solo al ricevimento della RT.
* _URLesitoPSP_: è la query string completa dei parametri passati dal Portale PSP al Web-FESP senza traduzione in _idSession_ ed _esito_, il suo contenuto dipende dall'integrazione effettuata. Esempio per uno specifico PSP: `idBruciatura=abc1d4e7f3a8&idCarrello=123456789&codiceRitorno=KO_02`

## Banca Seller

`[TBD rif https://docs.google.com/document/d/1M5OEfN5RZSfBSKRuhYWX3WZkWVcivD4WpRxsjwyEUzE/view]`
