import React from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerMenu from './DrawerMenu'

export default class AppAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  handleRequestChange = (open) => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <DrawerMenu open={this.state.open} handleRequestChange={this.handleRequestChange} />
        <AppBar
          title={"KnowYourBeat"}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}
