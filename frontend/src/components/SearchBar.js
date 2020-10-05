import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

var Filter = require('bad-words'),
  bad = new Filter()

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTopic: '' }
  }
  handleChange = (event) => {
    this.setState({ searchTopic: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.searchTopic === '') {
      alert("Search field can't be empty")
    } else if (
      this.state.searchTopic === 'shit' ||
      this.state.searchTopic === 'fuck' ||
      this.state.searchTopic === 'ass' ||
      this.state.searchTopic === 'bitch'
    ) {
      confirmAlert({
        title: 'Confirm to continue',
        message: 'Are you sure you want to search this?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.props.searchForTopic(this.state.searchTopic),
          },
          {
            label: 'No',
          },
        ],
      })
    } else {
      this.props.searchForTopic(this.state.searchTopic)
      //this.setState({ searchTopic: "" })
      console.log(bad.clean(`${this.state.searchTopic}`))
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search topic"
              name="topic"
              value={this.state.searchTopic}
              onChange={this.handleChange}
            />
            <Button type="submit" color="green">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default SearchBar
