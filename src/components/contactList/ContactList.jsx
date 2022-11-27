import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from '../../redux';
import { ListItem } from "components/listItem";
import { List, NotifyText } from './ContactList.styled';
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const ContactList = () => {
    const dispatch = useDispatch();
    const {items, isLoading, error} = useSelector(getContacts);
    const filter = useSelector(getFilter).toLowerCase().trim();    
   
    const filteredContacts = items.filter(item =>
        item.name.toLowerCase().includes(filter));    
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    return <>
        
        {isLoading && <p>Loading contacts...</p>}        
        
        {error && <NotifyText>{error}</NotifyText>}
    
        {items.length > 0 && filteredContacts.length === 0 &&
            <NotifyText>Sorry, there's no contacts matching your querry</NotifyText>}

        {items.length === 0 && filter !== '' &&
            < NotifyText > There's no contacts in your Phonebook</NotifyText>}
        
        {filteredContacts.length > 0 &&
            <List>            
                    {filteredContacts.map(contact =>
                        <ListItem
                            key={contact.id}
                            contact={contact}                        
                        />)}
            </List>}
        </>
}