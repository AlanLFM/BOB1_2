import React, { useEffect, useState } from 'react';

function abc(){
  console.log("hola")
}
const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('../public/img/fondo.png')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);
  
  return (
    <div>
      <p className='color:"red";'><a href="l0g1n.html">Claro</a></p>
      <a href="login.js"><button onClick={abc} > hola</button></a>
    </div>
  );
};

export default DogPicture;
