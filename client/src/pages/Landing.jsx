import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='container page' >
        {/* ifo */}
        <div className="info">
          <h1>job <span>tracking</span> App</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magni veritatis ducimus similique eos consequatur, quisquam iusto cum illum dicta, repellat eligendi molestiae sint dolore deleniti iste. Alias, suscipit. Quasi!</p>
          <Link to={'/register'} className='btn btn-hero' >Login/Register</Link>
        </div>
        <img src={main} alt="job junt" className='img main-img' />
      </div>
    </Wrapper>
  )
}




export default Landing