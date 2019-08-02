import React from 'react';
import { Tab } from 'semantic-ui-react';
import GridContent from '@components/d/grid-sections/shopContent';
import { GridState } from '@store/d/grid';

export default function ShopGrid() {

  const [ { plans }, dispatch ] = GridState();

  const panes = [
    { menuItem: 'Internet', render: () => {

      return (
        <Tab.Pane attached={false}>
          <GridContent plans={plans.skus[0]} tabIndex={plans.tabIndex} />
        </Tab.Pane>
      )
    }},
    { menuItem: 'Bundle', render: () => {

      return (
        <Tab.Pane attached={false}>
          <GridContent plans={plans.skus[1]} tabIndex={plans.tabIndex} />
        </Tab.Pane>
      )}},
    { menuItem: 'Home Phone', render: () => {

      return (
        <Tab.Pane attached={false}>
          <GridContent plans={plans.skus[2]} tabIndex={plans.tabIndex} />
        </Tab.Pane>
      )
    }},
  ]

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-12">
          <h1 className="headline-1">Shop Frontier plans</h1>

          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            defaultActiveIndex={0}
            onTabChange={(event, data) => dispatch({ type: 'setTabIndex', setTabIndex: data.activeIndex })}
          />
        </div>
      </div>

      <style jsx global>
        {`
          .ui.segment {
            background: none;
            box-shadow: none;
            border: none;
          }
        `}
      </style>
    </div>
  )
}
