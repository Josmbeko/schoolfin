export const money=(n:number,currency='CDF')=>new Intl.NumberFormat('fr-FR',{maximumFractionDigits:2}).format(n)+' '+currency;
export const date=(value:unknown)=>{if(!value)return '—';const d=typeof value==='object'&&value&&'toDate' in value?(value as {toDate:()=>Date}).toDate():new Date(value as string);return new Intl.DateTimeFormat('fr-FR',{dateStyle:'medium',timeStyle:'short'}).format(d)};
