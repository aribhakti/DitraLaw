import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastContainerProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-24 right-4 z-[130] flex flex-col gap-4 pointer-events-none">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className="pointer-events-auto min-w-[300px] bg-white dark:bg-surface-dark border-l-4 shadow-lg rounded-r-sm p-4 flex items-start gap-3 animate-fade-in-up transition-all duration-300 transform"
          style={{
            borderColor: toast.type === 'success' ? '#22c55e' : toast.type === 'error' ? '#ef4444' : '#3b82f6'
          }}
        >
          <div className={`mt-0.5 ${
            toast.type === 'success' ? 'text-green-500' : 
            toast.type === 'error' ? 'text-red-500' : 'text-blue-500'
          }`}>
            {toast.type === 'success' && <CheckCircle size={20} />}
            {toast.type === 'error' && <AlertCircle size={20} />}
            {toast.type === 'info' && <Info size={20} />}
          </div>
          <div className="flex-1">
            <p className="text-primary dark:text-white text-sm font-medium leading-relaxed">
              {toast.message}
            </p>
          </div>
          <button 
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};