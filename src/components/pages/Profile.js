import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import config from 'react-global-configuration';
import Cookies from 'universal-cookie';
import axios from 'axios';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import {
  blue300,
  indigo900,
} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class Profile extends React.Component{

  constructor({match}){
    super();
    this.state = {user: {
      birthdate: Date.now(),
      country:"Unknow",
      display_name:"Unknow",
      email:"Unknow",
      external_urls: null,
      followers:null,
      href:"Unknow",
      id:"Unknow",
      images:[],
      product:"premium",
      uri:"Unknow",
    }};
    const cookies = new Cookies();
    if(match.params.access_token !== undefined){
      cookies.set('access_token', match.params.access_token);
    }
    this.getProfile(cookies.get('access_token'));
   }

   getProfile(token){
     axios.get(config.get('api_base_url')+'users/me',{
          headers: {'Authorization': 'Bearer '+token},
     })
     .then(function (response) {
       this.setState({user: response.data});
     }.bind(this))
     .catch(function (error) {
       console.log(error);
     });
   }

   render(){
     return <Card>
         <CardHeader
           title="Profile"
           subtitle={(this.state.user.display_name || this.state.user.email) + ', ' +this.calculateAge(this.state.user.birthdate)+ ' years old' }
         />
         <CardText>
           <p>
             Hi There,
           </p>
           <p>
             We are all set up! Now you can use the left menu to navigate and find more about your musical taste.
           </p>
           <small>
             {(this.state.user.product) === "premium" ? '' : 'Since you\'re not a a premium user, some of the features may be incomplete avaliable.'}
           </small>
         </CardText>
       </Card>

   }

calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}



}
