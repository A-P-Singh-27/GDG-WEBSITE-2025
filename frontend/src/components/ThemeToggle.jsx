import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa';
import { Moon } from 'lucide-react';

const ToggleButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  border-radius: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }
`;

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: isDarkTheme ? 0 : 180 }}
      transition={{ duration: 0.5 }}
      aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkTheme ? <FaSun size={18} /> : <Moon size={18} />}
    </ToggleButton>
  );
};

export default ThemeToggle;