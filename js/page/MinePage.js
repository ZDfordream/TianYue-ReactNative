import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class MinePage extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor,focused}) => {
            return (
                <Image style={[styles.iconImage,{tintColor: tintColor}]}
                       source={require('../../res/images/ic_my.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{height: 70, width: 70,borderRadius:35}}
                    source={{uri: "http://ovuc1rhny.bkt.clouddn.com/15833.jpg"}}/>
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft}>
                            Description
                        </Text>
                        <Text style={styles.textRight}>
                            program fan
                        </Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft}>
                            Github
                        </Text>
                        <Text style={styles.textRight}>
                            https://github.com/ZDfordream
                        </Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft}>
                            E-mail
                        </Text>
                        <Text style={styles.textRight}>
                            503749378@qq.com
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconImage: {
        height: 26,
        width: 26,
        resizeMode:'cover',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textLeft: {
        textAlign: 'center',
        color: '#666666',
        marginBottom: 5,
        marginTop:5,
        marginRight:20,
    },
    textRight: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop:5,
        marginRight:20,
    },
});
