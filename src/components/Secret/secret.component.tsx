import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ISecret } from '../../models/secret.model';
import DateTimeField from '../Fields/DateTimeField/DateTimeField.component';
import PasswordField from '../Fields/PasswordField/passwordField.component';
import SelectField from '../Fields/SelectField/selectField.component';
import TextField from '../Fields/TextField/textField.component';

type Props = {
  secret: ISecret;
};

function Secret(props: Props) {
  const [isEditable, setIsEditable] = useState(false);
  const [secret, setSecret] = useState(props.secret);
  const [originalSecret, setOriginalSecret] = useState(props.secret);
  const [folderList, setFolderList] = useState([]);
  const { vaultId } = useParams();

  useEffect(() => {
    //
  });

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const setField = (value: string | string[], fieldName: string) => {
    setSecret({
      ...secret,
      [fieldName]: value
    });
  };

  const save = () => {
    console.log('Original Secret', originalSecret);
    console.log('Saved Secret', secret);

    //
  };

  return (
    <Card>
      <CardHeader>
        <h2>{secret?.name}</h2>
      </CardHeader>
      <CardBody>
        <TextField
          label="Name"
          fieldName="name"
          value={secret?.name}
          isRequired
          onChange={setField}
        ></TextField>
        <SelectField
          label="Folder"
          fieldName="folderId"
          value={[secret?.folderId ?? '']}
          selectionList={folderList}
          onSelectionChange={setField}
        />
        <TextField
          label="URL"
          fieldName="url"
          value={secret?.login?.uris[0]?.uri}
          isRequired
          onChange={setField}
        />
        <TextField
          label="Username"
          fieldName="username"
          value={secret?.login?.username}
          isRequired
          onChange={setField}
        />
        <PasswordField
          label="Password"
          fieldName="password"
          value={secret?.login?.password}
          onChange={setField}
        />
        <Input label={'TOTP'} type={'text'} value={secret?.login?.totp} />
        <DateTimeField
          label="Last Modified"
          type="datetime"
          isReadOnly
          value={secret?.revisionDate.toString()}
          fieldName={'lastModified'}
          onChange={setField}
        />
      </CardBody>
      <CardFooter>
        <Button onPress={save}>Save Secret</Button>
      </CardFooter>
    </Card>
  );
}

export default Secret;
