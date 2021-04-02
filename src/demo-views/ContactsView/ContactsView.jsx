import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { Container, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import ContactForm from '../../demo-components/ContactForm';
import Filter from '../../demo-components/Filter';
import ContactsList from '../../demo-components/ContactsList';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h2" justify="center">
        Contacts Page
      </Typography>
      <Grid container justify="center">
        <Grid item xl={12}>
          <ContactForm />
        </Grid>
        <Grid item xl={12}>
          <Filter />
          <ContactsList />
        </Grid>
      </Grid>
    </Container>
  );
}
