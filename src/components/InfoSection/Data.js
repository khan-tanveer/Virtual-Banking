import imageee from '../../images/svg-1.svg'
import imageee2 from '../../images/svg-2.svg'
import imageee3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    imagee: imageee,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    imagee: imageee2,
    alt: 'pigibank',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and your are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    imagee: imageee3,
    alt: 'paper',
    dark: false,
    primary: false,
    darkText: true
}