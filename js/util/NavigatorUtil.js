import {NavigationActions, StackActions} from 'react-navigation';

export default class NavigatorUtil {
    /**
     * 返回上一页
     * @param navigation
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * 跳转到首页
     * @param params
     */
    static resetToHomePage(params) {
        const {navigation, theme, selectedTab} = params;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: "HomePage",
                    params: {
                        theme: theme,
                        selectedTab: selectedTab
                    }
                })
            ]
        });
        navigation.dispatch(resetAction);
    }
}