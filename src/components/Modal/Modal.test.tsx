import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  test('renders the modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
  });

  test('does not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByText(/Modal Content/i)).not.toBeInTheDocument();
  });

  test('calls onClose when clicking on the overlay', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole('dialog'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when clicking inside the modal content', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByText(/Modal Content/i));
    expect(handleClose).not.toHaveBeenCalled();
  });
});