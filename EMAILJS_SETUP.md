# Configuration EmailJS pour ILEX

## Étapes de configuration

### 1. Créer un compte EmailJS
- Allez sur [EmailJS.com](https://www.emailjs.com/)
- Créez un compte gratuit

### 2. Configurer le service email
- Dans votre dashboard EmailJS, allez dans "Email Services"
- Ajoutez votre service email (Gmail, Outlook, etc.)
- Notez votre **Service ID** : `service_kyr15xu` (déjà configuré)

### 3. Créer les templates d'email

#### Template Contact (`template_contact`)
```html
Nouveau message de contact ILEX

De: {{from_name}} ({{from_email}})
Téléphone: {{phone}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis le site ILEX
```

#### Template Candidature Livreur (`template_delivery`)
```html
Nouvelle candidature livreur ILEX

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Zone de livraison: {{zone}}
Véhicule: {{vehicle}}

---
Candidature envoyée depuis le site ILEX
```

### 4. Obtenir votre clé publique
- Dans "Account" > "General"
- Copiez votre **Public Key**
- Remplacez `YOUR_PUBLIC_KEY` dans `src/lib/emailjs.ts`

### 5. Configuration finale
Mettez à jour le fichier `src/lib/emailjs.ts` avec vos vraies valeurs :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_kyr15xu',
  TEMPLATE_ID_CONTACT: 'template_contact', // Votre template ID
  TEMPLATE_ID_DELIVERY: 'template_delivery', // Votre template ID
  PUBLIC_KEY: 'VOTRE_VRAIE_CLE_PUBLIQUE', // Remplacer ici
};
```

## Fonctionnalités implémentées

### ✅ CustomSelect
- Design personnalisé avec votre palette orange/jaune
- Icônes dans les options
- Animation fluide
- Responsive mobile

### ✅ EmailJS intégré
- Formulaire de contact avec validation
- Candidature livreur avec validation
- Messages de statut (succès/erreur)
- Loading states avec spinners

### ✅ Appliqué partout
- Page Contact : sujet du message
- Page Devenir Livreur : type de véhicule
- Design cohérent sur tous les selects

## Test
Une fois configuré, testez les formulaires :
1. Page Contact : `/contact`
2. Page Devenir Livreur : `/devenir-livreur`

Les emails arriveront dans votre boîte configurée dans EmailJS.