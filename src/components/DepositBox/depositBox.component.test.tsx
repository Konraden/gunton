import { render } from '@testing-library/react';
import { IDepositBox } from '../../models/depositBox.model';
import DepositBox from './depositBox.component';

describe('Deposit Box', () => {
  let mockDepositBox: IDepositBox;
  beforeEach(() => {
    mockDepositBox = {
      encrypted: false,
      folders: [],
      secrets: []
    };
  });

  test('Renders Deposit Box', () => {
    render(<DepositBox depositBox={mockDepositBox}></DepositBox>);
  });
});
