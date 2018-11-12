import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import JianDanGirlChildPage from './JianDanGirlChildPage'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class VideoPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            tabShow: false,
            label: ['妹子图', '段子'],
        };
    }

    static navigationOptions = {
        tabBarLabel: '煎蛋',
        tabBarIcon: ({tintColor, focused}) => {
            return (
                <Image style={[styles.iconImage, {tintColor: tintColor}]}
                       source={require('../../res/images/ic_jiandan.png')}/>
            );
        },
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                tabShow: true
            });
        }, 0)
    }

    render() {
        if (this.state.tabShow) {
            return (
                <View style={styles.container}>
                    <ScrollableTabView
                        initialPage={0}
                        renderTabBar={() => <ScrollableTabBar/>}
                        tabBarBackgroundColor='#4BC1D2'
                        tabBarActiveTextColor='#fff'
                        tabBarInactiveTextColor='#eee'
                        tabBarUnderlineStyle={styles.tabBarUnderline}>
                        {
                            this.state.label.map((item, index) => {
                                return (<JianDanGirlChildPage {...this.props} tabLabel={item} tabIndex={index} key={index}>
                                </JianDanGirlChildPage>)
                            })
                        }
                    </ScrollableTabView>
                </View>
            );
        }else{
            return null
        }
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconImage: {
        height: 26,
        width: 26,
        resizeMode: 'cover',
    },
    tabBarUnderline: {
        backgroundColor: '#fff',
        height: 2,
    }
});
