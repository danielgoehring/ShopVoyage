import Image from 'next/image';

const Header = () => {
    return (
      <header className="bg-white text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <a href="#" className="mr-4">Men</a>
            <a href="#" className="mr-4">Women</a>
            <a href="#" className="mr-4">About</a>
         </nav>
         <Image src="/images/shopvoyagelogo.png" alt="logo" width={180} height={100} />
            <nav className="flex">
            <a href="#" className="mr-4">Help</a>
            <a href="#" className="mr-4">Account</a>
            <div className="flex items-center">

            
            <div className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
           </div>
        </div>
          </nav>
          
        </div>
      </header>
    );
  };
  
  export default Header;
  