import { useEffect, useRef, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/lipidiq/id6760669194";

function AppleSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-148.4-103.2c-49.8-69.7-90.5-175.2-90.5-275.7 0-209.2 135.4-319.3 268.8-319.3 66.3 0 121.5 43.4 162.4 43.4 39.2 0 100.6-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  );
}

function HeartPercentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      <text x="8.5" y="13" fontSize="5" fill="currentColor" stroke="none" fontFamily="DM Sans" fontWeight="700">%</text>
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealDiv({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function PhoneMockup({ variant }: { variant: 1 | 2 | 3 }) {
  const configs = {
    1: {
      gradient: "from-[#0a1628] to-[#0d2040]",
      accent: "#3B82F6",
      label: "PREVENT Risk",
      value: "12.4%",
      badge: "HIGH",
      badgeColor: "#F59E0B",
      items: ["Age: 64", "SBP: 142", "LDL-C: 158", "HDL-C: 42"],
    },
    2: {
      gradient: "from-[#0a1a1a] to-[#0d2820]",
      accent: "#00C9A7",
      label: "LDL-C Goal",
      value: "< 70",
      badge: "PRIMARY",
      badgeColor: "#00C9A7",
      items: ["10-yr risk: 8.2%", "CAC score: 0", "No diabetes", "Non-smoker"],
    },
    3: {
      gradient: "from-[#1a0a1a] to-[#200d28]",
      accent: "#A855F7",
      label: "Risk Tier",
      value: "VERY HIGH",
      badge: "2nd EVENT",
      badgeColor: "#EF4444",
      items: ["Prior MI", "Age > 65", "CKD stage 3", "Statin Rx"],
    },
  };
  const c = configs[variant];
  return (
    <div className={`phone-frame bg-gradient-to-b ${c.gradient} w-[150px] sm:w-[160px] overflow-hidden flex-shrink-0`} style={{ height: "280px" }}>
      <div className="px-3 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-semibold text-white/40 tracking-widest uppercase">LipidIQ</span>
          <div className="w-8 h-1.5 rounded-full bg-white/10"></div>
        </div>
        <div className="rounded-xl p-2.5 mb-2" style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}30` }}>
          <div className="text-[8px] text-white/40 mb-0.5">{c.label}</div>
          <div className="text-xl font-bold" style={{ color: c.accent }}>{c.value}</div>
          <span className="text-[7px] px-1.5 py-0.5 rounded font-bold" style={{ background: `${c.badgeColor}25`, color: c.badgeColor }}>{c.badge}</span>
        </div>
        <div className="space-y-1">
          {c.items.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: c.accent }}></div>
              <span className="text-[8px] text-white/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const specialPopTabs = ["CKD", "Age ≥75", "Women", "Statin Intol.", "Elevated Lp(a)"];

const specialPopContent: Record<string, React.ReactNode> = {
  "CKD": (
    <div>
      <h3 className="text-xl font-bold text-white mb-3">Chronic Kidney Disease</h3>
      <p className="text-white/60 text-sm mb-4">CKD independently increases ASCVD risk. eGFR &lt;60 or ACR ≥30 mg/g qualifies as a risk-enhancing factor.</p>
      <div className="space-y-3">
        <div className="rounded-xl p-4 border-l-4 border-blue-500" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderLeft: "4px solid #3B82F6" }}>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30">COR 1 — Strong</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">LOE B-NR</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">In adults with CKD (eGFR &lt;60) and high ASCVD risk: High-intensity statin therapy is recommended regardless of dialysis status.</p>
        </div>
      </div>
    </div>
  ),
  "Age ≥75": (
    <div>
      <h3 className="text-xl font-bold text-white mb-3">Older Adults (Age ≥75)</h3>
      <p className="text-white/60 text-sm mb-4">Statin benefit persists in older adults. Clinical judgment required regarding polypharmacy and frailty.</p>
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "rgba(59,130,246,0.08)", borderLeft: "4px solid #3B82F6", border: "1px solid rgba(59,130,246,0.2)" }}>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30">COR 2a</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">LOE B-R</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">Statin initiation is reasonable in adults ≥75 years with established ASCVD. Assess comorbidities, drug interactions, and patient preference.</p>
        </div>
      </div>
    </div>
  ),
  "Women": (
    <div>
      <h3 className="text-xl font-bold text-white mb-3">Women-Specific Considerations</h3>
      <p className="text-white/60 text-sm mb-4">Pregnancy history, premature menopause, and inflammatory conditions are unique risk enhancers in women.</p>
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "rgba(59,130,246,0.08)", borderLeft: "4px solid #3B82F6", border: "1px solid rgba(59,130,246,0.2)" }}>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30">COR 1</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">LOE B-NR</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">Adverse pregnancy outcomes (preeclampsia, preterm birth, gestational diabetes) are considered risk-enhancing factors in the PREVENT equation for women.</p>
        </div>
      </div>
    </div>
  ),
  "Statin Intol.": (
    <div>
      <h3 className="text-xl font-bold text-white mb-3">Statin Intolerance</h3>
      <p className="text-white/60 text-sm mb-4">True statin intolerance affects ~5–10% of patients. Rechallenge and alternative strategies are key.</p>
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "rgba(59,130,246,0.08)", borderLeft: "4px solid #3B82F6", border: "1px solid rgba(59,130,246,0.2)" }}>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30">COR 1</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">LOE B-R</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">In statin-intolerant patients: Ezetimibe ± bempedoic acid are first alternatives. PCSK9 inhibitors for very high-risk patients who cannot tolerate any statin.</p>
        </div>
      </div>
    </div>
  ),
  "Elevated Lp(a)": (
    <div>
      <h3 className="text-xl font-bold text-white mb-3">Elevated Lp(a)</h3>
      <p className="text-white/60 text-sm mb-4 leading-relaxed">
        Lp(a) ≥50 mg/dL (~125 nmol/L) ≈ <span className="text-white font-semibold">40% ↑ relative risk</span>. 80–100 mg/dL doubles risk. ~180 mg/dL ≈ <span className="text-white font-semibold">4× risk</span> (HeFH-equivalent). Statins do <span className="text-red-400 font-semibold">NOT</span> lower Lp(a).
      </p>
      <div className="space-y-3">
        <div className="rounded-xl p-4" style={{ background: "rgba(34,197,94,0.06)", borderLeft: "4px solid #22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30">COR 1 — Strong</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">LOE B-NR</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">In all individuals with elevated Lp(a) (≥125 nmol/L or ≥50 mg/dL): Optimal early control of ALL modifiable cardiovascular risk factors is recommended.</p>
        </div>
        <div className="rounded-xl p-4" style={{ background: "rgba(34,197,94,0.06)", borderLeft: "4px solid #22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30">COR 1 — Strong</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">LOE B-R</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">In ASCVD + elevated Lp(a) not at LDL-C/non-HDL-C goals on max statin: Add PCSK9 mAb (lowers Lp(a) 15–30% in addition to LDL-C lowering).</p>
        </div>
      </div>
    </div>
  ),
};

export default function LipidIQ() {
  const [activeTab, setActiveTab] = useState("Elevated Lp(a)");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "py-4"}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>LipidIQ</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-teal-500/20 text-teal-400 border border-teal-500/30">RxBuilds</span>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-4 rounded-full transition-all duration-200 active:scale-95"
            style={{ height: "44px", minWidth: "140px", justifyContent: "center" }}
          >
            <AppleSVG className="w-4 h-4" />
            Download Free
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12 px-4">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob1 absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }} />
          <div className="blob2 absolute top-[40%] right-[5%] w-[350px] h-[350px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, #00C9A7 0%, transparent 70%)" }} />
          <div className="blob3 absolute bottom-[10%] left-[20%] w-[300px] h-[300px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />
          <div className="dot-grid absolute inset-0 opacity-40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white/80">Now on App Store</span>
            <span className="text-green-400 font-semibold">Free</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic mb-4 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Lipid Management<br />
            <span className="text-glow-blue" style={{ color: "#3B82F6" }}>at the Point of Care</span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            2026 ACC/AHA Dyslipidemia Guidelines — built for clinicians who need answers at the bedside.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-[#0A0F1E] font-bold px-6 rounded-2xl hover:bg-white/90 active:scale-95 transition-all duration-200 glow-blue w-full sm:w-auto justify-center"
              style={{ height: "52px", maxWidth: "280px" }}
            >
              <AppleSVG className="w-5 h-5 text-[#0A0F1E]" />
              Download Free on App Store
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 rounded-2xl transition-all duration-200 w-full sm:w-auto justify-center"
              style={{ height: "52px", maxWidth: "200px" }}
            >
              Explore Features ↓
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 text-center flex-wrap">
            {[
              { value: "5", label: "Modules" },
              { value: "2026", label: "ACC/AHA" },
              { value: "Free", label: "Forever" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">{s.value}</div>
                <div className="text-xs text-white/40 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockups */}
        <div className="relative z-10 mt-12 flex items-end justify-center gap-3 sm:gap-4 px-2 max-w-full overflow-hidden">
          <div className="hidden sm:block translate-y-6 opacity-70 flex-shrink-0"><PhoneMockup variant={1} /></div>
          <div className="flex-shrink-0"><PhoneMockup variant={2} /></div>
          <div className="hidden sm:block translate-y-6 opacity-70 flex-shrink-0"><PhoneMockup variant={3} /></div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <RevealDiv className="text-center mb-10">
            <span className="text-xs tracking-widest uppercase text-blue-400 font-semibold mb-2 block">Clinical Modules</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Everything You Need at the Bedside
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <RevealDiv delay={0}>
              <div className="glass rounded-2xl p-5 h-full hover:border-blue-500/30 transition-colors duration-300" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                    <HeartPercentIcon />
                  </div>
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">PREVENT Equation</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">PREVENT Calculator</h3>
                <p className="text-white/50 text-xs mb-3">ASCVD 10-Year Risk Estimation · Ages 30–79</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Age", "Systolic BP", "Total Chol", "HDL-C", "eGFR", "Sex", "Diabetes", "Smoker"].map((chip) => (
                    <span key={chip} className="text-[10px] px-2 py-1 rounded-lg bg-white/5 text-white/50 border border-white/10">{chip}</span>
                  ))}
                </div>
              </div>
            </RevealDiv>

            {/* Card 2 */}
            <RevealDiv delay={80}>
              <div className="glass rounded-2xl p-5 h-full hover:border-teal-500/30 transition-colors duration-300" style={{ border: "1px solid rgba(0,201,167,0.15)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-400">
                    <ShieldCheckIcon />
                  </div>
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 font-semibold">No Prior ASCVD</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Primary Prevention</h3>
                <p className="text-white/50 text-xs mb-3">2026 ACC/AHA Algorithm · Adults Without Established ASCVD</p>
                <div className="space-y-1">
                  {["LDL-C goal targeting", "CAC score integration", "Risk enhancers (Family Hx, South Asian/Filipino ancestry)", "10-year + 30-year risk inputs"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0">·</span>
                      <span className="text-white/50 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>

            {/* Card 3 */}
            <RevealDiv delay={160}>
              <div className="glass rounded-2xl p-5 h-full hover:border-red-500/30 transition-colors duration-300" style={{ border: "1px solid rgba(239,68,68,0.15)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400">
                    <CrossIcon />
                  </div>
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">Established ASCVD</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Secondary Prevention</h3>
                <p className="text-white/50 text-xs mb-3">Established ASCVD · Very High Risk Assessment</p>
                <div className="space-y-1 mb-3">
                  {["Major ASCVD events (ACS, MI, ischemic stroke, PAD)", "High-risk: age >65, CKD, statin intolerance, elevated Lp(a)"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">·</span>
                      <span className="text-white/50 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="chip-amber text-[10px] px-2 py-1 rounded-lg font-bold">HIGH RISK</span>
                  <span className="chip-red text-[10px] px-2 py-1 rounded-lg font-bold">VERY HIGH RISK</span>
                </div>
              </div>
            </RevealDiv>

            {/* Card 4 */}
            <RevealDiv delay={240}>
              <div className="glass rounded-2xl p-5 h-full hover:border-purple-500/30 transition-colors duration-300" style={{ border: "1px solid rgba(168,85,247,0.15)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                    <PillIcon />
                  </div>
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold">Quick Reference</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">LLT Reference</h3>
                <p className="text-white/50 text-xs mb-3">Statin Intensity & Non-Statin Agents · 2026 ACC/AHA</p>
                <div className="space-y-2">
                  <div className="rounded-lg p-2.5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="text-red-400 text-xs font-bold">High-Intensity → LDL-C ↓ ≥50%</span>
                    </div>
                    <p className="text-white/40 text-[10px]">Atorvastatin 40–80mg · Rosuvastatin 20–40mg</p>
                  </div>
                  <div className="rounded-lg p-2.5" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span className="text-amber-400 text-xs font-bold">Moderate-Intensity → LDL-C ↓ 30–49%</span>
                    </div>
                  </div>
                  <div className="rounded-lg p-2.5" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)" }}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                      <span className="text-green-400 text-xs font-bold">Low-Intensity → LDL-C ↓ &lt;30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* SPECIAL POPULATIONS */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <RevealDiv className="text-center mb-8">
            <span className="text-xs tracking-widest uppercase text-purple-400 font-semibold mb-2 block">Special Populations</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Tailored Guideline Guidance
            </h2>
          </RevealDiv>

          {/* Scrollable tab row */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-2 px-2" style={{ scrollbarWidth: "none" }}>
            {specialPopTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  activeTab === tab ? "tab-active" : "text-white/50 border-white/10 bg-white/5 hover:text-white/80"
                }`}
                style={{ height: "44px", whiteSpace: "nowrap" }}
              >
                {tab}
              </button>
            ))}
          </div>

          <RevealDiv>
            <div className="glass rounded-2xl p-5" style={{ border: "1px solid rgba(168,85,247,0.2)" }}>
              {specialPopContent[activeTab]}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* DISCLAIMER STRIP */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl px-5 py-4 text-center" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}>
            <p className="text-amber-400 text-sm font-semibold">
              CLINICAL REFERENCE ONLY · Supports but does not replace clinical judgement.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDELINE BADGE SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <RevealDiv>
            <h2 className="text-4xl sm:text-5xl font-bold mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Built on Evidence
            </h2>
            <p className="text-white/50 text-base mb-8">2026 ACC/AHA Dyslipidemia Guidelines</p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {["Primary Prevention", "Secondary Prevention", "PREVENT Equation"].map((badge) => (
                <span key={badge} className="px-5 py-2.5 rounded-full text-sm font-semibold glass border border-blue-500/30 text-blue-300" style={{ minHeight: "44px", display: "flex", alignItems: "center" }}>
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-white/30 text-sm">Free to download. No subscription required.</p>
          </RevealDiv>
        </div>
      </section>

      {/* FOUNDER CARD */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <RevealDiv>
            <div className="glass rounded-2xl p-6 sm:p-8" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
              <div className="flex flex-col gap-8">
                {/* Quote */}
                <div>
                  <div className="text-4xl text-blue-500/40 mb-3 leading-none" style={{ fontFamily: "'DM Serif Display', serif" }}>"</div>
                  <blockquote className="text-lg sm:text-xl italic leading-relaxed text-white/85 mb-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    I built LipidIQ because lipid management decisions are complex — and clinicians need guideline-based answers at the bedside, not in a textbook.
                  </blockquote>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">Dr. Osama Jamil</p>
                    <p className="text-white/50 text-sm">Board-Certified Vascular Neurologist & Neurohospitalist</p>
                    <p className="text-white/50 text-sm">Stroke Program Medical Director · RxBuilds LLC · Laredo, TX</p>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { value: "BC", label: "Board Certified Neurologist" },
                    { value: "2026", label: "ACC/AHA Guidelines" },
                    { value: "Free", label: "On App Store" },
                    { value: "iOS", label: "iPhone & iPad" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}>
                      <div className="text-xl font-bold text-blue-400 mb-1">{s.value}</div>
                      <div className="text-[10px] text-white/40 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <RevealDiv>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Take Lipid Management to the Bedside
            </h2>
            <p className="text-white/50 text-base mb-8">
              Free download. No account required. 2026 ACC/AHA Guidelines in your pocket.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-base px-8 rounded-2xl glow-blue hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ background: "#1a1a2e", border: "2px solid rgba(59,130,246,0.5)", color: "white", height: "60px" }}
            >
              <AppleSVG className="w-6 h-6 text-white" />
              Download on the App Store
            </a>
          </RevealDiv>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <div className="text-white/30 text-sm">
              <span className="font-semibold" style={{ fontFamily: "'DM Serif Display', serif" }}>LipidIQ</span>
              {" · "}RxBuilds LLC
              {" · "}<a href="mailto:texastesla01@gmail.com" className="hover:text-white/60 transition-colors">texastesla01@gmail.com</a>
              {" · "}© 2026
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors" style={{ minHeight: "44px", display: "flex", alignItems: "center" }}>
                App Store
              </a>
              <span className="text-white/20">·</span>
              <a href="https://rxbuilds.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors" style={{ minHeight: "44px", display: "flex", alignItems: "center" }}>
                RxBuilds
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
