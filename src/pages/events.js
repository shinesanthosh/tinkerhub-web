import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import axios from 'axios'

import Navi from '../components/Navi'
import Circles from '../components/Circles'
import MobileNav from '../components/MobileNav'
import Event from '../components/Event'
import SEO from '../components/SEO'

import classes from '../Style/event.module.css'

const Events = () => {
  const [eventList, setEventList] = useState(0)

  let update = 0

  const fetchData = async () => {
    console.log('Retreiving from: ', process.env.EVENTENDPOINT)
    axios
      .get(process.env.EVENTENDPOINT)
      .then((res) => {
        setEventList([])
        res.data.forEach((el, key) => {
          setEventList((prevList) => [
            ...prevList,
            <Event name={el.name} links={el.links} key={key} />,
          ])
        })
      })
      .catch((e) => console.error('some error occured: ', e))
  }

  useEffect(() => {
    setEventList(<h3 className={classes.loader}>Loading..</h3>)
    fetchData()
  }, [])
  return (
    <section className={classes.event}>
      <SEO
        title="Events"
        description="Tinkerhub Providence College of Engineering, Chengannur"
      />
      <div className={classes.overlay}></div>
      <Navi className={classes.nav} />

      <Circles />

      <div className={classes.glass}>
        <div className={classes.head}>Events</div>
        <div className={classes.eventLists}>{eventList}</div>
      </div>

      <MobileNav className={classes.mobileNav} />
      <Link href="/">
        <a>
          <div className={classes.homeMain}>
            <img src="nav icons/home.png" />
          </div>
        </a>
      </Link>
    </section>
  )
}

export default Events
