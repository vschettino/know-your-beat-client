import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerMenu extends React.Component {


  render() {
    return (
        <Drawer open={this.props.open} docked={false} onRequestChange={open => this.props.handleRequestChange(open)}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Tracks</MenuItem>
          <MenuItem>Artists</MenuItem>
          <MenuItem>Recommendations</MenuItem>
        </Drawer>
    );
  }
}
