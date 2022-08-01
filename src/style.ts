import {css} from '@emotion/css';

export const AutomationCanvas = css`
  --edges-stroke-color: green;

  width: 100vw;
  height: 100vh;
  background-color: var(--color-base100);

  .react-flow__edge-path {
    stroke: var(--edges-stroke-color);
  }
`;

export const Controls = css`
  top: 10px;
  bottom: auto;
`;
