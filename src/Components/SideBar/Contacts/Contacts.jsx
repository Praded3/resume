import React from 'react';
import { FaPhone, FaRegEnvelope, FaTelegram } from "react-icons/fa6";

import { ContactsContainer, Title, Item } from './Contacts.styled';

export const Contacts = () => {
    return (

            <ContactsContainer>
            <Title>
                
                    Contacts
                </Title>
                <Item rel='noopener no-referrel nofollow' href="tel:+380992235552">
                   <FaPhone /> +38 099 223 5552
                </Item>
            <Item rel='noopener no-referrel nofollow' href='https://t.me/praidid'>
                    <FaTelegram /> telegram
                </Item>
                <Item rel='noopener no-referrel nofollow' href='mailto:o.pradidenko@gmail.com'>
                    <FaRegEnvelope /> o.pradidenko@gmail.com
                </Item>
            </ContactsContainer>
    );
}
 