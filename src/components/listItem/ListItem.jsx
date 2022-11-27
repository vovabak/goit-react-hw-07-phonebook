import { useDispatch, useSelector } from 'react-redux';
import {getContacts} from '../../redux'
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Item, Text } from '../listItem/ListItem.styled';

export const ListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(getContacts);

    const { name, phone, id } = contact;

    return <Item>
                <Text>{name}: {phone}</Text>
        <button type="button" disabled={isLoading} onClick={() => dispatch(deleteContact(id))}>{isLoading? 'Deleting...' : 'Delete'}</button>
            </Item>
}

ListItem.propTypes = {
    contact: PropTypes.shape({        
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
}