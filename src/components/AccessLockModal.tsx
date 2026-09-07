import React, { useState } from 'react';
import { Lock, KeyRound, ShieldCheck, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface AccessLockModalProps {
  isOpen: boolean;
  correctPin: string;
  onUnlock: () => void;
  onUpdatePin: (newPin: string) => void;
}

export const AccessLockModal: React.FC<AccessLockModalProps> = ({
  isOpen,
  correctPin,
  onUnlock,
  onUpdatePin,
}) => {
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  if (!isOpen) return null;

  const handleKeypadPress = (num: string) => {
    if (pinInput.length < 6) {
      const updated = pinInput + num;
      setPinInput(updated);
      setErrorMsg('');
      if (updated === correctPin) {
        setPinInput('');
        onUnlock();
      }
    }
  };

  const handleBackspace = () => {
    setPinInput(prev => prev.slice(0, -1));
    setErrorMsg('');
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput === correctPin) {
      setPinInput('');
      setErrorMsg('');
      onUnlock();
    } else {
      setErrorMsg('Incorrect PIN. Default PIN is 1234.');
    }
  };

  const handleChangePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length < 4) {
      setErrorMsg('New PIN must be at least 4 digits.');
      return;
    }
    if (newPin !== confirmPin) {
      setErrorMsg('PINs do not match.');
      return;
    }
    onUpdatePin(newPin);
    setIsChangingPin(false);
    setNewPin('');
    setConfirmPin('');
    setErrorMsg('PIN updated successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div 
        id="access-lock-card"
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-7 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-sm shadow-blue-100">
          <Lock className="w-7 h-7 text-blue-600" />
        </div>

        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Personal Private Access
        </h2>
        <p className="text-xs text-slate-500 mt-1 mb-5">
          Enter your security PIN to access your 3-year SWE roadmap and study records.
        </p>

        {!isChangingPin ? (
          <div>
            {/* PIN Dots Indicator */}
            <div className="flex justify-center items-center gap-3 mb-4">
              {[0, 1, 2, 3].map((index) => {
                const filled = pinInput.length > index;
                return (
                  <div
                    key={index}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                      filled
                        ? 'bg-blue-600 scale-110 shadow-sm shadow-blue-300'
                        : 'bg-slate-200 border border-slate-300'
                    }`}
                  />
                );
              })}
            </div>

            {/* Input field with toggle */}
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="relative max-w-[200px] mx-auto">
                <input
                  id="lock-pin-input"
                  type={showPin ? 'text' : 'password'}
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setPinInput(val);
                    setErrorMsg('');
                    if (val === correctPin) {
                      onUnlock();
                    }
                  }}
                  placeholder="Enter PIN"
                  className="w-full text-center tracking-widest text-lg font-mono py-2 px-3 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 bg-white"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-2 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </form>

            {/* Numeric Keypad for convenient touch screen access */}
            <div className="grid grid-cols-3 gap-2 max-w-[230px] mx-auto mb-4">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <button
                  key={num}
                  id={`keypad-${num}`}
                  type="button"
                  onClick={() => handleKeypadPress(num)}
                  className="h-11 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-base font-semibold text-slate-800 transition-colors"
                >
                  {num}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPinInput('')}
                className="h-11 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-500 border border-slate-200"
              >
                Clear
              </button>
              <button
                id="keypad-0"
                type="button"
                onClick={() => handleKeypadPress('0')}
                className="h-11 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-base font-semibold text-slate-800 transition-colors"
              >
                0
              </button>
              <button
                id="keypad-backspace"
                type="button"
                onClick={handleBackspace}
                className="h-11 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200"
              >
                ⌫
              </button>
            </div>

            {errorMsg && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-rose-600 mb-3 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] text-slate-400">Default PIN: <strong>1234</strong></span>
              <button
                id="lock-change-pin-btn"
                type="button"
                onClick={() => {
                  setIsChangingPin(true);
                  setErrorMsg('');
                }}
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
              >
                <KeyRound className="w-3 h-3" />
                Change PIN
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleChangePinSubmit} className="text-left space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">New PIN (4 digits)</label>
              <input
                type="password"
                maxLength={6}
                value={newPin}
                onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
                placeholder="e.g. 5678"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Confirm New PIN</label>
              <input
                type="password"
                maxLength={6}
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, ''))}
                placeholder="Re-enter new PIN"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 bg-white"
                required
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-600 font-medium">{errorMsg}</p>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsChangingPin(false)}
                className="flex-1 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-200"
              >
                Save New PIN
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
