import { render, screen } from '@testing-library/react';
import { Footer } from './index'

describe('<Footer />',() => {
   it('should render de footer',() => {
      render(<Footer />)
   })
})