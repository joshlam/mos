import React from 'react'

import {
  CONFIRM_CTA,
  FEATURE_HEADER,
  MONEY_BACK_GUARANTEE,
  priceDisplay,
} from './copy'
import Checkmark from '../../assets/checkmark.svg'
import Heart from '../../assets/heart.svg'

interface IRecommendationBannerProps {
  recommendation: string
}

const RecommendationBanner: React.FC<IRecommendationBannerProps> = ({
  recommendation,
}) => {
  return (
    <>
      <img src={Heart} alt={'heart'} />
      {recommendation}
    </>
  )
}

interface IFeatureProps {
  description: string
}

const Feature: React.FC<IFeatureProps> = ({ description }) => {
  return (
    <li>
      <img src={Checkmark} alt={'checkmark'} />
      <span>{description}</span>
    </li>
  )
}

interface IProductProps {
  name: string
  description: string
  features: string[]
  price: number
  nonSalePrice?: number
  isFeatured: boolean
  recommendation?: string
}

export const Product: React.FC<IProductProps> = ({
  name,
  description,
  features,
  price,
  nonSalePrice,
  isFeatured,
  recommendation,
}) => {
  return (
    <div>
      {recommendation && (
        <RecommendationBanner recommendation={recommendation} />
      )}
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{FEATURE_HEADER}</h4>
      <ul>
        {features.map((feature, idx) => (
          <Feature key={idx} description={feature} />
        ))}
      </ul>
      {priceDisplay(price)}
      {nonSalePrice && priceDisplay(nonSalePrice)}
      <button>{CONFIRM_CTA}</button>
      {price ? MONEY_BACK_GUARANTEE : null}
    </div>
  )
}
