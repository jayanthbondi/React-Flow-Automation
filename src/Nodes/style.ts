import {css} from '@emotion/css';

export const NodeWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NodeInnerWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;
  padding: 8px;
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: currentColor;
  border-radius: 2px;
  background-color: var(--color-white);
  box-shadow: var(--elevation-z1);
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &:not([aria-disabled='true']):hover {
    box-shadow: var(--elevation-z2);
  }

  &:not([aria-disabled='true'])[data-selected='true'] {
    box-shadow: inset 0px 0px 0px 1px currentColor, var(--elevation-z3);
  }
`;

export const NodeContent = css`
  display: flex;
  flex-direction: column;
`;

export const NodeIcon = css`
  font-size: 18px;
  padding: 4px;
`;

export const NodeTitle = css`
  color: var(--color-base900);
  font-size: 14px;
  text-transform: upppercase;
`;

export const NodeDesc = css`
  color: var(--color-base700);
  font-size: 12px;
`;

export const NodePort = css`
  &.react-flow__handle {
    border: 0;
    background-color: var(--edges-stroke-color);
  }

  &[data-handlepos='bottom'] {
    width: 1px;
    background-color: var(--edges-stroke-color);
  }
`;

export const AddButton = css`
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;

  &::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: var(--edges-stroke-color);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
