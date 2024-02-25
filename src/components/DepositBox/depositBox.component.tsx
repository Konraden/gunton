import { IDepositBox } from '../../models/depositBox.model';
import { ISecret } from '../../models/secret.model';
import Secret from '../Secret/secret.component';

type Props = {
  depositBox: IDepositBox;
};

function DepositBox(props: Props) {
  return (
    <div>
      {props.depositBox?.secrets?.map((item: ISecret, idx) => (
        <Secret secret={item} key={idx} />
      ))}
    </div>
  );
}

export default DepositBox;
