import {FC, ReactNode} from 'react';
import {
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
  EdgeProps
} from 'react-flow-renderer';

import * as css from './style';

const [buttonWidth, buttonHeight] = [100, 40];

const onEdgeClick = (id: string) => {
  alert(`You clicked the edge with ID "${id}"`);
};

export const Condition: FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  arrowHeadType,
  markerEndId
}) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });

  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });

  return (
    <>
      <path
        id={id}
        d={edgePath}
        markerEnd={markerEnd}
        className="react-flow__edge-path"
      />
      <foreignObject
        width={buttonWidth}
        height={buttonHeight}
        x={edgeCenterX - buttonWidth / 2}
        y={edgeCenterY - buttonHeight / 2}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <button
          className={css.EdgeButton}
          onClick={() => onEdgeClick(id)}
          disabled={data.disabled}
        >
          {data.title}
        </button>
      </foreignObject>
    </>
  );
};

// --- Types
export interface ConditionEdgeProps extends EdgeProps<EdgeData> {
  type: EdgeType;
}

export interface EdgeData {
  title: ReactNode;
  disabled?: boolean;
}

export type EdgeType = 'source' | 'email' | 'sms' | 'waitThenCheck' | 'end';
