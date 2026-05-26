import {
  createContext,
  useContext,
  useState
} from 'react'

import ar from '../locales/ar/common'
import en from '../locales/en/common'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {

  const [language, setLanguage] = useState('ar')

  const translations = {
    ar,
    en
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () =>
  useContext(LanguageContext)