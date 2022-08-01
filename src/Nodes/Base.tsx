/* eslint-disable @typescript-eslint/no-use-before-define */

import {FC, ReactNode} from 'react';
import type {NodeComponentProps} from 'react-flow-renderer';
import * as colors from '@contactlab/ds-tokens/constants/colors';
import {
  DatabaseOutlined,
  MailOutlined,
  CommentOutlined,
  CheckCircleOutlined,
  FlagOutlined
} from '@ant-design/icons';

import * as css from './style';

export const BaseNode: FC<BaseNodeProps> = ({
  type,
  data,
  selected,
  disabled,
  onNodeClick
}) => {
  return (
    <div
      data-selected={selected}
      aria-disabled={disabled}
      className={css.NodeInnerWrapper}
      style={{color: getColor(type)}}
      {...(onNodeClick && {onClick: () => onNodeClick(type, data)})}
    >
      {getIconSrc(type)}
      <div className={css.NodeContent}>
        <div className={css.NodeTitle}>{data.title}</div>
        <p className={css.NodeDesc}>{data.description}</p>
      </div>
    </div>
  );
};

// --- Helpers
const getColor = (type: NodeType) => {
  switch (type) {
    case 'source':
      return colors.success;
    case 'email':
      return colors.accent;
    case 'sms':
      return colors.accent;
    case 'waitThenCheck':
      return colors.warning;
    case 'end':
      return colors.base;
  }
};

const getIconSrc = (type: NodeType) => {
  const color = getColor(type);

  switch (type) {
    case 'source':
      return <DatabaseOutlined className={css.NodeIcon} style={{color}} />;
    case 'email':
      return <MailOutlined className={css.NodeIcon} style={{color}} />;
    case 'sms':
      return <CommentOutlined className={css.NodeIcon} style={{color}} />;
    case 'waitThenCheck':
      return <CheckCircleOutlined className={css.NodeIcon} style={{color}} />;
    case 'end':
      return <FlagOutlined className={css.NodeIcon} style={{color}} />;
  }
};

// --- Types
export interface BaseNodeProps extends NodeComponentProps<NodeData> {
  type: NodeType;
  disabled: boolean;
  onNodeClick?: (type: NodeType, data: NodeData) => void;
}

export interface NodeData {
  title: ReactNode;
  description: ReactNode;
}

export type NodeType = 'source' | 'email' | 'sms' | 'waitThenCheck' | 'end';
