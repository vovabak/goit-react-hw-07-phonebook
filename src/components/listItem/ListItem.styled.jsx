import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
        :not(:last-child){
            margin-bottom: 15px;
        }
    `

export const Text = styled.p`
    margin: 0;    
    `

export const Button = styled.button`
    margin: 0;
    padding: 2px 5px;
    width: 80px;
    `