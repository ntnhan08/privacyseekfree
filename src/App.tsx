import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SVG Hero Header */}
      <svg
        viewBox="0 0 1200 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="1200" height="320" fill="url(#headerGrad)" />
        <rect width="1200" height="320" fill="url(#dots)" />

        {/* Decorative circles */}
        <circle cx="100" cy="80" r="60" fill="rgba(255,255,255,0.03)" />
        <circle cx="1100" cy="250" r="100" fill="rgba(255,255,255,0.03)" />
        <circle cx="900" cy="50" r="40" fill="rgba(255,255,255,0.05)" />
        <circle cx="200" cy="280" r="80" fill="rgba(255,255,255,0.02)" />

        {/* Decorative lines */}
        <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M 0 280 Q 300 250 600 280 Q 900 310 1200 280" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

        {/* Shield Icon */}
        <g transform="translate(60, 100)" filter="url(#glow)">
          <path
            d="M40 5 L75 20 L75 45 C75 70 55 88 40 95 C25 88 5 70 5 45 L5 20 Z"
            fill="url(#shieldGrad)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            opacity="0.9"
          />
          <path
            d="M30 50 L38 58 L55 38"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Lock icon */}
        <g transform="translate(1050, 80)" opacity="0.3">
          <rect x="10" y="25" width="30" height="25" rx="3" fill="white" />
          <path d="M17 25 V18 C17 12 20 8 25 8 C30 8 33 12 33 18 V25" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="25" cy="37" r="3" fill="#2563eb" />
        </g>

        {/* Key icon */}
        <g transform="translate(1080, 200)" opacity="0.2">
          <circle cx="15" cy="15" r="10" fill="none" stroke="white" strokeWidth="2" />
          <line x1="25" y1="15" x2="50" y2="15" stroke="white" strokeWidth="2" />
          <line x1="40" y1="15" x2="40" y2="22" stroke="white" strokeWidth="2" />
          <line x1="47" y1="15" x2="47" y2="22" stroke="white" strokeWidth="2" />
        </g>

        {/* Title text */}
        <text x="170" y="145" fill="white" fontSize="42" fontWeight="bold" fontFamily="system-ui, sans-serif">
          Privacy Policy
        </text>
        <text x="170" y="180" fill="rgba(255,255,255,0.8)" fontSize="16" fontFamily="system-ui, sans-serif">
          SeekFree — Microsoft Edge Extension
        </text>

        {/* Date badges */}
        <g transform="translate(170, 210)">
          <rect x="0" y="0" width="220" height="32" rx="16" fill="rgba(255,255,255,0.15)" />
          <text x="16" y="21" fill="white" fontSize="12" fontFamily="system-ui, sans-serif">
            📅 Effective: October 8, 2026
          </text>
        </g>
        <g transform="translate(400, 210)">
          <rect x="0" y="0" width="220" height="32" rx="16" fill="rgba(255,255,255,0.15)" />
          <text x="16" y="21" fill="white" fontSize="12" fontFamily="system-ui, sans-serif">
            🔄 Updated: October 8, 2026
          </text>
        </g>

        {/* Bottom wave */}
        <path
          d="M0 310 Q300 290 600 310 Q900 330 1200 310 L1200 320 L0 320 Z"
          fill="#f8fafc"
        />
      </svg>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10 pb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Introduction */}
          <div className="p-8 sm:p-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              This Privacy Policy describes how this Microsoft Edge extension ("Extension", "we", "us", or "our") accesses, uses, stores, and protects information when you install or use the Extension.
            </p>

            {/* SVG Highlight Box */}
            <svg viewBox="0 0 800 80" className="w-full mb-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eff6ff" />
                  <stop offset="100%" stopColor="#f0f9ff" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="80" rx="12" fill="url(#highlightGrad)" stroke="#bfdbfe" strokeWidth="1.5" />
              <rect x="0" y="0" width="5" height="80" rx="2" fill="#2563eb" />
              <text x="24" y="30" fill="#1e40af" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                🎯 Purpose
              </text>
              <text x="24" y="55" fill="#1e3a5f" fontSize="12" fontFamily="system-ui">
                To provide its intended functionality on the webpage currently being viewed by the user
              </text>
              <text x="24" y="72" fill="#1e3a5f" fontSize="12" fontFamily="system-ui">
                when the user explicitly activates the Extension.
              </text>
            </svg>

            <p className="text-gray-700 leading-relaxed text-lg">
              We are committed to minimizing data access and requesting only the permissions necessary for the Extension to function.
            </p>
          </div>

          {/* Divider SVG */}
          <svg viewBox="0 0 800 20" className="w-full px-8" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="10" x2="760" y2="10" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Section 1 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="1" title="Scope of This Privacy Policy" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>This Privacy Policy applies only to this Microsoft Edge Extension and its handling of information through the Extension.</p>
              <p>This Privacy Policy does not apply to websites that users visit while using Microsoft Edge. Those websites may have their own privacy policies and data-processing practices.</p>
            </div>
            {/* Warning SVG Box */}
            <svg viewBox="0 0 800 60" className="w-full mt-4" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="60" rx="10" fill="#fefce8" stroke="#fde047" strokeWidth="1" />
              <rect x="0" y="0" width="4" height="60" rx="2" fill="#eab308" />
              <text x="20" y="25" fill="#854d0e" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                ⚠️ Disclaimer
              </text>
              <text x="20" y="45" fill="#713f12" fontSize="12" fontFamily="system-ui">
                The Extension is not an official Microsoft product and is not affiliated with, endorsed by, or sponsored by Microsoft.
              </text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 2 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="2" title="Information the Extension May Access" />
            <p className="mt-4 text-gray-700 leading-relaxed">The Extension may access limited information necessary to provide its declared functionality.</p>

            {/* 2.1 */}
            <div className="mt-6">
              <SubSection icon="📄" title="2.1 Information from the active webpage" />
              <div className="ml-4 mt-3 space-y-2 text-gray-700 text-sm leading-relaxed border-l-2 border-blue-200 pl-4">
                <p>When the user explicitly activates the Extension, the Extension may access information available on the currently active webpage.</p>
                <p>This access is enabled through the <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">activeTab</code> permission and is limited to the webpage on which the user activates the Extension.</p>
                <p>The Extension does not intentionally collect unrelated browsing activity, browsing history, or information from other websites.</p>
              </div>
            </div>

            {/* 2.2 */}
            <div className="mt-6">
              <SubSection icon="💾" title="2.2 Local Extension settings" />
              <div className="ml-4 mt-3 space-y-2 text-gray-700 text-sm leading-relaxed border-l-2 border-blue-200 pl-4">
                <p>The Extension may store configuration information, preferences, or other non-sensitive settings locally using the Microsoft Edge extension storage mechanism.</p>
                <p>This functionality is provided through the <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">storage</code> permission.</p>
                <p>Examples may include: User preferences, Extension configuration, Feature settings, Other local settings required for the Extension to operate correctly.</p>
              </div>
            </div>

            {/* 2.3 - Permissions SVG Cards */}
            <div className="mt-6">
              <SubSection icon="🔑" title="2.3 Permissions used by the Extension" />
              <svg viewBox="0 0 800 240" className="w-full mt-4" xmlns="http://www.w3.org/2000/svg">
                {/* Permission 1: activeTab */}
                <rect x="0" y="0" width="800" height="70" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="35" cy="35" r="20" fill="#dbeafe" />
                <text x="28" y="40" fill="#2563eb" fontSize="16" fontFamily="system-ui">🌐</text>
                <text x="70" y="28" fill="#1e40af" fontSize="14" fontWeight="bold" fontFamily="monospace">activeTab</text>
                <text x="70" y="50" fill="#475569" fontSize="12" fontFamily="system-ui">Access the currently active webpage after user explicitly activates the Extension.</text>

                {/* Permission 2: scripting */}
                <rect x="0" y="85" width="800" height="70" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="35" cy="120" r="20" fill="#dcfce7" />
                <text x="28" y="125" fill="#16a34a" fontSize="16" fontFamily="system-ui">⚡</text>
                <text x="70" y="113" fill="#1e40af" fontSize="14" fontWeight="bold" fontFamily="monospace">scripting</text>
                <text x="70" y="135" fill="#475569" fontSize="12" fontFamily="system-ui">Execute the Extension's required script on the currently active webpage.</text>

                {/* Permission 3: storage */}
                <rect x="0" y="170" width="800" height="70" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="35" cy="205" r="20" fill="#fef3c7" />
                <text x="28" y="210" fill="#d97706" fontSize="16" fontFamily="system-ui">💿</text>
                <text x="70" y="198" fill="#1e40af" fontSize="14" fontWeight="bold" fontFamily="monospace">storage</text>
                <text x="70" y="220" fill="#475569" fontSize="12" fontFamily="system-ui">Save and retrieve Extension settings and preferences locally.</text>
              </svg>
              <p className="mt-3 text-sm text-gray-600">These permissions are requested only when necessary. The Extension does not request permissions for unrelated purposes.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 3 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="3" title="How Information Is Used" />
            <p className="mt-4 text-gray-700 leading-relaxed">Information accessed by the Extension is used only to provide the functionality described in the Microsoft Edge Add-ons listing.</p>
            <p className="mt-2 text-gray-700 leading-relaxed">Information may be processed to: Perform the Extension's primary function, Read/process relevant information from the active webpage, Execute required functionality, Save/restore user preferences, Maintain normal operation.</p>

            {/* Prohibited uses - SVG */}
            <svg viewBox="0 0 800 280" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="280" rx="12" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
              <text x="20" y="30" fill="#991b1b" fontSize="14" fontWeight="bold" fontFamily="system-ui">
                🚫 The Extension does NOT use webpage information for:
              </text>

              {/* Grid of prohibited items */}
              {['Selling user information', 'Renting user information', 'Data brokerage', 'Targeted advertising', 'Building advertising profiles', 'Tracking across websites', 'Monitoring browsing activity', 'Identifying users', 'Unrelated purposes'].map((item, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                const x = 20 + col * 260;
                const y = 50 + row * 70;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="240" height="50" rx="8" fill="white" stroke="#fecaca" strokeWidth="1" />
                    <circle cx={x + 20} cy={y + 25} r="10" fill="#fee2e2" />
                    <text x={x + 15} y={y + 30} fill="#dc2626" fontSize="12" fontFamily="system-ui">✕</text>
                    <text x={x + 38} y={y + 30} fill="#7f1d1d" fontSize="11" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <DividerSVG />

          {/* Section 4 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="4" title="Data Collection and Minimization" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>The Extension follows a <strong>data-minimization approach</strong>.</p>
              <p>The Extension does not intentionally collect personal information unless necessary for a clearly disclosed user-facing feature.</p>
              <p>The Extension does not intentionally collect or store unrelated personal information, browsing history, authentication credentials, passwords, payment information, or other sensitive information.</p>
            </div>
            {/* SVG diagram */}
            <svg viewBox="0 0 800 100" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="minGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#dcfce7" />
                  <stop offset="100%" stopColor="#bbf7d0" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="100" rx="12" fill="url(#minGrad)" stroke="#86efac" strokeWidth="1" />
              <text x="400" y="35" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="bold" fontFamily="system-ui">
                ✅ Data Minimization Principle
              </text>
              <text x="400" y="60" textAnchor="middle" fill="#14532d" fontSize="12" fontFamily="system-ui">
                Only access what's needed • Process only what's required • Store only what's necessary
              </text>
              <text x="400" y="82" textAnchor="middle" fill="#14532d" fontSize="11" fontFamily="system-ui" fontStyle="italic">
                If a future feature requires personal information, this policy will be updated first.
              </text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 5 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="5" title="Data Storage" />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Storage cards as SVG */}
              <svg viewBox="0 0 250 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="250" height="160" rx="12" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1" />
                <text x="125" y="30" textAnchor="middle" fill="#0369a1" fontSize="24">🗂️</text>
                <text x="125" y="55" textAnchor="middle" fill="#0c4a6e" fontSize="12" fontWeight="bold" fontFamily="system-ui">Local Storage</text>
                <text x="125" y="80" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">User settings &amp; preferences</text>
                <text x="125" y="100" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">stored in Edge's extension</text>
                <text x="125" y="120" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">storage mechanism</text>
                <text x="125" y="145" textAnchor="middle" fill="#0369a1" fontSize="10" fontFamily="system-ui" fontWeight="bold">5.1</text>
              </svg>

              <svg viewBox="0 0 250 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="250" height="160" rx="12" fill="#fefce8" stroke="#fde68a" strokeWidth="1" />
                <text x="125" y="30" textAnchor="middle" fill="#a16207" fontSize="24">📋</text>
                <text x="125" y="55" textAnchor="middle" fill="#713f12" fontSize="12" fontWeight="bold" fontFamily="system-ui">Webpage Info</text>
                <text x="125" y="80" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">Not permanently retained</text>
                <text x="125" y="100" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">unless explicitly required</text>
                <text x="125" y="120" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">for a disclosed feature</text>
                <text x="125" y="145" textAnchor="middle" fill="#a16207" fontSize="10" fontFamily="system-ui" fontWeight="bold">5.2</text>
              </svg>

              <svg viewBox="0 0 250 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="250" height="160" rx="12" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1" />
                <text x="125" y="30" textAnchor="middle" fill="#6d28d9" fontSize="24">⏱️</text>
                <text x="125" y="55" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="bold" fontFamily="system-ui">No Retention</text>
                <text x="125" y="80" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">Information not retained</text>
                <text x="125" y="100" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">longer than necessary</text>
                <text x="125" y="120" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="system-ui">to provide functionality</text>
                <text x="125" y="145" textAnchor="middle" fill="#6d28d9" fontSize="10" fontFamily="system-ui" fontWeight="bold">5.3</text>
              </svg>
            </div>
          </div>

          <DividerSVG />

          {/* Section 6 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="6" title="Data Transmission" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>The current version does <strong>not</strong> intentionally transmit webpage content, browsing history, personal information, or other user data to a remote server.</p>
              <p>The Extension does not sell, rent, license, or broker user data.</p>
            </div>
            {/* SVG: Future disclosure list */}
            <svg viewBox="0 0 800 200" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="200" rx="12" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
              <text x="20" y="30" fill="#166534" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                📝 If future version transmits data, this policy will disclose:
              </text>
              {['What information is transmitted', 'Why the information is transmitted', 'Where the information is transmitted', 'How the information is protected', 'How long the information is retained', 'What choices are available to the user'].map((item, i) => {
                const col = i % 2;
                const row = Math.floor(i / 2);
                const x = 30 + col * 390;
                const y = 55 + row * 45;
                return (
                  <g key={i}>
                    <circle cx={x + 10} cy={y + 5} r="10" fill="#dcfce7" />
                    <text x={x + 6} y={y + 9} fill="#16a34a" fontSize="11" fontWeight="bold" fontFamily="system-ui">{i + 1}</text>
                    <text x={x + 28} y={y + 9} fill="#14532d" fontSize="12" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <DividerSVG />

          {/* Section 7 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="7" title="Third-Party Services" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>The current version does not share user data with third-party advertising networks, data brokers, analytics providers, or other external services.</p>
              <p>Where Microsoft Edge Add-ons policies require user opt-in consent, the Extension will obtain required consent before sharing occurs.</p>
              <p>Users can withdraw permission at any time. After withdrawal, the Extension will stop relevant collection, transmission, or processing.</p>
              <p className="font-semibold">The Extension does not engage in data brokerage.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 8 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="8" title="Information Belonging to Other People" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>The Extension does not intentionally publish or provide another person's personal information to third parties.</p>
              <p>The Extension is not designed to collect personal information belonging to non-users for publication or disclosure through an external service.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 9 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="9" title="Sensitive and Highly Sensitive Information" />
            <p className="mt-4 text-gray-700 leading-relaxed">The Extension is not designed to collect, store, or transmit highly sensitive personal information.</p>

            {/* SVG: Sensitive info grid */}
            <svg viewBox="0 0 800 200" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="200" rx="12" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
              <text x="20" y="28" fill="#991b1b" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                🚫 The Extension does NOT collect:
              </text>
              {['Passwords', 'Auth credentials', 'Financial info', 'Payment cards', 'Health info', 'Gov ID numbers', 'Precise location', 'Other sensitive data'].map((item, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const x = 20 + col * 195;
                const y = 45 + row * 70;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="180" height="55" rx="8" fill="white" stroke="#fecaca" strokeWidth="1" />
                    <circle cx={x + 22} cy={y + 27} r="14" fill="#fee2e2" />
                    <text x={x + 16} y={y + 32} fill="#dc2626" fontSize="14">🚫</text>
                    <text x={x + 44} y={y + 32} fill="#7f1d1d" fontSize="11" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <DividerSVG />

          {/* Section 10 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="10" title="User Control and Choices" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>Users have control over when the Extension accesses the active webpage. Access occurs only when the user explicitly activates the Extension.</p>
            </div>
            {/* SVG: User controls */}
            <svg viewBox="0 0 800 140" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="140" rx="12" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
              <text x="20" y="28" fill="#1e40af" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                🎛️ Users can control the Extension through Microsoft Edge:
              </text>
              {[
                { icon: '⏸️', text: 'Disable the Extension' },
                { icon: '🗑️', text: 'Remove the Extension' },
                { icon: '👁️', text: 'Review permissions' },
                { icon: '⚙️', text: 'Manage access' },
              ].map((item, i) => {
                const x = 20 + i * 195;
                return (
                  <g key={i}>
                    <rect x={x} y={40} width="180" height="70" rx="8" fill="white" stroke="#bfdbfe" strokeWidth="1" />
                    <text x={x + 15} y={65} fontSize="20">{item.icon}</text>
                    <text x={x + 45} y={65} fill="#1e3a5f" fontSize="12" fontFamily="system-ui">{item.text}</text>
                  </g>
                );
              })}
            </svg>
            <p className="mt-4 text-sm text-gray-600">Users may also remove the Extension from Microsoft Edge to stop its functionality and remove its locally stored data.</p>
          </div>

          <DividerSVG />

          {/* Section 11 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="11" title="Data Security" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>We take reasonable measures to minimize the amount of information accessed and processed by the Extension.</p>
              <p>The Extension requests only permissions necessary for its declared functionality.</p>
              <p>If personal information is transmitted in a future version, appropriate modern cryptographic and secure communication mechanisms will be used.</p>
              <p>The Extension does not intentionally expose authentication credentials, financial information, or other confidential information publicly.</p>
            </div>
            {/* Security SVG illustration */}
            <svg viewBox="0 0 800 80" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ecfdf5" />
                  <stop offset="100%" stopColor="#d1fae5" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="80" rx="12" fill="url(#secGrad)" stroke="#6ee7b7" strokeWidth="1" />
              <text x="400" y="30" textAnchor="middle" fill="#065f46" fontSize="14" fontWeight="bold" fontFamily="system-ui">
                🔒 Security Commitment
              </text>
              <text x="400" y="55" textAnchor="middle" fill="#064e3b" fontSize="12" fontFamily="system-ui">
                Minimal access • Necessary permissions only • No unnecessary collection • Secure transmission when applicable
              </text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 12 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="12" title="Children's Privacy" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>The Extension is not specifically directed at children under the age of 13 and is not designed to intentionally collect personal information from children.</p>
              <p>We do not knowingly collect personal information from children for purposes unrelated to the Extension's declared functionality.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 13 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="13" title="Changes to This Privacy Policy" />
            <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
              <p>This Privacy Policy may be updated when the Extension's functionality changes, new permissions are introduced, data practices change, a third-party service is introduced, laws change, or Edge Add-ons policies are updated.</p>
              <p>When materially changed, the <strong>Last Updated</strong> date will be updated accordingly.</p>
              <p>Users should periodically review this Privacy Policy to remain informed.</p>
            </div>
          </div>

          <DividerSVG />

          {/* Section 14 - Contact */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="14" title="Contact" />
            <p className="mt-4 text-gray-700 leading-relaxed">If you have questions regarding this Privacy Policy, please contact the developer:</p>

            {/* Contact SVG Card */}
            <svg viewBox="0 0 800 180" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#f1f5f9" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="180" rx="16" fill="url(#contactGrad)" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Shield icon */}
              <g transform="translate(30, 50)">
                <path d="M30 5 L55 15 L55 35 C55 52 42 63 30 68 C18 63 5 52 5 35 L5 15 Z" fill="#2563eb" opacity="0.1" stroke="#2563eb" strokeWidth="1.5" />
                <text x="22" y="42" fill="#2563eb" fontSize="20">🛡️</text>
              </g>

              <text x="110" y="40" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1">DEVELOPER / PUBLISHER</text>
              <text x="110" y="62" fill="#1e293b" fontSize="18" fontWeight="bold" fontFamily="system-ui">Bbin</text>

              <text x="110" y="95" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1">COMPANY</text>
              <text x="110" y="117" fill="#1e293b" fontSize="18" fontWeight="bold" fontFamily="system-ui">EYECORE LABS</text>

              <text x="400" y="40" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1">EXTENSION NAME</text>
              <text x="400" y="62" fill="#1e293b" fontSize="18" fontWeight="bold" fontFamily="system-ui">SeekFree</text>

              <text x="400" y="95" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1">EMAIL</text>
              <text x="400" y="117" fill="#94a3b8" fontSize="14" fontStyle="italic" fontFamily="system-ui">None</text>

              <text x="650" y="40" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui" letterSpacing="1">POLICY URL</text>
              <text x="650" y="62" fill="#94a3b8" fontSize="14" fontStyle="italic" fontFamily="system-ui">None</text>
            </svg>
          </div>

          <DividerSVG />

          {/* Section 15 */}
          <div className="p-8 sm:p-12">
            <SectionHeader number="15" title="Compliance with Microsoft Edge Add-ons Policies" />
            <p className="mt-4 text-gray-700 leading-relaxed">This Privacy Policy describes the Extension's information-handling practices in accordance with applicable Microsoft Edge Add-ons Developer Policies.</p>

            {/* Compliance SVG Grid */}
            <svg viewBox="0 0 800 250" className="w-full mt-6" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="250" rx="12" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
              <text x="20" y="28" fill="#166534" fontSize="13" fontWeight="bold" fontFamily="system-ui">
                ✅ The Extension is designed to:
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
                const y = 45 + row * 48;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="375" height="38" rx="8" fill="white" stroke="#bbf7d0" strokeWidth="1" />
                    <circle cx={x + 20} cy={y + 19} r="11" fill="#dcfce7" />
                    <text x={x + 15} y={y + 23} fill="#16a34a" fontSize="12" fontWeight="bold">✓</text>
                    <text x={x + 40} y={y + 23} fill="#14532d" fontSize="12" fontFamily="system-ui">{item}</text>
                  </g>
                );
              })}
            </svg>

            <p className="mt-4 text-sm text-gray-600">The Extension's actual implementation must remain consistent with this Privacy Policy. If implementation changes affect user information or privacy, this policy will be updated accordingly.</p>
          </div>

          {/* Footer with link */}
          <div className="p-8 sm:p-12 bg-gray-50 border-t border-gray-100">
            <svg viewBox="0 0 800 60" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <text x="400" y="20" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="system-ui">
                Microsoft Edge Add-ons Developer Policies:
              </text>
              <text x="400" y="45" textAnchor="middle" fill="#2563eb" fontSize="12" fontFamily="system-ui" textDecoration="underline">
                https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies
              </text>
            </svg>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <svg viewBox="0 0 800 60" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
            <text x="400" y="25" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="system-ui">
              © 2026 EYECORE LABS. All rights reserved.
            </text>
            <text x="400" y="48" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="system-ui">
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
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#2563eb" opacity="0.9" />
            <circle cx="24" cy="24" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
            <path d="M24 32 L24 18 M17 24 L24 17 L31 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

// Helper components
function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="36" height="36" rx="10" fill="#dbeafe" />
        <text x="18" y="23" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="bold" fontFamily="system-ui">{number}</text>
      </svg>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}

function SubSection({ icon, title }: { icon: string; title: string }) {
  return (
    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
      <span>{icon}</span> {title}
    </h3>
  );
}

function DividerSVG() {
  return (
    <svg viewBox="0 0 800 20" className="w-full px-8" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="10" x2="760" y2="10" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
    </svg>
  );
}



export default App;
