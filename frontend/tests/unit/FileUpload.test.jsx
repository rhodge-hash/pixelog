import { render, fireEvent } from '@testing-library/react';
import FileUpload from '../../src/components/FileUpload';

describe('FileUpload', () => {
  it('should call onUpload with the selected file', () => {
    const onUpload = jest.fn();
    const { getByText, container } = render(<FileUpload onUpload={onUpload} />);
    
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    const input = container.querySelector('input[type="file"]');

    fireEvent.change(input, { target: { files: [file] } });
    fireEvent.click(getByText('Upload'));

    expect(onUpload).toHaveBeenCalledWith(file);
  });
});
