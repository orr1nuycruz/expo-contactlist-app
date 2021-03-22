import React from 'react'
import { View, Text } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectContact } from '../../redux/slices/contact'
import { getItemFromAsyncStorage, removeObject } from '../storage'

const DisplayContactPage = (props: any) => {
    const { navigation } = props
    const [contactObj, setContactObj] = React.useState<any>({});

    const { data } = useSelector(selectContact)

    const getContactObject = () => {
        setContactObj(
            getItemFromAsyncStorage(data.contactid))

    }

    React.useEffect(() => {
        getContactObject();
        console.log(contactObj)
    }, []);

    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Card containerStyle={{borderRadius: 35,}}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Card.Title>
                        <h1>Contact  Details</h1>
                        <h6 style={{color: "silver"}}>{data.contactid}</h6>
                        <h6 style={{color: "silver"}}>{data.contactdata}</h6>
                        <h6 style={{color: "silver"}}>{JSON.parse(data.contactdata).email}</h6>
                        <h6 style={{color: "silver"}}>{JSON.parse(data.contactdata).firstName}</h6>
                        <h6 style={{color: "silver"}}>{JSON.parse(data.contactdata).lastName}</h6>
                        <h6 style={{color: "silver"}}>{JSON.parse(data.contactdata).phone}</h6>
                    </Card.Title>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        style={{ margin: 10, }}
                        title="Edit" onPress={() => {
                            navigation.navigate("EDITCONTACT");
                        }}>
                    </Button>

                    <Button
                        style={{ margin: 10, }}
                        title="Delete" onPress={() => {
                            removeObject(data.contactid)
                            navigation.navigate("CONTACTINTRO");
                        }}>
                    </Button>

                </View>
            </Card>
        </View>
    )
}

export default DisplayContactPage
