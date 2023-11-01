import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { persons, verbs } from './Data'

export default function Prac() {
  const [lang, setLang] = useState('en')
  const [person, setPerson] = useState('I')
  const [tense, setTense] = useState('all')
  const [verb, setVerb] = useState('eat')
  const singles = ['he', 'she', 'it', 'raju']
  // debugger
  function handleForm(e) {
    const form = e.target
    e.preventDefault()
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries());

    // setLang(formJson.lang)
    setPerson(formJson.person)
    setTense(formJson.tense)
    setVerb(formJson.verb)
  }
  function langChange(e) {
    const mainForm = document.getElementById('mainForm')
    // mainForm.reset()
    // mainForm.lang = e.target.value
    mainForm.peron = ''
    setLang(e.target.value)
    setPerson('')
    setTense('')
    setVerb('')
  }
  return (
    <div>
      <Form onSubmit={handleForm} id={`mainForm`}>
        {/* <Form.Field width={3}>
          <label>Language</label>
          <select name='lang' onChange={langChange} value={lang}>
            <option value='en'>EN</option>
            <option value='te'>TE</option>
          </select>
        </Form.Field> */}
        <Form.Field width={3}>
          <label>Person</label>
          <select name='person' value={person} onChange={(e) => setPerson(e.target.value)}>
            {Object.keys(persons[lang]).map((item, index) =>
              (<option key={index}>{item}</option>)
            )}
          </select>
        </Form.Field>
        <Form.Field width={5}>
          <label>Tense</label>
          <select name="tense" value={tense} onChange={(e) => setTense(e.target.value)}>
            <option value={`all`}>all</option>
            <option value='v1'>v1 - Simple Present</option>
            <option value='v2'>v2 - Simple Past</option>
            <option value={`v3`}>v3 - Past Participle</option>
            <option value={`v4`}>v4 - Present Continous Tense</option>
          </select>
        </Form.Field>
        <Form.Field width={3}>
          <label>Verb</label>
          <select name="verb" value={verb} onChange={(e) => setVerb(e.target.value)}>
            {Object.keys(verbs).map((item, index) =>
              (<option key={index}>{item}</option>)
            )}
          </select>
        </Form.Field>
        {/* <Form.Field width={3}>
          <Button>Submit</Button>
        </Form.Field> */}
      </Form>
      <hr />
      <p style={{ fontSize: 20 }}>
        {tense !== 'all' ?
          <>
            {person}{` `}

            {tense === 'v3' && singles.includes(person) && 'has '}
            {tense === 'v3' && 'have '}

            {tense !== 'v3' && persons[lang][person][tense]}{` `}

            {tense === 'v1' && (singles.includes(person) ? verbs[verb].v1s : verbs[verb][tense])}{` `}
            {tense === 'v3' && 'already '}

            {tense !== 'v1' && verbs[verb][tense]}{` `}

            {verbs[verb].ex}{` `}

            {tense === 'v1' && 'daily '}
            {tense === 'v2' && 'yesterday '}
            {tense === 'v4' && 'now '}
          </>
          :
          <>
            {/* V1 */}
            {person}{` `}
            {singles.includes(person) ? verbs[verb].v1s : verbs[verb]['v1']}{` `}
            {verbs[verb].ex}{` `}
            {'daily '}

            <hr />
            {/* V2 */}
            {person}{` `}
            {verbs[verb]['v2']}{` `}
            {verbs[verb].ex}{` `}
            {'yesterday '}

            <hr />
            {/* V3 */}
            {person}{` `}
            {singles.includes(person) ? 'has ' : 'have '}
            {`already `}
            {verbs[verb]['v3']}{` `}
            {verbs[verb].ex}{` `}

            <hr />
            {/* V4 */}
            {person}{` `}
            {persons[lang][person]['v4']}{` `}
            {verbs[verb]['v4']}{` `}
            {verbs[verb].ex}{` `}
            {'now '}
          </>
        }
      </p>
    </div>
  )
}
