import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import About from './About';
import Home from './Home';
import Contact from './Contact';
const {pathname}=window.location
const page=pathname.slice(1)


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
       <a href='l0g1n.html'>click aqui</a>
    </div>
  );
};

export default DogPicture;
