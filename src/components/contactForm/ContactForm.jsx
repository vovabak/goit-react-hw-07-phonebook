import { useSelector, useDispatch } from "react-redux";
import { getContacts, addContact } from '../../redux';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';
import { Label, Button, FormStyled as Form, Input } from './ContactForm.styled';


const initialValues = {
        name: '',
        number: '',
}

let signupSchema = object({
  name: string().required(),
  number: string().required(), 
});

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    
    const handleSubmit = (values, { resetForm }) => {
        
        const { name, number } = values;
        const normalizedName = name.toLowerCase().trim();

        if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
            alert(`${name.trim()} is allready in contacts`)
            return
        }
        
        dispatch(addContact({
            id: nanoid(),
            name: name.trim(),
            number,
            })
        )
        
        resetForm();
    }

    return <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}>
        <Form>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я ]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />                
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    </Formik>
}