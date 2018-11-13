import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native'
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class JianDanJokeCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.data;
        return (
                <View style={styles.cell_container}>
                    <View style={styles.text_container}>
                        <Text>{item.text_content}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title} numberOfLines={1}>{item.comment_author}</Text>
                        <Text>{item.comment_date}</Text>
                    </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2,
        flex: 1,
        flexDirection: 'column',
    },
    text_container: {
        flex: 1,
    },
    image: {
        height: 200,
        width: screenWidth,
        resizeMode:'contain'
    },
    description: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        height: 40,
        lineHeight: 40,
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
        marginHorizontal: 5,
        flexShrink: 1
    },
})
