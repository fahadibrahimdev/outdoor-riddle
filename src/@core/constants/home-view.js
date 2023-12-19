import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'The Adventure of a Lifetime',
    subHeading: 'A challenge, a journey, an experience like no other.',
    text: 'Explore the outdoors & hike through the past, solve riddles, clues, and you better be fast. Find the trails of old and the trails of new, and the one that gets the treasure could be you.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'DISCOVER OutdoorRiddle',
    features: [
        {
            title: 'Augmented Reality ',
            description: 'Use the OutdoorRiddle App to find trails, clues to treasure maps, and historical characters all around the country.',
            icon: ['augmented-reality', 14]
        },
        {
            title: 'Challenges ',
            description: 'Sign up for Treasure Hunts, Trail Runs, and Competitions for prizes.',
            icon: ['challenges-color', 18]
        },
        {
            title: 'Find Your Trail ',
            description: 'Find trails around you, or create your own with the OutdoorRiddle App.',
            icon: ['voy-running-color', 35]
        },
        {
            title: 'Geolocation ',
            description: 'Add your friends to your group and track each other’s progress on trails, runs, or brag about completed Treasure Hunts.',
            icon: ['geolocation-map-color', 16]
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'OutdoorRiddle brings you new magnificent trails attached to fascinating stories and treasure hunts.',
        'There is a spirit of adventure in all of us and OutdoorRiddle is here to shake the cage and let it loose. Utilizing the greatest adventure guide in the world, History, in the greatest arena in the world, The Great Outdoors, you are able to travel back in time as you make your way to the end of the treasure map, hiking trail, or your family road trip. Grab your friends, call your family, or start the adventure solo.  Either way, make sure you pre-sign up for early access to future prize hunts, giveaways, and exclusive content. ',
        'OutdoorRiddle is changing the landscape of trail running, hiking, and other outdoor activities by taking you on a memorable and stimulating trip down historical lanes.'
    ],
}

export const benefitsContent = {
    heading: 'Sign up as a Service Provider!',
    text: 'Sign up to have first access to the ticket—limited treasure hunts, special offers, and giveaways. ',
    benefits: [
        {
            title: 'Group Challenges ',
            description: 'Sign up as a group for a treasure hunt or request a quote for a custom treasure hunt for your next big event. ',
            icon: ['puzzle-color', 24]
        },
        {
            title: 'Historically Significant Locations',
            description: 'The OutdoorRiddle App can be your own personal tour guide and help you learn more about the history around you.',
            icon: ['liberty-statue-color', 125]
        },
        {
            title: 'Cash Prizes ',
            description: 'Enter into certain treasure hunts and the race is on. Cash prizes to those that locate the treasure first. ',
            icon: ['prize-color', 19]
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Can anyone sign up for the treasure hunts?',
            answer: 'The answer will be here......',

        },
        {
            question: 'What if I don\'t have cell phone service in the area where I think the treasure chest is?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How can I purchase a ticket for the prize hunts?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'What if I feel like doing something dangerous or stupid while searching for the treasure chest?',
            answer: 'The answer will be here.........',
        },
        {
            question: 'How old do I have to be to participate in prize hunts?',
            answer: 'The answer will be here.........',
        },
        {
            question: 'What if multiple people get to the location of the treasure chest at the same time?',
            answer: 'The answer will be here.........',
        },
        {
            question: 'How can I purchase a ticket for the prize hunts?',
            answer: 'The answer will be here.........',
        }
    ],
}

export const CTOSectionContent = {
    heading: 'Experience the Next Generation in Outdoor Exploration',
    text: 'Sign up to have first access to the ticket—limited treasure hunts, special offers, and giveaways. '
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
