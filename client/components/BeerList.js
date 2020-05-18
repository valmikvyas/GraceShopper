/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {CardMedia, Card, CardActions, IconButton} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {addToCart} from '../store/'
import {Snackbar} from '@material-ui/core/'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  hover: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)'
    }
  }
}))

const BeerList = ({user, beers, addToCart}) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    open: false,
    message: ''
  })
  const token = window.localStorage.getItem('guestToken')
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {beers.map(beer => {
        return (
          <Card
            elevation={3}
            raised={true}
            key={beer.id}
            variant="outlined"
            style={{
              width: 'calc(100%/4)',
              display: 'flex',
              // backgroundColor: 'black',
              // border: '1px solid black',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              margin: 10,
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px #303030 solid',
              height: 'same-as-width',
              padding: 10
            }}
          >
            {/* <CardActionArea
              // style={{
              //   padding: 10,
              //   backgroundColor:'rgba(255,255,255,0.1)',
              //   display:'flex',
              //   // flexDirection:'column',
              //   height:'same-as-width',
              //   border: '1px #303030 solid'
              // }}
            > */}
            <CardActions
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: 10
              }}
            >
              <IconButton
                aria-label="favorite"
                tooltip="Add to favorites"
                className={classes.hover}
                onClick={() => {
                  //add to favorites function
                  setState({open: true, message: 'Added to favorites'})
                }}
              >
                <FavoriteBorderIcon color="primary" />
              </IconButton>
              <IconButton
                aria-label="add to cart"
                tooltip="Add to cart"
                className={classes.hover}
                onClick={() => {
                  addToCart(user.id || token, beer.id)
                  setState({open: true, message: 'Added to cart'})
                }}
              >
                <AddIcon color="primary" />
              </IconButton>
            </CardActions>

            {/* </CardActionArea> */}
            <CardMedia
              image={beer.image}
              style={{width: 200, height: 200, backgroundSize: 'contain'}}
            />
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
              }}
            >
              <Typography
                variant="h5"
                key={beer.name}
                style={{color: 'white', textAlign: 'center'}}
              >
                {beer.name}
              </Typography>
              <Typography
                variant="body1"
                key={beer.maker}
                style={{color: 'white'}}
              >
                {beer.maker}
              </Typography>
            </CardContent>
            <CardContent
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
              }}
            >
              <Typography
                variant="subtitle1"
                key={beer.type}
                style={{color: 'white'}}
              >
                {beer.type}
              </Typography>
            </CardContent>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
              }}
            >
              <Typography
                variant="h6"
                key={beer.price}
                style={{color: 'white'}}
              >
                ${beer.price}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        open={state.open}
        autoHideDuration={1000}
        onClose={() => setState({open: false})}
        message={state.message}
      />
    </div>
  )
}

const mapStateToProps = ({beers, user}) => {
  return {beers, user}
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart(userId, productId) {
      dispatch(addToCart(userId, productId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BeerList)
