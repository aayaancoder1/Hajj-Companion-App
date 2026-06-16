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
    name: 'John',
    role: 'Wife',
    phone: '+91 7562964852',
    whatsapp: '+917562964852'
  },
  {
    id: 'son',
    name: 'Doe',
    role: 'Son',
    phone: '+91 6235798462',
    whatsapp: '+916235798462'
  }
];
