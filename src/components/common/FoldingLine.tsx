'use client';

const FoldingLine = ({ width, height }: { width: number; height: number }) => {
  return (
    <div
      className="folding_line_start"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <span className="folding_line folding_line1" />
      <span className="folding_line folding_line2">
        <span className="folding_line folding_line3">
          <span className="folding_line folding_line4" />
        </span>
      </span>
    </div>
  );
};

export default FoldingLine;
