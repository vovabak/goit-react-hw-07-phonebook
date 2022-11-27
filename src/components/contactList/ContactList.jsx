import { useSelector } from "react-redux";
import { getContacts, getFilter } from '../../redux';
import { ListItem } from "components/listItem";
import { List, NotifyText } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter).toLowerCase().trim();    
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter));
    
    if (filteredContacts.length > 0) return (
        <List>            
            {filteredContacts.map(contact =>
                <ListItem
                    key={contact.id}
                    contact={contact}                        
                />)}
        </List>
        )
    
    if (contacts.length > 0 && filteredContacts.length === 0) return (
        <NotifyText>Sorry, there's no contacts matching your querry</NotifyText>)

    if (contacts.length === 0 && filter !== '') return (
        <NotifyText>There's no contacts in your Phonebook</NotifyText>
        )
}