
.. image:: images/pagoPA.png 

##############################################################
Specifiche Attuative del Nodo dei Pagamenti-SPC versione 2.5.0
##############################################################


.. highlights::
   pagoPA è un sistema per rendere più semplici, sicuri e trasparenti tutti i pagamenti verso la Pubblica Amministrazione.

.. table:: Changelog
   :name: changelog

+------------+---------------+------------------------------------------+
| revisione  | data          | nota                                     |
+============+===============+==========================================+
| 2.2        | gennaio 2020  | nuova pubblicazione pagoPA               |
+------------+---------------+------------------------------------------+
| 2.3.0      | novembre 2020 | Richiesta catalogo Dati (deprecato)      |
|            |               | RT push asincrona,                       |
|            |               | Revoca e Storno (deprecato);             | 
|            |               | Pagamento on-Line con codice convenzione |
+------------+---------------+------------------------------------------+
| 2.4.0      |  marzo 2021   | Nuovo processo di pagamento presso il PSP|
|            |               | Eliminate funzioni deprecate             |
+------------+---------------+------------------------------------------+
| 2.4.1      |  aprile 2021  | Alcuni chiarimenti nuovo processo di     |
|            |               | pagamento presso il PSP.                 |
|            |               | Soluzione Canone Unico                   |
|            |               | PagoPA SpA come Partner Tecnologico      |
+------------+---------------+------------------------------------------+
| 2.4.2      |  maggio 2021  | Ulteriori chiarimenti sul nuovo processo |
|            |               | di pagamento presso il PSP.              |
|            |               | Chiarimenti sulla modalità d'uso dei     |
|            |               | conti correnti postali.                  |
|            |               | Revisione delle opzioni di pagamento.    |
|            |               | Precisazioni e chiarimenti sui FdR       |
+------------+---------------+------------------------------------------+
| 2.4.3      |settembre 2021 | *pspInviaCarrelloRPTCarte* deprecata,    |
|            |               | introduzione primativa *pspNotifyPayment*| 
|            |               | per pagamenti da touchpoint PagoPA.      |
+------------+---------------+------------------------------------------+
| 2.5.0.     | ottobre 2021  | Precisazioni sui riversamenti cumulativi | 
+------------+---------------+------------------------------------------+

.. toctree::
   :numbered:
   :hidden:
   
   _docs/sezione0-preambolo/index
   _docs/sezione1-funzionamento-generale-del-sistema/index
   _docs/sezione2-gestione-posizione-debitoria/index
   _docs/sezione3-specifiche-tecniche/index
   _docs/sezione4-adesione-al-sistema/index
