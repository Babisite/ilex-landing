import emailjs from '@emailjs/browser';

// Configuration EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_kyr15xu',
  TEMPLATE_ID_CONTACT: 'template_contact', // À créer dans votre dashboard EmailJS
  TEMPLATE_ID_DELIVERY: 'template_delivery', // À créer dans votre dashboard EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // À remplacer par votre clé publique EmailJS
};

// Initialiser EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Fonction pour envoyer un email de contact
export const sendContactEmail = async (formData: {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.nom,
    from_email: formData.email,
    phone: formData.telephone,
    subject: formData.sujet,
    message: formData.message,
    to_name: 'ILEX Support',
  };

  return await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};

// Fonction pour envoyer une candidature livreur
export const sendDeliveryApplication = async (formData: {
  nom: string;
  telephone: string;
  email: string;
  zone: string;
  vehicule: string;
}) => {
  const templateParams = {
    from_name: formData.nom,
    from_email: formData.email,
    phone: formData.telephone,
    zone: formData.zone,
    vehicle: formData.vehicule,
    to_name: 'ILEX Recrutement',
  };

  return await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_DELIVERY,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};