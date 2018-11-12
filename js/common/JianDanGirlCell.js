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

export default class JianDanGirlCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHeight:0,//默认为0
            imageWidth:0,
        };
    }

    componentDidMount() {
        Image.getSize(this.props.data.pics[0], (width, height) => {
            let height2 = screenWidth * height / width; //按照屏幕宽度进行等比缩放
            this.setState({imageHeight, height2});
        });
    }

    render() {
        let item = this.props.data;
        let imageUrl = item.pics[0]
        return (
            <TouchableOpacity
                onPress={this.props.onSelect}>
                <View style={styles.cell_container}>
                    <View style={styles.image_container}>
                        <Image
                            style={styles.image}
                            source={{uri: imageUrl}}/>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.title} numberOfLines={1}>{item.comment_author}</Text>
                        <Text>{item.comment_date}</Text>
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
        flexDirection: 'column',
        alignItems: 'center',
    },
    image_container: {
        flex: 1,
    },
    image: {
        height: 200,
        width: screenWidth,
        resizeMode:'contain'
    },
    description: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
