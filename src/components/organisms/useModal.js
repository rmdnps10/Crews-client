import React from 'react';

export const useModal = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return [isOpen, toggleOpen];
};
