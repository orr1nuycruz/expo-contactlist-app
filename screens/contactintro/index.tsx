import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback, ScrollView, RefreshControl } from 'react-native'
import { Button, Card } from "react-native-elements";
import { useDispatch } from 'react-redux';
import { contactSlice } from '../../redux/slices/contact';
import { clearStorage } from '../storage';

const ContactIntro = (props: any) => {

    const { navigation } = props
    const [contactObj, setContactObj] = React.useState<any>({});
    const dispatch = useDispatch();
    // const [jsonObj, setJsonObj] = React.useState<any>({});
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const wait = (timeout: any) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const getKeyData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            const items = await AsyncStorage.multiGet(keys)
            // console.log(items)
            setContactObj(items)
        } catch (error) {
            console.log(error, "problemo")
        }
    }

    // const findEmailFromAsyncStorage = () => {
    //     AsyncStorage.getItem("email")
    //     .then((val) => 
    //     setContactObj(val))
    //     .catch((err) => console.log(err));
    // }

    React.useEffect(() => {
        // getContactData();
        getKeyData();
        // convertJson(); 
        // findEmailFromAsyncStorage();
    });

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Card containerStyle={{ paddingHorizontal: 100, paddingVertical: 80 }}>
                    <Card.Title>
                        <h1>Contact List</h1>
                    </Card.Title>
                    <View style={{ flexDirection: "row", }}>
                        <Button
                            style={{ margin: 10, }}
                            title="Add a Contact" onPress={() => {
                                // navigation.navigate("DASHBOARD");
                                navigation.navigate("ADDCONTACT");
                            }}>
                        </Button>

                        <Button
                            style={{ margin: 10, }}
                            title="Clear List" onPress={() => {
                                // navigation.navigate("DASHBOARD");
                                clearStorage(props);
                                navigation.navigate("CONTACTINTRO");
                            }}>
                        </Button>

                    </View>

                    <View>
                        <FlatList
                            data={contactObj}
                            renderItem={({ item }) => {
                                return (

                                    <TouchableWithoutFeedback onPress={() => {
                                        console.log(item[0])
                                        dispatch(contactSlice.actions.storeContactState({ 'contactid': item[0], 'contactdata': item[1] }));
                                        navigation.navigate("DISPLAYCONTACT");
                                    }}>
                                        <Card containerStyle={{ borderRadius: 25, margin: 10, padding: 4 }}>
                                            <Card.Title>
                                                <h3>{JSON.parse(item[1]).firstName} {JSON.parse(item[1]).lastName}</h3>
                                                <Text style={{ color: "silver" }}>{JSON.parse(item[1]).phone}</Text>
                                            </Card.Title>
                                        </Card>
                                    </TouchableWithoutFeedback>
                                )
                            }}
                        />


                    </View>
                </Card>
            </ScrollView>
        </View>
    )
}

export default ContactIntro
