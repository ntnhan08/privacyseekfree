import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'scope', title: '1. Scope of This Privacy Policy' },
    { id: 'information-access', title: '2. Information the Extension May Access' },
    { id: 'how-used', title: '3. How Information Is Used' },
    { id: 'data-collection', title: '4. Data Collection and Minimization' },
    { id: 'data-storage', title: '5. Data Storage' },
    { id: 'data-transmission', title: '6. Data Transmission' },
    { id: 'third-party', title: '7. Third-Party Services' },
    { id: 'other-people', title: '8. Information Belonging to Other People' },
    { id: 'sensitive', title: '9. Sensitive and Highly Sensitive Information' },
    { id: 'user-control', title: '10. User Control and Choices' },
    { id: 'data-security', title: '11. Data Security' },
    { id: 'children', title: "12. Children's Privacy" },
    { id: 'changes', title: '13. Changes to This Privacy Policy' },
    { id: 'contact', title: '14. Contact' },
    { id: 'compliance', title: '15. Compliance with Microsoft Edge Add-ons Policies' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
              <p className="text-blue-100 mt-1 text-sm sm:text-base">SeekFree — Microsoft Edge Extension</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
              📅 Effective Date: October 8, 2026
            </span>
            <span className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
              🔄 Last Updated: October 8, 2026
            </span>
          </div>
        </div>
      </header>

      {/* Mobile TOC Toggle */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full px-4 py-3 flex items-center justify-between text-gray-700 font-medium"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Table of Contents
          </span>
          <svg className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileMenuOpen && (
          <nav className="px-4 pb-4 max-h-80 overflow-y-auto">
            <ul className="space-y-1">
              {sections.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === s.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-8">
              <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  Table of Contents
                </h3>
                <ul className="space-y-0.5">
                  {sections.map(s => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollToSection(s.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          activeSection === s.id
                            ? 'bg-blue-50 text-blue-700 font-medium border-l-3 border-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10">
              {/* Introduction */}
              <div className="mb-10">
                <p className="text-gray-700 leading-relaxed text-base">
                  This Privacy Policy describes how this Microsoft Edge extension ("Extension", "we", "us", or "our") accesses, uses, stores, and protects information when you install or use the Extension.
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-blue-800 font-medium text-sm">
                    🎯 The Extension is designed for a single, clearly defined purpose: <strong>to provide its intended functionality on the webpage currently being viewed by the user when the user explicitly activates the Extension.</strong>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base mt-4">
                  We are committed to minimizing data access and requesting only the permissions necessary for the Extension to function.
                </p>
              </div>

              <hr className="border-gray-200 mb-10" />

              {/* Section 1 */}
              <section id="scope" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                  Scope of This Privacy Policy
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>This Privacy Policy applies only to this Microsoft Edge Extension and its handling of information through the Extension.</p>
                  <p>This Privacy Policy does not apply to websites that users visit while using Microsoft Edge. Those websites may have their own privacy policies and data-processing practices.</p>
                  <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      ⚠️ The Extension is not an official Microsoft product and is not affiliated with, endorsed by, or sponsored by Microsoft.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="information-access" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                  Information the Extension May Access
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">The Extension may access limited information necessary to provide its declared functionality.</p>

                {/* 2.1 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">📄</span> 2.1 Information from the active webpage
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-100">
                    <p>When the user explicitly activates the Extension, the Extension may access information available on the currently active webpage.</p>
                    <p>This access is enabled through the <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-blue-700">activeTab</code> permission and is limited to the webpage on which the user activates the Extension.</p>
                    <p>The Extension does not intentionally collect unrelated browsing activity, browsing history, or information from other websites.</p>
                    <p>The Extension only accesses webpage information that is necessary to perform the Extension's stated functionality.</p>
                  </div>
                </div>

                {/* 2.2 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">💾</span> 2.2 Local Extension settings
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-100">
                    <p>The Extension may store configuration information, preferences, or other non-sensitive settings locally using the Microsoft Edge extension storage mechanism.</p>
                    <p>This functionality is provided through the <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono text-blue-700">storage</code> permission.</p>
                    <p>Examples may include:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>User preferences</li>
                      <li>Extension configuration</li>
                      <li>Feature settings</li>
                      <li>Other local settings required for the Extension to operate correctly</li>
                    </ul>
                    <p>The exact information stored depends on the functionality and settings available in the Extension.</p>
                  </div>
                </div>

                {/* 2.3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">🔑</span> 2.3 Permissions used by the Extension
                  </h3>
                  <div className="space-y-4 pl-4 border-l-2 border-blue-100">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <code className="text-blue-700 font-mono font-bold text-sm">activeTab</code>
                      <p className="text-gray-700 mt-2 text-sm">Used to allow the Extension to access the currently active webpage after the user explicitly activates the Extension.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <code className="text-blue-700 font-mono font-bold text-sm">scripting</code>
                      <p className="text-gray-700 mt-2 text-sm">Used to execute the Extension's required script on the currently active webpage in order to provide its declared functionality.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <code className="text-blue-700 font-mono font-bold text-sm">storage</code>
                      <p className="text-gray-700 mt-2 text-sm">Used to save and retrieve Extension settings and preferences locally.</p>
                    </div>
                    <p className="text-gray-700 text-sm">These permissions are requested only when they are necessary for the Extension's functionality. The Extension does not request permissions solely for future features or purposes unrelated to its current functionality.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="how-used" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                  How Information Is Used
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">Information accessed by the Extension is used only to provide the functionality described in the Microsoft Edge Add-ons listing and within the Extension.</p>
                <p className="text-gray-700 leading-relaxed mb-3">Information may be processed to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 mb-6">
                  <li>Perform the Extension's primary function</li>
                  <li>Read or process relevant information from the currently active webpage</li>
                  <li>Execute the required functionality on the active webpage</li>
                  <li>Save and restore user preferences</li>
                  <li>Maintain the Extension's normal operation</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">The Extension does <strong>not</strong> use information accessed from webpages for unrelated purposes.</p>
                <p className="text-gray-700 leading-relaxed mb-3">In particular, the Extension does not use webpage information for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Selling user information',
                    'Renting user information',
                    'Data brokerage',
                    'Targeted advertising',
                    'Building advertising profiles',
                    'Tracking users across unrelated websites',
                    'Monitoring browsing activity for unrelated purposes',
                    'Identifying users for unrelated purposes',
                    'Any other purpose unrelated to the Extension\'s declared functionality',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-red-700 bg-red-50 px-3 py-2 rounded-lg">
                      <svg className="w-4 h-4 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 */}
              <section id="data-collection" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                  Data Collection and Minimization
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>The Extension follows a <strong>data-minimization approach</strong>.</p>
                  <p>The Extension does not intentionally collect personal information unless such information is necessary for a clearly disclosed user-facing feature.</p>
                  <p>When webpage information is accessed, the Extension processes only the information reasonably necessary to perform the requested functionality.</p>
                  <p>The Extension does not intentionally collect or store unrelated personal information, browsing history, authentication credentials, passwords, payment information, or other sensitive information.</p>
                  <p>If a future feature requires the collection of personal information, the Extension's data practices and this Privacy Policy will be updated before that feature is introduced.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="data-storage" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                  Data Storage
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">🗂️</span> 5.1 Local storage
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-100">
                    <p>The Extension may use Microsoft Edge's extension storage functionality to store user settings and preferences.</p>
                    <p>Information stored locally remains associated with the Extension's local storage environment unless the Extension explicitly implements a feature that transfers such information elsewhere.</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">📋</span> 5.2 Webpage information
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-100">
                    <p>Webpage information accessed while performing the Extension's functionality is not intentionally retained permanently unless permanent storage is explicitly required for a clearly disclosed feature.</p>
                    <p>Temporary processing of webpage information may occur while the Extension is performing its requested functionality.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">⏱️</span> 5.3 No unnecessary retention
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-100">
                    <p>The Extension does not intentionally retain information for longer than necessary to provide its functionality.</p>
                    <p>If a feature requires persistent storage of user information in the future, the purpose, type of information, retention period, and user controls will be clearly disclosed.</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="data-transmission" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                  Data Transmission
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>The current version of the Extension does not intentionally transmit webpage content, browsing history, personal information, authentication credentials, or other user data to a remote server for unrelated purposes.</p>
                  <p>The Extension does not sell, rent, license, or broker user data.</p>
                  <p>If a future version introduces a feature that requires transmitting user data to a server, this Privacy Policy will be updated to clearly disclose:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>What information is transmitted</li>
                    <li>Why the information is transmitted</li>
                    <li>Where the information is transmitted</li>
                    <li>How the information is protected</li>
                    <li>How long the information is retained</li>
                    <li>What choices and controls are available to the user</li>
                  </ol>
                  <p>Any transmission of personal information will use appropriate modern security mechanisms.</p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="third-party" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">7</span>
                  Third-Party Services
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>The current version of the Extension does not intentionally share user data with third-party advertising networks, data brokers, analytics providers, or other external services for purposes unrelated to the Extension's functionality.</p>
                  <p>If a future version uses a third-party service that processes user data, the relevant third-party service and its purpose will be clearly disclosed in this Privacy Policy.</p>
                  <p>Where Microsoft Edge Add-ons policies require user opt-in consent before sharing user data with a third party, the Extension will obtain the required consent before such sharing occurs.</p>
                  <p>Where applicable, the Extension will also provide a mechanism allowing the user to withdraw that permission.</p>
                  <p>After a user withdraws permission for an applicable third-party data-sharing activity, the Extension will stop the relevant collection, transmission, or processing as required by the applicable Microsoft Edge Add-ons policies.</p>
                  <p className="font-medium">The Extension does not engage in data brokerage.</p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="other-people" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">8</span>
                  Information Belonging to Other People
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>The Extension does not intentionally publish or provide another person's personal information to third parties.</p>
                  <p>The Extension is not designed to collect personal information belonging to non-users for publication or disclosure through an external service.</p>
                  <p>If a future feature involves such functionality, appropriate consent and disclosure requirements will be implemented before the feature is made available.</p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="sensitive" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">9</span>
                  Sensitive and Highly Sensitive Information
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>The Extension is not designed to collect, store, or transmit highly sensitive personal information.</p>
                  <p>The Extension does not intentionally request or collect:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
                    {[
                      'Passwords',
                      'Authentication credentials',
                      'Financial account information',
                      'Payment card information',
                      'Health information',
                      'Government identification numbers',
                      'Precise location information',
                      'Other highly sensitive personal information',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-red-700 bg-red-50 px-3 py-2 rounded-lg">
                        <svg className="w-4 h-4 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p>If a future feature requires access to highly sensitive information, the functionality will be separately disclosed and the required user consent will be obtained before such information is collected, stored, or transmitted.</p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="user-control" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">10</span>
                  User Control and Choices
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>Users have control over when the Extension accesses the active webpage.</p>
                  <p>The Extension's webpage access occurs when the user explicitly activates the Extension.</p>
                  <p>Users can control the Extension through Microsoft Edge's extension management features, including the ability to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Disable the Extension</li>
                    <li>Remove the Extension</li>
                    <li>Review the permissions requested by the Extension</li>
                    <li>Manage the Extension's access through Microsoft Edge</li>
                  </ul>
                  <p>Where the Extension provides settings for stored information, users can modify or reset those settings through the Extension's available controls.</p>
                  <p>Users may also remove the Extension from Microsoft Edge to stop its functionality and remove its locally stored extension data as handled by the browser.</p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="data-security" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">11</span>
                  Data Security
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>We take reasonable measures to minimize the amount of information accessed and processed by the Extension.</p>
                  <p>The Extension requests only permissions necessary for its declared functionality.</p>
                  <p>The Extension is designed to avoid unnecessary collection, storage, and transmission of user information.</p>
                  <p>If personal information is transmitted in a future version of the Extension, appropriate modern cryptographic and secure communication mechanisms will be used to protect the information during transmission and storage, where applicable.</p>
                  <p>The Extension does not intentionally expose authentication credentials, financial information, or other confidential information publicly.</p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="children" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">12</span>
                  Children's Privacy
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>The Extension is not specifically directed at children under the age of 13 and is not designed to intentionally collect personal information from children.</p>
                  <p>We do not knowingly collect personal information from children for purposes unrelated to the Extension's declared functionality.</p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="changes" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">13</span>
                  Changes to This Privacy Policy
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>This Privacy Policy may be updated when:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>The Extension's functionality changes</li>
                    <li>New permissions are introduced</li>
                    <li>Data collection or processing practices change</li>
                    <li>A third-party service is introduced</li>
                    <li>Applicable laws or regulations change</li>
                    <li>Microsoft Edge Add-ons policies are updated</li>
                  </ul>
                  <p>When this Privacy Policy is materially changed, the <strong>Last Updated</strong> date at the top of this document will be updated accordingly.</p>
                  <p>The privacy policy will be kept consistent with the Extension's actual functionality and data-handling practices.</p>
                  <p>Users should periodically review this Privacy Policy to remain informed about how the Extension handles information.</p>
                </div>
              </section>

              {/* Section 14 */}
              <section id="contact" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">14</span>
                  Contact
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or the Extension's handling of information, please contact the developer:</p>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Developer / Publisher</dt>
                      <dd className="text-gray-800 font-medium mt-1">Bbin</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company</dt>
                      <dd className="text-gray-800 font-medium mt-1">EYECORE LABS</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Extension Name</dt>
                      <dd className="text-gray-800 font-medium mt-1">SeekFree</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</dt>
                      <dd className="text-gray-500 mt-1 italic">None</dd>
                    </div>
                  </dl>
                </div>
              </section>

              {/* Section 15 */}
              <section id="compliance" className="mb-10 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">15</span>
                  Compliance with Microsoft Edge Add-ons Policies
                </h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>This Privacy Policy is intended to describe the Extension's information-handling practices in accordance with the applicable Microsoft Edge Add-ons Developer Policies.</p>
                  <p>The Extension is designed to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
                    {[
                      'Have a single and clearly defined purpose',
                      'Request only permissions necessary for its declared functionality',
                      'Minimize access to personal information',
                      'Clearly disclose its data-handling practices',
                      'Provide users with appropriate control over the Extension',
                      'Avoid unauthorized data sharing',
                      'Avoid data brokerage',
                      'Use appropriate security measures when personal information is transmitted',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                        <svg className="w-4 h-4 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p>The Extension's actual implementation, permissions, metadata, and data-handling practices must remain consistent with this Privacy Policy.</p>
                  <p>If the Extension's implementation changes in a way that affects user information or privacy, this Privacy Policy will be updated accordingly.</p>
                </div>
              </section>

              {/* Footer Link */}
              <hr className="border-gray-200 my-10" />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Microsoft Edge Add-ons Developer Policies:</p>
                <a
                  href="https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center text-sm text-gray-400 pb-8">
              <p>© 2026 EYECORE LABS. All rights reserved.</p>
              <p className="mt-1">SeekFree Extension — Privacy Policy</p>
            </footer>
          </main>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
