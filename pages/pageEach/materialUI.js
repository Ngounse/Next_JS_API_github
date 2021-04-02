import { React } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: 'violet',
  //   '&:hover': {
  //     backgroundColor: 'blue'
  //   }
  // }
})

export default function materialUI(){
  const classes = useStyle()

  return(
    <Container>
      <Typography
        variant="h2"
        // align="center"
        color="textSecondary"
        component="h6"
      >
        hello
      </Typography>
        <Button 
          className={classes.btn}
          onClick= {()=> console.log("you clicked me")} 
          type="submit"
          variant="contained" 
          color="secondary"
          startIcon={<SendOutlinedIcon />}
          endIcon={<KeyboardArrowRightOutlinedIcon />}
          // disableElevation //  to disable drop shadow
        >
          Secondary
        </Button>

        {/* <ButtonGroup variant="contained" color="secondary">
          <Button>one</Button>
          <Button>two</Button>  
          <Button>three</Button>  
        </ButtonGroup>       */}
    </Container>
  )
}

