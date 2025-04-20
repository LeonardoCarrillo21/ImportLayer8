import iconImage from '../../assets/Logo.png'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import PagesIcon from '@mui/icons-material/Pages';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';


export function Sidebar() {
  return (

    <div >
      <div className="w-60 grid grid-rows-[auto_auto_1fr] h-screen">
        <div className="h-10 items-center flex">
          <img src={iconImage} alt="iconImage" className='w-auto h-20' />
        </div>
        <div className='ml-10'>
          <ul className='grid gap-4 mt-5'>
            <li class="flex">
              <HomeIcon/>
              <h2 className='text-gray-500 font-bold'>Home</h2>
            </li >
            <li class="flex">
              <AppsIcon />
              <h2 className='text-gray-500 font-bold'>Apps</h2>
            </li>
            <li class="flex">
              <PagesIcon/>
              <h2 className='text-gray-500 font-bold'>Pages</h2>
            </li>
            <li class="flex">
              <DocumentScannerIcon/>
              <h2 className='text-gray-500 font-bold'>Docs</h2>
            </li>
          </ul>
        </div>
        <div className='h-full'></div>
        <div className='flex justify-center border-t-1 border-gray-200'>
          <p>Guardar</p>
        </div>
      </div>
    </div>

  )
}

