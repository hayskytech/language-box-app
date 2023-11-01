import React from 'react'
import './table.css'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div>
      <h1>Learn English</h1>
      <Menu icon='labeled' widths={4} color='teal' inverted>
        <Menu.Item as={Link} to="persons">
          <Icon name='users' /> Persons
        </Menu.Item>
        <Menu.Item as={Link} to="tenses">
          <Icon name='time' /> Tenses
        </Menu.Item>
        <Menu.Item as={Link} to="opposites">
          <Icon name='close' /> Opposite<br />words
        </Menu.Item>
        <Menu.Item as={Link} to="parts-of-speech">
          <Icon name='talk' /> Parts of<br />speech
        </Menu.Item>
      </Menu>
      <Menu icon='labeled' widths={2} fluid color='green' inverted>
        <Menu.Item as={Link} to="verbs">
          <Icon name='clock outline' /> Regular Verbs
        </Menu.Item>
        <Menu.Item as={Link} to="irregular-verbs">
          <Icon name='clock' /> Irregular Verbs
        </Menu.Item>
      </Menu>
      {(process.env.NODE_ENV === 'development') && <>
        <h1>Learn Coding</h1>
        <Menu icon='labeled' widths={3} fluid color='blue' inverted>
          <Menu.Item as={Link} to="htmlcss">
            <Icon name='code' /> HTML CSS
          </Menu.Item>
          <Menu.Item as={Link} to="javascript">
            <Icon name='file code outline' /> JavaScript
          </Menu.Item>
          <Menu.Item as={Link} to="react">
            <Icon name='react' /> React
          </Menu.Item>
        </Menu>
      </>
      }
    </div>
  )
}
