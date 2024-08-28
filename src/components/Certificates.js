import Cer from "../constants/certificateDetailsConstant";

const Certificates = () => {
  const openExternalFile = (dest) => window.open(dest, "_blank");

  return (
    <section id="specilization">
      <h1 className="text-4xl italic ml-10 p-5 text-center">Certificates</h1>
      <div className="flex flex-wrap rounded-full bg-red justify-center ">
        {Cer &&
          Cer.map((certificate) => {
            return (
              <div key={certificate.id} className="flex flex-wrap order-3 m-9">
                <div
                  className="w-96 bg-base-100 shadow-xl"
                  key={certificate.id}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    loading="lazy"
                  />
                  <div className="">
                    <h2 className="text-lg p-4">{certificate.name}</h2>
                    <div className="flex justify-center">
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => openExternalFile(certificate.pdf)}
                      >
                        View Certificate
                      </button>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() =>
                          openExternalFile(certificate.VerficationLink)
                        }
                      >
                        Verify at Coursera
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Certificates;
