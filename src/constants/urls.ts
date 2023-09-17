const BASE_URL = __DEV__ ? "http://localhost" : "https://recipes-reccomender-oyjunc5pjq-ey.a.run.app/"
export const URLS = {
  "login": `${BASE_URL}/login`,
  "register": `${BASE_URL}/register`,
  "forgot_password": `${BASE_URL}/forgot_password`,
  "search": `${BASE_URL}/search`,
  "popular_search": `${BASE_URL}/popular_search`,
  "logout": `${BASE_URL}/logout`,
}