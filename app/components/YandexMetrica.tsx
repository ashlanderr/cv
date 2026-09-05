"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID);

declare global {
  interface Window {
    ym?: (id: number, action: string, ...args: unknown[]) => void;
  }
}

export function YandexMetrica() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    if (!YM_ID) return;
    if (firstRun.current) {
      firstRun.current = false;
      return; // ym init already tracks the first page view
    }
    window.ym?.(YM_ID, "hit", window.location.href);
  }, [pathname]);

  if (!YM_ID) return null;

  return (
    <Script
      id="yandex-metrica"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}","ym");
          ym(${YM_ID},"init",{ssr:true,clickmap:true,referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true,triggerEvent:true});
        `,
      }}
    />
  );
}
