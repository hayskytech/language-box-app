import React, { useState } from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Tenses from './Tenses'
import Opposites from './Opposites'
export default function MainMenu() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MenuItems />}>
            <Route index element={<HomePage />} />
            <Route path="tenses" element={<Tenses />} />
            <Route path="opposites" element={<Opposites />} />
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
      <Container>
        <Menu icon='labeled'>
          <Menu.Item
            name='home'
            active={item === 'home'}
            onClick={() => { setitem('home') }}
            as={Link}
            to="/"
          >
            <Icon name='home' />
            Home
          </Menu.Item>

          <Menu.Item
            name='users'
            active={item === 'users'}
            onClick={() => { setitem('users') }}
            as={Link}
            to="/tenses"
          >
            <Icon name='time' />
            Tenses
          </Menu.Item>

          <Menu.Item
            name='opposites'
            active={item === 'opposites'}
            onClick={() => { setitem('opposites') }}
            as={Link}
            to="/opposites"
          >
            <Icon name='close' />
            Opposites
          </Menu.Item>


        </Menu>
        <Outlet />
      </Container>
    </>
  )
}