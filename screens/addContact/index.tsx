import React from 'react'
import { View } from 'react-native'
import { Input } from "react-native-elements";
import { Text, Card } from "react-native-elements";
import { Button } from "react-native-elements";
import { storeIn, storeInObject } from '../storage/index'
import Inputfield from '../../components/Inputfield';

const AddContactPage = (props: any) => {
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [contactObj, setContactObj] = React.useState({});

    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", margin: 1 }}>
            <Card>
                <Card.Title>
                <h1>Add New Contact</h1>
                </Card.Title> 
                <Card.Divider/>
                <Inputfield
                    placeholder="Email"
                    style={{ borderRadius: 10, margin: 5, padding: 4 }}
                    onChangeText={(text: any) => {
                        setEmail(text)
                        // setContactObj({"id": Math.floor(Math.random() * 999) + 1,"email": email, "firstName": firstName, "phone": phone, "lastName": lastName})
                        // setContactObj({ "id": Math.floor(Math.random() * 999) + 1, "email": email })
                        // setContactObj({...contactObj, email})
                    }}>
                </Inputfield>
                <Input
                    placeholder="First Name"
                    style={{ borderRadius: 10, margin: 5, padding: 4 }}
                    onChangeText={(text: any) => {
                        setFirstName(text)
                        // setContactObj({"id": Math.floor(Math.random() * 999) + 1,"email": email, "firstName": firstName, "phone": phone, "lastName": lastName})
                        // setContactObj({...contactObj, firstName })
                    }}>
                </Input>
                <Input
                    placeholder="Last Name"
                    style={{ borderRadius: 10, margin: 5, padding: 4 }}
                    onChangeText={(text: any) => {
                        setLastName(text)
                        // setContactObj({"id": Math.floor(Math.random() * 999) + 1,"email": email, "firstName": firstName, "phone": phone, "lastName": lastName})
                        // setContactObj({...contactObj, lastName })
                    }}>
                </Input>
                <Input
                    placeholder="Phone"
                    style={{ borderRadius: 10, margin: 5, padding: 4 }}
                    onChangeText={(text: any) => {
                        setPhone(text)
                        // setContactObj({"id": Math.floor(Math.random() * 999) + 1,"email": email, "firstName": firstName, "phone": phone, "lastName": lastName})
                        // setContactObj({...contactObj, phone })
                    }}>
                </Input>
                <Button
                    style={{ margin: 10, }}
                    title="Submit"
                    onPressIn={() => {
                        const contact = {"id": Math.floor(Math.random() * 999) + 1,"email": email, "firstName": firstName, "lastName": lastName, "phone": phone};
                        // const jsonvalue = JSON.stringify(contactObj)
                        // console.log(contactObj)
                        console.log(contact)
                        storeInObject("Contact#" + Math.floor(Math.random() * 999) + 1, contact);


                        navigation.navigate("CONTACTINTRO");

                    }}></Button>
            </Card>
        </View>
    )
}

export default AddContactPage

