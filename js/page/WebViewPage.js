import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    WebView,
    BackHandler
} from 'react-native';
import NavigationBar from '../common/NavigationBar'
import ViewUtils from '../util/ViewUtils'
import NavigatorUtil from '../util/NavigatorUtil'

export default class WebViewPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.navigation.state.params.data.url,
            title: this.props.navigation.state.params.data.title,
            canGoBack: false,
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress',
            () => {
                this.onBack()
            });
    }

    componentWillUnmount() {
        this.backHandler&&this.backHandler.remove();
    }

    onBack() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            NavigatorUtil.goBack(this.props.navigation);
        }
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    leftButton={ViewUtils.getLeftButton(() => this.onBack())}
                    title={this.state.title}
                    style={{backgroundColor: '#4BC1D2'}}/>
                <WebView
                    ref={webView => this.webView = webView}
                    startInLoadingState={true}
                    onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});