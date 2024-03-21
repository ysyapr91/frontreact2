import React, { useState } from 'react';
import { request } from 'utils';


const App = () => {

  const [param, setParam] = useState({
    url: '',
    data: {}
  });

  const chk = (ver) => {
    console.log("url", param.url);
    console.log("data", param.data);
  }

  const call = (ver) => {
    if(ver == 'T') {
      request().testGetAxios(param.url, param.data, (res) => {
      
      }) 
    } else {
      request().getAxios(param.url, param.data, (res) => {
      
      }) 
    }
  };

  const test = (ver) => {
    if(ver == 'T') {
      request().testGetAxios('typicode/demo/posts', {}, (res) => {
      
      }) 
    } else {
      request().getAxios('', param.data, (res) => {
      
      }) 
    }
  };

  const onUrl = (e) => {
    setParam({
      ...param,
      url: e.target.value
    })
  }

  const onData = (e) => {
    console.log(e);

    return;

    setParam({
      ...param,
      data: e.target.value
    })
  }

  return (
    <>
      <div>Request Test</div>

      <br/>

      <table>
        <tbody>
          <tr>
            <th>url</th>
            <td><input type='text' id='url' placeholder='url' onChange={onUrl}></input></td>
          </tr>
          <tr>
            <th>req</th>
            <td><textarea id='req' placeholder='request data' rows='10' cols='50'></textarea></td>
          </tr>
          <tr>
            <th>res</th>
            <td><textarea id='res' placeholder='response data' rows='10' cols='50'></textarea></td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => chk()}>chk</button>
      <br/><br/>
      TEST : https://jsonplaceholder.typicode.com <br/>
      <button onClick={() => call('T')}>call</button>
      <button onClick={() => test('T')}>test</button>
      <br/><br/>
      NODE : <br/>
      <button onClick={() => call('N')}>call</button>
      <button onClick={() => test('N')}>test</button>
    </>
  );
};

export default App;