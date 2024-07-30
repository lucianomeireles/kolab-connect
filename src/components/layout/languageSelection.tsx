import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', flag: '🇧🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' }
];

export default function LanguageSelection() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = useMemo(() => {
    return languages.find(language => language.code === i18n.language);
  }, [i18n.language]);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label={t('options')}
        variant="text"
        border="none"
        fontSize="2xl"
      >
        {currentLanguage?.flag}
      </MenuButton>
      <MenuList zIndex={30}>
        {languages.map(language => (
          <MenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
          >
            {language.flag} {language.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
