import React from 'react'

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
                <img src='//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' width="330" height="505" alt="Cinque Terre" />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment basic >
                <img src='//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' width="330" height="505" alt="Cinque Terre" />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment basic> <img src='//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' width="350" height="260" alt="Cinque Terre" /></Segment>
              <Segment basic>
                <Grid columns={2} divided>
                  <Grid.Row stretched>
                    <Grid.Column>
                      <Segment basic><div style={{ marginTop: "-30px" }}>
                        <img src='//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' width="165" height="205" alt="Cinque Terre" />
                      </div> </Segment>
                    </Grid.Column>
                    <Grid.Column basic>
                      <Segment basic><div style={{ marginTop: "-30px", marginLeft: "12px" }}>
                        <img src='//media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png' width="165" height="205" alt="Cinque Terre" />
                      </div> </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>

            </Grid.Column>

          </Grid.Row>
        </Grid>


        {/*
  <Segment.Group>
    <Segment>Top</Segment>
    <Segment.Group>
      <Segment  basic>Nested Top</Segment>
      <Segment  basic>Nested Middle</Segment>
      <Segment  basic>Nested Bottom</Segment>
    </Segment.Group>
    <Segment.Group horizontal>
      <Segment>Top</Segment>
      <Segment >  <Card
    color='red'
    image='C:/Users/piyus/OneDrive/Desktop/Diwali Day 2/DSC_0014.JPG'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
   
  /></Segment>
      <Segment> <Menu vertical>
        <Menu.Item
          name='inbox'
        
        >
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item
          name='discover'
         
        >
            <div>
             <Icon name='search' />
              Discover
            </div>
        
        </Menu.Item>

        <Menu.Item
          name='updates'
         
        >
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
       </Menu></Segment>
    </Segment.Group>
    <Segment>Bottom</Segment>
</Segment.Group> */}
      </div>

    )
  }

}

export default PopularThisWeekComponents
