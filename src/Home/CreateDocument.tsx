import { Flex, ButtonGroup, Button } from '@adobe/react-spectrum';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Form, TextField, NumberField } from '@components/Form';
import store from '@store';

export default observer(({ onCancel }: { onCancel?: () => void }) => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" height="100vh">
      <Form<{ name: string; width: number; height: number }>
        width="size-4000"
        onSubmit={values => {
          store.addDocument(values);
        }}
      >
        <TextField
          name="name"
          label={t('documentName')}
          required
          defaultValue={t('untitledFileName')}
        />
        <NumberField name="width" label={t('width')} required min={0} defaultValue={1920} />
        <NumberField name="height" label={t('height')} required min={0} defaultValue={1080} />
        <ButtonGroup marginTop="size-600" align="end">
          <Button variant="secondary" onPress={onCancel}>
            {t('cancel')}
          </Button>
          <Button variant="cta" type="submit">
            {t('create')}
          </Button>
        </ButtonGroup>
      </Form>
    </Flex>
  );
});
