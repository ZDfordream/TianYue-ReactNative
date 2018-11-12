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
import JianDanGirlCell from '../common/JianDanGirlCell'
import PhotoBrowserScene from "../page/PhotoBrowserScene";

const URL = 'http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page='
export default class JianDanGirlChildPage extends Component<Props> {

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
        this.page = 1
        this.onLoad()
    }

    onLoad() {
        this.dataRepository.fetchNetRepository(URL + this.page)
            .then(result => {
                this.setState({
                    dataArray: result.comments,
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
        let media = [{photo: item.pics[0]}]
        this.props.navigation.navigate('PhotoBrowserScene', {media:media, index:0})
    }

    renderItem(item) {
        return <JianDanGirlCell data={item}
                         onSelect={() => this.onSelect(item)}/>
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
    image:{
        flex:1,
        height:200,
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    indicatorContainer: {
        alignItems: 'center',
        paddingBottom: 10
    },
    indicator: {
        color: '#4BC1D2',
        margin: 10
    },
})

