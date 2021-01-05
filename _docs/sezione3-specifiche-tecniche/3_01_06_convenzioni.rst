Convenzioni con PSP
===================

pagoPA disintermedia l’associazione tra EC e PSP, ciò vuol dire che che
l’EC non deve necessariamente più stipulare convenzioni con alcun PSP al
fine di poter disporre di strumenti di pagamento al cittadino. Ogni
cittadino / utilizzatore della piattaforma potrà selezionare lo
strumento di pagamento tra tutti quelli offerti tra i PSP aderenti per
completare l’operazione di pagamento.

Ciò nonostante, viene comunque consentita la possibilità di stipulare
convenzioni specifiche con uno o più PSP al fine di poter offrire
strumenti di pagamento ad un costo di commissioni agevolato.

Per poter usufruire di una convenzione in essere tra PSP ed EC è
necessario inserire all’interno della primitiva *nodoInviaCarrelloRPT*

Esempio : Request

.. code:: xml

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

Response:

.. code:: xml

   <soapenv:Envelope xmlns:ppthead="http://ws.pagamenti.telematici.gov/ppthead" xmlns:tns="http://NodoPagamentiSPC.spcoop.gov.it/servizi/PagamentiTelematiciRPT" xmlns:ppt="http://ws.pagamenti.telematici.gov/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
      <soapenv:Body>
         <ppt:nodoInviaCarrelloRPTRisposta>
            <esitoComplessivoOperazione>OK</esitoComplessivoOperazione>
            <url>[urlWisp2.0]/wallet/welcome?idSession=bd0e73e0-1890-4157-a471-6098925cc1b4</url>
         </ppt:nodoInviaCarrelloRPTRisposta>
      </soapenv:Body>
   </soapenv:Envelope>

Una volta rendirizzato l’utente verso l’url ottenuta in risposta, il
WISP mostrerà gli strumenti di pagamento con commissioni in linea con il
codiceConvenzione indicato.

Qualora la convenzione in essere tra EC e PSP indichi eventuali costi di
transazione a carico dell’Ente Creditore, le RT generate conterranno il
paramentro
`commissioniApplicatePA <https://github.com/pagopa/pagopa-api/blob/68eb34f55cf6c846009644889d15345fa4162b6c/general/PagInf_RPT_RT_6_2_0.xsd#L673>`__
valorizzato con l’importo da sostenere dall’EC creditore.
