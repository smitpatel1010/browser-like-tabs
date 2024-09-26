import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Tabs } from '../Tabs';
import { Tab } from '../Tab';

describe('1.', () => {
  test('render initial selected tab content', async () => {
    render(
      <Tabs initialSelectedTab="LONDON">
        <Tab tabId="LONDON" label="London">
          London is the capital city of England.
        </Tab>
        <Tab tabId="PARIS" label="Paris">
          Paris is the capital of France.
        </Tab>
        <Tab tabId="TOKYO" label="Tokyo">
          Tokyo is the capital of Japan.
        </Tab>
      </Tabs>
    );

    await screen.findByText('London is the capital city of England.');
  });
  test('render only selected tab content', async () => {
    render(
      <Tabs initialSelectedTab="PARIS">
        <Tab tabId="LONDON" label="London">
          London is the capital city of England.
        </Tab>
        <Tab tabId="PARIS" label="Paris">
          Paris is the capital of France.
        </Tab>
        <Tab tabId="TOKYO" label="Tokyo">
          Tokyo is the capital of Japan.
        </Tab>
      </Tabs>
    );

    await screen.findByText('Paris is the capital of France.');

    expect(
      screen.queryByText('London is the capital city of England.')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText('Tokyo is the capital of Japan.')
    ).not.toBeInTheDocument();
  });
  test('click on another tab should open that tab', async () => {
    render(
      <Tabs initialSelectedTab="LONDON">
        <Tab tabId="LONDON" label="London">
          London is the capital city of England.
        </Tab>
        <Tab tabId="PARIS" label="Paris">
          Paris is the capital of France.
        </Tab>
        <Tab tabId="TOKYO" label="Tokyo">
          Tokyo is the capital of Japan.
        </Tab>
      </Tabs>
    );
    userEvent.click(screen.getByText('Paris'));

    await screen.findByText('Paris is the capital of France.');
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
