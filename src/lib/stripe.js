import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TkQDSJ1SqfUY5TKnRzvoj73',
    'seeker_premium': 'price_1TkTL6J1SqfUY5TKRomG1ksX',
    'recruiter_growth': 'price_1TkTMJJ1SqfUY5TKwJW6JBiU',
    'recruiter_enterprise': 'price_1TkTNOJ1SqfUY5TKuKoI3vRx',
}