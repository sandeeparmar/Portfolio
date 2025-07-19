import React, { useState, useRef, useEffect } from "react";
import bg from "./computer.png";

const ComputersCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 300, y: 200 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const computerRef = useRef(null);
  const containerRef = useRef(null);

  // 📌 Rotation on mouse move
  const handleMouseMove = (e) => {
    if (!computerRef.current || isDragging) return;

    const rect = computerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / rect.width;
    const mouseY = (e.clientY - centerY) / rect.height;

    setMousePosition({ x: mouseX * 180, y: mouseY * 180 });
  };

  // 📌 Hover handlers
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isDragging) setMousePosition({ x: 0, y: 0 });
  };

  // 📌 Drag start
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const rect = computerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // 📌 Drag movement
  const handleGlobalMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const computerRect = computerRef.current.getBoundingClientRect();

    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    const maxX = containerRect.width - computerRect.width;
    const maxY = containerRect.height - computerRect.height;

    setDragPosition({
      x: Math.max(0, Math.min(maxX, newX)),
      y: Math.max(0, Math.min(maxY, newY))
    });
  };

  // 📌 Drag end
  const handleGlobalMouseUp = () => {
    setIsDragging(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // 📌 Set up global listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div
        ref={computerRef}
        className={`absolute transition-all duration-300 ease-out
          ${isDragging ? "cursor-grabbing scale-110" : "cursor-grab"}
          ${isHovering && !isDragging ? "scale-105" : ""}
        `}
        style={{
          left: `${dragPosition.x}px`,
          top: `${dragPosition.y}px`,
          transform: `rotateX(${-mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.5}deg)`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        <img src={bg} alt="3D Computer" draggable={false} />
      </div>
    </div>
  );
};

export default ComputersCanvas;
