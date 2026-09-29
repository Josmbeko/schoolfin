import {httpsCallable} from 'firebase/functions';import {functions} from './firebase';
export const createPayment=httpsCallable(functions,'createPayment');
export const voidPayment=httpsCallable(functions,'voidPayment');
export const closeCashSession=httpsCallable(functions,'closeCashSession');
export const openCashSession=httpsCallable(functions,'openCashSession');
export const updateSchoolSettings=httpsCallable(functions,'updateSchoolSettings');
