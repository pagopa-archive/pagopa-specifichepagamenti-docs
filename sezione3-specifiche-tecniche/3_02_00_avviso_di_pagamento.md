Avviso di Pagamento
=================

Tramite la piattaforma pagoPA, un EC può innescare un pagamento presso un qualsiasi canale dei PSP aderenti tramite un codice *numero avviso*  abbinato al codice fiscale dell'EC.

Il numero avviso è composto da 18 caratteri e deve identificare in maniera univoca la posizione debitoria all'interno degli archivi dell'EC. Tenuto conto che ogni EC può connettersi alla piattaforma tramite uno o più stazioni e che ogni stazione potrebbe gestire un insieme ( disgiunto ) di posizioni debitorie, il numero avviso dovrà essere composto seguendo il seguente *pattern*

```javascript
<aux-digit>(1n)<position-global-id>(17)
```
Dove:

- aux-digit : può assumere valori 0,1,3 dipende dalla configurazione delle stazioni dell'ente.
Il valore *aux-digit* codica il tipo di configurazione dell'EC alla piattaforma, a seconda del suo valore, il campo *position-global-id* può assumere codifiche differenti.

## aux-digit=1
l'EC dispone di un unica stazione, pertanto il *position-global-id* identifica in maniera univoca la posizione debitoria all'interno dell'EC.

## Aux-digit 3 o 0
l'EC dispone di diverse stazioni, l'identificazione della posizione debitoria è composta da:

```javascript
<station-id>(2n)<position-local-id>(13n)<check-digit>(2n)
```

- *station-id* : identificativo della stazione all'interno della quale risiede la posizione debitoria.
- *position-local-id* : identificativo univoco della posizione debitoria all'interno della stazione.
- *check-digit* : codice di controllo del numero avviso.

### check-digit
il check-digit viene calcolato come resto della divisione per 93 del numero ottenuto concatenando tutti i caratteri precedenti

