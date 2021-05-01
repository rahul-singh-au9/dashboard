import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Sales from '../components/dashboard/Sales';
import Tasks from '../components/dashboard/Tasks';
import Task from '../components/dashboard/Task';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Task />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Sales sx={{ height: '44%' }} />
            <br />
            <Tasks sx={{ height: '53%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
