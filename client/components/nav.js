import React from 'react'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {
  Paper,
  Typography,
  AppBar,
  Grid,
  Modal,
  TextField
} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Login, Signup} from './auth-form'
import {formTheme} from '../theme'
import {ThemeProvider} from '@material-ui/core/styles'
// const spiritImage = require('./public/images/spirits.jpg')
// const beerImage = require('./public/images/beer.jpg')
// const wineImage = require('..../public/images/wine.jpg')

const Nav = props => {
  const {name, imgURL, imgPosition, user} = props
  const history = useHistory()
  const [value, setValue] = React.useState(window.location.pathname)
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState('/login')
  const handleChange = (event, newValue) => {
    if (newValue === '/login' || newValue === '/signup') {
      setOpen(true)
    } else {
      history.push(newValue)
    }
    setValue(newValue)
  }
  const handleClose = () => {
    setOpen(false)
    setValue(window.location.pathname)
  }

  return (
    <Paper
      square
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundPosition: imgPosition,
        backgroundSize: 'cover',
        border: '1px solid black',
        width: '100%',
        height: 500,
        margin: '0px 0px 50px',
        boxShadow: 'inset 600px -200px 5000px black'
      }}
    >
      <div>
        <AppBar
          position="static"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            boxShadow: 'none',
            position: 'fixed',
            top: 0
          }}
        >
          <Grid item>
            <div
              style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
            >
              <Typography
                variant="h3"
                color="primary"
                style={{
                  margin: '0px 25px 0px 0px',
                  padding: 10,
                  borderRadius: 200,
                  fontFamily: 'cursive'
                }}
              >
                GS
              </Typography>
              <Tabs
                value={value}
                indicatorColor="primary"
                color="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                style={{
                  display: 'flex',
                  flexDirection: 'flex',
                  alignItems: 'center'
                }}
              >
                <Tab style={{color: 'white'}} value="/" label="Home" />
                <Tab style={{color: 'white'}} value="/beer" label="Beer" />
                <Tab style={{color: 'white'}} value="/wine" label="Wine" />
                <Tab style={{color: 'white'}} value="/spirit" label="Spirits" />
                <Tab style={{color: 'white'}} value="/cart" label="Cart" />

                {!user.id ? (
                  <Tab
                    style={{color: 'white'}}
                    value={'/login' && '/signup'}
                    label="Log In/Sign Up"
                  />
                ) : (
                  <Tabs>
                    <Tab
                      style={{color: 'white'}}
                      value="/orders"
                      label="Orders"
                    />
                    <Tab
                      style={{color: 'white'}}
                      value="/logout"
                      label="Log Out"
                    />
                  </Tabs>
                )}
              </Tabs>
            </div>
          </Grid>
          {user.id ? (
            ''
          ) : (
            <div>
              <Modal
                open={open}
                value={value}
                onClose={handleClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{width: 'calc(100%*2.5/3)'}}>
                  <ThemeProvider theme={formTheme}>
                    <Paper
                      variant="outlined"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 30,
                        width: '100%'
                      }}
                    >
                      {page === '/login' ? <Login /> : <Signup />}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          margin: '50px 0px 0px'
                        }}
                      >
                        {page === '/signup' ? (
                          <Typography color="textSecondary">
                            Already have an account?{' '}
                            <a
                              color={formTheme.primary}
                              onClick={() => setPage('/login')}
                            >
                              <b>Log In</b>
                            </a>
                          </Typography>
                        ) : (
                          <Typography color="textSecondary">
                            Don't have an account?{' '}
                            <a
                              color={formTheme.primary}
                              onClick={() => setPage('/signup')}
                            >
                              <b>Sign Up</b>
                            </a>
                          </Typography>
                        )}
                      </div>
                    </Paper>
                  </ThemeProvider>
                </div>
              </Modal>
            </div>
          )}
        </AppBar>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100%*2/3)',
          width: 'calc(100%/3)'
        }}
      >
        <Typography
          variant="h1"
          style={{
            color: 'white',
            margin: 10,
            fontFamily: 'Petit Formal Script, cursive'
          }}
        >
          {name}
        </Typography>
      </div>
    </Paper>
  )
}

const mapBeer = state => {
  const {user} = state
  return {
    name: 'Beer',
    imgURL:
      'https://www.connshg.com/Resources/b5f10bc2-4cd8-4ccf-be25-d8b538cf524c/bigstock-Beer-Cold-Craft-light-Beer-in-202781995.jpg',
    imgPosition: 'left top',
    user
  }
}

const mapWine = state => {
  const {user} = state
  return {
    name: 'Wine',
    imgURL: 'https://citywinecellar.com/media/wysiwyg/2016/hpnew1.jpg',
    imgPosition: 'center top',
    user
  }
}
const mapSpirits = state => {
  const {user} = state
  return {
    name: 'Spirits',
    imgURL: 'https://www.drinkkosher.com/img/UploadImages/Whisky_Banner_14.jpg',
    imgPosition: 'right top',
    user
  }
}

const mapCart = state => {
  const {user} = state
  return {
    name: 'Cart',
    imgURL:
      'http://barnbottleshop.com/wp-content/uploads/2019/02/banner-img.jpg',
    imgPosition: 'right top',
    user
  }
}

const mapOrders = state => {
  const {user} = state
  return {
    name: 'Orders',
    imgURL:
      'https://static.wixstatic.com/media/b85605_8f7ddc550f034145a7c98a3b1086e309~mv2.jpeg',
    imgPosition: 'center bottom',
    user
  }
}

const mapHome = state => {
  const {user} = state
  return {
    name: 'Home',
    imgURL:
      'https://static.wixstatic.com/media/b85605_8f7ddc550f034145a7c98a3b1086e309~mv2.jpeg',
    imgPosition: 'center bottom',
    user
  }
}

export const BeerHeader = connect(mapBeer)(Nav)
export const WineHeader = connect(mapWine)(Nav)
export const SpiritsHeader = connect(mapSpirits)(Nav)
export const CartHeader = connect(mapCart)(Nav)
export const OrderHeader = connect(mapOrders)(Nav)
export const HomeHeader = connect(mapHome)(Nav)
