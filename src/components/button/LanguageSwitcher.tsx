'use client';

import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

interface LanguageOption {
  key: string;
  icon: string;
  alt: string;
}


const languageOptions: LanguageOption[] = [
  {
    key: 'la',
    icon: '/icons/flags/laos-icon.png',
    alt: 'Lao Language',
  },
  {
    key: 'en',
    icon: '/icons/flags/english-icon.png',
    alt: 'English Language',
  },
  {
    key: 'th',
    icon: '/icons/flags/thai-icon.png',
    alt: 'Thai Language',
  },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<string>('en');

  useEffect(() => {

    const pathLang = window.location.pathname.split('/')[1];
    const isValidPathLang = languageOptions.some(lang => lang.key === pathLang);
    

    const savedLanguage = localStorage.getItem('language');
    const isValidSavedLang = savedLanguage && languageOptions.some(lang => lang.key === savedLanguage);


    if (isValidPathLang) {
      setCurrentLang(pathLang);
      i18n.changeLanguage(pathLang);
      localStorage.setItem('language', pathLang);
    }

    else if (isValidSavedLang && savedLanguage) {
      setCurrentLang(savedLanguage);
      i18n.changeLanguage(savedLanguage);
      

      const currentPath = window.location.pathname;
      const pathParts = currentPath.split('/').filter(Boolean);
      const remainingPath = pathParts.length > 1 ? pathParts.slice(1).join('/') : '';
      const newPath = `/${savedLanguage}${remainingPath ? '/' + remainingPath : ''}`;
      router.push(newPath);
    }

    else {
      const defaultLanguage = 'en';
      setCurrentLang(defaultLanguage);
      i18n.changeLanguage(defaultLanguage);
      localStorage.setItem('language', defaultLanguage);
      

      const currentPath = window.location.pathname;
      const pathParts = currentPath.split('/').filter(Boolean);
      const remainingPath = pathParts.length > 1 ? pathParts.slice(1).join('/') : '';
      const newPath = `/${defaultLanguage}${remainingPath ? '/' + remainingPath : ''}`;
      router.push(newPath);
    }
  }, [i18n, router]);


  const selectedLanguage =
    languageOptions.find((lang) => lang.key === currentLang) || languageOptions.find(lang => lang.key === 'en');

  const handleLanguageSelect: MenuProps['onClick'] = ({ key }) => {
    i18n.changeLanguage(key);
    localStorage.setItem('language', key);
    setCurrentLang(key);

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const remainingPath = pathParts.length > 1 ? pathParts.slice(1).join('/') : '';
    const newPath = `/${key}${remainingPath ? '/' + remainingPath : ''}`;

    router.push(newPath);
  };

  const items: MenuProps['items'] = languageOptions
    .filter((lang) => lang.key !== currentLang) 
    .map((lang) => ({
      key: lang.key,
      label: (
        <div className="flex items-center w-[32px] h-[32px] gap-5 py-5 justify-center rounded-md">
          <img
            className="w-[32px] h-[32px]"
            src={lang.icon}
            alt={lang.alt}
          />
        </div>
      ),
    }));

  return (
    <Dropdown
      menu={{ items, onClick: handleLanguageSelect }}
      placement="bottom"
      trigger={['click']}
      className="hover:bg-custom_peach"
    >
      <button
        className="flex items-center border-2 gap-5 rounded-full hover:ring-4 duration-500 hover:ring-custom_peach hover:bg-custom_brown"
        aria-label={t('change_language')}
      >
        <img
          className="w-[32px] gap-5 h-[32px]"
          src={selectedLanguage?.icon || languageOptions[0].icon}
          alt={selectedLanguage?.alt || languageOptions[0].alt}
        />
      </button>
    </Dropdown>
  );
};

export default LanguageSwitcher;