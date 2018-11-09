import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

export default class NewsCell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let item = this.props.data;
        return (
            <TouchableOpacity
                onPress={this.props.onSelect}>
                <View style={styles.cell_container}>
                    <Image
                        style={{height: 70, width: 70}}
                        source={{uri: item.thumbnail_pic_s}}
                    />
                    <View style={styles.description}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text>{item.author_name} {item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
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
