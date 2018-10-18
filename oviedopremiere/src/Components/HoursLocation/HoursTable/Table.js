import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(day, open, close) {
  id += 1;
  return { id, day, open, close };
}

const rows = [
  createData('Monday', '7:00 AM', '5:00 PM'),
  createData('Tuesday', '7:00 AM', '5:00 PM'),
  createData('Wednesday', '7:00 AM', '5:00 PM'),
  createData('Thursday', '7:00 AM', '5:00 PM'),
  createData('Friday', 'Closed', 'Closed'),
];

function HoursTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Close</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.open}</TableCell>
                <TableCell>{row.close}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

HoursTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HoursTable);