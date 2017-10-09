import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';

const { TextArea } = Input;

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ModalText: 'Yo!... becareful of what you write.',
      visible: false,
      confirmLoading: false,
      textInput: '',
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });

    console.log('this is inputValue: ', this.state.textInput);
    console.log('ill need to handle the submission ');
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleChange(input) {
    this.setState({
      textInput: input,
    });
  }

  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Edit</Button>
        <Modal
          title="Edit the content of this section"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          okText="submit"
          cancelText="cancel"
        >
          <p>{ModalText}</p>
          <TextArea
            placeholder="Enter the content on this table"
            autosize
            onChange={evt => this.handleChange(evt.target.value)}
          />
        </Modal>
      </div>
    );
  }
}

// onChange={evt => console.log('the entr is ctaching', evt.target.value)}

export default EditModal;
