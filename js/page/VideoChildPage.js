/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    RefreshControl,
    ActivityIndicator,
    FlatList
} from 'react-native';
import DataRepository from '../expand/dao/DataRepository'
import WebViewPage from "../page/WebViewPage";
import VideoPlayer from 'react-native-video-controls';
import IVideo from 'react-native-ivideo';

const URL = 'http://api.iclient.ifeng.com/ifengvideoList?page='
const QUERY_CONST = '&listtype=list&typeid='
const typeId = ['clientvideo_9', 'clientvideo_18', 'clientvideo_22', 'clientvideo_5', 'clientvideo_24', 'clientvideo_10', 'clientvideo_8', 'clientvideo_25']
export default class VideoChildPage extends Component<Props> {

    constructor(props) {
        super(props)
        this.dataRepository = new DataRepository()
        this.state = {
            result: '',
            isLoading: false,
            dataArray: [],
        }
    }

    componentDidMount() {
        this.typeId=typeId[this.props.tabIndex]
        this.page = 1
        this.onLoad()
    }

    onLoad() {
        this.dataRepository.fetchNetRepository(URL + this.page + QUERY_CONST + this.typeId)
            .then(result => {
                this.setState({
                    dataArray: result[0].item,
                    result: JSON.stringify(result)
                })
                console.log('-----' + this.state.dataArray)
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    refreshData() {
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            let dataArray = []
            for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                dataArray.push(this.state.dataArray[i])
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    }

    loadData() {
        this.setState({
            isLoading: false
        });
        setTimeout(() => {
        }, 2000)
    }

    onSelect(item) {
        this.props.navigation.navigate('WebViewPage', {data: item})
    }

    renderItem(item) {
        return <IVideo
            source={{uri: item.video_url}}
            title={item.title}
            showFullscreenIcon={true}
            width={'100%'}
            height={240}
            actions={[{
                text: 'select 1',
                onPress: () => {
                },
            }, {
                text: 'select 2',
                onPress: () => {
                },
            }]}
        />
    }

    getIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'small'}
                color={'#4BC1D2'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    space(){
        return(<View style={{height: 4, width: 500, backgroundColor: 'transparent'}}/>)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    ItemSeparatorComponent={this.space}
                    renderItem={({item}) => this.renderItem(item)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['#4BC1D2']}
                            tintColor={'#4BC1D2'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.refreshData()
                            }}/>
                    }
                    ListFooterComponent={() => this.getIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
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
    item: {
        backgroundColor: '#169',
        height: 200,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    indicatorContainer: {
        alignItems: 'center',
        paddingBottom: 10
    },
    indicator: {
        color: '#4BC1D2',
        margin: 10
    },
});


