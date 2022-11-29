import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectVisibleContacts } from '../../redux';
import { ListItem } from "components/listItem";
import { List, NotifyText } from './ContactList.styled';
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const ContactList = () => {    
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);    
    const {items, isLoading, error} = useSelector(selectContacts);    
    
    useEffect(() => {        
        dispatch(fetchContacts());
    }, [dispatch])
    

    return <>
        
        {isLoading && <b>Loading contacts...</b>}        
        
        {error && <NotifyText>{error}</NotifyText>}
    
        {items.length > 0 && visibleContacts.length === 0 &&
            <NotifyText>Sorry, there's no contacts matching your query</NotifyText>}

        {items.length === 0 && !isLoading && !error &&
            < NotifyText > There's no contacts in your Phonebook</NotifyText>}
        
        {visibleContacts.length > 0 && !error &&
            <List>          
                    {visibleContacts.map(contact =>
                        <ListItem
                            key={contact.id}
                            contact={contact}                        
                        />)}
            </List>}
        </>
}