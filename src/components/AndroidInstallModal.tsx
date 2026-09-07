import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  X, 
  Smartphone, 
  Download, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck, 
  WifiOff, 
  Zap,
  MoreVertical,
  QrCode,
  AlertTriangle,
  Share2,
  HelpCircle
} from 'lucide-react';

interface AndroidInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNativeInstall?: () => Promise<boolean>;
  isNativeInstallable?: boolean;
}

export const AndroidInstallModal: React.FC<AndroidInstallModalProps> = ({
  isOpen,
  onClose,
  onNativeInstall,
  isNativeInstallable = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'qr' | 'guide' | 'troubleshoot'>('qr');
  const [isInIframe, setIsInIframe] = useState(false);
  const [canShare, setCanShare] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
    } catch {
      setIsInIframe(true);
    }
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SOFTWARE ENGINEERING ROADMAP- MISSION GERMANY',
          text: 'Open this link in Chrome on Android to install the SWE Roadmap app:',
          url: currentUrl,
        });
      } catch {
        // User canceled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  const handleOpenInNewTab = () => {
    window.open(currentUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectInstall = async () => {
    if (onNativeInstall && isNativeInstallable) {
      const result = await onNativeInstall();
      if (result) {
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4">
      <div 
        id="android-install-guide-modal"
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-200">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Install on Android Phone
              </h3>
              <p className="text-xs text-slate-500">
                Install as a full-screen home screen app (PWA)
              </p>
            </div>
          </div>
          <button
            id="close-android-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe warning if currently running inside AI Studio preview iframe */}
        {isInIframe && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-start gap-2.5 text-xs text-amber-900 shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-bold block">Notice: You are in the AI Studio preview frame.</span>
              <p className="mt-0.5 text-amber-800">
                Browsers block PWA installation inside iframes. Open this in a direct browser tab or scan the QR code with your Android phone.
              </p>
              <button
                type="button"
                onClick={handleOpenInNewTab}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-2xs transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Direct Tab</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab switchers */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50/50 shrink-0 gap-1 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('qr')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'qr'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Scan QR Code</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'guide'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Chrome Install Steps</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('troubleshoot')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'troubleshoot'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Why Not Working?</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* TAB 1: QR CODE */}
          {activeTab === 'qr' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs shrink-0 flex items-center justify-center">
                  <QRCodeSVG 
                    value={currentUrl} 
                    size={150}
                    level="M"
                    includeMargin={false}
                  />
                </div>
                <div className="text-center sm:text-left space-y-2 flex-1">
                  <span className="text-xs font-bold text-slate-900 block">
                    Instant Android Setup
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    1. Open your Android phone's <strong>Camera</strong> or <strong>Google Lens</strong>.<br />
                    2. Point it at this QR code.<br />
                    3. Tap the link to open directly in <strong>Google Chrome</strong>.<br />
                    4. Tap <strong>"Install app"</strong> when prompted.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button
                      type="button"
                      onClick={handleOpenInNewTab}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center gap-1.5 shadow-2xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Browser Tab</span>
                    </button>
                    {canShare && (
                      <button
                        type="button"
                        onClick={handleShare}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Send to Phone</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Direct link copy */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Direct URL (open this in Android Chrome):
                </span>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value={currentUrl}
                    className="flex-1 text-xs px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 font-mono truncate select-all"
                  />
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 shrink-0 inline-flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STEP-BY-STEP CHROME GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-4">
              {isNativeInstallable && (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-blue-900 block">
                      Direct Install Available!
                    </span>
                    <span className="text-xs text-blue-700">
                      Tap below to install directly onto this device.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDirectInstall}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-2xs inline-flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Install Now</span>
                  </button>
                </div>
              )}

              <div className="space-y-3">
                {/* Step 1 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">
                      Open in Google Chrome on your Android phone
                    </span>
                    <span className="text-slate-500 leading-relaxed block mt-0.5">
                      Must be opened in standard <strong>Google Chrome</strong> (not in an embedded in-app browser like Facebook, WhatsApp, or Instagram).
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div className="text-xs">
                    <div className="flex items-center gap-1 font-bold text-slate-900">
                      <span>Tap Chrome Menu</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-700">
                        <MoreVertical className="w-3 h-3 inline mr-0.5" /> 3 dots
                      </span>
                      <span>in top-right</span>
                    </div>
                    <span className="text-slate-500 leading-relaxed block mt-0.5">
                      Tap the three vertical dots located at the top-right of your Chrome browser address bar.
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div className="text-xs">
                    <div className="flex items-center gap-1.5 flex-wrap font-bold text-slate-900">
                      <span>Tap</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        <Download className="w-3 h-3" /> "Install app"
                      </span>
                      <span>or</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        "Add to Home screen"
                      </span>
                    </div>
                    <span className="text-slate-500 leading-relaxed block mt-0.5">
                      Confirm installation. The app icon will be placed directly onto your Android Home screen and App Drawer!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TROUBLESHOOTING */}
          {activeTab === 'troubleshoot' && (
            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">
                  1. "Why doesn't the Install button do anything when I click it?"
                </span>
                <p className="text-slate-600 leading-relaxed">
                  If you are testing inside Google AI Studio, the application runs inside an <code>&lt;iframe&gt;</code>. Security rules built into Chrome, Android, and iOS forbid web applications from prompting app installation from inside an iframe. Click <strong>"Open in Browser Tab"</strong> at the bottom to test it in a full window.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">
                  2. "Are you looking for an .APK file?"
                </span>
                <p className="text-slate-600 leading-relaxed">
                  This app uses modern <strong>Progressive Web App (PWA)</strong> technology. PWAs install directly to your Android device without needing an untrusted .apk download or Google Play Store developer account. Once installed, it behaves like a native app with offline caching, local data persistence, and zero storage bloat.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">
                  3. "I opened it from WhatsApp/Messenger and can't install"
                </span>
                <p className="text-slate-600 leading-relaxed">
                  In-app webviews (like WhatsApp, Facebook, or Instagram browsers) disable PWA installation. In the top corner of the in-app view, tap the 3 dots and choose <strong>"Open in Chrome"</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Native PWA Benefits Badge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <Zap className="w-4 h-4 mx-auto text-blue-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-800 block">No App Store Needed</span>
              <span className="text-[10px] text-slate-400">Installs in seconds</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <WifiOff className="w-4 h-4 mx-auto text-blue-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-800 block">Works Offline</span>
              <span className="text-[10px] text-slate-400">Full study syllabus cached</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <ShieldCheck className="w-4 h-4 mx-auto text-blue-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-800 block">Encrypted Locally</span>
              <span className="text-[10px] text-slate-400">Your custom PIN security</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
          <button
            type="button"
            onClick={handleOpenInNewTab}
            className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in Full Tab</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 shadow-2xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

