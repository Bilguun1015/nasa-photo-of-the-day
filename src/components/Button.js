import React from 'react'
import { Button } from 'semantic-ui-react';
//import "semantic-ui/dist/semantic.min.css";

const ButtonExampleGroupMixed = () => (
  <Button.Group>
    <Button labelPosition='left' icon='left chevron' content='Back' />
    <Button labelPosition='right' icon='right chevron' content='Forward' />
  </Button.Group>
)

export default ButtonExampleGroupMixed


