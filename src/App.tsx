import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black">
      {/* 3D Hero Header with Eye */}
      <svg
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="eyeBg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#450a0a" />
            <stop offset="50%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="#1a0000" />
          </radialGradient>
          <radialGradient id="irisGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="30%" stopColor="#ef4444" />
            <stop offset="70%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </radialGradient>
          <radialGradient id="pupilGrad" cx="40%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <radialGradient id="eyeWhite" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff5f5" />
            <stop offset="70%" stopColor="#fecaca" />
            <stop offset="100%" stopColor="#fca5a5" />
          </radialGradient>
          <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef2f2" />
            <stop offset="100%" stopColor="#fca5a5" />
          </linearGradient>
          <filter id="eyeShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.6" />
          </filter>
          <filter id="glow3d">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="innerShadow">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite operator="out" in="SourceGraphic" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
            <feBlend in="SourceGraphic" mode="normal" />
          </filter>
          <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="1200" height="400" fill="url(#eyeBg)" />

        {/* 3D Grid floor */}
        <g opacity="0.15">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={250 + i * 12} x2="1200" y2={250 + i * 12} stroke="#ef4444" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50 - 100} y1="250" x2={600 + (i * 50 - 600) * 3} y2="400" stroke="#ef4444" strokeWidth="0.5" />
          ))}
        </g>

        {/* Floating 3D cubes */}
        <g opacity="0.2" transform="translate(100, 60)">
          <polygon points="0,20 30,5 60,20 30,35" fill="#ef4444" />
          <polygon points="0,20 0,50 30,65 30,35" fill="#b91c1c" />
          <polygon points="60,20 60,50 30,65 30,35" fill="#7f1d1d" />
        </g>
        <g opacity="0.15" transform="translate(1000, 80) scale(0.8)">
          <polygon points="0,20 30,5 60,20 30,35" fill="#ef4444" />
          <polygon points="0,20 0,50 30,65 30,35" fill="#b91c1c" />
          <polygon points="60,20 60,50 30,65 30,35" fill="#7f1d1d" />
        </g>
        <g opacity="0.1" transform="translate(950, 280) scale(0.6)">
          <polygon points="0,20 30,5 60,20 30,35" fill="#ef4444" />
          <polygon points="0,20 0,50 30,65 30,35" fill="#b91c1c" />
          <polygon points="60,20 60,50 30,65 30,35" fill="#7f1d1d" />
        </g>

        {/* THE EYE - 3D style */}
        <g transform="translate(600, 160)" filter="url(#eyeShadow)">
          {/* Outer eye shape - almond */}
          <path
            d="M-180,0 C-180,-80 -90,-120 0,-120 C90,-120 180,-80 180,0 C180,80 90,120 0,120 C-90,120 -180,80 -180,0 Z"
            fill="url(#eyeWhite)"
            stroke="#7f1d1d"
            strokeWidth="3"
          />
          {/* Eyelid shadow top */}
          <path
            d="M-180,0 C-180,-80 -90,-120 0,-120 C90,-120 180,-80 180,0"
            fill="none"
            stroke="url(#lidGrad)"
            strokeWidth="8"
            opacity="0.4"
          />
          {/* Iris */}
          <circle cx="0" cy="0" r="70" fill="url(#irisGrad)" />
          {/* Iris pattern rings */}
          <circle cx="0" cy="0" r="65" fill="none" stroke="#dc2626" strokeWidth="0.5" opacity="0.5" />
          <circle cx="0" cy="0" r="55" fill="none" stroke="#b91c1c" strokeWidth="0.5" opacity="0.4" />
          <circle cx="0" cy="0" r="45" fill="none" stroke="#991b1b" strokeWidth="0.5" opacity="0.3" />
          {/* Iris rays */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 25;
            const y1 = Math.sin(angle) * 25;
            const x2 = Math.cos(angle) * 65;
            const y2 = Math.sin(angle) * 65;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7f1d1d" strokeWidth="0.8" opacity="0.3" />;
          })}
          {/* Pupil */}
          <circle cx="0" cy="0" r="28" fill="url(#pupilGrad)" />
          {/* Light reflection */}
          <ellipse cx="-12" cy="-15" rx="8" ry="10" fill="white" opacity="0.8" />
          <circle cx="15" cy="12" r="4" fill="white" opacity="0.4" />
          {/* 3D depth ring */}
          <circle cx="0" cy="0" r="70" fill="none" stroke="#450a0a" strokeWidth="2" opacity="0.6" />
        </g>

        {/* Title */}
        <text x="600" y="340" textAnchor="middle" fill="url(#titleGrad)" fontSize="42" fontWeight="bold" fontFamily="system-ui, sans-serif" filter="url(#glow3d)">
          Privacy Policy
        </text>
        <text x="600" y="370" textAnchor="middle" fill="#fca5a5" fontSize="15" fontFamily="system-ui, sans-serif" opacity="0.8">
          SeekFree — Microsoft Edge Extension
        </text>

        {/* Bottom fade */}
        <rect x="0" y="380" width="1200" height="20" fill="#1a0000" opacity="0.5" />
      </svg>

      {/* Date badges */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="bg-red-900/80 backdrop-blur border border-red-700/50 text-red-100 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Effective: October 8, 2026
          </div>
          <div className="bg-red-900/80 backdrop-blur border border-red-700/50 text-red-100 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Updated: October 8, 2026
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="bg-gradient-to-b from-red-950/90 to-black/90 backdrop-blur rounded-2xl shadow-2xl border border-red-900/50 overflow-hidden">
          {/* Introduction */}
          <div className="p-8 sm:p-12">
            <p className="text-red-100/90 leading-relaxed text-lg mb-6">
              This Privacy Policy describes how this Microsoft Edge extension ("Extension", "we", "us", or "our") accesses, uses, stores, and protects information when you install or use the Extension.
            </p>

            {/* Purpose SVG Box */}
            <svg viewBox="0 0 800 90" className="w-full mb-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="purposeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7f1d1d" />
                  <stop offset="100%" stopColor="#450a0a" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="90" rx="12" fill="url(#purposeGrad)" stroke="#dc2626" strokeWidth="1" />
              <rect x="0" y="0" width="5" height="90" rx="2" fill="#ef4444" />
              {/* Target SVG icon */}
              <circle cx="35" cy="45" r="16" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
              <circle cx="35" cy="45" r="10" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
              <circle cx="35" cy="45" r="4" fill="#ef4444" />
              <text x="65" y="35" fill="#fef2f2" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                Purpose
              </text>
              <text x="65" y="55" fill="#fecaca" fontSize="12" fontFamily="system-ui">
                To provide its intended functionality on the webpage currently being viewed
              </text>
              <text x="65" y="73" fill="#fecaca" fontSize="12" fontFamily="system-ui">
                by the user when the user explicitly activates the Extension.
              </text>
            </svg>

            <p className="text-red-100/90 leading-relaxed text-lg">
              We are committed to minimizing data access and requesting only the permissions necessary for the Extension to function.
            </p>
          </div>

          <DividerSVG />

          {/* Section 1 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="1" title="Scope of This Privacy Policy" icon="scope" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>This Privacy Policy applies only to this Microsoft Edge Extension and its handling of information through the Extension.</p>
              <p>This Privacy Policy does not apply to websites that users visit while using Microsoft Edge. Those websites may have their own privacy policies and data-processing practices.</p>
            </div>
            {/* Warning SVG */}
            <svg viewBox="0 0 800 65" className="w-full mt-4" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="65" rx="10" fill="#422006" stroke="#a16207" strokeWidth="1" />
              <rect x="0" y="0" width="4" height="65" rx="2" fill="#eab308" />
              {/* Warning triangle icon */}
              <path d="M25 18 L37 42 L13 42 Z" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round" />
              <line x1="25" y1="27" x2="25" y2="34" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
              <circle cx="25" cy="38" r="1" fill="#fbbf24" />
              <text x="50" y="28" fill="#fef3c7" fontSize="13" fontWeight="bold" fontFamily="system-ui">Disclaimer</text>
              <text x="50" y="48" fill="#fde68a" fontSize="12" fontFamily="system-ui">
                The Extension is not an official Microsoft product and is not affiliated with, endorsed by, or sponsored by Microsoft.
              </text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 2 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="2" title="Information the Extension May Access" icon="access" />
            <p className="mt-4 text-red-100/80 leading-relaxed">The Extension may access limited information necessary to provide its declared functionality.</p>

            {/* 2.1 */}
            <div className="mt-6">
              <SubSection icon="page" title="2.1 Information from the active webpage" />
              <div className="ml-4 mt-3 space-y-2 text-red-100/70 text-sm leading-relaxed border-l-2 border-red-700 pl-4">
                <p>When the user explicitly activates the Extension, the Extension may access information available on the currently active webpage.</p>
                <p>This access is enabled through the <code className="bg-red-900/50 text-red-300 px-1.5 py-0.5 rounded text-xs font-mono border border-red-800">activeTab</code> permission and is limited to the webpage on which the user activates the Extension.</p>
                <p>The Extension does not intentionally collect unrelated browsing activity, browsing history, or information from other websites.</p>
              </div>
            </div>

            {/* 2.2 */}
            <div className="mt-6">
              <SubSection icon="storage" title="2.2 Local Extension settings" />
              <div className="ml-4 mt-3 space-y-2 text-red-100/70 text-sm leading-relaxed border-l-2 border-red-700 pl-4">
                <p>The Extension may store configuration information, preferences, or other non-sensitive settings locally using the Microsoft Edge extension storage mechanism.</p>
                <p>This functionality is provided through the <code className="bg-red-900/50 text-red-300 px-1.5 py-0.5 rounded text-xs font-mono border border-red-800">storage</code> permission.</p>
                <p>Examples may include: User preferences, Extension configuration, Feature settings, Other local settings required for the Extension to operate correctly.</p>
              </div>
            </div>

            {/* 2.3 - Permissions SVG Cards */}
            <div className="mt-6">
              <SubSection icon="key" title="2.3 Permissions used by the Extension" />
              <svg viewBox="0 0 800 250" className="w-full mt-4" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="perm1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7f1d1d" />
                    <stop offset="100%" stopColor="#450a0a" />
                  </linearGradient>
                </defs>

                {/* Permission 1: activeTab */}
                <rect x="0" y="0" width="800" height="75" rx="10" fill="url(#perm1)" stroke="#991b1b" strokeWidth="1" />
                <circle cx="38" cy="37" r="22" fill="#991b1b" stroke="#dc2626" strokeWidth="1.5" />
                {/* Globe icon */}
                <circle cx="38" cy="37" r="12" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
                <ellipse cx="38" cy="37" rx="5" ry="12" fill="none" stroke="#fca5a5" strokeWidth="1" />
                <line x1="26" y1="37" x2="50" y2="37" stroke="#fca5a5" strokeWidth="1" />
                <text x="75" y="30" fill="#fef2f2" fontSize="14" fontWeight="bold" fontFamily="monospace">activeTab</text>
                <text x="75" y="52" fill="#fecaca" fontSize="12" fontFamily="system-ui">Access the currently active webpage after user explicitly activates the Extension.</text>

                {/* Permission 2: scripting */}
                <rect x="0" y="88" width="800" height="75" rx="10" fill="url(#perm1)" stroke="#991b1b" strokeWidth="1" />
                <circle cx="38" cy="125" r="22" fill="#991b1b" stroke="#dc2626" strokeWidth="1.5" />
                {/* Code/script icon */}
                <path d="M30 118 L24 125 L30 132" fill="none" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46 118 L52 125 L46 132" fill="none" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="41" y1="115" x2="35" y2="135" stroke="#fca5a5" strokeWidth="1.5" />
                <text x="75" y="118" fill="#fef2f2" fontSize="14" fontWeight="bold" fontFamily="monospace">scripting</text>
                <text x="75" y="140" fill="#fecaca" fontSize="12" fontFamily="system-ui">Execute the Extension's required script on the currently active webpage.</text>

                {/* Permission 3: storage */}
                <rect x="0" y="176" width="800" height="75" rx="10" fill="url(#perm1)" stroke="#991b1b" strokeWidth="1" />
                <circle cx="38" cy="213" r="22" fill="#991b1b" stroke="#dc2626" strokeWidth="1.5" />
                {/* Database/storage icon */}
                <ellipse cx="38" cy="205" rx="10" ry="4" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
                <path d="M28 205 L28 221 C28 223 32 225 38 225 C44 225 48 223 48 221 L48 205" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
                <path d="M28 213 C28 215 32 217 38 217 C44 217 48 215 48 213" fill="none" stroke="#fca5a5" strokeWidth="1" />
                <text x="75" y="206" fill="#fef2f2" fontSize="14" fontWeight="bold" fontFamily="monospace">storage</text>
                <text x="75" y="228" fill="#fecaca" fontSize="12" fontFamily="system-ui">Save and retrieve Extension settings and preferences locally.</text>
              </svg>
              <p className="mt-3 text-sm text-red-200/60">These permissions are requested only when necessary. The Extension does not request permissions for unrelated purposes.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 3 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="3" title="How Information Is Used" icon="usage" />
            <p className="mt-4 text-red-100/80 leading-relaxed">Information accessed by the Extension is used only to provide the functionality described in the Microsoft Edge Add-ons listing.</p>
            <p className="mt-2 text-red-100/80 leading-relaxed">Information may be processed to: Perform the Extension's primary function, Read/process relevant information from the active webpage, Execute required functionality, Save/restore user preferences, Maintain normal operation.</p>

            {/* Prohibited uses SVG */}
            <svg viewBox="0 0 800 290" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="290" rx="12" fill="#2a0505" stroke="#7f1d1d" strokeWidth="1" />
              {/* Prohibited icon */}
              <circle cx="25" cy="25" r="12" fill="none" stroke="#ef4444" strokeWidth="2" />
              <line x1="17" y1="17" x2="33" y2="33" stroke="#ef4444" strokeWidth="2" />
              <text x="45" y="30" fill="#fca5a5" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                The Extension does NOT use webpage information for:
              </text>

              {['Selling user information', 'Renting user information', 'Data brokerage', 'Targeted advertising', 'Building advertising profiles', 'Tracking across websites', 'Monitoring browsing activity', 'Identifying users', 'Unrelated purposes'].map((item, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                const x = 20 + col * 260;
                const y = 50 + row * 75;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="240" height="55" rx="8" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
                    {/* X icon */}
                    <circle cx={x + 22} cy={y + 27} r="12" fill="#7f1d1d" />
                    <line x1={x + 17} y1={y + 22} x2={x + 27} y2={y + 32} stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <line x1={x + 27} y1={y + 22} x2={x + 17} y2={y + 32} stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <text x={x + 42} y={y + 32} fill="#fecaca" fontSize="11" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <DividerSVG />

          {/* Section 4 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="4" title="Data Collection and Minimization" icon="minimize" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>The Extension follows a <strong className="text-red-300">data-minimization approach</strong>.</p>
              <p>The Extension does not intentionally collect personal information unless necessary for a clearly disclosed user-facing feature.</p>
              <p>The Extension does not intentionally collect or store unrelated personal information, browsing history, authentication credentials, passwords, payment information, or other sensitive information.</p>
            </div>
            {/* Minimization SVG */}
            <svg viewBox="0 0 800 100" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="minGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#450a0a" />
                  <stop offset="100%" stopColor="#7f1d1d" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="100" rx="12" fill="url(#minGrad)" stroke="#dc2626" strokeWidth="1" />
              {/* Shield check icon */}
              <path d="M385 25 L400 20 L415 25 L415 40 C415 50 408 56 400 60 C392 56 385 50 385 40 Z" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
              <path d="M393 40 L398 45 L408 33" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <text x="400" y="78" textAnchor="middle" fill="#fecaca" fontSize="12" fontFamily="system-ui">
                Only access what's needed • Process only what's required • Store only what's necessary
              </text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 5 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="5" title="Data Storage" icon="database" />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <svg viewBox="0 0 250 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7f1d1d" />
                    <stop offset="100%" stopColor="#450a0a" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="250" height="170" rx="12" fill="url(#card1)" stroke="#991b1b" strokeWidth="1" />
                {/* Folder icon */}
                <path d="M105 50 L105 45 C105 42 107 40 110 40 L120 40 L125 45 L140 45 C143 45 145 47 145 50 L145 75 C145 78 143 80 140 80 L110 80 C107 80 105 78 105 75 Z" fill="none" stroke="#fca5a5" strokeWidth="2" />
                <text x="125" y="105" textAnchor="middle" fill="#fef2f2" fontSize="13" fontWeight="bold" fontFamily="system-ui">Local Storage</text>
                <text x="125" y="125" textAnchor="middle" fill="#fecaca" fontSize="10" fontFamily="system-ui">Settings &amp; preferences</text>
                <text x="125" y="140" textAnchor="middle" fill="#fecaca" fontSize="10" fontFamily="system-ui">stored locally in Edge</text>
                <text x="125" y="160" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="system-ui" fontWeight="bold">5.1</text>
              </svg>

              <svg viewBox="0 0 250 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="250" height="170" rx="12" fill="url(#card1)" stroke="#991b1b" strokeWidth="1" />
                {/* Document icon */}
                <path d="M110 40 L130 40 L140 50 L140 80 L110 80 Z" fill="none" stroke="#fca5a5" strokeWidth="2" />
                <path d="M130 40 L130 50 L140 50" fill="none" stroke="#fca5a5" strokeWidth="2" />
                <line x1="116" y1="58" x2="134" y2="58" stroke="#fca5a5" strokeWidth="1" />
                <line x1="116" y1="65" x2="134" y2="65" stroke="#fca5a5" strokeWidth="1" />
                <line x1="116" y1="72" x2="128" y2="72" stroke="#fca5a5" strokeWidth="1" />
                <text x="125" y="105" textAnchor="middle" fill="#fef2f2" fontSize="13" fontWeight="bold" fontFamily="system-ui">Webpage Info</text>
                <text x="125" y="125" textAnchor="middle" fill="#fecaca" fontSize="10" fontFamily="system-ui">Not permanently retained</text>
                <text x="125" y="140" textAnchor="middle" fill="#fecaca" fontSize="10" fontFamily="system-ui">unless explicitly required</text>
                <text x="125" y="160" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="system-ui" fontWeight="bold">5.2</text>
              </svg>

              <svg viewBox="0 0 250 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="250" height="170" rx="12" fill="url(#card1)" stroke="#991b1b" strokeWidth="1" />
                {/* Clock icon */}
                <circle cx="125" cy="58" r="18" fill="none" stroke="#fca5a5" strokeWidth="2" />
                <line x1="125" y1="58" x2="125" y2="47" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
                <line x1="125" y1="58" x2="133" y2="62" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
                <text x="125" y="105" textAnchor="middle" fill="#fef2f2" fontSize="13" fontWeight="bold" fontFamily="system-ui">No Retention</text>
                <text x="125" y="125" textAnchor="middle" fill="#fecaca" fontSize="10" fontFamily="system-ui">Not retained longer</text>
                <text x="125" y="140" textAnchor="middle" fill="#fecaca" fontSize="10" fontFamily="system-ui">than necessary</text>
                <text x="125" y="160" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="system-ui" fontWeight="bold">5.3</text>
              </svg>
            </div>
          </div>

          <DividerSVG />

          {/* Section 6 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="6" title="Data Transmission" icon="transmit" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>The current version does <strong className="text-red-300">not</strong> intentionally transmit webpage content, browsing history, personal information, or other user data to a remote server.</p>
              <p>The Extension does not sell, rent, license, or broker user data.</p>
            </div>
            <svg viewBox="0 0 800 210" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="210" rx="12" fill="#1a0505" stroke="#7f1d1d" strokeWidth="1" />
              {/* List icon */}
              <rect x="15" y="12" width="20" height="20" rx="3" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="20" y1="18" x2="30" y2="18" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="20" y1="22" x2="30" y2="22" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="20" y1="26" x2="27" y2="26" stroke="#ef4444" strokeWidth="1.5" />
              <text x="45" y="28" fill="#fca5a5" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                If future version transmits data, this policy will disclose:
              </text>
              {['What information is transmitted', 'Why the information is transmitted', 'Where the information is transmitted', 'How the information is protected', 'How long the information is retained', 'What choices are available to the user'].map((item, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = 30 + col * 390;
                const y = 55 + row * 48;
                return (
                  <g key={i}>
                    <circle cx={x + 12} cy={y + 8} r="12" fill="#7f1d1d" stroke="#dc2626" strokeWidth="1" />
                    <text x={x + 8} y={y + 12} fill="#fca5a5" fontSize="11" fontWeight="bold" fontFamily="system-ui">{i + 1}</text>
                    <text x={x + 32} y={y + 12} fill="#fecaca" fontSize="12" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <DividerSVG />

          {/* Section 7 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="7" title="Third-Party Services" icon="thirdparty" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>The current version does not share user data with third-party advertising networks, data brokers, analytics providers, or other external services.</p>
              <p>Where Microsoft Edge Add-ons policies require user opt-in consent, the Extension will obtain required consent before sharing occurs.</p>
              <p>Users can withdraw permission at any time. After withdrawal, the Extension will stop relevant collection, transmission, or processing.</p>
              <p className="font-semibold text-red-300">The Extension does not engage in data brokerage.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 8 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="8" title="Information Belonging to Other People" icon="people" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>The Extension does not intentionally publish or provide another person's personal information to third parties.</p>
              <p>The Extension is not designed to collect personal information belonging to non-users for publication or disclosure through an external service.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 9 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="9" title="Sensitive and Highly Sensitive Information" icon="sensitive" />
            <p className="mt-4 text-red-100/80 leading-relaxed">The Extension is not designed to collect, store, or transmit highly sensitive personal information.</p>

            <svg viewBox="0 0 800 210" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="210" rx="12" fill="#2a0505" stroke="#7f1d1d" strokeWidth="1" />
              {/* Lock icon */}
              <rect x="15" y="15" width="18" height="14" rx="2" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <path d="M19 15 L19 11 C19 7 21 5 24 5 C27 5 29 7 29 11 L29 15" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <text x="42" y="28" fill="#fca5a5" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                The Extension does NOT collect:
              </text>
              {['Passwords', 'Auth credentials', 'Financial info', 'Payment cards', 'Health info', 'Gov ID numbers', 'Precise location', 'Other sensitive data'].map((item, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const x = 20 + col * 195;
                const y = 50 + row * 75;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="180" height="58" rx="8" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
                    {/* Prohibited circle */}
                    <circle cx={x + 22} cy={y + 29} r="14" fill="#7f1d1d" stroke="#dc2626" strokeWidth="1" />
                    <line x1={x + 15} y1={y + 22} x2={x + 29} y2={y + 36} stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <text x={x + 44} y={y + 33} fill="#fecaca" fontSize="11" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <DividerSVG />

          {/* Section 10 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="10" title="User Control and Choices" icon="control" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>Users have control over when the Extension accesses the active webpage. Access occurs only when the user explicitly activates the Extension.</p>
            </div>
            <svg viewBox="0 0 800 150" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="150" rx="12" fill="#1a0505" stroke="#7f1d1d" strokeWidth="1" />
              {[
                { label: 'Disable', path: 'M15 25 L35 25' },
                { label: 'Remove', path: 'M20 18 L20 32 M30 18 L30 32 M15 22 L35 22 M15 28 L35 28' },
                { label: 'Review', path: '' },
                { label: 'Manage', path: '' },
              ].map((item, i) => {
                const x = 20 + i * 195;
                return (
                  <g key={i}>
                    <rect x={x} y={20} width="180" height="110" rx="10" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
                    {/* Gear icon */}
                    <circle cx={x + 90} cy={y50()} r="18" fill="#7f1d1d" stroke="#dc2626" strokeWidth="1.5" />
                    <circle cx={x + 90} cy={y50()} r="7" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
                    {Array.from({ length: 8 }).map((_, j) => {
                      const angle = (j * 45 * Math.PI) / 180;
                      const cx = x + 90;
                      const cy = y50();
                      const x1 = cx + Math.cos(angle) * 11;
                      const y1 = cy + Math.sin(angle) * 11;
                      const x2 = cx + Math.cos(angle) * 16;
                      const y2 = cy + Math.sin(angle) * 16;
                      return <line key={j} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" />;
                    })}
                    <text x={x + 90} y={y100()} textAnchor="middle" fill="#fecaca" fontSize="12" fontFamily="system-ui">{item.label}</text>
                  </g>
                );
              })}
            </svg>
            <p className="mt-4 text-sm text-red-200/60">Users may also remove the Extension from Microsoft Edge to stop its functionality and remove its locally stored data.</p>
          </div>

          <DividerSVG />

          {/* Section 11 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="11" title="Data Security" icon="security" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>We take reasonable measures to minimize the amount of information accessed and processed by the Extension.</p>
              <p>The Extension requests only permissions necessary for its declared functionality.</p>
              <p>If personal information is transmitted in a future version, appropriate modern cryptographic and secure communication mechanisms will be used.</p>
              <p>The Extension does not intentionally expose authentication credentials, financial information, or other confidential information publicly.</p>
            </div>
            <svg viewBox="0 0 800 85" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#450a0a" />
                  <stop offset="100%" stopColor="#7f1d1d" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="85" rx="12" fill="url(#secGrad)" stroke="#dc2626" strokeWidth="1" />
              {/* Shield with lock */}
              <path d="M385 15 L400 10 L415 15 L415 30 C415 42 408 50 400 54 C392 50 385 42 385 30 Z" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
              <rect x="394" y="30" width="12" height="10" rx="1" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <path d="M397 30 L397 27 C397 24 398 23 400 23 C402 23 403 24 403 27 L403 30" fill="none" stroke="#ef4444" strokeWidth="1" />
              <text x="400" y="72" textAnchor="middle" fill="#fecaca" fontSize="12" fontFamily="system-ui">
                Minimal access • Necessary permissions only • No unnecessary collection • Secure transmission
              </text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 12 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="12" title="Children's Privacy" icon="child" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>The Extension is not specifically directed at children under the age of 13 and is not designed to intentionally collect personal information from children.</p>
              <p>We do not knowingly collect personal information from children for purposes unrelated to the Extension's declared functionality.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 13 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="13" title="Changes to This Privacy Policy" icon="changes" />
            <div className="mt-4 space-y-3 text-red-100/80 leading-relaxed">
              <p>This Privacy Policy may be updated when the Extension's functionality changes, new permissions are introduced, data practices change, a third-party service is introduced, laws change, or Edge Add-ons policies are updated.</p>
              <p>When materially changed, the <strong className="text-red-300">Last Updated</strong> date will be updated accordingly.</p>
              <p>Users should periodically review this Privacy Policy to remain informed.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 14 - Contact */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="14" title="Contact" icon="contact" />
            <p className="mt-4 text-red-100/80 leading-relaxed">If you have questions regarding this Privacy Policy, please contact the developer:</p>

            <svg viewBox="0 0 800 190" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7f1d1d" />
                  <stop offset="100%" stopColor="#450a0a" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="190" rx="16" fill="url(#contactGrad)" stroke="#dc2626" strokeWidth="1.5" />

              {/* Shield icon */}
              <g transform="translate(30, 55)">
                <path d="M30 5 L55 15 L55 35 C55 52 42 63 30 68 C18 63 5 52 5 35 L5 15 Z" fill="#991b1b" stroke="#dc2626" strokeWidth="1.5" />
                <path d="M22 35 L28 41 L40 27" fill="none" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              <text x="110" y="40" fill="#fca5a5" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1.5">DEVELOPER / PUBLISHER</text>
              <text x="110" y="65" fill="#fef2f2" fontSize="20" fontWeight="bold" fontFamily="system-ui">Bbin</text>

              <text x="110" y="100" fill="#fca5a5" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1.5">COMPANY</text>
              <text x="110" y="125" fill="#fef2f2" fontSize="20" fontWeight="bold" fontFamily="system-ui">EYECORE LABS</text>

              <text x="420" y="40" fill="#fca5a5" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1.5">EXTENSION NAME</text>
              <text x="420" y="65" fill="#fef2f2" fontSize="20" fontWeight="bold" fontFamily="system-ui">SeekFree</text>

              <text x="420" y="100" fill="#fca5a5" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1.5">EMAIL</text>
              <text x="420" y="125" fill="#94a3b8" fontSize="15" fontStyle="italic" fontFamily="system-ui">None</text>

              <text x="650" y="40" fill="#fca5a5" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1.5">POLICY URL</text>
              <text x="650" y="65" fill="#94a3b8" fontSize="15" fontStyle="italic" fontFamily="system-ui">None</text>

              {/* Decorative eye small */}
              <g transform="translate(700, 130)">
                <path d="M0 15 C10 5 30 5 40 15 C30 25 10 25 0 15 Z" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.5" />
                <circle cx="20" cy="15" r="5" fill="#dc2626" opacity="0.5" />
                <circle cx="20" cy="15" r="2" fill="#450a0a" opacity="0.5" />
              </g>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 15 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="15" title="Compliance with Microsoft Edge Add-ons Policies" icon="compliance" />
            <p className="mt-4 text-red-100/80 leading-relaxed">This Privacy Policy describes the Extension's information-handling practices in accordance with applicable Microsoft Edge Add-ons Developer Policies.</p>

            <svg viewBox="0 0 800 260" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="260" rx="12" fill="#1a0505" stroke="#7f1d1d" strokeWidth="1" />
              {/* Check circle icon */}
              <circle cx="25" cy="25" r="12" fill="none" stroke="#22c55e" strokeWidth="2" />
              <path d="M19 25 L23 29 L31 21" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <text x="45" y="30" fill="#fca5a5" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                The Extension is designed to:
              </text>
              {[
                'Single & clearly defined purpose',
                'Only necessary permissions',
                'Minimize personal info access',
                'Clear data-handling disclosure',
                'Appropriate user control',
                'Avoid unauthorized sharing',
                'Avoid data brokerage',
                'Appropriate security measures',
              ].map((item, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = 20 + col * 395;
                const y = 50 + row * 50;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="375" height="40" rx="8" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
                    <circle cx={x + 22} cy={y + 20} r="12" fill="#14532d" stroke="#22c55e" strokeWidth="1" />
                    <path d={`M${x + 17} ${y + 20} L${x + 21} ${y + 24} L${x + 28} ${y + 16}`} fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <text x={x + 42} y={y + 24} fill="#fecaca" fontSize="12" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>

            <p className="mt-4 text-sm text-red-200/60">The Extension's actual implementation must remain consistent with this Privacy Policy. If implementation changes affect user information or privacy, this policy will be updated accordingly.</p>
          </div>

          {/* Footer */}
          <div className="p-8 sm:p-12 bg-black/40 border-t border-red-900/50">
            <svg viewBox="0 0 800 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <text x="400" y="20" textAnchor="middle" fill="#fca5a5" fontSize="11" fontFamily="system-ui">
                Microsoft Edge Add-ons Developer Policies:
              </text>
              <text x="400" y="45" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="system-ui">
                https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies
              </text>
              <line x1="200" y1="58" x2="600" y2="58" stroke="#7f1d1d" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <svg viewBox="0 0 800 60" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
            <text x="400" y="25" textAnchor="middle" fill="#fca5a5" fontSize="12" fontFamily="system-ui" opacity="0.6">
              © 2026 EYECORE LABS. All rights reserved.
            </text>
            <text x="400" y="48" textAnchor="middle" fill="#991b1b" fontSize="11" fontFamily="system-ui">
              SeekFree Extension — Privacy Policy
            </text>
          </svg>
        </footer>
      </div>

      {/* Scroll to top */}
      {scrollY > 400 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="btnGrad" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
            <circle cx="25" cy="25" r="23" fill="url(#btnGrad)" stroke="#dc2626" strokeWidth="1.5" />
            <path d="M25 34 L25 18 M18 24 L25 17 L32 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

function SectionHeader({ number, title, icon }: { number: string; title: string; icon: string }) {
  const iconPaths: Record<string, React.ReactNode> = {
    scope: <><rect x="6" y="6" width="12" height="12" rx="1" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M9 9 L15 15 M15 9 L9 15" stroke="#fca5a5" strokeWidth="1" /></>,
    access: <><path d="M4 6 L12 4 L20 6 L20 16 L12 20 L4 16 Z" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><circle cx="12" cy="12" r="3" fill="#ef4444" /></>,
    usage: <><path d="M4 12 L8 8 L12 14 L16 6 L20 12" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    minimize: <><circle cx="12" cy="12" r="8" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M8 12 L16 12" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" /></>,
    database: <><ellipse cx="12" cy="6" rx="7" ry="3" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M5 6 L5 18 C5 20 8 21 12 21 C16 21 19 20 19 18 L19 6" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M5 12 C5 14 8 15 12 15 C16 15 19 14 19 12" fill="none" stroke="#fca5a5" strokeWidth="1" /></>,
    transmit: <><path d="M4 12 L16 12 M12 8 L16 12 L12 16" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="20" cy="12" r="2" fill="#ef4444" /></>,
    thirdparty: <><circle cx="8" cy="12" r="4" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><circle cx="16" cy="12" r="4" fill="none" stroke="#fca5a5" strokeWidth="1.5" /></>,
    people: <><circle cx="12" cy="8" r="3" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M6 20 C6 16 8 14 12 14 C16 14 18 16 18 20" fill="none" stroke="#fca5a5" strokeWidth="1.5" /></>,
    sensitive: <><path d="M12 3 L20 8 L20 14 C20 18 16 21 12 22 C8 21 4 18 4 14 L4 8 Z" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><line x1="12" y1="9" x2="12" y2="14" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /><circle cx="12" cy="17" r="1" fill="#ef4444" /></>,
    control: <><circle cx="12" cy="12" r="8" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><circle cx="12" cy="12" r="3" fill="#ef4444" /><path d="M12 4 L12 7 M12 17 L12 20 M4 12 L7 12 M17 12 L20 12" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" /></>,
    security: <><path d="M12 3 L20 7 L20 13 C20 17 16 20 12 21 C8 20 4 17 4 13 L4 7 Z" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M9 12 L11 14 L15 10" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    child: <><circle cx="12" cy="8" r="4" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M8 20 C8 16 10 14 12 14 C14 14 16 16 16 20" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><circle cx="10" cy="7" r="0.5" fill="#fca5a5" /><circle cx="14" cy="7" r="0.5" fill="#fca5a5" /></>,
    changes: <><path d="M4 12 C4 7 7 4 12 4 C17 4 20 7 20 12" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M17 9 L20 12 L17 15" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 12 C20 17 17 20 12 20 C7 20 4 17 4 12" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="2 2" /></>,
    contact: <><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M4 8 L12 13 L20 8" fill="none" stroke="#fca5a5" strokeWidth="1.5" /></>,
    compliance: <><path d="M12 3 L20 7 L20 13 C20 17 16 20 12 21 C8 20 4 17 4 13 L4 7 Z" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
  };

  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="36" height="36" rx="10" fill="#7f1d1d" stroke="#dc2626" strokeWidth="1" />
        {iconPaths[icon]}
      </svg>
      <h2 className="text-2xl font-bold text-red-100">{title}</h2>
    </div>
  );
}

function SubSection({ icon, title }: { icon: string; title: string }) {
  const iconPaths: Record<string, React.ReactNode> = {
    page: <><rect x="5" y="3" width="14" height="18" rx="1" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><line x1="8" y1="8" x2="16" y2="8" stroke="#fca5a5" strokeWidth="1" /><line x1="8" y1="12" x2="16" y2="12" stroke="#fca5a5" strokeWidth="1" /><line x1="8" y1="16" x2="13" y2="16" stroke="#fca5a5" strokeWidth="1" /></>,
    storage: <><ellipse cx="12" cy="6" rx="7" ry="3" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M5 6 L5 18 C5 20 8 21 12 21 C16 21 19 20 19 18 L19 6" fill="none" stroke="#fca5a5" strokeWidth="1.5" /></>,
    key: <><circle cx="8" cy="12" r="4" fill="none" stroke="#fca5a5" strokeWidth="1.5" /><path d="M12 12 L20 12 M17 12 L17 16 M20 12 L20 15" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" /></>,
  };

  return (
    <h3 className="text-lg font-semibold text-red-200 flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {iconPaths[icon]}
      </svg>
      {title}
    </h3>
  );
}

function DividerSVG() {
  return (
    <svg viewBox="0 0 800 20" className="w-full px-8" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="10" x2="760" y2="10" stroke="#7f1d1d" strokeWidth="1" strokeDasharray="6 4" />
      <circle cx="400" cy="10" r="3" fill="#dc2626" />
    </svg>
  );
}

function y50() { return 50; }
function y100() { return 105; }

export default App;
