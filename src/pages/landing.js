import { Logo } from '../components'
import main from '../assets/images/main.svg'
import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}

        <div className='info'>
          <h1>
            jobifyy-<span>Search</span>
          </h1>
          <p>
            I'm baby messenger bag twee hexagon, unicorn etsy pop-up 8-bit
            biodiesel. Austin meditation blue bottle tumblr hella. Williamsburg
            90's flexitarian, unicorn kinfolk tumblr adaptogen XOXO four loko
            shaman. Freegan master cleanse wolf tbh, ramps selfies four dollar
            toast mustache offal. Plaid poutine listicle bushwick palo santo
            cray readymade cred vinyl polaroid street art. 8-bit PBR&B kitsch
            flexitarian, narwhal art party tote bag cloud bread man braid.
            Gochujang cronut man bun sriracha humblebrag.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Register/Login
          </Link>
        </div>
        <img src={main} alt='zigbee-jobifyy' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default landing
