import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  const {t} = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-4xl font-semibold mt-4 mb-6 text-gray-800 dark:text-white">{t("notFound")}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
        {t("notFoundMessage")}
        </p>
        <Link 
          to="/"
          className="inline-block bg-primary dark:text-white px-6 py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors "
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  )
} 