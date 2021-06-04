import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native';

const DATA = [{
    id: 1,
    material: "Georgette",
    print: "floral",
    price: 4997.95,
    image: "https://i.ibb.co/N3j5GvR/1.jpg"
}, {
    id: 2,
    material: "Cotton",
    print: "floral",
    price: 4580.44,
    image: "https://i.ibb.co/sqY6nGZ/2.jpg"
}, {
    id: 3,
    material: "Georgette",
    print: "floral",
    price: 3615.99,
    image: "https://i.ibb.co/YdwNH06/3.jpg"
}, {
    id: 4,
    material: "Silk",
    phone: "351-778-9979",
    price: 3966.26,
    image: "https://i.ibb.co/MhWgvQB/4.jpg"
}, {
    id: 5,
    material: "Silk",
    print: "floral",
    price: 5483.41,
    image: "https://i.ibb.co/9462P2L/5.jpg"


}]

const App = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => alert("Mini Shop, You Can Buy Product by Phone Call", "+88017xxxxxxxx",)}

            style={{ marginBottom: 20, padding: 20 }}
        >
            <View style={{
                marginBottom: 20
            }}
            >
                <Image
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: 250,
                        borderRadius: 10
                    }}
                    source={item.image} />

                <View >
                    <Text
                        style={{
                            width: '100%',
                            fontSize: 32,
                            fontWeight: 'bold',
                            borderRadius: 10
                        }}
                    >{item.material}</Text>
                    <Text
                        style={{
                            width: '100%',
                            fontSize: 32,
                            borderRadius: 10
                        }}
                    >{item.print}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>


            <View >
                <Text
                    style={{
                        width: '100%',
                        fontSize: 32,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        backgroundColor: '#f9c2ff',
                        height: 60
                    }}
                >
                    Mini-Shop
                </Text>
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />





        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#e27746'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default App;



