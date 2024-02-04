import { ISecret } from '../../models/secret.model';

type Props = {
  secret: ISecret;
};

function Secret(props: Props) {
  return (
    <div>
      <div>Name: {props.secret.name}</div>
    </div>
  );
}

export default Secret;
