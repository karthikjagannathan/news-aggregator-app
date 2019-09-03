import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SourceFilter = (props) => {

  const [state, setState] = React.useState(props.sources);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.handleClick(name, event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox 
            checked={state.engadget} 
            onChange={handleChange('engadget')} 
            value="engadget" 
            color="primary"
            />
        }
        label="Engadget"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.gizmodo}
            onChange={handleChange('gizmodo')}
            value="gizmodo"
            color="primary"
          />
        }
        label="Gizmodo"
      />
    </FormGroup>
  );

}

export default SourceFilter;
