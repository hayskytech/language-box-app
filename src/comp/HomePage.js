import React from 'react'
import './table.css'
import { Grid, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div>


      <Menu icon='labeled' widths={3} color='teal' inverted>
        <Menu.Item as={Link} to="/persons">
          <Icon name='users' /> Persons
        </Menu.Item>
        <Menu.Item as={Link} to="/tenses">
          <Icon name='time' /> Tenses
        </Menu.Item>
        <Menu.Item as={Link} to="/opposites">
          <Icon name='close' /> Opposite<br />words
        </Menu.Item>
      </Menu>
      <Menu icon='labeled' widths={2} fluid color='green' inverted>
        <Menu.Item as={Link} to="/verbs">
          <Icon name='clock outline' /> Regular Verbs
        </Menu.Item>
        <Menu.Item as={Link} to="/irregular-verbs">
          <Icon name='clock' /> Irregular Verbs
        </Menu.Item>
      </Menu>
    </div>
  )
}
