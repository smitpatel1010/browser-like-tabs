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
    userEvent.click(screen.getByText('CSS'));

    await screen.findByText(
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
    );
  });
});

describe('2.', () => {
  test('render only selected tab content', async () => {
    render(
      <Tabs initialSelectedTab="tab-2">
        <Tab tabId="tab-1" label="Tab 1">
          Tab Content 1
        </Tab>
        <Tab tabId="tab-2" label="Tab 2">
          Tab Content 2
        </Tab>
        <Tab tabId="tab-3" label="Tab 3">
          Tab Content 3
        </Tab>
      </Tabs>
    );

    await screen.findByText('Tab Content 2');

    expect(screen.queryByText('Tab Content 1')).not.toBeInTheDocument();

    expect(screen.queryByText('Tab Content 3')).not.toBeInTheDocument();
  });
  test('new tab should open if initialSelectedTab gets changed', async () => {
    const rendererTabs = (initialSelectedTab = 'tab-1') => (
      <Tabs initialSelectedTab={initialSelectedTab}>
        <Tab tabId="tab-1" label="Tab 1">
          Tab Content 1
        </Tab>
        <Tab tabId="tab-2" label="Tab 2">
          Tab Content 2
        </Tab>
        <Tab tabId="tab-3" label="Tab 3">
          Tab Content 3
        </Tab>
      </Tabs>
    );
    const { rerender } = render(rendererTabs('tab-1'));

    await screen.findByText('Tab Content 1');

    userEvent.click(screen.getByText('Tab 2'));

    await screen.findByText('Tab Content 2');

    rerender(rendererTabs('tab-3'));

    await screen.findByText('Tab Content 3');
  });

  test('should render all tab titles', async () => {
    render(
      <Tabs initialSelectedTab="tab-1">
        <Tab tabId="tab-1" label="Tab 1">
          Tab Content 1
        </Tab>
        <Tab tabId="tab-2" label="Tab 2">
          Tab Content 2
        </Tab>
        <Tab tabId="tab-3" label="Tab 3">
          Tab Content 3
        </Tab>
      </Tabs>
    );

    screen.getByText('Tab 1');

    screen.getByText('Tab 2');

    screen.getByText('Tab 3');
  });
});
