import React from 'react'

import {
  CONFIRM_CTA,
  FEATURE_HEADER,
  MONEY_BACK_GUARANTEE,
  priceDisplay,
} from './copy'
import styles from './Product.module.css'
import Checkmark from '../../assets/checkmark.svg'
import Heart from '../../assets/heart.svg'

interface IRecommendationBannerProps {
  recommendation: string
}

const RecommendationBanner: React.FC<IRecommendationBannerProps> = ({
  recommendation,
}) => {
  return (
    <div className={styles.recommendation}>
      <span className={styles.recommendationIcon}>
        <img src={Heart} alt={'heart'} />
      </span>
      <span className={styles.recommendationText}>{recommendation}</span>
    </div>
  )
}

interface IRecommendationSectionProps {
  recommendation?: string
}

const RecommendationSection: React.FC<IRecommendationSectionProps> = ({
  recommendation,
}) => {
  return (
    <div className={styles.recommendationSection}>
      {recommendation && (
        <RecommendationBanner recommendation={recommendation} />
      )}
    </div>
  )
}

interface IOverviewSectionProps {
  name: string
  description: string
}

const OverviewSection: React.FC<IOverviewSectionProps> = ({
  name,
  description,
}) => {
  return (
    <div className={styles.overviewSection}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

interface IFeatureProps {
  description: string
}

const Feature: React.FC<IFeatureProps> = ({ description }) => {
  return (
    <li className={styles.feature}>
      <span>
        <img src={Checkmark} alt={'checkmark'} />
      </span>
      <span className={styles.featureDescription}>{description}</span>
    </li>
  )
}

interface IFeaturesSectionProps {
  features: string[]
}

const FeaturesSection: React.FC<IFeaturesSectionProps> = ({ features }) => {
  return (
    <div className={styles.featuresSection}>
      <h4 className={styles.featureHeader}>{FEATURE_HEADER}</h4>
      <ul className={styles.featureList}>
        {features.map((feature, idx) => (
          <Feature key={idx} description={feature} />
        ))}
      </ul>
    </div>
  )
}

interface IPriceSectionProps {
  isFeatured: boolean
  price: number
  nonSalePrice?: number
}

const PriceSection: React.FC<IPriceSectionProps> = ({
  isFeatured,
  price,
  nonSalePrice,
}) => {
  return (
    <div className={styles.priceSection}>
      <span className={styles.price}>{priceDisplay(price)}</span>
      {nonSalePrice && (
        <span className={styles.nonSalePrice}>
          {priceDisplay(nonSalePrice)}
        </span>
      )}
      <button
        type="button"
        className={isFeatured ? styles.featuredConfirmCTA : styles.confirmCTA}
      >
        {CONFIRM_CTA}
      </button>
      {price ? (
        <span className={styles.moneyBackGuarantee}>
          {MONEY_BACK_GUARANTEE}
        </span>
      ) : null}
    </div>
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
    <div className={isFeatured ? styles.featuredProduct : styles.product}>
      <RecommendationSection recommendation={recommendation} />
      <OverviewSection name={name} description={description} />
      <FeaturesSection features={features} />
      <PriceSection
        isFeatured={isFeatured}
        price={price}
        nonSalePrice={nonSalePrice}
      />
    </div>
  )
}
