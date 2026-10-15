"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./ProductsCarousel.module.css";

interface ProductsCarouselProps {
  children: React.ReactNode[];
  headerTitle?: React.ReactNode;
  headerSubtitle?: React.ReactNode;
}

export default function ProductsCarousel({
  children,
  headerTitle,
  headerSubtitle,
}: ProductsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = React.Children.count(children);

  // Update visible items count based on viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // Clamp activeIndex if itemsToShow changed on resize
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [maxIndex, activeIndex]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  const hasDraggedRef = useRef(false);

  // Touch and mouse drag logic
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    hasDraggedRef.current = false;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
    if (Math.abs(clientX - startX) > 6) {
      hasDraggedRef.current = true;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - currentX;
    const threshold = 40;

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }

    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  const onMouseDown = (e: React.MouseEvent) => {
    // Only drag with primary mouse button
    if (e.button !== 0) return;
    handleDragStart(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const dragOffset = isDragging ? currentX - startX : 0;
  const dotsCount = maxIndex + 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div className={styles.titles}>
          {headerSubtitle && <div className={styles.subtitle}>{headerSubtitle}</div>}
          {headerTitle && <div className={styles.titleWrap}>{headerTitle}</div>}
        </div>

        {totalItems > itemsToShow && (
          <div className={styles.navControls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handleNext}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onClickCapture={onClickCapture}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(calc(-1 * ${activeIndex} * (var(--card-width) + 20px) + ${dragOffset}px))`,
            transition: isDragging
              ? "none"
              : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className={styles.slide}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {dotsCount > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: dotsCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
