import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import membresia1 from "../assets/membresia1.jpg";
import membresia2 from "../assets/membresia2.jpg";
import membresia3 from "../assets/membresia3.jpg";
import Button from "../components/Button";
import { useState } from "react";

const plans = () => {
    const [loading] = useState(false);

  return (
    <>
      <div className="mt-20">
        <h2 className="text-white font-extrabold text-4xl">PLANES</h2>
        <div className="h-[1px] w-[50%] bg-white m-auto mt-5"></div>
        <div className="mt-20 grid grid-cols-3 space-x-10">
          <div
            className="relative h-[700px] bg-cover bg-center rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${membresia1})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-yellow-500/100" />
            <div className="relative p-6">
              <p className="text-white font-extrabold text-5xl mb-6">
                PLAN MOTIVACION
              </p>

              <div className="w-full h-[50px] flex items-center justify-start mb-10 ">
                <span className="text-white text-4xl  font-extrabold">
                  S/ 260.00{" "}
                  <span className="text-xl font-bold text-gray-300/70">
                    / 3 meses{" "}
                  </span>
                </span>
              </div>
              <div className="text-left space-y-2 font-bold">
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Acceso <strong>ILIMITADO</strong> todos los dias de los 3
                    meses
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Horarios flexibles (mañana, tarde y noche)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Acceso a clases grupales (zumba, funcional, etc)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Uso libre de duchas y lockers
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Asesoria de entrenador 1 mes Completo
                  </span>
                </p>
              </div>
              <div className="text-center">
                <Button
                  text={loading ? "cargando..." : "Empezar ahora"}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
          <div
            className="relative h-[700px] bg-cover bg-center rounded-2xl overflow-hidden shadow-xl "
            style={{ backgroundImage: `url(${membresia3})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-yellow-500/100" />
            <div className="relative p-6">
              <p className="text-white mb-10 font-extrabold text-5xl">
                PLAN FULL MONTH
              </p>
              <div className="w-full h-[50px] flex items-center justify-start mb-10 ">
                <span className="text-white text-4xl  font-extrabold">
                  S/. 100.00{" "}
                  <span className="text-xl font-bold text-gray-300/70">
                    / mes{" "}
                  </span>
                </span>
              </div>
              <div className="text-left space-y-2 font-bold">
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Acceso <strong>ILIMITADO</strong> todos los dias del mes
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Horarios flexibles (mañana, tarde y noche)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Acceso a clases grupales (zumba, funcional, etc)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Uso libre de duchas y lockers
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Asesoria de entrenador 1 vez por semana
                  </span>
                </p>
              </div>
              <div className="text-center">
                <Button
                  text={loading ? "cargando..." : "Empezar ahora"}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
          <div
            className="relative h-[700px] bg-cover bg-center rounded-2xl overflow-hidden shadow-xl"
            style={{ backgroundImage: `url(${membresia2})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-yellow-500/100" />
            <div className="relative p-6">
              <p className="text-white mb-10 font-extrabold text-5xl">
                PLAN MID MONTH
              </p>
              <div className="w-full h-[50px] flex items-center justify-start mb-10 ">
                <span className="text-white text-4xl  font-extrabold">
                  S/. 60.00{" "}
                  <span className="text-xl font-bold text-gray-300/70">
                    / mes{" "}
                  </span>
                </span>
              </div>
              <div className="text-left space-y-2 font-bold">
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Acceso 3 a 4 veces por semana (todo el mes)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Horarios restringidos (solo mañana y tarde)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    {" "}
                    Acceso a clases básicas (sin premium)
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Uso de duchas y lockers
                  </span>
                </p>
                <p className="space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-lime-500 text-xl"
                  />
                  <span className="text-white text-lg">
                    Rutina inicial personalizada
                  </span>
                </p>
              </div>
              <div className="text-center">
                <Button
                  text={loading ? "cargando..." : "Empezar ahora"}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default plans;
