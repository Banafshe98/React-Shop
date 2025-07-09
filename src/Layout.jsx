import App from './App'

function Layout({children}) {
  return (
    <div className='bg-gray-100 h-screen'>
        {children}
    </div>
  )
}

export default Layout