"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ProfileRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("suryanexa_user");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && (parsed.name || parsed.email)) {
            const role = (parsed?.role || "").toUpperCase();
            const roleParam = searchParams.get("role");

            if (roleParam?.toLowerCase() === "vendor" || role.includes("VENDOR")) {
              router.replace("/vendor/profile");
              return;
            }

            router.replace("/trader/profile");
            return;
          }
        }
      } catch (err) {
        console.error("Error reading stored user:", err);
      }

      // If user is not logged in, profile cannot be opened -> redirect to /login
      router.replace("/login?redirect=/profile");
    }
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-[#faf8f3] flex flex-col items-center justify-center space-y-4">
      <div className="w-10 h-10 rounded-full border-3 border-emerald-600 border-t-transparent animate-spin" />
      <p className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest">
        Verifying Session...
      </p>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
        </div>
      }
    >
      <ProfileRouter />
    </Suspense>
  );
}
