import type {FC} from 'react';
import ReactFlow, {Background, Controls, MiniMap} from 'react-flow-renderer';
import {nodeTypes} from './Nodes';
import {edgeTypes} from './Edges';
import {initialElements} from './elements';

import * as css from './style';

export const Automation: FC = () => {
  return (
    <div className={css.AutomationCanvas}>
      <ReactFlow
        nodesDraggable={false}
        nodesConnectable={false}
        elements={initialElements}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls showInteractive={false} className={css.Controls} />
        <MiniMap />
        <Background gap={32} />
      </ReactFlow>
    </div>
  );
};
