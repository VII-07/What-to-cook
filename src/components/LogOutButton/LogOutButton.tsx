import { LogoutOutlined } from '@mui/icons-material';
import styled from '../NavBar/nav-bar.module.scss'
import Link from 'next/link';

const LogOutButton = () => {
  return (
    <Link href={'#'}>
      <button className={styled.nav__bar__link}>
        <LogoutOutlined />
      </button>
    </Link>
  );
};

export default LogOutButton;
