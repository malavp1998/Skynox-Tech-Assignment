import React from 'react';
import '../App.css';
import { Menu, Label, Icon,Grid} from 'semantic-ui-react'
import image1 from './images/image1.jpg'

//import ReactDOM from 'react-dom';

class MenuComponents extends React.Component {


    render() {

        return (
            <div>
                <div style={{ position: 'absolute', marginLeft: '250px', display: 'flex' }}>
                    <span style={{ marginTop: '2px', height: "35px", width: '35px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }} class="dot"><div style={{ marginLeft: '11px', marginTop: '7px', fontSize: '22px', color: 'white' }}> e</div></span>
                    <h2 style={{ position: 'absolute', marginLeft: '50px', marginTop: '6px' }}>EduKated</h2>
                </div>

                <div style={{ position: 'absolute', marginLeft: '250px', marginTop: '200px' }}>
                    <Menu size='large' vertical>

                        <Menu.Item name='discover' >
                            <div style={{ display: 'flex', marginLeft: '5px' }}>  <Icon name='braille' /><div style={{ marginLeft: '28px', fontWeight: 'bold' }}>Home</div></div>
                        </Menu.Item>
                        <Menu.Item name='discover' >
                            <div style={{ display: 'flex', marginLeft: '5px' }}>  <Icon name='search' /><div style={{ marginLeft: '28px' }}>Discover</div></div>
                        </Menu.Item>
                        <Menu.Item name='discover' >
                            <div style={{ display: 'flex', marginLeft: '5px' }}>  <Icon name='pencil alternate' /><div style={{ marginLeft: '28px' }}>Messages</div></div>
                        </Menu.Item>
                        <Menu.Item name='discover' >
                            <div style={{ display: 'flex', marginLeft: '5px' }}>  <Icon name='setting' /><div style={{ marginLeft: '28px' }}>Setting</div></div>
                        </Menu.Item>
                    </Menu>
                </div>

                <div style={{ position: 'absolute', marginLeft: '250px', marginRight: '1350px', marginTop: '650px'}}>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <div style={{ backgroundColor: '#ece7e7', padding: '70px', marginLeft: '-5px', height: '200px',width:'7px',borderRadius:'33px' }}>
                                <div style={{marginLeft:'-40px' ,marginTop:'-40px'}}><Icon size='large' name='box'/></div>
                               <div>
                                   <h1 style={{marginTop:'63px',marginLeft:'-50px'}}>1800</h1>
                                   <div style={{marginTop:'-19px',marginLeft:'-50px'}}><h3>Points</h3></div>
                               </div>
                    </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div style={{ backgroundColor: '#ece7e7', padding: '70px', marginLeft: '-5px', height: '200px',width:'7px',borderRadius:'33px' }}>
                                <div style={{marginLeft:'-40px' ,marginTop:'-40px'}}><Icon size='large' name='battery full'/></div>

                                <div>
                                   <h1 style={{marginTop:'63px',marginLeft:'-50px'}}>45.3%</h1>
                                   <div style={{marginTop:'-19px',marginLeft:'-50px'}}><h3>Complete</h3></div>
                               </div>
                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
  
                <div style={{ position: 'absolute', marginLeft: '250px', marginTop: '400px' }}>
                    <Label size='massive' image>
                        <img src={image1} alt='fds' />
                        Updated Course<div style={{ marginLeft: '80px' }}><h4>by @karlatuts</h4></div>
                    </Label>
                </div>









                <div style={{ position: 'absolute', marginLeft: '250px', marginTop: '860px' }}>
                    <Label size='massive' image>
                        <img src='https://react.semantic-ui.com/images/avatar/small/ade.jpg' alt='fds' />
                         Alex Dixon<div style={{ marginLeft: '80px' }}><h4>@alexlean</h4></div>
                    </Label>
                </div>
            </div>

        )
    }
}



export default MenuComponents