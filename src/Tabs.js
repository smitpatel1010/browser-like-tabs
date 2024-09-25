import React, { useState, useEffect } from 'react';

export const Tabs = ({ children, initialSelectedTab }) => {
  const tabs = React.Children.map(children, (child) => ({
    tabId: child.props.tabId,
    label: child.props.label,
    content: child.props.children,
  }));

  const [activeTabId, setActiveTabId] = useState(
    initialSelectedTab ?? tabs[0].tabId
  );

  useEffect(() => {
    setActiveTabId(initialSelectedTab);
  }, [initialSelectedTab]);

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button key={tab.tabId} onClick={() => setActiveTabId(tab.tabId)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.tabId === activeTabId).content}</div>
    </div>
  );
};
