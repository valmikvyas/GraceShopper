import {createMuiTheme} from '@material-ui/core/'

// A custom theme for this app
export const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: '$rgba(255,255,255,0.1)'
        }
      }
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Quicksand"'].join(',')
    // text: {
    //   primary: '#ffffff',
    //   secondary: '#ffffff'
    // }
  },
  palette: {
    type: 'light',
    background: {
      default: '#000000'
    },
    primary: {
      // main: '#01579b'
      main: '#ffffff'
    },
    secondary: {
      main: '#ef6c00'
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    }
  },
  props: {
    MuiTableRow: {
      border: '1px solid black'
    }
  }
})
export const formTheme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Quicksand"'].join(',')
    // text: {
    //   primary: '#ffffff',
    //   secondary: '#ffffff'
    // }
  },
  // palette: {
  //   type: 'light',
  //   background: {
  //     default: '#000000'
  //   },
  //   primary: {
  //     main: '#01579b'
  //   },
  //   secondary: {
  //     main: '#ef6c00'
  //   },
  //   text: {
  //     primary: '#01579b',
  //     secondary: '#808080'
  //   }
  // }
  palette: {
    type: 'dark',
    background: {
      default: '#000000'
    },
    primary: {
      main: '#607d8b'
    },
    secondary: {
      main: '#607d8b'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5'
    }
  }
})
