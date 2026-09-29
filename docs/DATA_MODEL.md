# Data model

users/{uid}
- schoolId, role, active, email, displayName

schools/{schoolId}
- name, exchangeRate, academicYear, currencyBase, timezone

schools/{schoolId}/students/{studentId}
schools/{schoolId}/feeDefinitions/{feeId}
schools/{schoolId}/payments/{paymentId}
schools/{schoolId}/financialLedger/{entryId}
schools/{schoolId}/cashSessions/{sessionId}
schools/{schoolId}/auditLogs/{auditId}
schools/{schoolId}/counters/receipts

The ledger is the financial source of truth. Operational views may be denormalized for reporting, but they must be reconstructible from immutable events.
