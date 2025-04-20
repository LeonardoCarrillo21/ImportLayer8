import AccountMenu from '../accountmenu/AccountMenu'

export function Navbar() {
  return (
    
    <div className='text-md font-sans items-center flex w-full border-b-1 bg-gray-100 border-gray-200 z-10 '>
      
      <div className='w-full'>
      {/* {pages.map((page)=>{page})} */}
      </div>
      <div className=''>
        <AccountMenu />
      </div>
    </div>
  )
}