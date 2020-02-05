import React from 'react';
import Header from './Header';
import Fotter from './Footer';

export const Layout = ({ children}) => (
    <div className='App'>
        <Header />
        {children}
        <Fotter />
    </div>

); 