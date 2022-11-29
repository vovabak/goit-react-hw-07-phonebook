import { useDispatch } from 'react-redux';
// import {selectContacts} from '../../redux'
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Item, Text, Button } from '../listItem/ListItem.styled';
import { useState } from 'react';



export const ListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const [isDeliting, setIsDeliting] = useState(false)    
    // const { isLoading } = useSelector(selectContacts);
    const { name, phone, id } = contact;    
        

    return <Item>        
                <Text><b>{name}:</b> <br /> {phone}</Text>
                <Button type="button" disabled={isDeliting} onClick={() => {
                    setIsDeliting(true);           
                    dispatch(deleteContact(id));        
                }}>
                    {isDeliting ? 'Deleting...' : 'Delete'}
                </Button>
            </Item>
}

ListItem.propTypes = {
    contact: PropTypes.shape({        
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
}