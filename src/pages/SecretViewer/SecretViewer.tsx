import { useLoaderData } from 'react-router-dom';
import { ISecret } from '../../models/secret.model';
import './SecretViewer.css';

function SecretViewer() {
  const secret: ISecret = useLoaderData() as ISecret;

  return (
    <div className="Secret Viewer">
      <div>{secret.name}</div>
    </div>
  );
}

export default SecretViewer;
