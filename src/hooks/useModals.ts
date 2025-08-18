'use client';

import { useState } from 'react';

export const useModals = () => {
  const [cookiesModalOpen, setCookiesModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const openCookiesModal = () => setCookiesModalOpen(true);
  const closeCookiesModal = () => setCookiesModalOpen(false);

  const openPrivacyModal = () => setPrivacyModalOpen(true);
  const closePrivacyModal = () => setPrivacyModalOpen(false);

  const openTermsModal = () => setTermsModalOpen(true);
  const closeTermsModal = () => setTermsModalOpen(false);

  const closeAllModals = () => {
    setCookiesModalOpen(false);
    setPrivacyModalOpen(false);
    setTermsModalOpen(false);
  };

  return {
    // States
    cookiesModalOpen,
    privacyModalOpen,
    termsModalOpen,
    
    // Actions
    openCookiesModal,
    closeCookiesModal,
    openPrivacyModal,
    closePrivacyModal,
    openTermsModal,
    closeTermsModal,
    closeAllModals,
  };
};