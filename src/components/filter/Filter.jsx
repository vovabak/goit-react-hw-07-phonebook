import { useSelector, useDispatch } from "react-redux";
import { filterContacts, selectFilter } from '../../redux';
import { Label, FilterInput as Input } from '../contactForm/ContactForm.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return <Label>
                Find contacts by name
        <Input value = {filter} onChange={e => dispatch(filterContacts(e.currentTarget.value))} />
            </Label>;
}