import React from 'react'
import { View } from 'react-native'
import { Input } from "react-native-elements";
import { Text, Card } from "react-native-elements";
import { Button } from "react-native-elements";

import { useSelector } from 'react-redux'
import { selectContact } from '../../redux/slices/contact'
import { storeInObject } from '../storage/index'

const EditContactPage = (props: any) => {
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const [contactObj, setContactObj] = React.useState({});

    const { data } = useSelector(selectContact)

    const { navigation } = props

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", margin: 10 }}>
            <Card>
                <Card.Title>
                    <h1>Edit Contact</h1>
                <h4 style ={{color: "silver"}}>{data.contactid}</h4>
                </Card.Title>
                
                <Card.Divider></Card.Divider>
                <Input
                    placeholder="E-mail"
                    style={{ borderRadius: 10, margin: 10, padding: 4 }}
                    defaultValue={JSON.parse(data.contactdata).email}
                    onChangeText={(text: any) => {
                        setEmail(text)
                        // setContactObj({"id": JSON.parse(data.contactdata).id,"email": email, "firstName": firstName, "lastName": lastName, "phone": phone})
                        setContactObj({...contactObj, email })
                    }}>
                </Input>
                <Input
                    placeholder="First Name"
                    style={{ borderRadius: 10, margin: 10, padding: 4 }}
                    defaultValue={JSON.parse(data.contactdata).firstName}
                    onChangeText={(text: any) => {
                        setFirstName(text)
                        // setContactObj({"id": JSON.parse(data.contactdata).id,"email": email, "firstName": firstName, "lastName": lastName, "phone": phone})
                        setContactObj({...contactObj, firstName })
                    }}>
                </Input>
                <Input
                    placeholder="Last Name"
                    style={{ borderRadius: 10, margin: 10, padding: 4 }}
                    defaultValue={JSON.parse(data.contactdata).lastName}
                    onChangeText={(text: any) => {
                        setLastName(text)
                        // setContactObj({"id": JSON.parse(data.contactdata).id,"email": email, "firstName": firstName, "lastName": lastName, "phone": phone})
                        setContactObj({...contactObj, lastName })
                    }}>
                </Input>
                <Input
                    placeholder="Phone Number"
                    style={{ borderRadius: 10, margin: 10, padding: 4 }}
                    defaultValue={JSON.parse(data.contactdata).phone}
                    onChangeText={(text: any) => {
                        setPhone(text)
                        // setContactObj({"id": JSON.parse(data.contactdata).id,"email": email, "firstName": firstName, "lastName": lastName, "phone": phone})
                        setContactObj({...contactObj, phone })
                    }}>
                </Input>
                <Button
                    style={{ margin: 10, }}
                    title="Submit"
                    onPressIn={() => {
                        const contact = {"id": Math.floor(Math.random() * 999) + 1,
                        "email": (email == "") ? JSON.parse(data.contactdata).email : email, 
                        "firstName":(firstName =="") ? JSON.parse(data.contactdata).firstName : firstName,
                        "lastName":(lastName =="") ?  JSON.parse(data.contactdata).lastName : lastName,
                         "phone": (phone == "") ? JSON.parse(data.contactdata).phone : phone};

                        // const jsonvalue = JSON.stringify(contact)
                        // console.log(contactObj)
                        storeInObject(data.contactid, contact);


                        navigation.navigate("CONTACTINTRO");

                    }}></Button>
            </Card>
        </View>
    )
}

export default EditContactPage

