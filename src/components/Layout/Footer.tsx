

export const Footer = () => {
  return (
        <div className=" dark:bg-dark h-24 content-center">
            <div className="hidden dark:block h-[2px] w-screen bg-white opacity-15 mb-5"></div>
        <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Movie App. Todos los derechos reservados.
            </p>
        </div>
        </div>
  )
}
