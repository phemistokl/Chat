import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import ChatLog from '../chatLog';
import Button from 'react-bootstrap/lib/Button';

export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        value: '',
        message: '',
        messages: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleMessageEvent = this.handleMessageEvent.bind(this)
  }

  componentDidMount(){
    this.handleMessageEvent()
  }

  handleMessageEvent(){
     socket.on('chat message', (msg) => {
       message: msg
        })
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
     e.preventDefault()
     socket.emit('chat message', this.state.value);

     this.setState({ value: '' })
  }

  render() {
    console.log(this.state.message);
    return (
      <div className="container">
        <ChatLog messages={this.state.messages} />
        <form>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <Button type="submit" onClick={this.handleSubmit}>Send</Button>
        </form>
      </div>
    )
  }
}
