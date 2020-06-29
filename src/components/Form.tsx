import * as React from 'react';
import { Button, TextInput, View } from 'react-native';

interface Props {
  iOSHandleKeyboard?: boolean;
  onSubmit?: () => void;
  renderSubmit?: (values: Field<unknown>[]) => React.ReactNode;
  SubmitButton?: React.ReactNode;
  fields: Field<unknown>[];
}

const Form: React.FC<Props> = ({
  // iOSHandleKeyboard,
  // onSubmit,
  renderSubmit,
  SubmitButton,
  fields,
}) => {
  return (
    <View>
      {fields.map(() => (
        <TextInput />
      ))}
      {SubmitButton || (renderSubmit && renderSubmit(fields)) || (
        <Button onPress={() => "pressed"} title="test" />
      )}
    </View>
  );
};

export default Form;
