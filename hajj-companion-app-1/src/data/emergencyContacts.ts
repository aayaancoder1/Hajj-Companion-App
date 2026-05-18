export interface EmergencyContact {
  id: string;
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
  note: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'group-leader',
    name: 'Ahmed Mansour',
    role: 'Hajj Group Leader',
    phone: '+966 50 123 4567',
    whatsapp: '+966501234567',
    note: 'Best for transport confusion or general guidance'
  },
  {
    id: 'medical-ems',
    name: 'Red Crescent (Ambulance)',
    role: 'Emergency Medical Services',
    phone: '997',
    note: 'Call for immediate medical emergencies'
  }
];
