'use client';

import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import LogOutButton from '../LogOutButton/LogOutButton';
import { IconButton, Modal, Box } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import styles from './sidebar.module.scss';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <IconButton onClick={toggleMenu}>
            <Menu className={styles.sandwich__menu__btn} />
        </IconButton>
      </div>
      <Modal open={isOpen} onClose={toggleMenu}>
        <Box className={`${styles.modalContent} fixed inset-0`}>
          <aside className="flex flex-col p-4  items-center backdrop-blur-[10px] shadow-[0px_0px_30px_rgba(227,228,237,0.37)] border-[2px solid rgba(255, 255, 255, 0.18)] w-64 left-0 fixed h-full">
            <div className="flex flex-col justify-between items-center h-[100%]">
              <IconButton onClick={toggleMenu}>
                  <Close className={styles.sandwich__menu__btn}/>
              </IconButton>
              <NavBar />
              <LogOutButton />
            </div>
          </aside>
        </Box>
      </Modal>
      <aside className="hidden md:flex p-4 justify-between flex-col items-center backdrop-blur-[10px] shadow-[0px_0px_30px_rgba(227,228,237,0.37)] border-[2px solid rgba(255, 255, 255, 0.18)]">
        <NavBar />
        <LogOutButton />
      </aside>
    </>
  );
};

export default SideBar;
