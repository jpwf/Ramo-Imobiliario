import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { List } from 'phosphor-react';
import Avatar from '@mui/material/Avatar';

import logo from '../assets/logo.png';
import { useAuthContext } from '../contexts/AuthContext';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';


function Navbar() {
  const navigate = useNavigate();

  const [navbar, setNavbar] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { isAuthenticated, name, logout } = useAuthContext();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const activeStyle = "underline underline-offset-4";

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if(!name) return;
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 32,
        height: 32,
        fontSize: 16,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


  return (
    <>
      <nav className=' bg-white w-full text-base border-b-[1px] border-b-gray-300'>
        <div className="flex justify-between h-20 items-center">
          <Link to={"/"} aria-label='inicio' className='flex items-center py-5 md:ml-9 lg:ml-20 md:py-2'>
            <img className='min-w-[140px] min-h-full' src={logo} alt="Logo Ramo Imobiliário" />
          </Link>

          {/* primary nav */}
          <div className='w-full hidden md:flex md:justify-center items-center lg:space-x-16 lg:text-base md:text-sm md:space-x-2'>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : ""
              }
            >
              <p className="py-5 px-3 text-gray-700 hover:text-gray-900"> Início </p>
            </NavLink>
            <NavLink
              to={"/apartment"}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : ""
              }
            >
              <p className="py-5 px-3 text-gray-700 hover:text-gray-900"> Buscar imóveis </p>
            </NavLink>
            <NavLink
              to={"/criar-anuncio"}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : ""
              }
            >
              <p className="py-5 px-3 text-gray-700 hover:text-gray-900"> Anunciar </p>
            </NavLink>
          </div>

          {/* secondary nav */}
          {isAuthenticated ?
            //avatar com inicias do nome;
            <div className="hidden md:flex items-center md:mr-9 lg:mr-20 lg:text-base md:text-sm">
              <Tooltip title='Open settings'>
                <IconButton aria-label='avatar' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={name} {...stringAvatar(name)} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={() => { logout(), navigate('/') }}>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>

              </Menu>
            </div>
            :
            <div className="hidden md:flex items-center md:mr-9 lg:mr-20 lg:text-base md:text-sm">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : ""
                }
              >
                <p className=" py-5 px-3 mr-6"> Entrar </p>
              </NavLink>
              <Link
                to={"/cadastro"}
                className=" py-3 px-4 bg-blue-500 text-white rounded lg:w-32 md:w-[116px] hover:bg-blue-700"
              >
                Cadastre-se
              </Link>
            </div>
          }

          {/* mobile buttons */}
          <div className='md:hidden flex items-center mr-6'>
            <button
              aria-label='menu'
              className='mobile-menu-button'
              onClick={() => setNavbar(!navbar)}
            >
              <List size={32} />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`border flex-col justify-self-center md:hidden ${navbar ? "flex" : "hidden"}`}>
          <Link to={"/"} className="block py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Início </Link>
          <Link to={"/apartment"} className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Buscar imóveis</Link>
          <Link to={"/criar-anuncio"} className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Anunciar </Link>

          {isAuthenticated ?
            <Link to={"/"} aria-label='avatar' onClick={() => { logout() }} className=' flex items-center py-4 px-2 gap-1 text-sm text-gray-700 hover:bg-gray-200'>
              <Avatar alt={name} {...stringAvatar(name)} className='w-6 h-6 text-sm' />
              <Typography variant='body2'>Sair</Typography>
            </Link>
            :
            <>
              <Link to={"/login"} className="py-4 px-2 text-sm text-gray-700 hover:bg-gray-200"> Entrar </Link>
              <Link
                to={"/cadastro"}
                className=" py-4 px-2 bg-blue-500 text-sm text-white rounded hover:bg-blue-700"
              >
                Cadastre-se
              </Link>
            </>
          }
        </div>
      </nav>

      {/* <div className=''>
        {children}
      </div> */}
    </>
  )
}

export default Navbar;
