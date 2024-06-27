import React from "react";
import './HomePage.css';

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        {/* <img src="images/home/logo.jpg" ></img> */}

      </div>
      <div className="columnas">
        <div className="bienvenidosLeft">
          <h2>BIENVENIDOS</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Hendrerit gravida rutrum quisque non tellus orci ac auctor. Feugiat
            nisl pretium fusce id velit ut tortor. Montes nascetur ridiculus mus
            mauris. Morbi tristique senectus et netus et malesuada fames. Ut
            faucibus pulvinar elementum integer enim neque volutpat. Cras semper
            auctor neque vitae tempus quam pellentesque. Commodo odio aenean sed
            adipiscing diam donec adipiscing tristique. Adipiscing tristique
            risus nec feugiat in fermentum posuere urna nec. Nisl rhoncus mattis
            rhoncus urna. Lectus proin nibh nisl condimentum id venenatis. Diam
            maecenas sed enim ut sem viverra aliquet eget. Convallis aenean et
            tortor at risus viverra adipiscing at in. Pellentesque elit eget
            gravida cum sociis natoque penatibus. Aliquam ultrices sagittis orci
            a.
          </p>
        </div>
        <div className="testimoniosRight"><h2> TESTIMONIO</h2>
        <span className="cita">Excelente!</span>
        <span className="autor"> Yo lo escribi</span></div>
      </div>
    </main>
  );
};

export default HomePage;
