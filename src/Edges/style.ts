import {css} from '@emotion/css';

export const EdgeButton = css`
  padding: 2px;
  border: 0;
  background-color: var(--color-base100);
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  color: var(--color-accent);
  transform: color 0.2s ease;

  &:hover {
    color: var(--color-accent700);
  }

  &[disabled] {
    color: var(--color-base600);
    cursor: not-allowed;
  }
`;
