import imagen1 from "../assets/1.webp"
import imagen2 from "../assets/2.jpeg"
import imagen3 from "../assets/3.png"
import imagen4 from "../assets/4.jpg"
import imagen5 from "../assets/5.jpg"
import imagen6 from "../assets/6.webp"

const Logros = () => {

    return(
        <div className="mt-20">
            <h2 className=" text-white font-extrabold text-4xl">LO QUE LOGRARAS</h2>
            <div className="h-[1px] w-[50%] bg-white m-auto mt-5"></div>
            <div className="grid grid-cols-3 w-full gap-x-[60px] gap-y-10 px-10 mt-10 text-white">
                <div className="w-full h-[300px] border border-yellow-500 shadow-[0_0_10px_3px] shadow-yellow-100 rounded-2xl overflow-hidden">
                    <img src={imagen1} className="cover w-full h-[180px]" />
                    <p className="font-bold text-xl mt-2">Transforma mas que tu cuerpo</p>
                    <p className="text-md px-2 mt-1 ">No se trata solo de verte bien, sino de sentirte mejor contigo mismo cada día.</p>
                </div>
                <div className="w-full h-[300px] border border-yellow-500 shadow-[0_0_10px_3px] shadow-yellow-100 rounded-2xl overflow-hidden">
                    <img src={imagen2} className="cover w-full h-[180px]" />
                    <p className="font-bold text-xl mt-2">Gana confianza y seguridad</p>
                    <p className="text-md px-2 mt-1 ">Cada repetición suma. Mejora tu autoestima y enfréntate al mundo con decisión.</p>
                </div>
                <div className="w-full h-[300px] border border-yellow-500 shadow-[0_0_10px_3px] shadow-yellow-100 rounded-2xl overflow-hidden">
                    <img src={imagen3} className="cover w-full h-[180px]" />
                    <p className="font-bold text-xl mt-2">Más energía, menos estrés</p>
                    <p className="text-md px-2 mt-1 ">El entrenamiento regular libera tensiones y te llena de vitalidad para afrontar tus retos.</p>
                </div>
                <div className="w-full h-[300px] border border-yellow-500 shadow-[0_0_10px_3px] shadow-yellow-100 rounded-2xl overflow-hidden">
                    <img src={imagen4} className="cover w-full h-[180px]" />
                    <p className="font-bold text-xl mt-2">Mejora tu bienestar mental</p>
                    <p className="text-md px-2 mt-1 ">Activa tu cuerpo y despeja tu mente. Notarás la diferencia desde la primera semana.</p>
                </div>
                <div className="w-full h-[300px] border border-yellow-500 shadow-[0_0_10px_3px] shadow-yellow-100 rounded-2xl overflow-hidden">
                    <img src={imagen5} className="cover w-full h-[180px]" />
                    <p className="font-bold text-xl mt-2">Descubre tu mejor versión</p>
                    <p className="text-md px-2 mt-1 ">La constancia te lleva a metas que nunca imaginaste. Hoy es el mejor día para empezar.</p>
                </div>
                <div className="w-full h-[300px] border border-yellow-500 shadow-[0_0_10px_3px] shadow-yellow-100 rounded-2xl overflow-hidden">
                    <img src={imagen6} className="cover w-full h-[180px]" />
                    <p className="font-bold text-xl mt-2">Construye disciplina y enfoque</p>
                    <p className="text-md px-2 mt-1 ">El gimnasio es solo el inicio. La mentalidad que desarrollas aquí te acompaña en toda tu vida.</p>
                </div>
            </div>
        </div>
    );
}
export default Logros