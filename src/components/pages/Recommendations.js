import React from 'react';
import DataTables from 'material-ui-datatables';
import config from 'react-global-configuration';
import Cookies from 'universal-cookie';
import axios from 'axios';

const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
  }, {
    key: 'popularity',
    label: 'Popularity',
  },{
    key: 'artist',
    label: 'Artist',
  },
  {
    key: 'duration_ms',
    label: 'Duration',
  },
];


export default class Recommendations extends  React.Component{

  cookies = new Cookies();

  constructor({match}){
    super();
    this.state = {tracks: []}
}
  componentDidMount(){
    this.getTracks(this.cookies.get('access_token'));
  }

  getTracks(token){
    axios.get(config.get('api_base_url')+'recommendations',{
         headers: {'Authorization': 'Bearer '+token},
    })
    .then(function (response) {
        console.log(response.data);
        const tracks = response.data.map(function(item){
          item['artist'] = item.artists[0].name
          item.duration_ms = millisToMinutesAndSeconds(item.duration_ms);
          return item;
        })
        this.setState({tracks});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render = () => (

    <DataTables
          height={'auto'}
          selectable={false}
          showRowHover={true}
          columns={TABLE_COLUMNS}
          data={this.state.tracks}
          showCheckboxes={false}
          page={1}
          rowSize={10}
          count={20}
          />
  )

}


function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
