Pagamento multi beneficiario
============================

E' possibile che per talune posizioni debitorie la somma totale del debito debba essere ripartita tra più Enti Creditori (tutti aderenti alla Piattaforma pagoPA).

In tali casi la stessa posizione debitoria dovrà essere scomposta in diverse RPT ognuna delle quali afferente ad un Ente Creditore coinvolto, tenendo conto delle seguenti osservazioni:

* Il carrello on-line rappresenta una posizione debitoria. Non è possibile quindi creare un carrello contenente più posizioni debitorie.
* Il carrello contiene solo 2 RPT
* La seconda RPT contiene solo 1 versamento ( accortezza che serve per riconciliare con l’attuale FdR ) e non è necessariamente associata alla stazione dalla quale proviene il messaggio.
* L’Ente Beneficiario primario è il primo ente del carrello.
* Il SoggettoPagatore è lo stesso per tutte le RPT del carrello. Non faremo controlli, ma saranno utilizzati i dati del soggettoPagatore della 1 RPT.
* le informazioni sull’utente ( e-mail ) sono rilevanti solo quelle nella prima RPT.
* la successiva RPT deve essere intestata ad altro Ente. Ne consegue che lo stesso Ente deve essere presente con una sola RPT.
* Lo IUV è identico per ogni RPT (viene utilizzato come creditorReferenceId ).
* il dato dataEsecuzionePagamento è il medesimo per tutte le RPT.
* Il carrello deve avere massimo 5 versamenti totali ( tra le RPT ).
* L’idCarrello deve essere composto nella seguente forma:
            ```
            <idDominio(11)><numeroAvviso(18)>-(1)-<Progressivo(5)>
            ```
esempio `12345678912301123456789034214-00001`
* Il numero Avviso è il medesimo stampato nel relativo avviso di pagamento.
* il CCP delle RPT devono contenere l’idCarrello. Tale peculiarità serve per facilitare l’associazione delle RT generate dai PSP alla stessa posizione debitoria.
* ogni RPT contiene solo iban dell’Ente riferito all’interno della RPT.
* la nodoInviaCarrelloRPT contiene i nuovi parametri:
```multi-beneficiario : true ```
* Nessuna RPT contiene marca da bollo.

Le ricevute di tale pagamento saranno consegnate:

* alla stazione dalla quale è partita la richiesta di pagamento
* a tutte le stazioni degli EC coinvolti e dedite alla ricezione di pagamento per conto terzi (parametro della stazione broadcast)


**Esempio**

Il pagamento di un tributo TARI/TEFA (numero Avviso 002123652389012132 ) pari ad un totale di 110 EUR. In tale scenario il Comune (codice fiscale 777777777) dovrà istruire un pagamento per l'accredito del contributo TARI (100 EUR) verso lo stesso comune, ed il contributo TEFA (10 EUR) verso la sua Provincia di competenza (codice fiscale 999999999).

Il carrello dovrà essere composto da due RPT così composte:

`Richiesta`

```xml
<Header>
...
<idCarrello>777777777002123652389012132-00001</idCarrello>
</Header>
<password>...</password>
<identificativoPSP>...</identificativoPSP>
<identificativoIntermediarioPSP>...</identificativoIntermediarioPSP>
<identificativoCanale>...</identificativoCanale>
<listaRPT>...</listaRPT>
<multiBeneficiario>1<multiBeneficiario>
```

La lista di RPT è così composta 

`RPT 1`

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<RPT xmlns="http://www.digitpa.gov.it/schemas/2011/Pagamenti/">
  <versioneOggetto>6.2.0</versioneOggetto>
  <dominio>
    <identificativoDominio>77777777777</identificativoDominio>
  </dominio>
  <identificativoMessaggioRichiesta>...</identificativoMessaggioRichiesta>
  <dataOraMessaggioRichiesta>...</dataOraMessaggioRichiesta>
  <autenticazioneSoggetto>...</autenticazioneSoggetto>
  <soggettoVersante> ... </soggettoVersante>
  <soggettoPagatore>... </soggettoPagatore>
  <enteBeneficiario>
    <identificativoUnivocoBeneficiario>
      <tipoIdentificativoUnivoco>G</tipoIdentificativoUnivoco>
      <codiceIdentificativoUnivoco>77777777777</codiceIdentificativoUnivoco>
    </identificativoUnivocoBeneficiario>
    <denominazioneBeneficiario>Comune</denominazioneBeneficiario>
    <indirizzoBeneficiario>....</indirizzoBeneficiario>
    <civicoBeneficiario>..</civicoBeneficiario>
    <capBeneficiario>...</capBeneficiario>
    <localitaBeneficiario>...</localitaBeneficiario>
    <provinciaBeneficiario>...</provinciaBeneficiario>
    <nazioneBeneficiario>...</nazioneBeneficiario>
  </enteBeneficiario>
  <datiVersamento>
    <dataEsecuzionePagamento>...</dataEsecuzionePagamento>
    <importoTotaleDaVersare>100.00</importoTotaleDaVersare>
    <tipoVersamento>BBT</tipoVersamento>
    <identificativoUnivocoVersamento>...</identificativoUnivocoVersamento>
    <codiceContestoPagamento>777777777002123652389012132-00001</codiceContestoPagamento>
    <ibanAddebito>...</ibanAddebito>
    <firmaRicevuta>0</firmaRicevuta>
    <datiSingoloVersamento>
      <importoSingoloVersamento>100.00</importoSingoloVersamento>
      <ibanAccredito>...</ibanAccredito>
      <ibanAppoggio>...</ibanAppoggio>
      <credenzialiPagatore>n/a</credenzialiPagatore>
      <causaleVersamento>...</causaleVersamento>
      <datiSpecificiRiscossione>...</datiSpecificiRiscossione>
    </datiSingoloVersamento>
  </datiVersamento>
</RPT>

```

`RPT 2`

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<RPT xmlns="http://www.digitpa.gov.it/schemas/2011/Pagamenti/">
  <versioneOggetto>6.2.0</versioneOggetto>
  <dominio>
    <identificativoDominio>999999999</identificativoDominio>
  </dominio>
  <identificativoMessaggioRichiesta>...</identificativoMessaggioRichiesta>
  <dataOraMessaggioRichiesta>...</dataOraMessaggioRichiesta>
  <autenticazioneSoggetto>...</autenticazioneSoggetto>
  <soggettoVersante> ... </soggettoVersante>
  <soggettoPagatore>... </soggettoPagatore>
  <enteBeneficiario>
    <identificativoUnivocoBeneficiario>
      <tipoIdentificativoUnivoco>G</tipoIdentificativoUnivoco>
      <codiceIdentificativoUnivoco>999999999</codiceIdentificativoUnivoco>
    </identificativoUnivocoBeneficiario>
    <denominazioneBeneficiario>Provincia</denominazioneBeneficiario>
    <indirizzoBeneficiario>....</indirizzoBeneficiario>
    <civicoBeneficiario>..</civicoBeneficiario>
    <capBeneficiario>...</capBeneficiario>
    <localitaBeneficiario>...</localitaBeneficiario>
    <provinciaBeneficiario>...</provinciaBeneficiario>
    <nazioneBeneficiario>...</nazioneBeneficiario>
  </enteBeneficiario>
  <datiVersamento>
    <dataEsecuzionePagamento>...</dataEsecuzionePagamento>
    <importoTotaleDaVersare>10.00</importoTotaleDaVersare>
    <tipoVersamento>BBT</tipoVersamento>
    <identificativoUnivocoVersamento>...</identificativoUnivocoVersamento>
    <codiceContestoPagamento>777777777002123652389012132-00001</codiceContestoPagamento>
    <ibanAddebito>...</ibanAddebito>
    <firmaRicevuta>0</firmaRicevuta>
    <datiSingoloVersamento>
      <importoSingoloVersamento>10.00</importoSingoloVersamento>
      <ibanAccredito>...</ibanAccredito>
      <ibanAppoggio>...</ibanAppoggio>
      <credenzialiPagatore>n/a</credenzialiPagatore>
      <causaleVersamento>...</causaleVersamento>
      <datiSpecificiRiscossione>...</datiSpecificiRiscossione>
    </datiSingoloVersamento>
  </datiVersamento>
</RPT>
```
