import { useEffect, useMemo, useState } from "react";
import "/src/css/styleMainPerfil.css";

export const MainPerfil = () => {
  const videos = useMemo(
    () => ["/src/assets/videos/zapato4.mp4", "/src/assets/videos/zapato2.mp4", "/src/assets/videos/zapato3.mp4"],
    []
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = document.querySelector(".video video");

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.play();

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [videos, currentVideoIndex]);

  useEffect(() => {
    const videoElement = document.querySelector(".video video");
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
  }, [currentVideoIndex, videos]);

  return (
    <>
      <main className="main-perfil">
        <div className="video">
          <video muted autoPlay></video>
        </div>
        <form className="container-input-perfil" action="">
          <div className="container-form-1">
            <div className="form-perfil-input">
              <input className="input" type="text" id="name" required />
              <label htmlFor="name" className="form-label-perfil">
                <span>NOMBRE</span>
              </label>
            </div>
            <div className="form-perfil-input">
              <input className="input" type="email" id="email" required />
              <label htmlFor="email" className="form-label-perfil">
                <span>CORREO</span>
              </label>
            </div>
            <div className="form-perfil-input">
              <input className="input" type="text" id="address" required />
              <label htmlFor="address" className="form-label-perfil">
                <span>DIRECCION</span>
              </label>
            </div>
          </div>
          <div className="container-form-1">
            <div className="form-perfil-input">
              <input className="input" type="text" id="phone" required />
              <label htmlFor="phone" className="form-label-perfil">
                <span>TELEFONO</span>
              </label>
            </div>
            <div className="form-perfil-input">
              <input
                className="input"
                type="text"
                id="identification"
                required
              />
              <label htmlFor="identification" className="form-label-perfil">
                <span>IDENTIFICACION</span>
              </label>
            </div>
            <div className="form-perfil-input">
              <input className="input" type="password" id="password" required />
              <label htmlFor="password" className="form-label-perfil">
                <span>CONTRASEÑA</span>
              </label>
            </div>
          </div>
          <div className="container-form-1">
            <div className="form-perfil-input">
              <button className="button-perfil" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
