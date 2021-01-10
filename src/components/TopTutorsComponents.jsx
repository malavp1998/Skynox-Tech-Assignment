import React from 'react';
import { Grid , Label,Image } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import '../App.css';

class TopTutorsComponents extends React.Component {

    render() {
        return (
            <div style={{marginLeft:"12px"}} > 
            <div><h3 style={{ marginBottom: "20px" }}>Top Tutor</h3></div>
             <Grid>
    <Grid.Row>
      <Grid.Column width={5}>
      <Label size='huge' as='a'>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Malav Gdfdcv xvxvfdg <Icon name='plus square' />
    </Label>
      </Grid.Column>
      <Grid.Column width={5}>
      <Label size='huge' as='a'>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Malav Gdfdcv xvxvfdg <Icon name='plus square' />
    </Label>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={5}>
      <Label size='huge' as='a'>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Malav Gdfdcv xvxvfdg <Icon name='plus square' />
  
    </Label>
      </Grid.Column>
      <Grid.Column width={5}>
      <Label size='huge' as='a'>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Malav Gdfdcv xvxvfdg <Icon name='plus square' />
    </Label>
      </Grid.Column>
    
      <Grid.Row columns={1}>
      <Grid.Column>
          
       <img style={{marginTop:"-94px"}} src='//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' width="350" height="160" alt="Cinque Terre" />
      </Grid.Column>
    
    </Grid.Row>
    </Grid.Row>
  </Grid>
 


  

            </div>
        )
    }
}



export default TopTutorsComponents