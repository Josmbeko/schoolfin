# Security baseline

1. Ne jamais mettre Admin SDK, secrets ou clés privées dans le frontend.
2. Utiliser App Check en production.
3. Activer MFA pour les comptes sensibles.
4. Utiliser des comptes individuels, jamais un compte partagé de caisse.
5. Appliquer le principe de séparation des tâches.
6. Interdire la suppression des paiements, écritures de ledger et audits.
7. Conserver le taux de change utilisé sur chaque opération.
8. Ajouter une clé d'idempotence pour les opérations de paiement.
9. Tester explicitement l'isolation multi-école.
10. Journaliser les changements de paramètres et opérations sensibles.
