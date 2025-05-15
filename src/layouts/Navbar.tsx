import Logo from "../assets/Logo.png"
const Nabvar = () => {

    return (
        <nav className="bg-black top-0 fixed left-0 right-0 w-full z-50 justify-between"> 
            <div className="flex justify-between items-center px-1 md:px-4 py-2">
                <div>
                <img 
                src={Logo} 
                alt="LogoGym"
                className="w-[200px] h-[50px]"
                 />
            </div>
            <div>
                <ul className="flex text-white space-x-6 font-bold">
                    <li className="hover:underline hover:text-yellow-300 cursor-pointer">Inicio</li>
                    <li className="hover:underline hover:text-yellow-300 cursor-pointer">Planes</li>
                    <li className="hover:underline hover:text-yellow-300 cursor-pointer">Instalaciones</li>
                    <li className="hover:underline hover:text-yellow-300 cursor-pointer">Contacto</li>
                </ul>
            </div>
            </div>
        </nav>
    );

}  
export default Nabvar