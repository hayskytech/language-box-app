import React, { useState } from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Tenses from './Tenses'
import Opposites from './Opposites'
import Verbs from './Verbs'
import Persons from './Persons'
import IrregularVerbs from './IrregularVerbs'
export default function MainMenu() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MenuItems />}>
            <Route index element={<HomePage />} />
            <Route path="persons" element={<Persons />} />
            <Route path="tenses" element={<Tenses />} />
            <Route path="opposites" element={<Opposites />} />
            <Route path="verbs" element={<Verbs />} />
            <Route path="irregular-verbs" element={<IrregularVerbs />} />
            {/* <Route path="*" element={<NotFoundPage />} />	 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function MenuItems() {
  const [item, setitem] = useState('home')
  return (
    <>
      <Menu icon='labeled' widths={4} fluid color='blue' inverted>
        <Menu.Item
          name='home'
          active={item === 'home'}
          onClick={() => { setitem('home') }}
          as={Link}
          to="/"
        >
          <Icon name='home' /> Home
        </Menu.Item>
        <Menu.Item>
          <Icon name='info' /> About Us
        </Menu.Item>
        <Menu.Item>
          <Icon name='handshake' /> Contact Us
        </Menu.Item>
        <Menu.Item>
          <Icon name='setting' /> Settings
        </Menu.Item>

      </Menu>
      <Container>
        <Outlet />
      </Container >
    </>
  )
}