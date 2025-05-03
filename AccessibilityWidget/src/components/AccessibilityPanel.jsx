// File: components/AccessibilityPanel.jsx (full styled version)
import React from "react";
import {
  Eye, ZoomIn, ZoomOut, Moon, Underline,
  MousePointer2, RotateCcw, X, Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function AccessibilityPanel({
  isOpen,
  setIsOpen,
  settings,
  updateSettings,
  resetSettings,
  handleBigCursor
}) {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const handleButtonClick = (e, action) => {
    e.stopPropagation();
    action();
  };

  return (
    <div
      className={`accessibility-widget accessibility-panel fixed z-50 h-screen bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{
        width: '85vw',
        maxWidth: '320px',
        top: '0',
        left: '0',
        height: '100%',
        borderTopRightRadius: '16px',
        borderBottomRightRadius: '16px'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-full overflow-y-auto">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold">{t.accessibilityOptions}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => handleButtonClick(e, () => setIsOpen(false))}
              className="h-8 w-8 opacity-70 hover:opacity-100 hover:bg-gray-100"
              aria-label={t.closeMenu}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="mb-6">
            <Label className="setting-label block mb-3 text-lg font-semibold text-gray-800">{t.textSize}</Label>
            <div className="flex items-center justify-between gap-4 bg-gray-50 p-3 rounded-xl">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 h-12 px-4 bg-white border-2 border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 rounded-xl"
                onClick={(e) => handleButtonClick(e, () => updateSettings('fontSize', Math.max(80, settings.fontSize - 10)))}
                aria-label={t.decreaseTextSize}
              >
                <ZoomOut className="h-5 w-5 text-gray-700" />
              </Button>
              <span className="a11y-value w-20 text-center text-xl font-bold text-blue-600">{settings.fontSize}%</span>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 h-12 px-4 bg-white border-2 border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 rounded-xl"
                onClick={(e) => handleButtonClick(e, () => updateSettings('fontSize', Math.min(200, settings.fontSize + 10)))}
                aria-label={t.increaseTextSize}
              >
                <ZoomIn className="h-5 w-5 text-gray-700" />
              </Button>
            </div>
          </div>

          <Separator className="my-4 md:my-6" />

          <div className="space-y-4 md:space-y-6">
            {[{
              key: 'darkMode',
              label: t.darkMode,
              icon: <Moon className="h-4 w-4" />
            }, {
              key: 'contrast',
              label: t.highContrast,
              icon: <Eye className="h-4 w-4" />
            }, {
              key: 'underlineLinks',
              label: t.underlineLinks,
              icon: <Underline className="h-4 w-4" />
            }, {
              key: 'bigCursor',
              label: t.bigCursor,
              icon: <MousePointer2 className="h-4 w-4" />
            }].map(({ key, label, icon }) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {icon}
                  <Label className="setting-label">{label}</Label>
                </div>
                <Switch
                  checked={settings[key]}
                  onCheckedChange={(checked) => {
                    updateSettings(key, checked);
                    if (key === 'bigCursor') handleBigCursor(checked);
                  }}
                  aria-label={`${t.toggle} ${label}`}
                />
              </div>
            ))}
          </div>

          <Separator className="my-4 md:my-6" />

          <div className="space-y-4 mb-4">
            <div className="flex items-center justify-between gap-4 bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4" />
                <Label className="setting-label">{t.language}</Label>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={language === 'he' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('he')}
                  className="min-w-[60px]"
                >
                  {t.hebrew}
                </Button>
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className="min-w-[60px]"
                >
                  {t.english}
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={(e) => handleButtonClick(e, resetSettings)}
              className="w-full border-red-300 bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 flex items-center justify-center gap-2 h-10"
              aria-label={t.resetSettings}
            >
              <RotateCcw className="h-4 w-4" />
              {t.resetSettings}
            </Button>

            <div
              onClick={(e) => handleButtonClick(e, () => setIsOpen(false))}
              className="block w-full py-2.5 px-4 text-center text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
            >
              {t.accessibilityStatement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}