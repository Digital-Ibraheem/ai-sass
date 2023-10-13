'use client';

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('178abd97-f3d6-48e5-ab3c-eb5e8a665bdd');
  }, []);

  return null;
};
