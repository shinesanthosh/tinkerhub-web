import React, { Component } from 'react'
import Link from 'next/link'

import axios from 'axios'

import Navi from '../../components/Navi'
import Circles from '../../components/Circles'
import MobileNav from '../../components/MobileNav'
import Event from '../../components/Event'
import SEO from '../../components/SEO'
import Form from '../../components/Form'

import classes from '../../Style/form.module.css'

export class Fosc extends Component {
  state = {}

  fetchData = async () => {
    axios
      .get(process.env.RENDERENDPOINT + '?detail=survey&form=fosc')
      .then(res => {
        console.log(res.data.questions)
        this.setState({ questions: res.data.questions, loadStatus: 1 })
      })
      .catch(e => this.setState({ loadStatus: 2 }))
  }

  constructor(props) {
    super(props)
    this.state = { loadStatus: 0 }
  }

  componentDidMount() {
    this.fetchData()
  }

  postSubmitHandler = () => {
    this.setState({ loadStatus: 200 })
  }

  submitHandler = async formdata => {
    try {
      let response = await axios.post(
        process.env.SUBMITENDPOINT + '?formid=fosc',
        formdata
      )
      return response
    } catch (e) {
      return { status: 0, message: 'Some error occured' }
    }
  }

  render() {
    let bodyContent

    if (this.state.loadStatus === 0) {
      bodyContent = <h1>Loading</h1>
    } else if (this.state.loadStatus === 1) {
      bodyContent = (
        <Form
          data={this.state.questions}
          submitHandler={this.submitHandler}
          postSubmit={this.postSubmitHandler}
        />
      )
    } else if (this.state.loadStatus === 200) {
      bodyContent = (
        <>
          <h2>Your form is submitted, Thank you for your time 😄</h2>
          <Link href="/">
            <a>
              <button>
                Home
              </button>
            </a>
          </Link>
        </>
      )
    } else {
      bodyContent = (
        <>
          {' '}
          <h2>We're sorry, we can't fetch the form right now</h2>
          <ul>
            <li>Make sure you're connected to internet</li>
            <li>
              If you have internet access and still can't acess, then there must
              be some issue on the server side, please try after a while
            </li>
          </ul>
        </>
      )
    }

    return (
      <section className={classes.formSection}>
        <Circles />
        <Navi className={classes.nav} />
        <SEO
          title="Open Source Community Application"
          description="Apply to become a part of the Tinkerhub PCE Open Source Community"
        />
        {bodyContent}

        <MobileNav className={classes.mobileNav} />
      </section>
    )
  }
}

export default Fosc
