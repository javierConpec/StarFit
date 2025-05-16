const Location = () => {
  return (
    <>
      <div className="my-20">
        <h2 className=" text-white font-extrabold text-4xl">UBICACION</h2>
        <div className="h-[1px] w-[50%] bg-white m-auto mt-5"></div>
      </div>
      <div>
        <a
          href="https://www.google.com/maps?q=-12.225037,-76.908666"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=-12.225037,-76.908666&zoom=14&size=600x300&markers=color:red%7Clabel:S%7C-12.225037,-76.908666&key=AIzaSyAxTR-AN2qF_bGaUHPxIFDT0IeC_puMnDk`}
            alt="Ubicación del gimnasio"
            className="w-full h-[300px] rounded-xl  cursor-pointer hover:opacity-50 transition-all"
          />
        </a>
      </div>
    </>
  );
};

export default Location;
