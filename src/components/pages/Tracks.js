import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const style = {
  height: 80,
  width: 220,
  margin: 20,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const Tracks = () => (
  <div>
  <Paper style={style} zDepth={2} rounded={false}>Danceabilty<br/><strong>42%</strong></Paper>
  <Paper style={style} zDepth={2} rounded={false}>Instrumentalness<br/><strong>62%</strong></Paper>
  <Paper style={style} zDepth={2} rounded={false}>Popularity<br/><strong>21%</strong></Paper>
  <Paper style={style} zDepth={2} rounded={false}>Energy<br/><strong>11%</strong></Paper>
  <Paper style={style} zDepth={2} rounded={false}>Positiveness<br/><strong>0%</strong></Paper>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Randal White</TableRowColumn>
          <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Stephanie Sanders</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>Christopher Nolan</TableRowColumn>
          <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Tracks
