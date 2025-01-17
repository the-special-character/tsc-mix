"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={clsx(
        `bg-neutral-200 shadow fixed bottom-0
                        left-0 right-0 mx-auto my-10 
                        flex max-w-max flex-col items-center justify-between gap-4 rounded-lg px-3 py-3  
                         sm:flex-row md:max-w-screen-sm md:px-4 z-50`,
        {
          hidden: cookieConsent != null,
        }
      )}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            We use <span className="text-secondary3 font-bold">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="text-error border-neutral-400 rounded-md px-5 py-2"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="bg-primary text-neutral-100 rounded-lg px-5 py-2"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
