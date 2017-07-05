
import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 80,
  width: 220,
  margin: 20,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};


export default class StatsBoard extends  React.Component{

  render = () => (
    <div>
      <Paper style={style} zDepth={2} rounded={false}>Danceability<br/><strong>{Math.round(this.props.stats.danceability*100)}%</strong></Paper>
      <Paper style={style} zDepth={2} rounded={false}>Instrumentalness<br/><strong>{Math.round(this.props.stats.instrumentalness*100)}%</strong></Paper>
      <Paper style={style} zDepth={2} rounded={false}>Popularity<br/><strong>{this.props.stats.popularity}%</strong></Paper>
      <Paper style={style} zDepth={2} rounded={false}>Energy<br/><strong>{Math.round(this.props.stats.energy*100)}%</strong></Paper>
      <Paper style={style} zDepth={2} rounded={false}>Positiveness<br/><strong>{Math.round(this.props.stats.valence*100)}%</strong></Paper>
    </div>
  )

}
