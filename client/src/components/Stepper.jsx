

import * as React from 'react'
import {Box, Stepper, Step, StepLabel, Button, Typography, makeStyles} from '@material-ui/core';



// const BackButtonEnabled = 'background: white color: #3B82F6 border: 1px solid #3B82F6 '
// const BackButtonDisabled = 'background: #D1D5DB color: gray'

const useStyles = makeStyles((theme) =>({
  // root: {
  //   width:'100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   background: 'black'
  // },
  buttonNext: {
    background: '#3B82F6',
    color: 'white',
    width:'96px',
    height: '54px',
    '&:hover': {
      background: '#3B82F6',
    },
    // buttonNext:hoover: 'none'
  },
    // marginLeft: theme.spacing(2)
  // },
  ButtonBackDisabled:{
    background: '#D1D5DB',
    color: 'gray'
  },
  buttonBackEnabled: {
    background: 'white',
    color: '#3B82F6',
    border: '1px solid #3B82F6',
    width:'96px',
    height: '54px'
    // marginRight: theme.spacing(2)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // paddingRight: theme.spacing(20),
    // paddingLeft: theme.spacing(20),
    padding: '0 155.5px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: theme.spacing(2),
    // paddingRight: theme.spacing(8),
  },
  Boxstyle:{
    // justifyContent: 'center',
    alignItems: 'center',
    width: '544px',
    display: 'flex',
    
  }
}))

const getSteps = () => [
  {
    label: '1',
    description: </Anuncio2>
  },
  
]
function getStepContent(step) {
  switch(step){
    case 0:
      return '1/3'
    case 1:
      return '2/3'
    case 2: 
      return '3/3'
    default:
      return 'Select default'
  }
}

function AnuncioStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps()

  // const isSetOptional = (step) => {
  //   return step === 1;
  // }
  const isStepSkipped = (step) => {
    return skipped.has(step);
  }
  const handleNext = () => {
    let newSkipped = skipped;
    if(isStepSkipped(activeStep)){
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((preActiveStep) => preActiveStep + 1)
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((preActiveStep) => preActiveStep - 1)
  }
  
  

  
  return(
    <div className='w-full items-center justify-center'>
      <Stepper  activeStep={activeStep}>
        <Box className={classes.Boxstyle}>
          <Box>
                <Button 
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={({isActive}) => 
                    isActive 
                      ? 'background: white, color: #3B82F6, border: 1px solid #3B82F6, width: 96px, height: 54px'
                      : 'width: 96px height: 54px background: #D1D5DB color: gray'
                    }
                  >
                    Back
                </Button>
            </Box>
            <Box >
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </Box>
            <Box>
              <Button 
                variant='contained'
                disabled={activeStep === 2}
                onClick={handleNext}
                className={classes.buttonNext}
                >
                  Next
                </Button>
            </Box>    

        </Box>
        
        
      

        
        </Stepper>
      
      
        
        
    </div>
  )
}
export default AnuncioStepper