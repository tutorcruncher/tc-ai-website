"use client";

import { useCallback, useEffect, useState } from "react";

interface ColorSetting {
  label: string;
  cssVar: string;
  defaultValue: string;
}

interface FontSetting {
  label: string;
  cssVar: string;
  options: { label: string; value: string }[];
  defaultValue: string;
}

const COLOR_SETTINGS: ColorSetting[] = [
  { label: "Primary", cssVar: "--color-primary", defaultValue: "#1F374E" },
  { label: "Accent", cssVar: "--background-color-primary", defaultValue: "#76ef92" },
  { label: "Link", cssVar: "--color-link", defaultValue: "#3B82F6" },
  { label: "Muted", cssVar: "--color-muted", defaultValue: "#9CA3AF" },
  { label: "Muted Dark", cssVar: "--color-muted-dark", defaultValue: "#6B7280" },
  { label: "Page Background", cssVar: "--background-color-page", defaultValue: "#eff5ff" },
  { label: "Content Background", cssVar: "--background-color-content", defaultValue: "#f9fafc" },
  { label: "Border", cssVar: "--border-color-default", defaultValue: "#E5E7EB" },
];

const FONT_SETTINGS: FontSetting[] = [
  {
    label: "Heading Font",
    cssVar: "--font-heading",
    options: [
      { label: "Sentient", value: '"Sentient", Georgia, "Times New Roman", serif' },
      { label: "Halyard Display", value: '"halyard-display", system-ui, sans-serif' },
      { label: "Georgia", value: 'Georgia, "Times New Roman", serif' },
      { label: "Inter", value: '"Inter", system-ui, sans-serif' },
      { label: "System UI", value: "system-ui, -apple-system, sans-serif" },
      { label: "Playfair Display", value: '"Playfair Display", Georgia, serif' },
    ],
    defaultValue: '"Sentient", Georgia, "Times New Roman", serif',
  },
];

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsSidebar({ isOpen, onClose }: SettingsSidebarProps) {
  const [colors, setColors] = useState<Record<string, string>>({});
  const [fonts, setFonts] = useState<Record<string, string>>({});

  // Load current values on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);

    const initialColors: Record<string, string> = {};
    COLOR_SETTINGS.forEach((setting) => {
      const value = computedStyle.getPropertyValue(setting.cssVar).trim();
      initialColors[setting.cssVar] = value || setting.defaultValue;
    });
    setColors(initialColors);

    const initialFonts: Record<string, string> = {};
    FONT_SETTINGS.forEach((setting) => {
      const value = computedStyle.getPropertyValue(setting.cssVar).trim();
      initialFonts[setting.cssVar] = value || setting.defaultValue;
    });
    setFonts(initialFonts);
  }, []);

  const handleColorChange = useCallback((cssVar: string, value: string) => {
    setColors((prev) => ({ ...prev, [cssVar]: value }));
    document.documentElement.style.setProperty(cssVar, value);
  }, []);

  const handleFontChange = useCallback((cssVar: string, value: string) => {
    setFonts((prev) => ({ ...prev, [cssVar]: value }));
    document.documentElement.style.setProperty(cssVar, value);
  }, []);

  const handleReset = useCallback(() => {
    COLOR_SETTINGS.forEach((setting) => {
      document.documentElement.style.setProperty(setting.cssVar, setting.defaultValue);
    });
    FONT_SETTINGS.forEach((setting) => {
      document.documentElement.style.setProperty(setting.cssVar, setting.defaultValue);
    });

    const resetColors: Record<string, string> = {};
    COLOR_SETTINGS.forEach((setting) => {
      resetColors[setting.cssVar] = setting.defaultValue;
    });
    setColors(resetColors);

    const resetFonts: Record<string, string> = {};
    FONT_SETTINGS.forEach((setting) => {
      resetFonts[setting.cssVar] = setting.defaultValue;
    });
    setFonts(resetFonts);
  }, []);

  const handleExport = useCallback(() => {
    const css = `:root {\n${COLOR_SETTINGS.map(
      (s) => `  ${s.cssVar}: ${colors[s.cssVar] || s.defaultValue};`
    ).join("\n")}\n${FONT_SETTINGS.map(
      (s) => `  ${s.cssVar}: ${fonts[s.cssVar] || s.defaultValue};`
    ).join("\n")}\n}`;

    navigator.clipboard.writeText(css);
    alert("CSS copied to clipboard!");
  }, [colors, fonts]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[101] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-default">
            <h2 className="font-heading text-lg font-semibold text-primary">Theme Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close settings"
            >
              <svg
                className="w-5 h-5 text-muted-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Fonts Section */}
            <section>
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                Fonts
              </h3>
              <div className="space-y-4">
                {FONT_SETTINGS.map((setting) => (
                  <div key={setting.cssVar}>
                    <label className="block text-sm text-muted-dark mb-1.5">{setting.label}</label>
                    <select
                      value={fonts[setting.cssVar] || setting.defaultValue}
                      onChange={(e) => handleFontChange(setting.cssVar, e.target.value)}
                      className="w-full px-3 py-2 border border-default rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {setting.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p
                      className="mt-2 text-lg"
                      style={{ fontFamily: fonts[setting.cssVar] || setting.defaultValue }}
                    >
                      Preview Text
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Colors Section */}
            <section>
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                Colors
              </h3>
              <div className="space-y-3">
                {COLOR_SETTINGS.map((setting) => (
                  <div key={setting.cssVar} className="flex items-center gap-3">
                    <input
                      type="color"
                      value={colors[setting.cssVar] || setting.defaultValue}
                      onChange={(e) => handleColorChange(setting.cssVar, e.target.value)}
                      className="w-10 h-10 rounded-lg border border-default cursor-pointer"
                    />
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-primary">
                        {setting.label}
                      </label>
                      <span className="text-xs text-muted font-mono">
                        {colors[setting.cssVar] || setting.defaultValue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-default space-y-2">
            <button
              onClick={handleExport}
              className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Copy CSS to Clipboard
            </button>
            <button
              onClick={handleReset}
              className="w-full px-4 py-2 bg-gray-100 text-muted-dark rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>

          {/* Keyboard hint */}
          <div className="p-4 pt-0 text-center">
            <span className="text-xs text-muted">
              Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">⌘K</kbd> or{" "}
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">Ctrl+K</kbd> to
              toggle
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
