import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Icon, Menu } from 'semantic-ui-react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './comp/HomePage'
import Tenses from './comp/Tenses'
import Opposites from './comp/Opposites'
import Verbs from './comp/Verbs'
import Persons from './comp/Persons'
import IrregularVerbs from './comp/IrregularVerbs'
import PartsOfSpeech from './comp/PartsOfSpeech'
import NotFoundPage from './comp/NotFoundPage'
import Prac from './prac/Prac'

export default function MainMenu() {
  const [data, setdata] = useState({
    languages: ['English', 'Urdu', 'اردو', 'తెలుగు', 'telugu']
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MenuItems />} />
          <Route path="/languagebox" element={<MenuItems />}>
            <Route index element={<HomePage />} />
            <Route path="parts-of-speech" element={<PartsOfSpeech />} />
            <Route path="persons" element={<Persons />} />
            <Route path="tenses" element={<Tenses />} />
            <Route path="opposites" element={<Opposites />} />
            <Route path="verbs" element={<Verbs />} />
            <Route path="irregular-verbs" element={<IrregularVerbs />} />
            <Route path="practice" element={<Prac />} />
            <Route path="*" element={<NotFoundPage />} />	
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
      <Menu icon='labeled' widths={5} fluid color='blue' inverted>
        <Menu.Item
          name='home'
          active={item === 'home'}
          onClick={() => { setitem('home') }}
          as={Link}
          to="/languagebox"
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
        <Menu.Item as={Link} to='practice'>
          <Icon name='list' /> Practice
        </Menu.Item>

      </Menu>
      <Container>
        <Outlet />
      </Container >
      <br />
    </>
  )
}