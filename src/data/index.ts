export const NATO: Unit = {
  name: 'NATO',
  subordinates: [
    {
      name: 'Infantry Brigade Combat Team',
      color: '#00ffff',
      type: 'infantry',
      commander: { name: 'Headquarters & Headquarters Co.', color: '#ffffff' },
      subordinates: [
        {
          name: 'Brigade Engineer Battalion',
          color: '#ffffff',
          type: 'hq',
          commander: { name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { name: 'Brigade Signal Co.', type: 'communication' },
            { name: 'Military Intelligence Company' },
            { name: 'Combat Engineer Co.', type: 'engineer' },
            { name: 'Combat Engineer Co.', type: 'engineer' },
            { name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          name: 'Infantry Battalion',
          type: 'infantry',
          commander: { name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Weapons Company', type: 'infantry' },
            { name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          name: 'Infantry Battalion',
          type: 'infantry',
          commander: { name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Weapons Company', type: 'infantry' },
            { name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          name: 'Infantry Battalion',
          type: 'infantry',
          commander: { name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Rifle Company', type: 'infantry' },
            { name: 'Weapons Company', type: 'infantry' },
            { name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          name: 'Cavalry Squadron',
          color: '#ffff00',
          type: 'recon',
          commander: { name: 'Headquarters & Headquarters Troop.' },
          subordinates: [
            { name: 'Motorized Cavalry Troop', type: 'recon' },
            { name: 'Motorized Cavalry Troop', type: 'recon' },
            { name: 'Dismounted Cavalry Troop', type: 'recon' },
            { name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          name: 'Fires Battalion',
          color: '#ff0000',
          type: 'artillery',
          commander: { name: 'Headquarters & Headquarters Battery' },
          subordinates: [
            { name: 'Fires Battery', type: 'artillery' },
            { name: 'Fires Battery', type: 'mortar' },
            { name: 'Fires Battery', type: 'mortar' },
            { name: 'Target Acquisition Platoon', type: 'radar' },
            { name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          name: 'Brigade Support Battalion',
          color: '#ff8000',
          type: 'hq',
          commander: { name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { name: 'Distribution Company', type: 'logistic' },
            { name: 'Field Maintenance Company', type: 'maintenance' },
            { name: 'Medical Company', type: 'medical' },
          ],
        },
      ],
    },
    {
      name: 'Heavy Brigade Combat Team',
      color: '#00ffff',
      type: 'mechanized_infantry',
      commander: { name: 'Headquarters & Headquarters Co.', color: '#ffffff' },
      subordinates: [],
    },
    {
      name: 'Brigade Combat Team',
      color: '#00ffff',
      type: 'aviation',
      commander: { name: 'Headquarters & Headquarters Co.', color: '#ffffff' },
      subordinates: [],
    },
  ],
}

export type UnitType =
  | 'hq'
  | 'aviation'
  | 'armored'
  | 'artillery'
  | 'combat_logistic'
  | 'communication'
  | 'engineer'
  | 'infantry'
  | 'logistic'
  | 'maintenance'
  | 'mechanized_infantry'
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
