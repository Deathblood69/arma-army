const NATO: Unit = {
  id: 'NATO',
  name: 'NATO',
  color: '#004990',
  subordinates: [
    {
      id: 'IBCT',
      name: 'Infantry Brigade Combat Team',
      color: '#00ffff',
      type: 'infantry',
      commander: {
        id: 'HHC',
        name: 'Headquarters & Headquarters Co.',
        color: '#ffffff',
      },
      subordinates: [
        {
          id: 'BEB',
          name: 'Brigade Engineer Battalion',
          color: '#ffffff',
          type: 'hq',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { id: 'BSC', name: 'Brigade Signal Co.', type: 'communication' },
            { id: 'MIC', name: 'Military Intelligence Company' },
            { id: 'CEC', name: 'Combat Engineer Co.', type: 'engineer' },
            { id: 'CEC', name: 'Combat Engineer Co.', type: 'engineer' },
            { id: 'FSC', name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          id: 'IB',
          name: 'Infantry Battalion',
          type: 'infantry',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'WC', name: 'Weapons Company', type: 'infantry' },
            { id: 'FSC', name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          id: 'IB',
          name: 'Infantry Battalion',
          type: 'infantry',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'WC', name: 'Weapons Company', type: 'infantry' },
            { id: 'FSC', name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          id: 'IB',
          name: 'Infantry Battalion',
          type: 'infantry',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'RC', name: 'Rifle Company', type: 'infantry' },
            { id: 'WC', name: 'Weapons Company', type: 'infantry' },
            { id: 'FSC', name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          id: 'CS',
          name: 'Cavalry Squadron',
          color: '#ffff00',
          type: 'recon',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Troop.' },
          subordinates: [
            { id: 'MCT', name: 'Motorized Cavalry Troop', type: 'recon' },
            { id: 'MCT', name: 'Motorized Cavalry Troop', type: 'recon' },
            { id: 'MCT', name: 'Dismounted Cavalry Troop', type: 'recon' },
            { id: 'MCT', name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          id: 'FB',
          name: 'Fires Battalion',
          color: '#ff0000',
          type: 'artillery',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Battery' },
          subordinates: [
            { id: 'FB', name: 'Fires Battery', type: 'artillery' },
            { id: 'FB', name: 'Fires Battery', type: 'mortar' },
            { id: 'FB', name: 'Fires Battery', type: 'mortar' },
            { id: 'FB', name: 'Target Acquisition Platoon', type: 'radar' },
            { id: 'FB', name: 'Forward Support Co.', color: '#ff8000' },
          ],
        },
        {
          id: 'BSB',
          name: 'Brigade Support Battalion',
          color: '#ff8000',
          type: 'hq',
          commander: { id: 'HHC', name: 'Headquarters & Headquarters Co.' },
          subordinates: [
            { id: 'DC', name: 'Distribution Company', type: 'logistic' },
            {
              id: 'FMC',
              name: 'Field Maintenance Company',
              type: 'maintenance',
            },
            { id: 'MC', name: 'Medical Company', type: 'medical' },
          ],
        },
      ],
    },
    {
      id: 'HBCT',
      name: 'Heavy Brigade Combat Team',
      color: '#00ffff',
      type: 'mechanized_infantry',
      commander: {
        id: 'HHC',
        name: 'Headquarters & Headquarters Co.',
        color: '#ffffff',
      },
      subordinates: [],
    },
    {
      id: 'BCT',
      name: 'Brigade Combat Team',
      color: '#00ffff',
      type: 'aviation',
      commander: {
        id: 'HHC',
        name: 'Headquarters & Headquarters Co.',
        color: '#ffffff',
      },
      subordinates: [],
    },
  ],
}

const CSAT: Unit = {
  id: 'CSAT',
  name: 'CSAT',
  color: '#700000',
  subordinates: [],
}

const AAF: Unit = {
  id: 'AAF',
  name: 'AAF',
  color: '#00a731',
  subordinates: [],
}

export const ARMIES: Record<ArmyType, Unit> = {
  nato: NATO,
  csat: CSAT,
  aaf: AAF,
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

interface AbstractEntity {
  id: string
}

export interface Unit extends AbstractEntity {
  name: string
  color?: string
  type?: UnitType
  commander?: Unit
  subordinates?: Unit[]
}

export type ArmyType = 'nato' | 'csat' | 'aaf'
