import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Livraison Express",
        description: "Recevez vos colis en un temps record partout à Abidjan grâce à notre flotte dédiée.",
        bullets: [
            {
                title: "Suivi en temps réel",
                description: "Visualisez la progression de votre livraison directement sur l'application.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Tarifs imbattables",
                description: "Profitez de prix compétitifs pour tous vos envois, petits ou grands.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Livraison partout à Abidjan",
                description: "Nous couvrons tous les quartiers et zones de la ville.",
                icon: <FiTarget size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Service de déménagement",
        description: "Déménagez facilement et sans stress avec nos équipes professionnelles.",
        bullets: [
            {
                title: "Équipe dédiée",
                description: "Des professionnels pour transporter vos biens en toute sécurité.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Assistance personnalisée",
                description: "Un accompagnement sur mesure pour chaque déménagement.",
                icon: <FiUser size={26} />
            },
            {
                title: "Protection de vos biens",
                description: "Emballage et transport sécurisé pour tous vos objets.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Sécurité et fiabilité",
        description: "Vos colis et biens sont entre de bonnes mains, avec des garanties et un suivi optimal.",
        bullets: [
            {
                title: "Notifications instantanées",
                description: "Recevez des alertes à chaque étape de la livraison ou du déménagement.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Support client réactif",
                description: "Notre équipe est disponible pour répondre à toutes vos questions.",
                icon: <FiUser size={26} />
            },
            {
                title: "Paiement sécurisé",
                description: "Réglez vos services en toute confiance via l'application.",
                icon: <FiLock size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    }
]