import React from 'react';
import DataTables from 'material-ui-datatables';
import config from 'react-global-configuration';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 600,
  margin: 20,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};
const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
  }, {
    key: 'popularity',
    label: 'Popularity',
  }, {
    key: 'followers_count',
    label: 'Nº Of Followers',
  },
];


export default class Artists extends  React.Component{

  cookies = new Cookies();

  constructor({match}){
    super();
    this.state = {
      artists: [],
      mostPopular: {
        name:"loading",
        "popularity":0,
        followers:
          {total:0},
      },
      popularity_avg: 0}
  }

  componentDidMount(){
    this.getArtists(this.cookies.get('access_token'));
    this.getStats(this.cookies.get('access_token'));

  }

  getArtists(token){
    axios.get(config.get('api_base_url')+'artists',{
         headers: {'Authorization': 'Bearer '+token},
    })
    .then(function (response) {
        const artists = response.data.map(function(item){
          item.followers_count = item.followers.total
          return item;
        })
        this.setState({artists});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  getStats(token){
    axios.get(config.get('api_base_url')+'artists/stats',{
         headers: {'Authorization': 'Bearer '+token},
    })
    .then(function (response) {
        console.log(response.data);
        this.setState({mostPopular: response.data.most_popular,
        popularity_avg: response.data.popularity_avg});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render = () => (
    <div>
    <Paper style={style} zDepth={2}>Most Popular<br/><strong>{this.state.mostPopular.name}</strong><br/>
    <small>
      {this.state.mostPopular.followers.total+" followers / "+this.state.mostPopular.popularity+ " popularity"}
    </small></Paper>
    <Paper style={style} zDepth={2}>Popularity Average<br/><br/><strong>{this.state.popularity_avg}</strong><br/></Paper>
    <DataTables
          height={'auto'}
          selectable={false}
          showRowHover={true}
          columns={TABLE_COLUMNS}
          data={this.state.artists}
          showCheckboxes={false}
          page={1}
          rowSize={10}
          count={20}
          />
    </div>
  )

}
