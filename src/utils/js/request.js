import axios from "axios";

const ENV = process.env.REACT_APP_ENV;
const NODE_HOST = process.env.REACT_APP_NODE_HOST;

const TEST_HOST = "https://jsonplaceholder.typicode.com";


export default function request() {


    return {
        testGetAxios: (url, data, callback) => {
            console.log("req " + url, data);
            axios
                .get(TEST_HOST + '/' + url, data)
                .then(function (res) {
                    console.log("res " + url, res);
                    callback(res);
                })
                .catch(function (err) { 
                    alert(err)
                });
        },
        getAxios: (url, data, callback) => {
            console.log("req " + url, data);
            axios
                .get(NODE_HOST + '/' + url, data)
                .then(function (res) {
                    console.log("res " + url, res);
                    callback(res.data);
                })
                .catch(function (err) {
                    alert(err)
                });
        },
        postAxios: () => {
        
        }
    }
};