'use client';

import { useEffect, useRef } from 'react';

interface AdSenseProps {
  slot?: string;
  format?: string;
  className?: string;
}

export default function AdSense({ slot, format = 'auto', className = '' }: AdSenseProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (pushedRef.current) return;

    // Only push ad when element is visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !pushedRef.current) {
            pushedRef.current = true;
            try {
              // @ts-ignore
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
              console.error('AdSense error:', err);
            }
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`bg-warm-100 border border-warm-200 border-dashed text-warm-500 flex items-center justify-center p-4 text-sm ${className}`} style={{ minHeight: '100px' }}>
        AdSense Placeholder (Client: ca-pub-1070738569472471{slot ? `, Slot: ${slot}` : ''})
      </div>
    );
  }

  return (
    <div className={className} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1070738569472471"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

