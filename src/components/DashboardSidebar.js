import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  // IconButton,
  Button
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  MessageSquare as MessageSquareIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  Mail as MailIcon,
  BookOpen as BookOpenIcon,
  Users as UsersIcon
} from 'react-feather';
// import MenuIcon from '@material-ui/icons/Menu';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 's.ferguson@gmail.com',
  name: 'Sierra Ferguson'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Tasks'
  },
  {
    href: '/app/account',
    icon: MailIcon,
    title: 'Email'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Contacts'
  },
  {
    href: '/login',
    icon: MessageSquareIcon,
    title: 'Chat'
  },
  {
    href: '/register',
    icon: BookOpenIcon,
    title: 'Deals'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  }
];

// eslint-disable-next-line react/prop-types
const DashboardSidebar = ({ onMobileClose, openMobile, onMobileNavOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />

      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={onMobileNavOpen}
        >
          Toggle Sidebar
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
