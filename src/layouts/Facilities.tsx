import instalacion1 from "../assets/instalacion.jpg"
import instalacion2 from "../assets/instalacion2.jpg"
import instalacion3 from "../assets/instalacion3.jpg"
import instalacion4 from "../assets/instalacion4.jpg"
import instalacion5 from "../assets/instalacion5.jpg"
import instalacion6 from "../assets/instalacion6.jpg"
import instalacion7 from "../assets/instalacion7.jpg"
import instalacion8 from "../assets/instalacion8.jpg"

const Facilities = () => {

    return(
        <>
        <div className="my-20">
            <h2 className=" text-white font-extrabold text-4xl">INSTALACIONES</h2>
            <div className="h-[1px] w-[50%] bg-white m-auto mt-5"></div>
        </div>
        <div className="grid grid-cols-4 gap-x-10 gap-y-5">
            <img src={instalacion1} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl" />
            <img src={instalacion2} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
            <img src={instalacion3} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
            <img src={instalacion4} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
            <img src={instalacion5} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
            <img src={instalacion6} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
            <img src={instalacion7} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
            <img src={instalacion8} alt="instalaciones" className="h-[250px] w-full cover rounded-tl-2xl rounded-br-2xl"  />
        </div>

        </>
    );
}
export default Facilities
