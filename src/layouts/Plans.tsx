import {
  faSquareCheck,
  faClock,
  faPeopleGroup,
  faShower,
  faPersonHarassing,
  faPaste,
  faX,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const plans = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-white font-extrabold text-4xl">PLANES</h2>
        <div className="mt-20 grid grid-cols-3">
          <div className="h-[500px] border">
            <p className="text-white font-extrabold text-3xl">
              PLAN FULL MONTH
            </p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-lime-500 text-3xl"
                />
                <span className="text-white text-lg">
                  Acceso <strong>ILIMITADO</strong> todos los dias del mes
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-3xl"
                />
                <span className="text-white text-lg">
                  Horarios flexibles (mañana, tarde y noche)
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-gray-500 text-3xl"
                />
                <span className="text-white text-lg">
                  Acceso a clases grupales (zumba, funcional, etc)
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faShower}
                  className="text-sky-500 text-3xl"
                />
                <span className="text-white text-lg">
                  Uso libre de duchas y lockers
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPersonHarassing}
                  className="text-white text-3xl"
                />
                <span className="text-white text-lg">
                  Asesoria de entrenador 1 vez por semana
                </span>
              </p>
            </div>
          </div>
          <div className="h-[500px] border">
            <p className="text-white font-extrabold text-3xl">PLAN MID MONTH</p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-lime-500 text-3xl"
                />
                <span className="text-white text-lg">
                  Acceso 3 a 4 veces por semana (todo el mes)
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-3xl"
                />
                <span className="text-white text-lg">
                  Horarios restringidos (solo mañana y tarde)
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-gray-500 text-3xl"
                />
                <span className="text-white text-lg">
                  {" "}
                  Acceso a clases básicas (sin premium)
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faShower}
                  className="text-sky-500 text-3xl"
                />
                <span className="text-white text-lg">Uso de duchas y lockers</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPaste}
                  className="text-white text-3xl"
                />
                <span className="text-white text-lg">Rutina inicial personalizada</span>
              </p>
            </div>
          </div>
          <div className="h-[500px] border">
            <p className=" text-white font-extrabold text-3xl">PLAN ONE DAY</p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-lime-500 text-3xl"
                />
                <span className="text-white text-lg">Acceso por 1 día completo</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-3xl"
                />
                <span className="text-white text-lg">Horario libre ese día</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  className="text-gray-500 text-3xl"
                />
                <span className="text-white text-lg">
                  Puedes comprar varios One Day seguidos
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faShower}
                  className="text-sky-500 text-3xl"
                />
                <span className="text-white text-lg">Incluye uso de duchas</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faX} className="text-red-500 text-3xl" />
                <span className="text-white text-lg">
                  No incluye clases ni asesorías
                </span>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default plans;
