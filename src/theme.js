import { createMuiTheme }  from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#478BA2' },
    secondary: { A400: '#DE5B6D' }
  },
  overrides: {
      MuiAppBar: {
          root: {
            border: 0,
            borderRadius: 3
          }
      }
  }
});

export default theme;