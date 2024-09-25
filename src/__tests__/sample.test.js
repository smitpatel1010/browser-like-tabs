import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Tabs } from '../Tabs';
import { Tab } from '../Tab';

describe('1.', () => {
  test('render initial selected tab content', async () => {
    render(
      <Tabs initialSelectedTab="HTML">
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
    );

    await screen.findByText(
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
    );
  });
  test('render only selected tab content', async () => {
    render(
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
    );

    await screen.findByText(
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
    );

    expect(
      screen.queryByText(
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
      )
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
      )
    ).not.toBeInTheDocument();
  });
  test('click on another tab should open that tab', async () => {
    render(
      <Tabs initialSelectedTab="HTML">
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
    );
    userEvent.click(screen.getByText('CSS'))

    await screen.findByText(
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
    );
  });
});
