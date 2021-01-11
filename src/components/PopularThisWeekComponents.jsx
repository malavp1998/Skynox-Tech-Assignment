import React from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'

//import { Card, Icon } from 'semantic-ui-react'
//import { Input, Label, Menu } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
class PopularThisWeekComponents extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "35px", paddingRight: "140px" }}>
        <div><h3 style={{ marginBottom: "20px" }}>Popular This Week</h3></div>
        <Grid columns={3} divided >
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic>
                <img src={image1} width="330" height="505" alt="Cinque Terre" />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic >
                <img src={image4} width="330" height="505" alt="Cinque Terre" />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment basic> <img src={image3} width="350" height="260" alt="Cinque Terre" /></Segment>
              <Segment basic>
                <Grid columns={2} divided>
                  <Grid.Row stretched>
                    <Grid.Column>
                      <Segment basic><div style={{ marginTop: "-30px" }}>
                        <img src={image2} width="165" height="205" alt="Cinque Terre" />
                      </div> </Segment>
                    </Grid.Column>
                    <Grid.Column >
                      <Segment basic><div style={{ marginTop: "-30px", marginLeft: "12px" }}>
                        <img src={image1} width="165" height="205" alt="Cinque Terre" />
                      </div> </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>

    )
  }

}

export default PopularThisWeekComponents
