import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ClassIcon from '@mui/icons-material/Class';



const stockLinks = [

  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Produits'
  },
  {
    href: '/categories',
    icon: (<ClassIcon fontSize="small" />),
    title: 'Catégories'
  },
];
const salesLinks = [
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Clients'
  },
  {
    href: '/sales-orders',
    icon: (<MonetizationOnIcon fontSize="small" />),
    title: 'Commandes'
  },
  {
    href: '/invoices',
    icon: (<ReceiptIcon fontSize="small" />),
    title: 'Factures'
  },
];
const configLinks =[
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Profile'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Paramètres'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Se Déconnecter'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const [stockNav, setStockNav] = useState(true);
  const [salesNav, setSalesNav] = useState(true);
  const [configNav, setConfigNav] = useState(true);

  const content = (
    <>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box sx={{ px: 9,py:2}}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ pt : 5}}>
            <NavItem
              
                key= 'Tableau de bord'
                icon= {(()=>{ return <ChartBarIcon fontSize="small" /> })()}
                href= '/'
                title='Tableau de bord'          
            />
          </Box>     
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 2
            }}
          />
          <Box>
            <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setStockNav(!stockNav)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: stockNav ? 0 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: stockNav ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Gestion de stock"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary="Produits, Catégories, Stockage"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: stockNav ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: stockNav ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
            { stockNav && stockLinks.map((navLink) => (
              <NavItem
                key={navLink.title}
                icon={navLink.icon}
                href={navLink.href}
                title={navLink.title}
              />
            ))}
          </Box>
          <Box>
            <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setSalesNav(!salesNav)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: salesNav ? 0 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: salesNav ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Gestion des ventes"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary="Clients, Commandes, Factures"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: salesNav ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: salesNav ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
            { salesNav && salesLinks.map((navLink) => (
              <NavItem
                key={navLink.title}
                icon={navLink.icon}
                href={navLink.href}
                title={navLink.title}
              />
            ))}
          </Box>
          <Box>
            <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setConfigNav(!configNav)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: configNav ? 0 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: configNav ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Configuration"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary="Profil, Paramètres, Se Déconnecter"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: configNav ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: configNav ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
            { configNav && configLinks.map((navLink) => (
              <NavItem
                key={navLink.title}
                icon={navLink.icon}
                href={navLink.href}
                title={navLink.title}
              />
            ))}
          </Box>
        </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
