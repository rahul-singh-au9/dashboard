/* eslint-disable linebreak-style */
import {
  Box,
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';
import TaskCard from '../account/TaskCard';
import TaskHeader from './TaskHeader';

const Task = (props) => (
  <div>
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            height: 891,
            position: 'relative'
          }}
        >
          <TaskHeader />
          <br />
          <TaskCard />
          <br />
          <TaskCard />
          <br />
          <TaskCard />
          <br />
          <TaskCard />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  </div>
);

export default Task;
