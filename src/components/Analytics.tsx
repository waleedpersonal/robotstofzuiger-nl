'use client';

import { useEffect } from 'react';

export default function Analytics() {
  const GTM_ID = 'GTM-566VLVTH';

  useEffect(() => {
    // Inject GTM script directly into head
    if (typeof window !== 'undefined') {
      // Check if already loaded
      if (window.dataLayer) {
        return;
      }

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });

      // Create and inject GTM script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);

      console.log('GTM Loaded:', GTM_ID);
    }
  }, []);

  return (
    <>
      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
