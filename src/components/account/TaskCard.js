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
  name: 'John Smith',
};

const TaskCard = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ position: 'relative', height: 51 }}>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
            style={{ position: 'absolute', top: '5%', left: 0 }}
          >
            Send benefit review by sunday
          </Typography>
          <Typography color="textPrimary" variant="body1" marginLeft="85%">
            Reminder
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`Due Date:  ${moment().format('LL')}`}
          </Typography>
        </div>
        <div style={{ position: 'relative', height: 51 }}>
          <Avatar
            src={user.avatar}
            sx={{
              height: 35,
              width: 35
            }}
            style={{ position: 'absolute', top: '50%', left: 0 }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="body2"
            style={{ position: 'absolute', top: '65%', left: 50 }}
          >
            {user.name}
          </Typography>
          <Button
            variant="outlined"
            style={{
              marginLeft: '80%',
              maxWidth: '100px',
              color: 'green',
              position: 'absolute',
              top: '50%'
            }}
          >
            completed
          </Button>
        </div>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);

export default TaskCard;
