export default class HttpUtils {
    /**
     * get请求
     * @param url
     * @returns {Promise<any> | Promise}
     */
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * post请求
     * @param url
     * @param data
     * @returns {Promise<any> | Promise}
     */
    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',

                },
                body:JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}