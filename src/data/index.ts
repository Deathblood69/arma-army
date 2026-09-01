export const NATO: Unit = {
  name: 'Infantry Brigade Combat Team',
  color: '#00ffff',
  type: 'infantry',
  commander: { name: 'Brigade Headquarters & Headquarters Co.' },
  subordinates: [
    {
      name: 'Brigade Engineer Battalion',
      color: '#ffffff',
      type: 'hq',
      commander: { name: 'Headquarters & Headquarters Co.' },
      subordinates: [
        { name: 'Brigade Signal Co.' },
        { name: 'Military Signal Company' },
        { name: 'Combat Engineer Co.' },
        { name: 'Combat Engineer Co.' },
      ],
    },
    {
      name: 'Infantry Battalion',
      type: 'infantry',
      subordinates: [
        { name: 'Headquarters & Headquarters Co.' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Weapons Company', type: 'infantry' },
      ],
    },
    {
      name: 'Infantry Battalion',
      type: 'infantry',
      subordinates: [
        { name: 'Headquarters & Headquarters Co.' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Weapons Company', type: 'infantry' },
      ],
    },
    {
      name: 'Infantry Battalion',
      type: 'infantry',
      subordinates: [
        { name: 'Headquarters & Headquarters Co.' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Rifle Company', type: 'infantry' },
        { name: 'Weapons Company', type: 'infantry' },
      ],
    },
    {
      name: 'Cavalry Squadron',
      color: '#ffff00',
      type: 'recon',
      subordinates: [
        { name: 'Headquarters & Headquarters Troop' },
        { name: 'Motorized Cavalry Troop', type: 'recon' },
        { name: 'Motorized Cavalry Troop', type: 'recon' },
        { name: 'Motorized Cavalry Troop', type: 'recon' },
        { name: 'Dismounted Cavalry Troop', type: 'recon' },
      ],
    },
    {
      name: 'Fires Battalion',
      color: '#ff0000',
      type: 'artillery',
      subordinates: [
        { name: 'Headquarters & Headquarters Battery' },
        { name: 'Fires Battery', type: 'artillery' },
        { name: 'Fires Battery', type: 'mortar' },
        { name: 'Fires Battery', type: 'mortar' },
        { name: 'Target Acquisition Platoon', type: 'radar' },
      ],
    },
    {
      name: 'Brigade Support Battalion',
      color: '#ff8000',
      type: 'hq',
      subordinates: [
        { name: 'Headquarters & Headquarters Co.' },
        { name: 'Distribution Company', type: 'logistic' },
        { name: 'Field Maintenance Company', type: 'maintenance' },
        { name: 'Medical Company', type: 'medical' },
      ],
    },
  ],
}

export type UnitType =
  | 'hq'
  | 'artillery'
  | 'combat_logistic'
  | 'coms'
  | 'engineer'
  | 'infantry'
  | 'logistic'
  | 'maintenance'
  | 'medical'
  | 'mortar'
  | 'radar'
  | 'recon'

export interface Unit {
  name: string
  color?: string
  type?: UnitType
  commander?: Unit
  subordinates?: Unit[]
}
