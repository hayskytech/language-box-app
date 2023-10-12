import React from 'react'
import './table.css'
import { Grid, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div>
      <Menu icon='labeled' widths={4} color='teal' inverted>
        <Menu.Item as={Link} to="/language-box/persons">
          <Icon name='users' /> Persons
        </Menu.Item>
        <Menu.Item as={Link} to="/language-box/tenses">
          <Icon name='time' /> Tenses
        </Menu.Item>
        <Menu.Item as={Link} to="/language-box/opposites">
          <Icon name='close' /> Opposite<br />words
        </Menu.Item>
        <Menu.Item as={Link} to="/language-box/parts-of-speech">
          <Icon name='talk' /> Parts of<br />speech
        </Menu.Item>
      </Menu>
      <Menu icon='labeled' widths={2} fluid color='green' inverted>
        <Menu.Item as={Link} to="/language-box/verbs">
          <Icon name='clock outline' /> Regular Verbs
        </Menu.Item>
        <Menu.Item as={Link} to="/language-box/irregular-verbs">
          <Icon name='clock' /> Irregular Verbs
        </Menu.Item>
      </Menu>
    </div>
  )
}
