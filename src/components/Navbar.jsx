import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <Menu tabular>
    <Menu.Item
      name='home'
      active={activeItem === 'home'}
      onClick={() => handleItemClick('home')}
      as={Link}
      to="/"
    />
      
      <Menu.Item
            name='Portfolio'
            active={activeItem === 'Portfolio'}
            onClick={() => handleItemClick('Portfolio')}
            as={Link}
            to="/Portfolio"
          />
</Menu>)
}      
