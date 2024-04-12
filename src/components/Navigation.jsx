import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('home');
  
    const handleItemClick = (name) => {
      setActiveItem(name);
    };
}