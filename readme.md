## Getting Started
Imagine you're working on a web browser interface similar to Chrome, where multiple tabs can be opened, but only one tab's content is visible at a time. Your task is to create a Tabs Component that mimics this behavior.

Each tab in a browser represents a webpage, and only the currently active tab's content (webpage) is displayed. Users can switch between tabs, and the corresponding content should update accordingly.

You're given a minimal app setup, but the Tabs component is incomplete. You'll need to write the logic to manage the active tab and conditionally display the right content panel.

You are tasked with implementing a Tabs Component that can:

* Display multiple tab titles.
* Show the content of only the currently active tab.
* Switch between tabs when the user clicks on a different tab title.
* The parent component should be able to set an `initialSelectedTab`, and the Tabs component must respect that selection, setting the correct tab as active when the parent changes or set `initialSelectedTab`

## Requirements

You are required to implement the Tabs component that accepts two props: initialSelectedTabId and children. The component should display the names of all the tabs and show the content of the active or selected tab's children. The initialSelectedTabId prop determines which tab is initially active when the component is rendered

## Submission Instructions
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.
