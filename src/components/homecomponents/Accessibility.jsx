import React, { useState } from "react";
import {
  Accessibility,
  MessageSquare,
  Phone,
  FileText,
  CheckCircle2,
  HelpCircle,
  Eye,
  Ear,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import useSEO from "../../hooks/useSEO";

export default function AccessibilityHub() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  useSEO({
    title: "Accessibility Hub",
    description:
      "Accessibility Hub - The Private Lending and Finance Firm of First Kevington",
  });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedbackText.trim() !== "") {
      setFeedbackSubmitted(true);
      setFeedbackText("");
    }
  };

  return (
    <main className="w-full bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. HERO BANNER */}
      <section className="bg-neutral-900 text-white py-14 px-4 md:px-12 relative border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded">
            Inclusion Standards
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            Accessible banking for <br />
            every Client
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-light leading-relaxed">
            First Kevington is committed to providing digital and physical
            financial spaces that respect dignity and independence. We
            continuously refine our technical layouts to remove structural
            barriers for individuals of all abilities.
          </p>
        </div>
      </section>

      {/* 2. OUR MULTI-LAYERED ACCESSIBILITY PILLARS */}
      <section className="max-w-5xl mx-auto px-4 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <span className="text-xs uppercase font-extrabold tracking-wider text-orange-600">
            Core Accommodations
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Services built to scale across your needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Digital Capabilities */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl w-fit">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-800">
              Digital Accessibility
            </h3>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              Our web layout and mobile script repositories align directly with
              **WCAG 2.1 Level AA** programming criteria. This supports
              efficient screen reader optimization, clean keyboard navigation
              parameters, and strict text contrast ratios.
            </p>
          </div>

          {/* Pillar 2: Alternate Layout Formats */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl w-fit">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-800">
              Alternative Media Formats
            </h3>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              Require alternative statement structures? Clients can request
              physical monthly statement records configured in **Braille**,
              large print documents, or specialized clear-text electronic file
              packages without pricing penalties.
            </p>
          </div>

          {/* Pillar 3: Telecommunications */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl w-fit">
              <Ear className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-800">
              Telecommunications & Relay
            </h3>
            <p className="text-slate-500 text-xs font-light leading-relaxed">
              We fully integrate with regional operator-assisted **Relay
              Services** and dedicated automated communication interfaces to
              ensure non-verbal support pathways stay secure, prompt, and
              responsive.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DIRECT COMMUNICATION CHANNELS & HOTLINES */}
      <section className="max-w-5xl mx-auto px-4 pt-12">
        <div className="bg-neutral-900 text-white rounded-3xl p-6 md:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black tracking-tight">
                Need specialized assistance?
              </h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Our support channels are staffed by professionals trained in
                barrier-free client management protocols. Reach our specialized
                endpoints directly.
              </p>
              <div className="space-y-2 border-t border-neutral-800 pt-4 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>
                    TTY Support Line:{" "}
                    {/* <strong className="text-orange-400">1-888-826-4374</strong>*/}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Accessibility className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>
                    United States Relay Service compatibility enabled across all
                    queues.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 border border-neutral-700/80 rounded-2xl p-5 space-y-3">
              <h4 className="font-bold text-xs text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" /> Multi-Year
                Accessibility Plan
              </h4>
              <p className="text-neutral-300 text-[11px] leading-relaxed font-light">
                Our operations follow a rigorous corporate roadmap to satisfy
                and exceed regional compliance expectations under the
                *Accessible Canada Act (ACA)*. We verify progress through
                independent annual design reviews.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 cursor-pointer hover:underline pt-1">
                Download Latest Progress Report (PDF){" "}
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FEEDBACK AND DISCLOSURE GATE */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Feedback Form Component */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div>
              <h3 className="font-black text-lg text-slate-900 tracking-tight">
                Submit Accessibility Feedback
              </h3>
              <p className="text-slate-500 text-xs font-light mt-0.5">
                Help us fine-tune our layout options by flagging specific
                technical gaps.
              </p>
            </div>

            {feedbackSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-xs text-emerald-800 uppercase tracking-wider">
                  Feedback Form Received
                </h4>
                <p className="text-slate-600 text-[11px] font-light max-w-xs mx-auto">
                  Thank you. Your comments have been safely routed directly to
                  our designated compliance management team.
                </p>
                <button
                  onClick={() => setFeedbackSubmitted(false)}
                  className="mt-2 text-[10px] text-orange-600 font-bold hover:underline"
                >
                  Submit another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-3">
                <textarea
                  rows="4"
                  required
                  placeholder="Describe the issue or accommodation request (e.g., contrast error on transaction list, keypad layout feedback)..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-3 text-xs outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition font-light resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 px-4 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Send Form Securely <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Alternative contacts & postal address fallback */}
          <div className="space-y-4 pt-2">
            <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-orange-600" /> Alternative
              Submission Paths
            </h4>
            <p className="text-slate-600 text-xs font-light leading-relaxed">
              If you prefer not to use our digital form dashboard, you can route
              your feedback package or documentation modifications via physical
              post or traditional email lines.
            </p>

            <div className="border-l-2 border-orange-500 pl-4 space-y-3 text-xs">
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-mono block">
                  Designated Email Line:
                </span>
                <span className="font-bold text-slate-800 font-mono">
                  accessibility@firstkevington.com
                </span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-mono block">
                  Mail Headquarters Address:
                </span>
                <p className="text-slate-700 font-light mt-0.5 leading-normal">
                  First Kevington <br />
                  Attn: Director of Client Quality & Inclusivity <br />
                  2501 SW Vineyard Lane <br />
                  Ankeny, Iowa 50023, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance Badge Footer links */}
        <div className="mt-12 pt-6 border-t border-slate-200/60 text-center text-[10px] text-slate-400 font-medium space-x-4">
          <span className="hover:text-orange-600 cursor-pointer">
            Official AODA Compliance Statement
          </span>
          <span>•</span>
          <span className="hover:text-orange-600 cursor-pointer">
            Digital Cookie & Widget Overrides
          </span>
        </div>
      </section>
    </main>
  );
}
