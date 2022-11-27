import { ContactList } from '../contactList';
import { Filter } from '../filter';
import { ContactForm } from '../contactForm';
import { Container } from './App.styled';

export const App = () => {

    return <Container >
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />     
            <ContactList />
          </Container>
  };