import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [linea3, setLinea3] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento) {
    setLinea2(evento.target.value)
  }
  const onChangeLinea3 = function(evento) {
    setLinea3(evento.target.value)
  }
  const onChangeImagen = function(evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#tarj")).then(canvas => {
    var img    = canvas.toDataURL("image/png");
    var link = document.createElement('a');
  link.download = 'tarjeta.png';
  link.href = img;
  link.click();
});


  }

  return (
    <div className="App">
      <h2>SELECCIONA UN ESTILO PARA TU INVITACION</h2>
      <select onChange={onChangeImagen}>
        <option value="riv.jpg">River</option>
        <option value="boc.jpg">Boca</option>
        <option value="ind.jpg">Independiente</option>
        <option value="rac.jpg">Racing</option>
        <option value="vel.jpg">Velez</option>
        <option value="slo.jpg">San Lorenzo</option>
        <option value="hur.jpg">Huracán</option>
        <option value="elp.jpg">Estudiantes LP</option>
        <option value="gim.jpg">Gimnasia LP</option>
        <option value="new.jpg">Newell's Old Boys</option>
        <option value="ros.jpg">Rosario Central</option>
        <option value="col.jpg">Colón</option>
        <option value="uni.jpg">Unión</option>
        <option value="arg.jpg">Argentinos Jrs</option>
        <option value="spi.jpg">Spiderman</option>
        <option value="sup.jpg">Superman</option>
        <option value="bat.jpg">Batman</option>
        <option value="pri.jpg">Princesas</option>
        <option value="pep.jpg">Peppa Pig</option>
        <option value="min.jpg">Minnie Mousse</option>
      </select> <br/>
      
      
      <input onChange={onChangeLinea1} type="text" placeholder="Nombre del/la cumpleañera/o..."/> <br/>

      <input onChange={onChangeLinea2} type="text" placeholder="Día y hora de la celebración..."/> <br/>

      <input onChange={onChangeLinea3} type="text" placeholder="Dirección de la fiesta..."/> <br/>
      
      <button onClick={onClickExportar}>EXPORTAR INVITACION</button><br/> 
      <div className="tarjeta" id="tarj">
      <img src={"img/"+imagen} /> 
        <span id="span1">{linea1}</span><br/>
        <span id="span2">{linea2}</span><br/>
        <span id="span3">{linea3}</span><br/>
        
        
      </div>
    </div>
  );
}

export default App;
