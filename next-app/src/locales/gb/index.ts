import global from './global.json'
import menu from './menu.json'
import locales from './locales.json'
import settings from './settings.json'
import dashboard from './dashboard.json'
import company from './company.json'
import customers from './customers.json'
import services from './services.json'
import planning from './planning.json'

const translations = {
  global,
  menu,
  locales,
  settings,
  dashboard,
  company,
  customers,
  services,
  planning,
} as const

export default translations
