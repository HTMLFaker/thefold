'use client';

const FoldingLine = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => {
  return (
    <div
      className="folding_line_start"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <span
        className="folding_line folding_line1"
        style={{
          backgroundColor: color,
        }}
      />
      <span
        className="folding_line folding_line2"
        style={{
          backgroundColor: color,
        }}
      >
        <span
          className="folding_line folding_line3"
          style={{
            backgroundColor: color,
          }}
        >
          <span
            className="folding_line folding_line4"
            style={{
              backgroundColor: color,
            }}
          />
        </span>
      </span>
    </div>
  );
};

export default FoldingLine;
