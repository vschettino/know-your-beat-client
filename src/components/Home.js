import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Home = () => (
  <Card>
      <CardHeader
        title="Welcome to KnowYourBeat"
        subtitle="Introduction"
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
          label={'Sign In'}
          labelPosition="before"
          />
      </CardActions>
    </Card>
)

export default Home
