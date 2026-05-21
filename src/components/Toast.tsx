"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface Toast {
  id: string;
  type: "success" | "error";
  title: string;
  description?: string;
  exiting?: boolean;
}

interface ToastContextType {
  showToast: (type: "success" | "error", title: string, description?: string) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, exiting: true } : toast))
    );
    // Wait for the exit animation (300ms) before completely removing from DOM
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  }, []);

  const showToast = useCallback((type: "success" | "error", title: string, description?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, description }]);
    
    // Auto-remove after 4000ms
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }: { toasts: Toast[]; removeToast: (id: string) => void }) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 380px;
          width: calc(100% - 48px);
          pointer-events: none;
        }

        .custom-toast-item {
          pointer-events: auto;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: all 0.3s ease;
          border-left: 5px solid transparent;
        }

        @keyframes toastSlideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .custom-toast-item.exiting {
          animation: toastSlideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes toastSlideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(120%);
            opacity: 0;
          }
        }

        .custom-toast-item.success {
          background: rgba(255, 255, 255, 0.95);
          border-left-color: #10b981;
        }

        .custom-toast-item.error {
          background: rgba(255, 255, 255, 0.95);
          border-left-color: #ef4444;
        }

        [data-theme="dark"] .custom-toast-item {
          background: rgba(24, 24, 27, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .custom-toast-icon {
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .custom-toast-item.success .custom-toast-icon {
          color: #10b981;
        }

        .custom-toast-item.error .custom-toast-icon {
          color: #ef4444;
        }

        .custom-toast-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .custom-toast-title {
          font-weight: 600;
          font-size: 14px;
          color: #1f2937;
          margin: 0;
          line-height: 1.4;
        }

        [data-theme="dark"] .custom-toast-title {
          color: #f3f4f6;
        }

        .custom-toast-desc {
          font-size: 13px;
          color: #4b5563;
          margin: 0;
          line-height: 1.4;
        }

        [data-theme="dark"] .custom-toast-desc {
          color: #d1d5db;
        }

        .custom-toast-close {
          background: transparent;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 4px;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-top: -2px;
          margin-right: -8px;
        }

        .custom-toast-close:hover {
          background: rgba(0, 0, 0, 0.05);
          color: #4b5563;
        }

        [data-theme="dark"] .custom-toast-close:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #f3f4f6;
        }

        .custom-toast-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
          animation: progressShrink 4s linear forwards;
        }

        .custom-toast-item.success .custom-toast-progress {
          background: linear-gradient(90deg, #10b981, #34d399);
        }

        .custom-toast-item.error .custom-toast-progress {
          background: linear-gradient(90deg, #ef4444, #f87171);
        }

        @keyframes progressShrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      ` }} />
      <div className="custom-toast-container">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`custom-toast-item ${toast.type} ${toast.exiting ? "exiting" : ""}`}
          >
            <div className="custom-toast-icon">
              {toast.type === "success" ? (
                <i className="ri-checkbox-circle-fill"></i>
              ) : (
                <i className="ri-error-warning-fill"></i>
              )}
            </div>
            <div className="custom-toast-content">
              <h5 className="custom-toast-title">{toast.title}</h5>
              {toast.description && <p className="custom-toast-desc">{toast.description}</p>}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="custom-toast-close"
              aria-label="Close toast"
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="custom-toast-progress" />
          </div>
        ))}
      </div>
    </>
  );
};
