import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import { Input, Label, Menu } from 'semantic-ui-react'

class PopularThisWeekComponents extends React.Component {
    render(){
        return(
<div>
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
  </Segment.Group>
</div>

        )
    }
 
}

export default PopularThisWeekComponents
