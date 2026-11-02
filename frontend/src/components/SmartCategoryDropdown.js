import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const GROCERY_CATEGORIES = [
  { id: "All", name: "All Categories", icon: "🧺" },
  { id: "Fruits", name: "Fruits", icon: "🍎" },
  { id: "Vegetables", name: "Vegetables", icon: "🥬" },
  { id: "Dry Fruits", name: "Nuts & Dry Fruits", icon: "🥜" },
  { id: "Cold Beverages", name: "Cold Beverages", icon: "🥤" },
  { id: "Flours", name: "Flours & Grains", icon: "🌾" },
  { id: "Chocolates", name: "Chocolates & Sweets", icon: "🍫" },
  { id: "Snacks", name: "Snacks & Munchies", icon: "🍿" },
  { id: "Spices", name: "Spices & Masalas", icon: "🌶️" },
  { id: "promotion", name: "Promotions", icon: "🎁" },
];

const SmartCategoryDropdown = ({
  currentCategory = "",
  onSelectCategory,
  variant = "navbar",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Find active category item
  const selectedCat = GROCERY_CATEGORIES.find((cat) => {
    if (!currentCategory || currentCategory === "All") {
      return cat.id === "All";
    }
    return cat.id.toLowerCase() === currentCategory.toLowerCase();
  }) || GROCERY_CATEGORIES[0];

  // Handle outside click to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCategoryClick = useCallback((categoryId) => {
    setIsOpen(false);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else {
      if (!categoryId || categoryId === "All") {
        navigate('/bestsale');
      } else if (categoryId === "promotion") {
        navigate('/promotion');
      } else {
        navigate(`/bestsale?category=${encodeURIComponent(categoryId)}`);
      }
    }
  }, [navigate, onSelectCategory]);

  return (
    <div 
      className={`smart-cat-container ${variant === 'navbar' ? 'navbar-variant' : 'standalone-variant'}`}
      ref={dropdownRef}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className={`smart-cat-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        title="Select Category"
      >
        <span className="smart-cat-trigger-icon">{selectedCat.icon}</span>
        <span className="smart-cat-title">{selectedCat.name}</span>
        <i className={`bi bi-chevron-down smart-cat-chevron ${isOpen ? 'rotated' : ''}`}></i>
      </button>

      {/* Animated Dropdown Menu with Only Names and Icons */}
      {isOpen && (
        <div className="smart-cat-menu-animated" role="menu">
          {GROCERY_CATEGORIES.map((cat, index) => {
            const isSelected = 
              (selectedCat.id === "All" && cat.id === "All") || 
              (selectedCat.id === cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                className={`smart-cat-option ${isSelected ? 'selected' : ''}`}
                style={{ animationDelay: `${index * 20}ms` }}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <span className="smart-cat-option-icon">{cat.icon}</span>
                <span className="smart-cat-option-name">{cat.name}</span>
                {isSelected && (
                  <i className="bi bi-check2 smart-cat-option-check"></i>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SmartCategoryDropdown;
