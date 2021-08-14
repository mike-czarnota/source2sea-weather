import { render, RenderResult } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

export const renderWithWrapper = (ui: React.ReactElement): RenderResult =>
  render(<BrowserRouter>{ui}</BrowserRouter>);
