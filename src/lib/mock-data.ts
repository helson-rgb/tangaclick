export const officina = {
  nome: "Officina Bianchi",
  citta: "Bologna",
  operatore: "Marco Bianchi",
};

export type StatoCliente = "confermato" | "in-coda" | "da-contattare" | "scaduto";

export type Cliente = {
  id: string;
  nome: string;
  targa: string;
  telefono: string;
  scadenza: string; // ISO date
  stato: StatoCliente;
};

export const clienti: Cliente[] = [
  { id: "c1", nome: "Marco Bianchi", targa: "AB123CD", telefono: "+39 333 111 2233", scadenza: "2026-07-09", stato: "confermato" },
  { id: "c2", nome: "Giulia Neri", targa: "EF456GH", telefono: "+39 333 222 3344", scadenza: "2026-07-09", stato: "confermato" },
  { id: "c3", nome: "Luca Ferri", targa: "IJ789KL", telefono: "+39 333 333 4455", scadenza: "2026-07-10", stato: "in-coda" },
  { id: "c4", nome: "Sara Conti", targa: "MN012OP", telefono: "+39 333 444 5566", scadenza: "2026-07-11", stato: "in-coda" },
  { id: "c5", nome: "Davide Russo", targa: "QR345ST", telefono: "+39 333 555 6677", scadenza: "2026-07-14", stato: "da-contattare" },
  { id: "c6", nome: "Elena Costa", targa: "UV678WX", telefono: "+39 333 666 7788", scadenza: "2026-07-16", stato: "da-contattare" },
  { id: "c7", nome: "Paolo Rizzo", targa: "YZ901AB", telefono: "+39 333 777 8899", scadenza: "2026-06-28", stato: "scaduto" },
  { id: "c8", nome: "Anna Moretti", targa: "CD234EF", telefono: "+39 333 888 9900", scadenza: "2026-07-20", stato: "da-contattare" },
  { id: "c9", nome: "Franco Villa", targa: "GH567IJ", telefono: "+39 333 999 0011", scadenza: "2026-07-22", stato: "da-contattare" },
  { id: "c10", nome: "Chiara Fontana", targa: "KL890MN", telefono: "+39 333 000 1122", scadenza: "2026-07-09", stato: "confermato" },
];

export type Appuntamento = {
  id: string;
  clienteId: string;
  data: string; // ISO date
  ora: string;
  stato: "confermato" | "in-attesa";
};

export const appuntamenti: Appuntamento[] = [
  { id: "a1", clienteId: "c1", data: "2026-07-09", ora: "09:30", stato: "confermato" },
  { id: "a2", clienteId: "c2", data: "2026-07-09", ora: "11:00", stato: "confermato" },
  { id: "a3", clienteId: "c10", data: "2026-07-09", ora: "15:30", stato: "confermato" },
  { id: "a4", clienteId: "c3", data: "2026-07-10", ora: "10:00", stato: "in-attesa" },
  { id: "a5", clienteId: "c4", data: "2026-07-11", ora: "09:00", stato: "in-attesa" },
  { id: "a6", clienteId: "c5", data: "2026-07-14", ora: "14:00", stato: "in-attesa" },
];

export type Promemoria = {
  id: string;
  clienteId: string;
  inviato: string; // ISO datetime
  messaggio: string;
  stato: "confermato" | "consegnato" | "in-coda";
};

export const promemoria: Promemoria[] = [
  {
    id: "p1",
    clienteId: "c1",
    inviato: "2026-07-08T18:02:00",
    messaggio: "Ciao Marco! La revisione della tua auto (AB123CD) scade il 09/07. Confermi l'appuntamento delle 09:30?",
    stato: "confermato",
  },
  {
    id: "p2",
    clienteId: "c2",
    inviato: "2026-07-08T18:03:00",
    messaggio: "Ciao Giulia! Promemoria revisione (EF456GH) in scadenza. Appuntamento confermato per le 11:00 di domani.",
    stato: "confermato",
  },
  {
    id: "p3",
    clienteId: "c10",
    inviato: "2026-07-08T18:05:00",
    messaggio: "Ciao Chiara! La tua revisione (KL890MN) scade il 09/07. Ti aspettiamo alle 15:30.",
    stato: "confermato",
  },
  {
    id: "p4",
    clienteId: "c3",
    inviato: "2026-07-09T08:00:00",
    messaggio: "Ciao Luca! La revisione della tua auto (IJ789KL) scade tra pochi giorni. Vuoi confermare un appuntamento?",
    stato: "consegnato",
  },
  {
    id: "p5",
    clienteId: "c4",
    inviato: "2026-07-09T08:00:00",
    messaggio: "Ciao Sara! Promemoria revisione (MN012OP): scade l'11/07. Clicca per scegliere un orario.",
    stato: "consegnato",
  },
  {
    id: "p6",
    clienteId: "c5",
    inviato: "2026-07-09T08:00:00",
    messaggio: "Ciao Davide! La revisione (QR345ST) scade il 14/07. Prenota il tuo appuntamento in un click.",
    stato: "in-coda",
  },
  {
    id: "p7",
    clienteId: "c7",
    inviato: "2026-06-25T08:00:00",
    messaggio: "Ciao Paolo! La revisione (YZ901AB) è scaduta il 28/06. Prenota subito per metterti in regola.",
    stato: "in-coda",
  },
];

export const kpi = {
  promemoriaInCodaMeseProssimo: 85,
  appuntamentiOggi: appuntamenti.filter((a) => a.data === "2026-07-09").length,
  clientiTotali: clienti.length,
  revisioniScadute: clienti.filter((c) => c.stato === "scaduto").length,
};

export function clienteById(id: string) {
  return clienti.find((c) => c.id === id);
}
