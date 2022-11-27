import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux';
import PropTypes from 'prop-types';
import { Item, Text } from '../listItem/ListItem.styled';

export const ListItem = ({ contact }) => {
    const dispatch = useDispatch();

    const { name, number, id } = contact;

    return <Item>
                <Text>{name}: {number}</Text>
                <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </Item>
}

ListItem.propTypes = {
    contact: PropTypes.shape({        
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
}