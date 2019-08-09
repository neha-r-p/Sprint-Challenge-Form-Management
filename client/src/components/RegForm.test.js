import React from 'react';
import { render } from '@testing-library/react';
import FormikRegForm from './RegForm';

describe('<FormikRegForm />', () => {
    it('renders without crashing', () => {
        render(<FormikRegForm />);
       
      });
      
})
