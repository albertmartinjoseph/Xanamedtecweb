'use client';

import React, { useState, useRef } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id || ''
  );
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow key navigation between tabs per WCAG tabs pattern and spec
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[newIndex];
    if (nextTab) {
      setActiveTab(nextTab.id);
      buttonRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab toggle buttons */}
      <div className="flex justify-center mb-8">
        <div
          role="tablist"
          aria-label="Partner options"
          className="inline-flex p-1.5 bg-[#F8F9FA] rounded-[30px] border border-gray-200/70 shadow-inner"
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  buttonRefs.current[idx] = el;
                }}
                id={`tab-${tab.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`px-6 sm:px-8 py-2.5 rounded-[24px] text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20B2AA] ${
                  isActive
                    ? 'bg-[#002D62] text-white shadow-md'
                    : 'text-[#606367] hover:text-[#002D62]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels (rendered in DOM for SEO & instant cross-fade) */}
      <div className="relative">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              className={`transition-all duration-300 ${
                isActive
                  ? 'block opacity-100 animate-in fade-in duration-200'
                  : 'hidden opacity-0'
              }`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
