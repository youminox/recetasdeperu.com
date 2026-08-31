'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface AdSenseProps {
  slot?: string;
  format?: string;
  className?: string;
}

export default function AdSense({ slot, format = 'auto', className = '' }: AdSenseProps) {
  useEffect(() => {
    try {
      if (process.env.NODE_ENV === 'production') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`bg-warm-100 border border-warm-200 border-dashed text-warm-500 flex items-center justify-center p-4 text-sm ${className}`} style={{ minHeight: '100px' }}>
        AdSense Placeholder (Client: ca-pub-1070738569472471{slot ? `, Slot: ${slot}` : ''})
      </div>
    );
  }

  return (
    <>
      <Script
        id="adsbygoogle-script"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1070738569472471"
        crossOrigin="anonymous"
      />
      <div className={className}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1070738569472471"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
}
