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
      <div className="mb-8">
        <div
          role="tablist"
          aria-label="Partner options"
          className="inline-flex max-w-full p-1 rounded-full glass"
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
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-[15px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive ? 'glass-ink' : 'border border-transparent text-soft hover:text-fg'
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
              className={isActive ? 'animate-[fade_0.25s_ease_both]' : 'hidden'}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
