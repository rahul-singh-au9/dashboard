import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import LatestOrders from '../components/dashboard/LatestOrders';
import Sales from '../components/dashboard/Sales';
import Tasks from '../components/dashboard/Tasks';

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
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Sales sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Tasks sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
