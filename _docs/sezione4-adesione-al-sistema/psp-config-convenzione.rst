Configurare uno strumento di pagamento in Convenzione
=====================================================

Ogni strumento di pagamento ( o Canale ) messo a disposizione dal PSP
per il pagamento on-line presso L’ente creditore può essere profilato
con diversi profili di commissione ognuno dei quali legati ad un codice
convenzione

Il codice Convenzione è un codice ( stringa, max 35 caratteri) generato
dal PSP stesso e comunicato direttamente dal PSP verso gli EC abilitati.

Attivazione del codice convenzione:
-----------------------------------

Il condice convenzione viene attivato tramite una richiesta al servizio
di assistenza specificando:

-  Il codice convenzione.
-  Lo strumento di pagamento interessato (*identificativoCanale*).
-  Il costo commissione applicato per ognuna delle fasce di pagamento
   accettate
