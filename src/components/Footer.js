import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Entre na newsletter para receber nossas melhores novidades
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='email'
            />
            <Button buttonStyle='btn--outline'>Entrar</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Gestão</h2>
            <Link to='/'>Subway Partners™</Link>
            <Link to='/'>Carreiras</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Gestão de perfil</h2>
            <Link to='/'>Entre em contato conosco</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Jurídico</h2>
            <Link to='/'>Declaração de privacidade</Link>
            <Link to='/'>Termos de uso</Link>
          </div>
        </div>
      </div>
      
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="../logo1.svg" alt="Logo Subway"/>
            </Link>
          </div>
          <small class='website-rights'>© 2021 Subway IP LLC.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
