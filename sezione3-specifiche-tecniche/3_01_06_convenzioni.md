Convenzioni con PSP
=======================

Uno dei principali scopi della piattaforma pagoPA è _disintermediare_ le comunicazioni tra EC e PSP, ciò implica che gli EC non hanno bisogno di stipulare convenzioni con i singoli PSP al fine di poter disporre di strumenti di pagamento al cittadino.

Ogni cittadino, o utilizzatore della piattaforma, potrà selezionare lo strumento di pagamento tra tutti quelli offerti dai PSP aderenti per completare l'operazione di pagamento.

Ciò nonostante, viene comunque consentita la possibilità di stipulare convenzioni specifiche con uno o più PSP al fine di poter offrire strumenti di pagamento ad un costo di commissioni agevolato.

Per poter usufruire di una convenzione in essere tra EC e PSP è necessario inserire all'interno della primitiva _nodoInviaCarrelloRPT_ l'opportuno `codiceConvenzione`.

Esempio:

`Request`

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ppt="http://ws.pagamenti.telematici.gov/ppthead" xmlns:ws="http://ws.pagamenti.telematici.gov/">
   <soapenv:Header>
      <ppt:intestazioneCarrelloPPT>
         <identificativoIntermediarioPA>90000000001</identificativoIntermediarioPA>
         <identificativoStazioneIntermediarioPA>90000000001_01</identificativoStazioneIntermediarioPA>
         <identificativoCarrello>IUV5129-2020-07-23-12:21:26.581</identificativoCarrello>
      </ppt:intestazioneCarrelloPPT>
   </soapenv:Header>
   <soapenv:Body>
      <ws:nodoInviaCarrelloRPT>
         <password>pwdpwdpwd</password>
         <identificativoPSP>AGID_01</identificativoPSP>
         <identificativoIntermediarioPSP>97735020584</identificativoIntermediarioPSP>
         <identificativoCanale>97735020584_02</identificativoCanale>
         <listaRPT>
            <elementoListaRPT>
               <identificativoDominio>90000000001</identificativoDominio>
               <identificativoUnivocoVersamento>0000000000000010101</identificativoUnivocoVersamento>
               <codiceContestoPagamento>CCD01</codiceContestoPagamento>
               <rpt>....</rpt>
            </elementoListaRPT>
         </listaRPT>
         <codiceConvenzione>CONV1</codiceConvenzione>
      </ws:nodoInviaCarrelloRPT>
   </soapenv:Body>
</soapenv:Envelope>
```

`Response`

```xml
<soapenv:Envelope xmlns:ppthead="http://ws.pagamenti.telematici.gov/ppthead" xmlns:tns="http://NodoPagamentiSPC.spcoop.gov.it/servizi/PagamentiTelematiciRPT" xmlns:ppt="http://ws.pagamenti.telematici.gov/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Body>
      <ppt:nodoInviaCarrelloRPTRisposta>
         <esitoComplessivoOperazione>OK</esitoComplessivoOperazione>
         <url>[urlWisp2.0]/wallet/welcome?idSession=bd0e73e0-1890-4157-a471-6098925cc1b4</url>
      </ppt:nodoInviaCarrelloRPTRisposta>
   </soapenv:Body>
</soapenv:Envelope>
```

Una volta che l'utente viene reindirizzato verso l'url ottenuta in risposta, il WISP mostrerà gli strumenti di pagamento con commissioni in linea con il _codiceConvenzione_ indicato.

Qualora la convenzione in essere tra EC e PSP indichi eventuali costi di transazione a carico dell'Ente Creditore, le RT generate conterranno il parametro [`commissioniApplicatePA`](https://github.com/pagopa/pagopa-api/blob/68eb34f55cf6c846009644889d15345fa4162b6c/general/PagInf_RPT_RT_6_2_0.xsd#L673) valorizzato con l'importo da sostenere dall'EC creditore.

`[TBD non sarebbe meglio rimandare al DevPortal per tutti i dettagli ?]`