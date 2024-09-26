import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Tabs } from '../Tabs';
import { Tab } from '../Tab';

describe('1.', () => {
  test('render initial selected tab content', async () => {
    render(
      <Tabs initialSelectedTab="LISTEN_NOW">
        <Tab tabId="LISTEN_NOW" label="Listen now">
          Listen now content
        </Tab>
        <Tab tabId="RADIO" label="Radio">
          Radio content
        </Tab>
        <Tab tabId="LIBRARY" label="Library">
          Library content
        </Tab>
        <Tab tabId="SEARCH" label="Search">
          Search content
        </Tab>
      </Tabs>
    );

    await screen.findByText('Listen now content');
  });
  test('render only selected tab content', async () => {
    render(
      <Tabs initialSelectedTab="RADIO">
        <Tab tabId="LISTEN_NOW" label="Listen now">
          Listen now content
        </Tab>
        <Tab tabId="RADIO" label="Radio">
          Radio content
        </Tab>
        <Tab tabId="LIBRARY" label="Library">
          Library content
        </Tab>
        <Tab tabId="SEARCH" label="Search">
          Search content
        </Tab>
      </Tabs>
    );

    await screen.findByText('Radio content');

    expect(screen.queryByText('Listen now content')).not.toBeInTheDocument();

    expect(screen.queryByText('Library content')).not.toBeInTheDocument();

    expect(screen.queryByText('Search content')).not.toBeInTheDocument();
  });
  test('click on another tab should open that tab', async () => {
    render(
      <Tabs initialSelectedTab="LISTEN_NOW">
        <Tab tabId="LISTEN_NOW" label="Listen now">
          Listen now content
        </Tab>
        <Tab tabId="RADIO" label="Radio">
          Radio content
        </Tab>
        <Tab tabId="LIBRARY" label="Library">
          Library content
        </Tab>
        <Tab tabId="SEARCH" label="Search">
          Search content
        </Tab>
      </Tabs>
    );
    await screen.findByText('Listen now content');

    userEvent.click(screen.getByText('Search'));

    await screen.findByText('Search content');
  });
});
