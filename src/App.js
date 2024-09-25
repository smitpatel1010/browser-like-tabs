import './styles.css';

import { Tabs } from './Tabs';
import { Tab } from './Tab';

import React from 'react';

export default function App() {
  return (
    <div className="App">
      <Tabs initialSelectedTab="CSS">
        <Tab tabId="HTML" label="HTML">
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </Tab>
        <Tab tabId="CSS" label="CSS">
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </Tab>
        <Tab tabId="JS" label="JavaScript">
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </Tab>
      </Tabs>
    </div>
  );
}
