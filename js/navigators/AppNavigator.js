import React from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage'
import NewsPage from '../page/NewsPage'
import VideoPage from '../page/VideoPage'
import JianDanPage from '../page/JianDanPage'
import MinePage from '../page/MinePage'
import WebViewPage from "../page/WebViewPage";
import PhotoBrowserScene from "../page/PhotoBrowserScene";

export const HomePage = TabNavigator({
        NewsPage: {
            screen: NewsPage,
        },
        VideoPage: {
            screen: VideoPage,
        },
        JianDanPage: {
            screen: JianDanPage,
        },
        MinePage: {
            screen: MinePage,
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#788493',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: {height: 0},
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    }
)

export default AppNavigator = StackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    HomePage: {
        screen: HomePage
    },
    WebViewPage: {
        screen: WebViewPage
    },
    PhotoBrowserScene: {
        screen: PhotoBrowserScene
    },
}, {
    navigationOptions: {
        header: null
    }
})