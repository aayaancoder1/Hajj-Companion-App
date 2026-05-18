export interface MedicalInfo {
  id: string;
  condition: string;
  notes: string[];
}

export const medicalInfo: MedicalInfo[] = [
  {
    id: 'allergies',
    condition: 'Allergies',
    notes: ['Penicillin']
  },
  {
    id: 'conditions',
    condition: 'Chronic Conditions',
    notes: ['Hypertension']
  }
];
