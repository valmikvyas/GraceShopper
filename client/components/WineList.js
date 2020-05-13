/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {
  CardMedia,
  Card,
  Button,
  CardActions,
  IconButton,
  ButtonBase
} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {addToCart} from '../store/'
import {Snackbar} from '@material-ui/core/'

const WineList = ({user, wines, addToCart}) => {
  const [open, setOpen] = React.useState(false)
  const token = window.localStorage.getItem('guestToken')
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {wines.map(wine => {
        return (
          <Card
            elevation={3}
            key={wine.id}
            style={{
              width: 'calc(100%)',
              display: 'flex',
              backgroundColor: 'black',
              justifyContent: 'center'
            }}
          >
            <ButtonBase
              style={{
                width: 'calc(100%/4)',
                margin: 20,
                padding: 10,
                backgroundColor: 'black'
                // border: '1px white solid'
              }}
            >
              <div
                style={{
                  width: 'calc(100%)',
                  display: 'flex',
                  backgroundColor: 'black',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <CardMedia
                  image={wine.image}
                  style={{width: 200, height: 200}}
                />
              </div>
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {[
                  'name',
                  'maker',
                  'category',
                  'grape',
                  'region',
                  'price',
                  'inventory'
                ].map(prop => {
                  return (
                    <Typography key={prop} style={{color: 'white'}}>
                      {prop}: {wine[prop]}
                    </Typography>
                  )
                })}
              </CardContent>
            </ButtonBase>
            <CardActions>
              <IconButton
                aria-label="add to cart"
                onClick={() => {
                  addToCart(user.id || token, wine.id)
                  setOpen(true)
                }}
              >
                <AddIcon color="secondary" />
              </IconButton>
            </CardActions>
            <Snackbar
              anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
              open={open}
              autoHideDuration={2000}
              onClose={() => setOpen(false)}
              message="Added to Cart"
            />
          </Card>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({wines, user}) => {
  return {wines, user}
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart(userId, productId) {
      dispatch(addToCart(userId, productId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WineList)
