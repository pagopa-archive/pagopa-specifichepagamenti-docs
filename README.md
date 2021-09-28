# pagoPA, Specifiche Attuative del Nodo dei Pagamenti-SPC

![pagoPA](_docs/images/pagoPA.png)

- [pagoPA, Specifiche Attuative del Nodo dei Pagamenti-SPC](#pagopa-specifiche-attuative-del-nodo-dei-pagamenti-spc)
  - [install](#install)
  - [Come aggiornare la documentazione](#come-aggiornare-la-documentazione)
    - [Pubblicazione DocsItalia](#pubblicazione-docsitalia)
    - [pubblicazione generazione di test](#pubblicazione-generazione-di-test)
    - [pubblicazione su DocsItalia](#pubblicazione-su-docsitalia)
  - [Come creare una segnalazione](#come-creare-una-segnalazione)
  - [Importante](#importante)

**pagoPA** _è un sistema per rendere più semplici, sicuri e trasparenti tutti i pagamenti verso la Pubblica Amministrazione._

Il sistema dei pagamenti elettronici a favore della Pubblica Amministrazione, il sistema **pagoPA**, garantisce agli utilizzatori finali (cittadini e imprese) di effettuare pagamenti elettronici verso la Pubblica Amministrazione in modo sicuro, affidabile, semplice, e in totale trasparenza nei costi di commissione e in funzione delle proprie esigenze.

Le Specifiche Attuative del Nodo dei Pagamenti (SANP) sono descritte in formato markdown e suddivise nelle cartelle :

* _sezione1-funzionamento-generale-del-sistema_
* _sezione2-gestione-posizione-debitoria_
* _sezione3-specifiche-tecniche_
* _sezione4-adesione-al-sistema_

Ogni cartella contiene più file `.md` che rappresentano i diversi capitoli del documento ed un file `index.rst` che rappresenta l'indice della sezione. Ogni file markdown non contiene immagini/diagrammi ma riferimenti ad essi.

La cartella `puml-diagrams` contiene tutti gli schemi UML in formato [PlantUML](https://plantuml.com/) che vengono generati nella cartella `diagrams` ed utilizzati all'interno del documento. La cartella `images` contiene tutte le immagini utilizzate nel documento.

## install

`$ install java  brew cask install java`

`$ install pandoc brew install pandoc`

`$ brew install plantuml`

## Come aggiornare la documentazione

Per modificare la documentazione, è sufficiente eseguire [commit](https://github.com/git-guides/git-commit) sul relativo capitolo inserendo un messaggio esplicativo della modifica ed eventualmente facendo riferimento ad un [issue](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/creating-an-issue).

* Per fare riferimento ad un diagramma utilizzare il percorso `../diagrams/<nome-file-puml>.png`
* Per fare riferimento ad un'immagine utilizzare il percorso `../images/<nome-file-img>`
* Per modifica un diagramma, modificare (o aggiungere) il relativo file `.puml` all'interno della cartella `puml-diagrams`
* Per modificare un'immagine, modificare (o aggiungire) il relativo file all'interno della cartella `images`

### Pubblicazione su DocsItalia

Le SNAP sono disponibili anche su DocsItalia, il quale utilizza il formato `rst`, dove viene pubblicato tutto il contenuto della cartella `_docs`.

Per generare la documentazione da pubblicare su [DocsItalia](https://docs.italia.it/) utilizzare `npm start`. 

Verranno generati i diagrammi, le immagini ed i relativi documenti `rst` convertiti da markdown.

Per ulteriori dettagli sul processo di modifica [vedere qui](./howto_change_sanp_wf/README.md).

### Pubblicazione rami di test

Un qualsiasi ramo di progetto può essere pubblicato tramite  [Read The Docs](https://readthedocs.org/projects/pagopa-specifichepagamenti-docs/versions/).

## Come creare una segnalazione

Creare una segnalazione in `Github` è molto semplice e può essere fatto all'interno del proprio account Github (se non si dispone di un account è possibile crearlo [da qui](https://github.com)).

Una volta registratisi, è possibile aggiungere una nuova segnalazione con il pulsante in verde ["New issue"](https://github.com/pagopa/pagopa-specifichepagamenti-docs/issues).

**IMPORTANTE** - per favore, si prega di **non inserire segnalazioni riguardanti pagamenti**. Evitare, per esempio, qualsiasi riferimenti a nome, cognome, codice fiscale, etc. Inoltre, **non inserire nessun dato relativo a configurazioni di sicurezza, quali certificati o password.**

In ogni caso è opportuno inserire una descrizione accurata della tematica che si vuole segnalare.
