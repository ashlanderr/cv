"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie-consent-ack";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function isAcknowledged() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    // private mode / blocked storage: stay quiet rather than nag every render
    return true;
  }
}

// Nothing is rendered on the server: the banner appears only once the client
// has read localStorage, so there is no hydration mismatch and no flash.
const isAcknowledgedOnServer = () => true;

export function CookieBanner() {
  const acknowledged = useSyncExternalStore(
    subscribe,
    isAcknowledged,
    isAcknowledgedOnServer,
  );

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore: the banner still hides for this session
    }
    listeners.forEach((notify) => notify());
  };

  if (acknowledged) return null;

  return (
    <div
      id="cookie-banner"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="animate-slide-up border-border bg-card mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-xl border p-5 shadow-lg sm:flex-row sm:justify-between sm:gap-6">
        <p className="text-ink-light text-center text-sm sm:text-start">
          Сайт использует куки для аналитики посещаемости.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="bg-ember hover:bg-ember-hover text-cream shrink-0 rounded-full px-5 py-2 text-sm font-medium shadow-sm transition-colors"
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
