"use client";
import React, { useCallback, useState } from "react";
import { LinePath } from "@visx/shape";
import { useDrag } from "@visx/drag";
import { curveBasis } from "@visx/curve";

type Line = { x: number; y: number }[];
type Lines = Line[];

interface PropsInterface {
  svgRef: any;
  width: number;
  height: number;
  color: string;
  stockWidth: number;
  scale: number;
  isEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignatureCanvas: React.FC<PropsInterface> = ({
  svgRef,
  width,
  height,
  color,
  stockWidth,
  scale,
  isEmpty,
}) => {
  const [lines, setLines] = useState<Lines>([]);

  const onDragStart = useCallback(
    (currDrag: any) => {
      setLines((currLines) => [
        ...currLines,
        [{ x: currDrag.x, y: currDrag.y }],
      ]);
      isEmpty(false);
    },
    [setLines]
  );

  const onDragMove = useCallback(
    (currDrag: any) => {
      setLines((currLines) => {
        const nextLines = [...currLines];
        const newPoint = {
          x: currDrag.x + currDrag.dx,
          y: currDrag.y + currDrag.dy,
        };
        const lastIndex = nextLines.length - 1;
        nextLines[lastIndex] = [...(nextLines[lastIndex] || []), newPoint];
        return nextLines;
      });
    },
    [setLines]
  );

  const {
    x = 0,
    y = 0,
    dx,
    dy,
    isDragging,
    dragStart,
    dragEnd,
    dragMove,
  } = useDrag({ onDragStart, onDragMove, resetOnStart: true });

  return width < 100 ? null : (
    <div className="touch-none cursor-crosshair border-2 border-primarily rounded-xl">
      <svg
        ref={(node) => (svgRef.current = node)}
        width={width}
        height={height}
      >
        <defs>
          <style>
            {`
              path {
                stroke: ${color};
                fill: none;
              }
            `}
          </style>
        </defs>
        <g transform={`scale(${scale})`}>
          <rect fill="transparent" width={width} height={height} rx={14} />
          {lines.map((line, i) => (
            <LinePath
              key={`line-${i}`}
              fill="transparent"
              stroke={color}
              strokeWidth={stockWidth}
              data={line}
              curve={curveBasis}
              x={(d: any) => d.x}
              y={(d: any) => d.y}
            />
          ))}
          <g>
            {isDragging && (
              <rect
                width={width}
                height={height}
                onMouseMove={dragMove}
                onMouseUp={dragEnd}
                fill="transparent"
              />
            )}
            {isDragging && (
              <g>
                <rect
                  fill="white"
                  width={8}
                  height={8}
                  x={x + dx - 4}
                  y={y + dy - 4}
                  pointerEvents="none"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  fill="transparent"
                  stroke="white"
                  pointerEvents="none"
                />
              </g>
            )}
            <rect
              fill="transparent"
              width={width}
              height={height}
              onMouseDown={dragStart}
              onMouseUp={isDragging ? dragEnd : undefined}
              onMouseMove={isDragging ? dragMove : undefined}
              onTouchStart={dragStart}
              onTouchEnd={isDragging ? dragEnd : undefined}
              onTouchMove={isDragging ? dragMove : undefined}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SignatureCanvas;
