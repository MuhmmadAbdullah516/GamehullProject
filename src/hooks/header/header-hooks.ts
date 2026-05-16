import { useState } from "react";

export function useHeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return {
    handleMenuClose,
    handleMenuToggle,
    isMenuOpen,
  };
}
