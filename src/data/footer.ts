import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "ILEX - Livraison express et déménagement à Abidjan. Service fiable, économique et professionnel.",
    quickLinks: [
        { text: 'Accueil', url: '/' },
        { text: 'Services', url: '/#services' },
        { text: 'Contact', url: '/contact' },
        { text: 'Devenir livreur', url: '/devenir-livreur' }
    ],
    email: 'contact@ilex-delivery.com',
    telephone: '+225 07 10 17 91 40',
    socials: {
        instagram: 'https://www.instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
    }
}