import {NodeTypesType} from 'react-flow-renderer';
import * as Node from './Nodes';

export const nodeTypes: NodeTypesType = {
  source: Node.Source,
  email: Node.Action,
  sms: Node.Action,
  waitThenCheck: Node.Condition,
  end: Node.End
};
