export const compItems = [
  'Gas Fee',
  'TPS',
  'Storage Object',
  'Interoperability',
  'Cost',
  'Capacity',
  'EVM Compatible',
  'Programmable',
  'Proof Of Storage',
  'Semantics',
]

export const compFilecoin = [
  'Low',
  'Low',
  'Static Files',
  'Low(Static Files)',
  'Very Low',
  '~EB',
  true,
  true,
  'Proof of Space-time with Challenge',
  'CRD',
]

export const compArweave = [
  'Low',
  'High',
  'Static Files',
  'Low',
  'Low',
  '~120TB',
  false,
  false,
  'Succinct Proof of Random Access',
  'CR',
]

export const compSSTORE = [
  'High',
  'Low',
  'KV Store',
  'High',
  'Very High',
  '~TB',
  true,
  true,
  'Fully Replicated',
  'CRUD',
]

export const compTopia = [
  'Low',
  'High',
  'KV Store & Static Files',
  'High',
  'Low',
  '~PB',
  true,
  true,
  'Proof of availability base on Merkle tree',
  'CRUD',
]

export type compareItem = {
  logo: string
  logoname: string
  compItems: (string | boolean)[]
}

export const showArr: compareItem[] = [
  {
    logo: '/img/logo_filecoin.svg',
    logoname: 'filecoin',
    compItems: compFilecoin,
  },
  {
    logo: '/img/logo_ar.svg',
    logoname: 'arweave',
    compItems: compArweave,
  },
  {
    logo: '/img/logo_eth_sstore.svg',
    logoname: 'ethsstore',
    compItems: compSSTORE,
  },
]
