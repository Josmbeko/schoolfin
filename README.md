# EduFinance Pro

Socle sécurisé d'une SPA de gestion scolaire, académique et financière pour établissements francophones.

## Stack
React + TypeScript + Vite, Firebase Auth, Firestore, Cloud Functions, Lucide.

## Démarrage

```bash
npm install
npm install --prefix functions
cp .env.example .env.local
npm run dev
```

Configurer ensuite Firebase avec un projet réel ou les émulateurs.

## Backend

```bash
npm run functions:build
firebase deploy --only functions,firestore
```

## Important
Ce dépôt est le **socle technique sécurisé V0.1**, pas encore la totalité des écrans métier. Les opérations financières critiques sont volontairement placées côté serveur. Il reste à implémenter les échéanciers, allocations détaillées, avances, bourses, reporting, impression et MFA avant une mise en production.

## Roadmap
- V0.1 : architecture, Auth, RBAC serveur, paiement atomique, ledger, caisse, audit, règles Firestore.
- V0.2 : catalogue/facturation/échéanciers/allocations/avances.
- V0.3 : reçus QR, impressions, reporting, exports.
- V0.4 : MFA, App Check, tests de concurrence, durcissement production.
