/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable linebreak-style */
import moment from 'moment';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  CardHeader,
  Button
} from '@material-ui/core';
import DatePicker from 'react-horizontal-datepicker';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ProgressBarLine } from 'react-progressbar-line';

const TaskHeader = (props) => {
  const selectedDay = (val) => {
    console.log(val);
  };

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'left',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardHeader
            action={
              <Button
                endIcon={<ArrowDropDownIcon />}
                size="small"
                variant="text"
              >
                Show this week
              </Button>
            }
            title="8 tasks completed out of 10"
            style={{ padding: '5px' }}
          />
          <br />
          <ProgressBarLine
            value={80}
            min={0}
            max={100}
            strokeWidth={1}
            trailWidth={1}
            text=" "
            styles={{
              path: {
                stroke: '#17b978'
              },
              trail: {
                stroke: '#a7ff83'
              }
            }}
          />
          <br />
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {`${moment().format('LL')}`}
          </Typography>
          <br />
          <br />
          <DatePicker
            getSelectedDay={selectedDay}
            labelFormat="MMMM"
            color="#374e8c"
          />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default TaskHeader;
