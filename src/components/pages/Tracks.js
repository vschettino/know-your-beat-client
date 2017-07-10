import React from 'react';
import DataTables from 'material-ui-datatables';
import config from 'react-global-configuration';
import Cookies from 'universal-cookie';
import axios from 'axios';
import StatsBoard from '../StatsBoard';
import AudioFeatures from '../AudioFeatures';

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


export default class Tracks extends  React.Component{

  cookies = new Cookies();

  constructor({match}){
    super();
    this.state = {title: "Loading", audio_features: null, tracks: [], modalOpen: false, stats:{
      danceability:0,
      energy:0,
      instrumentalness:0,
      valence:0,
      popularity:0,
    }}
  }

  componentDidMount(){
    this.getTracks(this.cookies.get('access_token'));
    this.getStats(this.cookies.get('access_token'));
    //cookies.remove('access_token');
  }
  handleModalChange(){
    this.setState({modalOpen: !this.state.modalOpen})
  }

  handleCellClick(rowIndex, columnIndex, row, column){
    this.getAudioFeatures(this.cookies.get('access_token'), row.id)
    this.setState({modalOpen: true, title: row.name})
  }

  getTracks(token){
    axios.get(config.get('api_base_url')+'tracks',{
         headers: {'Authorization': 'Bearer '+token},
    })
    .then(function (response) {
        const tracks = response.data.items.map(function(item){
          item.track['artist'] = item.track.artists[0].name
          item.track.duration_ms = millisToMinutesAndSeconds(item.track.duration_ms);
          return item.track;
        })
        this.setState({tracks});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  getStats(token){
    axios.get(config.get('api_base_url')+'tracks/stats',{
         headers: {'Authorization': 'Bearer '+token},
    })
    .then(function (response) {
        this.setState({stats: response.data});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  getAudioFeatures(token, id){
    axios.get(config.get('api_base_url')+'tracks/'+id,{
         headers: {'Authorization': 'Bearer '+token},
    })
    .then(function (response) {
        console.log(response);
        this.setState({audio_features: response.data.audio_features});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render = () => (
    <div>
    <StatsBoard stats={this.state.stats} />
    <DataTables
          height={'auto'}
          selectable={false}
          showRowHover={true}
          columns={TABLE_COLUMNS}
          data={this.state.tracks}
          showCheckboxes={false}
          onCellClick={this.handleCellClick.bind(this)}
          page={1}
          rowSize={10}
          count={20}
          />
          <AudioFeatures title={this.state.title} handleClose={this.handleModalChange.bind(this)} open={this.state.modalOpen} features={this.state.audio_features} />
    </div>
  )

}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
