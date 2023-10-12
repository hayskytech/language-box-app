import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Persons() {
  return (
    <div>
      <h1>Persons</h1>
      <Table id='home-table' unstackable compact color='blue'>
        <Table.Row>
          <Table.Cell>I</Table.Cell>
          <Table.Cell>నేను</Table.Cell>
          <Table.Cell>میں</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>we</Table.Cell>
          <Table.Cell>మేము</Table.Cell>
          <Table.Cell>ہم</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>you</Table.Cell>
          <Table.Cell>మేము</Table.Cell>
          <Table.Cell>تم / آپ</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>he</Table.Cell>
          <Table.Cell>అతను / ఇతను</Table.Cell>
          <Table.Cell>وہ (آدمی)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>she</Table.Cell>
          <Table.Cell>ఆమె / ఈమె</Table.Cell>
          <Table.Cell>وہ (عورت)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>it</Table.Cell>
          <Table.Cell>అది / ఇది</Table.Cell>
          <Table.Cell>وہ(چیز)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>they</Table.Cell>
          <Table.Cell>వారు</Table.Cell>
          <Table.Cell>وہ (لوگ)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>those</Table.Cell>
          <Table.Cell>అవి</Table.Cell>
          <Table.Cell>وہ (چیزیں)</Table.Cell>
        </Table.Row>
      </Table>

      <h2>Sentences</h2>
      <Table compact color='blue'>
        <Table.Row>
          <Table.Cell>I am a boy</Table.Cell>
          <Table.Cell>నేను ఒక అబ్బాయిని</Table.Cell>
          <Table.Cell>میں ایک لڑکا ہوں</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>You are a boy</Table.Cell>
          <Table.Cell>నీవు ఒక అబ్బాయివి</Table.Cell>
          <Table.Cell>تم ایک لڑکہ ہو</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>He is going</Table.Cell>
          <Table.Cell>అతను వెళ్తున్నాడు</Table.Cell>
          <Table.Cell>وہ جا رہا ہے</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>She is going</Table.Cell>
          <Table.Cell>ఆమె వెళ్తూ ఉంది</Table.Cell>
          <Table.Cell>وہ جا رہی ہے</Table.Cell>
        </Table.Row>
      </Table>
      <br />
    </div>
  )
}
