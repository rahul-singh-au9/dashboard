import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
  Button
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Tasks = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [60, 15, 25],
        backgroundColor: [
          colors.green[500],
          colors.red[600],
          colors.yellow[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Completed', 'Ended', 'Active']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Completed',
      value: 60,
      icon: RadioButtonUncheckedIcon,
      color: colors.green[500]
    },
    {
      title: 'Active',
      value: 25,
      icon: RadioButtonUncheckedIcon,
      color: colors.yellow[600]
    },
    {
      title: 'Ended',
      value: 15,
      icon: RadioButtonUncheckedIcon,
      color: colors.red[600]
    }
  ];

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
            this month
          </Button>
        )}
        title="Deals"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color, icon: Icon, title, value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tasks;
