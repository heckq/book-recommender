import React from 'react';
import Book from './Book';
import { mount } from 'cypress/react18';

describe('Book Component', () => {
  it('should render the correct title, color, and height', () => {
    // Mount the Book component directly
    mount(<Book title="Dr Jekyll and Mr Hyde" color="blue" height={40} onClick={() => {}} />);


  });

  it('should call onClick when clicked', () => {
    // Create a spy function for onClick
    const onClickSpy = cy.spy().as('onClick');

    // Mount the Book component with the spy function
    mount(<Book title="Dr Jekyll and Mr Hyde" color="blue" height={40} onClick={onClickSpy} />);

  });
});
