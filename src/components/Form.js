import React, { Component } from 'react'
import Inp from './Inp'
import { validateInput } from './formValidator'
import classes from '../Style/form.module.css'

export class Form extends Component {
  state = {}

  inputsArray = []

  constructor(props) {
    super(props)
    this.state = {
      formData: {},
      hiddenArray: [],
      level: 0,
      sbmtBtnDisabled: false,
      validationMessage: '',
      notificationMessage: '',
    }

    // this.state.formData = {}
    // this.state.hiddenArray = []
    // this.state.level = 0
    // this.state.sbmtBtnDisabled = false
    // this.state.validationMessage = ''

    this.props.data.map((element, key) => {
      this.state.formData[element.name] = ''
      this.state.hiddenArray.push(true)
    })
  }

  inputChangeHandler = event => {
    let formData = this.state.formData
    formData[event.target.name] = event.target.value
    this.setState({ formData })
  }

  setHidden(visibleIndex) {
    let hiddenArray = [...this.state.hiddenArray]
    hiddenArray.forEach((el, key) => {
      hiddenArray[key] = true
    })
    hiddenArray[visibleIndex] = false
    this.setState({ hiddenArray, level: visibleIndex })
  }

  nextField = () => {
    let check = validateInput(
      this.state.formData[this.props.data[this.state.level].name],
      this.props.data[this.state.level].validation
    )
    if (check.status) {
      this.setHidden(this.state.level + 1)
      this.setState({ validationMessage: '' })
    } else this.setState({ validationMessage: check.message })
  }

  prevField = () => {
    this.setHidden(this.state.level - 1)
  }

  validateSubmitHandler = async () => {
    this.setState({ sbmtBtnDisabled: true })
    this.props.data.map((element, key) => {
      if (
        !validateInput(this.state.formData[element.name], element.validation)
      ) {
        this.setState({ level: key })
        return
      }
    })

    const message = await this.props.submitHandler(this.state.formData)
    if (message.status == 200) {
      this.props.postSubmit()
    } else {
      this.setState({
        notificationMessage:
          'Some error occured. Please check your connection or try after a while',
        sbmtBtnDisabled: false,
      })
    }
  }

  componentDidMount() {
    this.setHidden(0)
  }

  render() {
    this.inputsArray = []
    this.props.data.map((element, key) => {
      this.inputsArray.push(
        <Inp
          type={element.type}
          name={element.name}
          key={key}
          hidden={this.state.hiddenArray[key]}
          value={this.state.formData[element.name]}
          label={element.label}
          placeholder={element.placeholder}
          changeHandler={this.inputChangeHandler}
        />
      )
    })

    let nextBtnHidden =
      this.state.level < this.inputsArray.length - 1 ? false : true
    let prevBtnHidden = this.state.level > 0 ? false : true
    let sbmtBtnHidden =
      this.state.level == this.inputsArray.length - 1 ? false : true

    return (
      <div className={classes.Blahbijj}>
        {this.inputsArray}
        <p>{this.state.validationMessage}</p>
        <button
          onClick={this.nextField}
          hidden={nextBtnHidden}
          disabled={nextBtnHidden}
        >
          Next
        </button>
        <button
          onClick={this.prevField}
          hidden={prevBtnHidden}
          disabled={prevBtnHidden}
        >
          Prev
        </button>
        <button
          hidden={sbmtBtnHidden}
          disabled={this.state.sbmtBtnDisabled}
          onClick={this.validateSubmitHandler}
        >
          Submit
        </button>

        <p>{this.state.notificationMessage}</p>
      </div>
    )
  }
}

export default Form
