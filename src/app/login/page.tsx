"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Zap,
  Users2,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Check,
  ArrowLeft,
  Briefcase
} from "lucide-react";
import credentials from "@/cred.json";

type AuthTab = "login" | "signup";
type RoleType = "TRADER" | "VENDOR";

function AuthCard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mode: "auth" (login or signup) vs "forgot"
  const [view, setView] = useState<"auth" | "forgot">("auth");
  const [authTab, setAuthTab] = useState<AuthTab>("login");

  // Read URL query parameter if present (?mode=signup or ?mode=login)
  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signup") {
      setAuthTab("signup");
    } else if (mode === "login") {
      setAuthTab("login");
    }
  }, [searchParams]);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRole, setLoginRole] = useState<RoleType>("TRADER");
  const [rememberMe, setRememberMe] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isLoginSubmitted, setIsLoginSubmitted] = useState(false);

  // Sign up form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<RoleType>("TRADER");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [isSignupSubmitted, setIsSignupSubmitted] = useState(false);

  // Forgot password form state
  const [forgotEmail, setForgotEmail] = useState("");
  const [isResetSent, setIsResetSent] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginSubmitted(true);

    const trimmedEmail = loginEmail.trim();
    const enteredPassword = loginPassword.trim();

    // Check credentials in cred.json
    const matchingCred = credentials.find(
      (c) => c.email.toLowerCase() === trimmedEmail.toLowerCase()
    );

    let finalRole: RoleType = loginRole;
    let computedName = loginRole === "VENDOR" ? "Dev" : "Dev";

    if (matchingCred) {
      computedName = matchingCred.name;
      finalRole = (matchingCred.role as RoleType) || "VENDOR";
    } else if (trimmedEmail) {
      const emailPrefix = trimmedEmail.split("@")[0] || "";
      const cleaned = emailPrefix.replace(/[0-9._-]+/g, "");
      computedName = cleaned.length > 0
        ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
        : (finalRole === "VENDOR" ? "Dev" : "Dev");
    }

    if (typeof window !== "undefined") {
      let existingAvatar: string | undefined;
      try {
        const stored = localStorage.getItem("suryanexa_user");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed?.avatar) existingAvatar = parsed.avatar;
        }
      } catch (err) {}

      localStorage.setItem(
        "suryanexa_user",
        JSON.stringify({
          name: computedName,
          email: trimmedEmail || (finalRole === "VENDOR" ? "236301078@gkv.ac.in" : "devb4111@gmail.com"),
          role: finalRole,
          ...(existingAvatar ? { avatar: existingAvatar } : {})
        })
      );
      window.dispatchEvent(new Event("suryanexa_user_updated"));
    }

    const redirectParam = searchParams.get("redirect");
    const defaultRoute = finalRole === "VENDOR" ? "/vendor/profile" : "/trader/profile";
    const targetRoute = redirectParam && redirectParam.startsWith("/") ? redirectParam : defaultRoute;

    setTimeout(() => {
      setIsLoginSubmitted(false);
      router.push(targetRoute);
    }, 900);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignupSubmitted(true);

    const finalName = signupName.trim() || (selectedRole === "VENDOR" ? "Fhvvh" : "Dev");
    const finalEmail = signupEmail.trim() || (selectedRole === "VENDOR" ? "236301078@gkv.ac.in" : "devb4111@gmail.com");

    if (typeof window !== "undefined") {
      let existingAvatar: string | undefined;
      try {
        const stored = localStorage.getItem("suryanexa_user");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed?.avatar) existingAvatar = parsed.avatar;
        }
      } catch (err) {}

      localStorage.setItem(
        "suryanexa_user",
        JSON.stringify({
          name: finalName,
          email: finalEmail,
          role: selectedRole,
          ...(existingAvatar ? { avatar: existingAvatar } : {})
        })
      );
      window.dispatchEvent(new Event("suryanexa_user_updated"));
    }

    const redirectParam = searchParams.get("redirect");
    const defaultRoute = selectedRole === "VENDOR" ? "/vendor/profile" : "/trader/profile";
    const targetRoute = redirectParam && redirectParam.startsWith("/") ? redirectParam : defaultRoute;

    setTimeout(() => {
      setIsSignupSubmitted(false);
      router.push(targetRoute);
    }, 900);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResetSent(true);
    setTimeout(() => {
      setIsResetSent(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-md rounded-[32px] bg-[#12151e]/85 backdrop-blur-2xl border border-white/15 p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.65)] relative overflow-hidden">
      {/* Decorative Sun Rays Motif in Top Right Corner (matching uploaded template) */}
      <div className="pointer-events-none absolute -top-8 -right-8 w-44 h-44 opacity-25">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full text-amber-400">
          <circle cx="160" cy="0" r="48" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="160" cy="0" r="76" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="160" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="0" x2="85" y2="135" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="0" x2="115" y2="155" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="0" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Ambient top amber glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {view === "forgot" ? (
        /* =======================================================================
           VIEW 1: FORGOT PASSWORD
           ======================================================================= */
        <div>
          {/* Back to Login link */}
          <div className="pb-4 mb-4 border-b border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setView("auth")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Log In</span>
            </button>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30">
              Reset Access
            </span>
          </div>

          <div className="mb-6 space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Forgot your password?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300/90 font-sans leading-relaxed">
              Enter the email you used to sign up with Suryanexa and we will send you a reset link
            </p>
          </div>

          {isResetSent && (
            <div className="mb-5 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Password reset link sent to your email address! Please check your inbox.</span>
            </div>
          )}

          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-sm font-semibold text-zinc-300 font-sans">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="example@domain.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c] hover:from-[#f97316] hover:to-[#fdba74] text-white font-bold text-base shadow-[0_10px_25px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_30px_rgba(234,88,12,0.6)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Send me a reset link</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* =======================================================================
           VIEW 2: UNIFIED AUTH CARD (LOG IN & SIGN UP TABS IN EXACT STRUCTURE)
           ======================================================================= */
        <div>
          {/* Top Tabs: Log In vs Sign Up (Structure matching uploaded image) */}
          <div className="flex items-center gap-6 mb-6">
            {/* Log In Tab */}
            <button
              type="button"
              onClick={() => setAuthTab("login")}
              className={`relative pb-2 text-base sm:text-lg font-bold font-display transition-colors cursor-pointer ${
                authTab === "login"
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>Log In</span>
              {authTab === "login" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
              )}
            </button>

            {/* Sign Up Tab */}
            <button
              type="button"
              onClick={() => setAuthTab("signup")}
              className={`relative pb-2 text-base sm:text-lg font-bold font-display transition-colors cursor-pointer ${
                authTab === "signup"
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>Sign Up</span>
              {authTab === "signup" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
              )}
            </button>
          </div>

          {/* Heading and Subtitle based on active tab */}
          <div className="mb-6 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {authTab === "login" ? "Welcome Back!" : "Create Your Account"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300/80 font-sans">
              {authTab === "login"
                ? "Sign in to continue your journey with SuryaNexa."
                : "Join SuryaNexa to power a brighter, cleaner future."}
            </p>
          </div>

          {/* Submission Alert Banners */}
          {searchParams.get("redirect") && !isLoginSubmitted && !isSignupSubmitted && (
            <div className="mb-5 p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Please sign in first to access your SuryaNexa profile portal.</span>
            </div>
          )}

          {isLoginSubmitted && (
            <div className="mb-5 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Logging into your SuryaNexa Dashboard...</span>
            </div>
          )}

          {isSignupSubmitted && (
            <div className="mb-5 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Creating your SuryaNexa account...</span>
            </div>
          )}

          {/* ===================================================================
              FORM BODY: LOG IN vs SIGN UP
             =================================================================== */}
          {authTab === "login" ? (
            /* --- LOG IN FORM --- */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Role Toggle Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#1e2330]/60 border border-white/10 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLoginRole("TRADER")}
                  className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    loginRole === "TRADER"
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Trader / Supplier</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLoginRole("VENDOR")}
                  className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    loginRole === "VENDOR"
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Users2 className="w-3.5 h-3.5" />
                  <span>Solar Vendor</span>
                </button>
              </div>

              {/* Email Address Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showLoginPassword ? "text" : "password"}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                  aria-label={showLoginPassword ? "Hide password" : "Show password"}
                >
                  {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Helper Row: Remember me checkbox + Forgot Password */}
              <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                <label className="flex items-center gap-2.5 text-zinc-300 font-sans cursor-pointer select-none">
                  <div
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      rememberMe
                        ? "bg-orange-500 border-orange-500 text-white"
                        : "border-white/20 bg-white/5"
                    }`}
                  >
                    {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setView("forgot")}
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors font-sans cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Primary CTA: Log In → */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c] hover:from-[#f97316] hover:to-[#fdba74] text-white font-bold text-base shadow-[0_10px_25px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_30px_rgba(234,88,12,0.6)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Log In</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          ) : (
            /* --- SIGN UP FORM --- */
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              {/* Role Toggle Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#1e2330]/60 border border-white/10 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setSelectedRole("TRADER")}
                  className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedRole === "TRADER"
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Trader / Supplier</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole("VENDOR")}
                  className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedRole === "VENDOR"
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Users2 className="w-3.5 h-3.5" />
                  <span>Solar Vendor</span>
                </button>
              </div>

              {/* Full Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                />
              </div>

              {/* Email Address Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showSignupPassword ? "text" : "password"}
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                  aria-label={showSignupPassword ? "Hide password" : "Show password"}
                >
                  {showSignupPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Primary CTA: Create Account → */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c] hover:from-[#f97316] hover:to-[#fdba74] text-white font-bold text-base shadow-[0_10px_25px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_30px_rgba(234,88,12,0.6)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}

          {/* Social Auth Separator matching uploaded image ("── or ──") */}
          <div className="pt-6 pb-4 flex items-center">
            <div className="flex-1 border-t border-white/10" />
            <span className="px-3 text-xs text-zinc-400 font-sans">
              or
            </span>
            <div className="flex-1 border-t border-white/10" />
          </div>

          {/* Social Auth Buttons Row: Google and GitHub Side-by-Side */}
          <div className="grid grid-cols-2 gap-3">
            {/* Continue with Google */}
            <button
              type="button"
              className="py-3 px-3 rounded-2xl bg-[#1e2330]/80 hover:bg-[#282f42] border border-white/10 flex items-center justify-center gap-2.5 transition-all duration-200 hover:border-white/20 cursor-pointer shadow-sm text-xs font-semibold text-zinc-200"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="truncate">Continue with Google</span>
            </button>

            {/* Continue with GitHub */}
            <button
              type="button"
              className="py-3 px-3 rounded-2xl bg-[#1e2330]/80 hover:bg-[#282f42] border border-white/10 flex items-center justify-center gap-2.5 transition-all duration-200 hover:border-white/20 cursor-pointer shadow-sm text-xs font-semibold text-zinc-200"
            >
              <svg className="w-4 h-4 shrink-0 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="truncate">Continue with GitHub</span>
            </button>
          </div>

          {/* Bottom Switch Prompt (matching reference image) */}
          <div className="mt-7 text-center text-xs sm:text-sm text-zinc-400 font-sans">
            {authTab === "login" ? (
              <span>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setAuthTab("signup")}
                  className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setAuthTab("login")}
                  className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Log In</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0d14] text-white overflow-x-hidden flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* =========================================================================
          BACKGROUND LAYER: Hillside Solar Villa with Golden Mountain Sunrise
         ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/login-solar-hillside-bg.jpg"
          alt="SuryaNexa Solar Hillside Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        />
        {/* Cinematic dark gradients for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
        {/* Ambient atmospheric sunrise golden glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] rounded-full bg-amber-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] rounded-full bg-orange-600/15 blur-[130px] pointer-events-none" />
      </div>

      {/* =========================================================================
          TOP NAVIGATION BAR
         ========================================================================= */}
      <header className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        {/* Left: Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img
              src="/suryanexa-logo.png"
              alt="SuryaNexa Logo"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <span className="text-2xl font-black font-display tracking-tight text-white">
            Surya<span className="text-white">Nexa</span>
          </span>
        </Link>

        {/* Right: Tagline */}
        <div className="hidden sm:flex items-center text-xs sm:text-sm font-sans tracking-wide text-zinc-300/85">
          <span className="text-orange-500 mr-2">—</span>
          Solar. Smarter. Together.
          <span className="text-orange-500 ml-2">—</span>
        </div>
      </header>

      {/* =========================================================================
          MAIN BODY AREA
         ========================================================================= */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-14 py-8 lg:py-12">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =====================================================================
              LEFT COLUMN: HERO HEADLINE & 3 PILLARS
             ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8 lg:pr-6">
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                Powering a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fdba74]">
                  Brighter Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-sans font-normal max-w-xl leading-relaxed pt-2">
                Join the solar revolution. Build. Connect. Grow.
              </p>
            </div>

            {/* 3 Feature Badges */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 fill-orange-400 stroke-none" />
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-200">
                  Smarter Solar Solutions
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-transform duration-300 group-hover:scale-105">
                  <Users2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-200">
                  A Thriving Solar Ecosystem
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-transform duration-300 group-hover:scale-105">
                  <Leaf className="w-5 h-5 fill-emerald-400/80 stroke-none" />
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-200">
                  A Greener Planet
                </span>
              </div>
            </div>

            {/* Back to Home helper button */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm text-zinc-300 transition-colors"
              >
                <span>← Back to Home</span>
              </Link>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: INTEGRATED UNIFIED AUTH CARD (Structure from image)
             ===================================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 w-full flex justify-center lg:justify-end">
            <Suspense fallback={<div className="w-full max-w-md h-96 rounded-[32px] bg-[#12151e]/85 animate-pulse" />}>
              <AuthCard />
            </Suspense>
          </div>

        </div>
      </main>
    </div>
  );
}
