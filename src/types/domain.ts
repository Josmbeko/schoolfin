export type Role='admin'|'director'|'cashier'|'secretary';
export type Currency='CDF'|'USD';
export type PaymentMethod='CASH'|'BANK'|'MOBILE_MONEY'|'ADVANCE';
export type FeeStatus='PENDING'|'PARTIAL'|'PAID'|'EXEMPT';
export interface UserProfile{uid:string;email:string;displayName:string;role:Role;schoolId:string;active:boolean;}
export interface School{ id:string;name:string;currencyBase:Currency;exchangeRate:number;academicYear:string;timezone:string; }
export interface Student{ id:string;schoolId:string;studentNumber:string;firstName:string;lastName:string;classId:string;sectionId?:string;guardianName?:string;guardianPhone?:string;active:boolean;createdAt?:unknown; }
export interface FeeDefinition{ id:string;schoolId:string;code:string;label:string;amount:number;currency:Currency;period:string;active:boolean;version:number; }
export interface Payment{ id:string;schoolId:string;studentId:string;receiptNumber:string;amount:number;currency:Currency;amountBase:number;method:PaymentMethod;allocations:{feeId:string;amount:number}[];advanceCreated:number;status:'POSTED'|'VOIDED';voidReason?:string;createdAt?:unknown;createdBy:string; }
export interface CashSession{ id:string;schoolId:string;cashierId:string;businessDate:string;openingBalance:number;expectedBalance:number;physicalBalance?:number;difference?:number;status:'OPEN'|'CLOSED';closedAt?:unknown;notes?:string; }
export interface AuditLog{ id:string;schoolId:string;actorId:string;actorEmail:string;action:string;entity:string;entityId:string;before?:unknown;after?:unknown;createdAt?:unknown;previousHash?:string;hash?:string; }
