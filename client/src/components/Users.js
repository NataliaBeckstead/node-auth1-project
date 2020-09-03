import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../utils/axios";
import { useHistory } from 'react-router-dom';

const UserHolder = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1%;
    padding-left: 3%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    width: 28%;
    box-shadow: 0 6px 15px rgba(170, 170, 170, 0.3), 0 15px 12px rgba(170, 170, 170, 0.22);
    @media(max-width:900px) {
      width: 45%;
    }
    @media(max-width:600px) {
      width: 90%;
    }
`;


const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
     margin-left: 2rem;
`;

export default function Users(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(({ data }) => setUsers(data))
            .catch(error => {
                console.log("can't get users");
                alert("login first!");
                props.history.push("/");
            });
    }, []);


    return (
        <section id="recipe-list">
            <Wrapper>
                {users.map(item => (
                    <UserHolder key={item.id} >
                        <div>
                            <h4>id: {item.id}</h4>
                            <h4>name: {item.username}</h4>
                        </div>
                    </UserHolder>
                ))}
            </Wrapper>
        </section>
    );
}