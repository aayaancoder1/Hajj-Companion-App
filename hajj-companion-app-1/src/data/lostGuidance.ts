export interface LostGuidanceStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const lostGuidance: LostGuidanceStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'Stay Calm & Stay Put',
    description: 'Do not panic or wander. Move to a safe, well-lit area near a clear landmark or gate number.'
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Show Hotel Card',
    description: 'Show your Arabic hotel address from this app to a local security guard or police officer.'
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Contact Group Leader',
    description: 'Call your Hajj group leader using the contact details below and describe your location.'
  }
];
