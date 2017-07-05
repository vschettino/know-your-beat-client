import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
  Link
} from 'react-router-dom'

class DrawerMenu extends React.Component {

  render() {
    return (
        <Drawer open={this.props.open} docked={false} onRequestChange={open => this.props.handleRequestChange(open)}>
          <MenuItem onTouchTap={this.props.handleClose} ><Link to="/">Home</Link></MenuItem>
          <MenuItem onTouchTap={this.props.handleClose} ><Link to="/tracks">Tracks</Link></MenuItem>
          <MenuItem onTouchTap={this.props.handleClose} ><Link to="/artists">Artists</Link></MenuItem>
          <MenuItem onTouchTap={this.props.handleClose} ><Link to="/recommendations">Recommendations</Link></MenuItem>
        </Drawer>
    );
  }
}

export default DrawerMenu;
