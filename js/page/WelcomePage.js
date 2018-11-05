import React, {Component} from 'react';
import NavigatorUtil from '../util/NavigatorUtil'
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

export default class WelcomePage extends Component<Props> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigatorUtil.resetToHomePage({
                theme: this.theme,
                navigation: this.props.navigation
            })
        }, 3000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (<View style={styles.container}>
            <Image source={{uri: 'https://travel.12306.cn/imgs/resources/uploadfiles/images/a9b9c76d-36ba-4e4a-8e02-9e6a1a991da0_news_W540_H300.jpg'}}
                   style={styles.backgroundImage}/>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    }
})