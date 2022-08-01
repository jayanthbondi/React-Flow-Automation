/* eslint-disable @typescript-eslint/no-use-before-define */

import {BaseNode, BaseNodeProps} from './Base';
import {FC} from 'react';
import {Handle, Position} from 'react-flow-renderer';
import {PlusOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import * as css from './style';

const handleNodeClick = (type: BaseNodeProps['type']) => {
  alert(`You clicked the "${type}" node`);
};

export const Source: FC<BaseNodeProps> = (props) => (
  <div className={css.NodeWrapper}>
    <BaseNode {...props} onNodeClick={(type, _data) => handleNodeClick(type)} />
    <Handle type="source" position={Position.Bottom} className={css.NodePort} />
    <AddButton type={props.type} />
  </div>
);

export const Action: FC<BaseNodeProps> = (props) => (
  <div className={css.NodeWrapper}>
    <Handle type="target" position={Position.Top} className={css.NodePort} />
    <BaseNode {...props} onNodeClick={(type, _data) => handleNodeClick(type)} />
    <Handle type="source" position={Position.Bottom} className={css.NodePort} />
    <AddButton type={props.type} />
  </div>
);

export const Condition: FC<BaseNodeProps> = (props) => (
  <div className={css.NodeWrapper}>
    <Handle type="target" position={Position.Top} className={css.NodePort} />
    <BaseNode {...props} onNodeClick={(type, _data) => handleNodeClick(type)} />
    <Handle
      id="condition_0"
      type="source"
      position={Position.Bottom}
      className={css.NodePort}
    />
    <Handle
      id="condition_1"
      type="source"
      position={Position.Bottom}
      className={css.NodePort}
    />
    <AddButton type={props.type} />
  </div>
);

export const End: FC<BaseNodeProps> = (props) => (
  <div className={css.NodeWrapper}>
    <Handle type="target" position={Position.Top} className={css.NodePort} />
    <BaseNode {...props} disabled={true} />
  </div>
);

// --- Common Elements
export const AddButton: FC<AddButtonProps> = ({type}) => {
  const onAddClick = (type: BaseNodeProps['type']) => {
    alert(`You clicked the Add button below the "${type}" node`);
  };

  return (
    <div className={css.AddButton}>
      <Button
        shape="circle"
        size="small"
        icon={<PlusOutlined />}
        onClick={() => onAddClick(type)}
      />
    </div>
  );
};

// --- Types
interface AddButtonProps {
  type: BaseNodeProps['type'];
}
