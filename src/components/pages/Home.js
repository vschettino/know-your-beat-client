import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import config from 'react-global-configuration';
import Cookies from 'universal-cookie';
import Profile from './Profile'


export default class Home extends React.Component{


  constructor(props){
    super(props);
    this.state = {authorize_url: null};
    this.getAuthorizeUrl()
  }

  getAuthorizeUrl = () =>{
    axios.get(config.get('api_base_url')+'users/authorize-url')
    .then(function (response) {
      this.setState({authorize_url: response.data.authorize_url});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }


  render = () => {
    const cookies = new Cookies();
    if(cookies.get('access_token') != null){
      console.log(cookies.get('access_token'))
      return <Profile match={{params:{}}}/>
    }
    return <Card>
        <CardHeader
          title="Welcome to KnowYourBeat"
          subtitle={cookies.get('access_token')}
        />
        <CardText>
          <p>
            This is a simple app to help you understand your musical taste. For all features it is required that you sign in with your Spotify account.
          </p>
          <p>
            <strong>We do not save your data on our servers</strong>.
          </p>
          <p>
            All data, besides the permissions you grant us to access your account, stay on your browser and is not stored somewhere else when you go away.
          </p>
        </CardText>
        <CardActions>
          <FlatButton
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            label={'Sign In With Spotify Account'}
            href={this.state.authorize_url}
            labelPosition="before"
            />
        </CardActions>
      </Card>
  }

}
