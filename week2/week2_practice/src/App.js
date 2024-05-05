import React from 'react';
import Counter from './component/Counter';
import Modal from './component/Modal';
import './App.css';
import './component/Modal.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Counter /> {/*Counter 컴포넌트 불러와서 사용*/}
      <Modal /> {/* Modal 컴포넌트 불러와서 사용 */}
      </>
    )
  }
}

export default App;
