import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../../src/components/SearchResults';

describe('SearchResults', () => {
  it('should render a list of results', () => {
    const results = [{ id: '1' }, { id: '2' }];
    const { getByText } = render(<SearchResults results={results} />);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });
});
