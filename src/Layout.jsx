import App from './App'

function Layout({children}) {
  return (
    <div className='bg-white h-screen'>
        {children}
    </div>
  )
}

export default Layout