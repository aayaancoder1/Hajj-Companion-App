export interface EmergencyContact {
  id: string;
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
  note?: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'wife',
    name: 'Abida',
    role: 'Wife',
    phone: '+91 9677125658',
    whatsapp: '+919677125658'
  },
  {
    id: 'son',
    name: 'Aayaan',
    role: 'Son',
    phone: '+91 7801041620',
    whatsapp: '+917801041620'
  }
];
