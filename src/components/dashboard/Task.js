/* eslint-disable linebreak-style */
import {
  Box,
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';
import TaskCard from '../account/AccountProfile';

const Task = (props) => (
  <div>
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            height: 875,
            position: 'relative'
          }}
        >
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  </div>
);

export default Task;
