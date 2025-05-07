import { useEffect } from 'react'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import ModCaviar from 'modules/Caviar'
import ModFoods from 'modules/Foods'
import ModPremiumWines from 'modules/PremiumWines'
import ModGorilla from 'modules/Gorilla'
import ModRoyalClient from 'modules/RoyalClient'
import SeasonRecommends from 'modules/SeasonRecommends'
import ModSignatureProduct from 'modules/SignatureProduct'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <BaseAnimation>
      <SeasonRecommends />
      <ModCaviar />
      <ModRoyalClient />
      <ModPremiumWines />
      <ModGorilla />
      <ModFoods />
      <ModSignatureProduct />
    </BaseAnimation>
  )
}

export default HomePage
