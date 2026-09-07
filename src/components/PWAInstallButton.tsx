import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { AndroidInstallModal } from './AndroidInstallModal';
import { Smartphone, CheckCircle } from 'lucide-react';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'navbar';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'navbar',
}) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If already installed and running standalone
  if (isInstalled) {
    return (
      <div 
        id="pwa-installed-badge"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold"
      >
        <CheckCircle className="w-3.5 h-3.5" />
        <span>Installed on Phone</span>
      </div>
    );
  }

  const handleClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (!accepted) {
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(true);
    }
  };

  const buttonStyles = {
    navbar: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors shadow-xs",
    primary: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200 transition-colors",
    secondary: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors",
  }[variant];

  return (
    <>
      <button
        id="download-android-app-btn"
        type="button"
        onClick={handleClick}
        className={`${buttonStyles} ${className}`}
        title="Download / Install this app on your Android phone"
      >
        <Smartphone className="w-3.5 h-3.5 text-blue-600 group-hover:scale-105 transition-transform" />
        <span>Download on Android</span>
      </button>

      <AndroidInstallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNativeInstall={install}
        isNativeInstallable={isInstallable}
      />
    </>
  );
};
