import React from "react";
import Modal from 'react-modal'; 
import "./Acc.scss";
class App extends React.Component {
    state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      return (
        <main>
          <h1>welcome Entalogics</h1>
          
          <Modal show={this.state.show} handleClose={this.hideModal} >
            
           
          </Modal>
          <button type='button' onClick={this.showModal}>Login</button>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <h3>Account holder names</h3>
          <h3>Bob,Alice,Joe</h3>
          
          <p>name</p>
          <input type="text"></input>
                  <p>branch</p>
          <input type="text"></input>
                  <p>accountholder</p>
          <input type="text"></input>
                  <p>accountnumber</p>
          <input type="text"></input>
                  <p>account type</p>
          <input type="text"></input>
                  <p>Bank code</p>
          <input type="text"></input>
          <button
            onClick={handleClose}
          >
            logout
          </button>
        </section>
      </div>
    );
  };
  
  
//   const container = document.createElement('div');
//   document.body.appendChild(container);
//   ReactDOM.render(<App />, container);
export default Account;