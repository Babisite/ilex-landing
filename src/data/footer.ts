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
        {
            text: "Accueil",
            url: "/#hero"
        },
        {
            text: "Avantages",
            url: "#features"
        },
        {
            text: "Tarifs",
            url: "#pricing"
        },
        {
            text: "Témoignages",
            url: "#testimonials"
        },
        {
            text: "FAQ",
            url: "#faq"
        }
    ],
    email: 'contact@ilex-abidjan.com',
    telephone: '+225 07 07 07 07',
    socials: {
        instagram: 'https://www.instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
    }
}