
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DataTables from 'material-ui-datatables';

export default class StatsBoard extends  React.Component{

  constructor(props){
    super(props);
  }

  render = () => {
    var arr = [];
    if(this.props.features != null){

      for(var name in this.props.features[0]){
        arr.push(<p>{name +' '+ this.props.features[0][name]}</p>);
      }
    }

    return <Dialog
      title="Dialog With Actions"
      actions={<FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose}
        autoScrollBodyContent={true}
      />}
      modal={false}
      open={this.props.open}
      onRequestClose={this.props.handleClose}
    >
    {arr}

    </Dialog>
  }

}
