import React, { useState } from "react";
import { Building2, Eye, EyeOff, ShieldCheck, ArrowLeft } from "lucide-react";
import { api } from "../api";
import { toast } from "react-toastify";

const NAME = import.meta.env.VITE_NAME || "Financial Trust";

const Login = ({ onLogin, defaultMode = "login" }) => {
  const [isLogin, setIsLogin] = useState(defaultMode === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState("login"); // "login" | "otp"
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (phase === "login") {
        const endpoint = isLogin ? "/auth/login" : "/auth/register";
        await api.post(endpoint, formData);

        toast.success("OTP sent to your email");
        setPhase("otp");
      } else if (phase === "otp") {
        const data = await api.post("/auth/verify-otp", {
          email: formData.email,
          otp,
        });
        localStorage.setItem("bankToken", data.token);
        onLogin(data);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* LEFT SIDE: AUTHENTICATION FORM CHASSIS */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center p-6 md:p-12 bg-white z-10 shadow-xl relative">
        <div className="max-w-md w-full mx-auto space-y-6">
          {/* Top Branding & State Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-md shadow-orange-600/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>

              {phase === "otp" && (
                <button
                  type="button"
                  onClick={() => setPhase("login")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-orange-600 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to credentials
                </button>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight md:text-3xl">
                {NAME}
              </h1>
              <p className="mt-1.5 text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                {phase === "otp"
                  ? "Enter the 6-digit verification code sent to your registered email profile."
                  : isLogin
                    ? "Welcome back. Access your digital treasury and portfolios securely."
                    : "Register your profile details to establish your institutional banking vault."}
              </p>
            </div>
          </div>

          {/* Core Submit Logic Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {phase === "login" ? (
              <>
                {/* Registration Fields Grid */}
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none font-light"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none font-light"
                    placeholder="name@company.com"
                  />
                </div>

                {!isLogin && (
                  <div className="animate-fadeIn">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none font-light"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none font-light"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded transition"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    One-Time Verification Code
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxLength="6"
                    className="w-full px-4 py-3 tracking-[0.4em] font-mono font-bold text-center bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
                    placeholder="000000"
                  />
                </div>

                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await api.post("/auth/resend-otp", {
                          email: formData.email,
                        });
                        toast.success("New OTP sent to your email");
                      } catch (err) {
                        toast.error(err.message || "Failed to resend OTP");
                      }
                    }}
                    className="text-xs text-orange-600 hover:text-orange-700 font-bold tracking-wide transition hover:underline"
                  >
                    Resend OTP Code
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-md shadow-orange-600/10 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading
                ? "Processing Request..."
                : phase === "otp"
                  ? "Verify Authorization"
                  : isLogin
                    ? "Secure Sign In"
                    : "Create Vault Account"}
            </button>
          </form>

          {phase === "login" && (
            <div className="text-center pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-xs text-slate-500 hover:text-orange-600 font-medium transition"
              >
                {isLogin
                  ? "Don't have an account yet? Register here"
                  : "Already have an institutional vault? Sign in"}
              </button>
            </div>
          )}
        </div>

        {/* Bottom micro-copy footer */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-medium text-slate-400">
          Encrypted Endpoint Integration • Powered by {NAME} Security Framework
        </div>
      </div>

      {/* RIGHT SIDE: BANKING ARCHITECTURE UNSPLASH BACKGROUND HERO */}
      <div
        className="hidden lg:block lg:w-[55%] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')`,
        }}
      >
        {/* Deepening protective dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/20" />

        {/* High-trust overlay module */}
        <div className="absolute bottom-16 left-16 max-w-md p-8 bg-slate-950/40 backdrop-blur-md border border-white/10 rounded-2xl text-white space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-[9px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded">
            Institutional Defense
          </div>
          <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-500" /> Multi-Layered
            Encryption
          </h2>
          <p className="text-slate-300 text-xs font-light leading-relaxed">
            Your connections are wrapped inside real-time cryptographic
            sessions. We maintain hardware-level separation keys and strict
            authentication checkpoints to isolate transaction streams entirely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
