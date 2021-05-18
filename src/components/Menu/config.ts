import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'TradeIcon',
    href: 'https://exchange.pancakeswap.finance',
  },
  {
    label: 'Liquidity',
    icon: 'TradeIcon',
    href: 'https://exchange.pancakeswap.finance/#/pool',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  }
]

export default config
