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
    TextInput,
    RefreshControl,
    ActivityIndicator,
    FlatList
} from 'react-native';
import DataRepository from '../expand/dao/DataRepository'

const URL = 'http://v.juhe.cn/toutiao/index?type='
const URL_KEY = '=&key=5370d210dd038e9e4d722fd329a30130'
const CITY_NAMES = [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}]

export default class NewsChildPage extends Component<Props> {

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
        this.onLoad()
    }

    onLoad() {
        this.dataRepository.fetchNetRepository(URL + this.props.tabLabel + URL_KEY)
            .then(result => {
                this.setState({
                    dataArray:result.result.data,
                    result: JSON.stringify(result)
                })
                console.log('-----'+this.state.dataArray)
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })

    }

    loadData(loadMore) {
        if (!loadMore) {
            this.setState({
                isLoading: true
            });
        }

        setTimeout(() => {
            let dataArray = []
            if (loadMore) {
                //dataArray = this.state.dataArray.concat(CITY_NAMES)
            } else {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    }

    renderItem(item) {
        return <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
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

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={({item}) => this.renderItem(item)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['#4BC1D2']}
                            tintColor={'#4BC1D2'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData(false)
                            }}/>
                    }
                    ListFooterComponent={() => this.getIndicator()}
                    onEndReached={() => {
                        this.loadData(true)
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    }
});
