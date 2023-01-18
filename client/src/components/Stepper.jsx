// import React from 'react';
// import Box from '@material-ui/core';
// import Stepper from '@material-ui/core';
// import Step from '@material-ui/core';
// import StepLabel from '@material-ui/core';
// import Button from '@material-ui/core';
// import Typography from '@material-ui/core';

import {Box, MobileStepper, Button, useTheme} from '@material-ui/core'
// import {KeyboardArrowLeft} from '@material-ui/core';
// import {KeyboardArrowRight} from '@material-ui/core/';

import * as React from 'react'



function AnuncioStepper() {
  const steps = [1, 2, 3]
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  return(
    <div>
        
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          
          <Box sx={{ height: 70, maxWidth: 543, width: '100%', py: 8, alignItems: 'center', justifyContent: 'center' }}>
            {steps[activeStep].description}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx={{ bgcolor: 'background.b500', color:'text.paper'}}
              >
                Next
                {/* {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )} */}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {/* {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )} */}
                Back
              </Button>
            }
          />
        </Box>
        
    </div>
  )
}
export default AnuncioStepper