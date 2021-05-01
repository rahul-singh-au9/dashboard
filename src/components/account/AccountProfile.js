import moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Button
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_1.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
};

const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography color="textPrimary" gutterBottom variant="h5">
          <Typography color="textPrimary" variant="body1" marginLeft="85%">
            Reminder
          </Typography>
          Send benefit review by sunday
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {`Due Date:  ${moment().format('LL')}`}
        </Typography>
        <Avatar
          src={user.avatar}
          sx={{
            height: 35,
            width: 35
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="body2">
          {user.name}
        </Typography>
        <Button variant="outlined" style={{ marginLeft: '80%', maxWidth: '100px', color: 'green' }}>
          completed
        </Button>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);

export default AccountProfile;
