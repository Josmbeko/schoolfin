# EduFinance Pro — Architecture

## Principes
- Le frontend React est considéré comme non fiable pour toute opération financière.
- Les mutations financières passent par Cloud Functions.
- Firestore Rules empêchent les écritures client sur paiements, ledger, caisse et audit.
- Chaque document métier financier est rattaché à un `schoolId`.
- Les soldes doivent être dérivés du ledger, jamais modifiés arbitrairement par l'UI.
- Une annulation est un événement compensatoire, pas une suppression.

## Flux paiement
1. Authentification Firebase.
2. Vérification profil/rôle/école côté serveur.
3. Lecture de l'élève et du taux de change historique.
4. Transaction Firestore atomique.
5. Génération du numéro de reçu côté serveur.
6. Écriture paiement + ledger + audit.
7. Retour minimal au client.

## Prochaines extensions
- allocation atomique aux échéances;
- wallet d'avance;
- remises/bourses versionnées;
- QR de reçu signé;
- MFA/step-up authentication;
- fermeture de caisse avec rapprochement complet;
- exports A4/A5/80mm;
- tests d'intrusion et tests de concurrence.
