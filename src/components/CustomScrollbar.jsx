import React, { useState, useEffect, useRef } from 'react';

export default function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startScrollTopRef = useRef(0);
  const thumbHeightRef = useRef(0);

  useEffect(() => {
    thumbHeightRef.current = thumbHeight;
  }, [thumbHeight]);

  useEffect(() => {
    const updateThumb = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      if (scrollHeight <= clientHeight) {
        setThumbHeight(0);
        return;
      }
      const calculatedHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 44);
      setThumbHeight(calculatedHeight);
      const maxScrollTop = scrollHeight - clientHeight;
      const maxThumbTop = clientHeight - calculatedHeight;
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      const topPos = maxScrollTop > 0 ? (currentScrollTop / maxScrollTop) * maxThumbTop : 0;
      setThumbTop(topPos);
    };

    updateThumb();
    window.addEventListener('scroll', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaY = e.clientY - startYRef.current;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const currentThumbHeight = thumbHeightRef.current || 44;
      const maxThumbTop = clientHeight - currentThumbHeight;
      const maxScrollTop = scrollHeight - clientHeight;
      if (maxThumbTop <= 0) return;
      const scrollDelta = (deltaY / maxThumbTop) * maxScrollTop;
      window.scrollTo(0, Math.max(0, Math.min(scrollHeight - clientHeight, startScrollTopRef.current + scrollDelta)));
    };

    const onMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('scroll', updateThumb);
      window.removeEventListener('resize', updateThumb);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const onMouseDownThumb = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    startYRef.current = e.clientY;
    startScrollTopRef.current = window.scrollY || document.documentElement.scrollTop;
  };

  const onTrackClick = (e) => {
    if (e.target !== e.currentTarget) return;
    const clickY = e.clientY;
    const clientHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const ratio = clickY / clientHeight;
    window.scrollTo({
      top: ratio * (scrollHeight - clientHeight),
      behavior: 'smooth'
    });
  };

  if (thumbHeight === 0) return null;

  const isActive = isHovered || isDragging;

  return (
    <div
      onClick={onTrackClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hidden md:block fixed right-0 top-0 bottom-0 w-2.5 z-50 bg-[#f8fafc] border-l border-slate-200/50 select-none cursor-pointer"
    >
      <div
        onMouseDown={onMouseDownThumb}
        style={{
          transform: `translateY(${thumbTop}px)`,
          height: `${thumbHeight}px`
        }}
        className={`w-2 mx-auto rounded-full transition-colors duration-150 cursor-pointer ${
          isActive ? 'bg-[#05488B]' : 'bg-[#FBBC05]'
        }`}
      />
    </div>
  );
}

