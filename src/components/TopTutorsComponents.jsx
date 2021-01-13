import React from 'react';
import { Grid, Label, Image } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import '../App.css';
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'
import image10 from './images/image10.png'
import image11 from './images/image11.jpg'
class TopTutorsComponents extends React.Component {

  render() {
    return (
      <div style={{ marginLeft: "12px" }} >
        <div><h3 style={{ marginBottom: "20px" }}>Top Tutor</h3></div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Label size='huge' as='a'>
                <Image avatar spaced='right' src={image7} />
      Malav Gdfdcv xvxvfg <Icon name='plus square' />
              </Label>
            </Grid.Column>
            <Grid.Column width={5}>
              <Label size='huge' as='a'>
                <Image avatar spaced='right' src={image8} />
      Malav Gdfdcv xwxvjdg <Icon name='plus square' />
              </Label>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
              <Label size='huge' as='a'>
                <Image avatar spaced='right' src={image9} />
      Malav Gdfdcv xvxvdg <Icon name='plus square' />

              </Label>
            </Grid.Column>
            <Grid.Column width={5}>
              <Label size='huge' as='a'>
                <Image avatar spaced='right' src={image10} />
      Malav Gdfdcv xsdg <Icon name='plus square' />
              </Label>
            </Grid.Column>

            <Grid.Row columns={1}>
              <Grid.Column>

                <img style={{ marginTop: "-94px" }} src={image11} width="350" height="160" alt="Cinque Terre" />
              </Grid.Column>

            </Grid.Row>
          </Grid.Row>
        </Grid>


      </div>
    )
  }
}



export default TopTutorsComponents