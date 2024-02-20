const Graph = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs></defs>
      <g>
        <path d="M0 0 L 203 0 203 50 0 50Z" stroke="none" fill="none"></path>
        <path
          d="M2 3 L 200 3 200 48 2 48Z"
          stroke="none"
          fill="#fff"
          fill-opacity="0"
        ></path>
        <g>
          <g></g>
          <g></g>
          <g>
            <path
              className="hidden"
              d="M2 3 L 2 48"
              stroke="#8e8e8e"
              stroke-width="2"
              fill="none"
            ></path>
          </g>
          <g></g>
          <g>
            <g>
              <path
                d="M16.143 44.143 L 44.429 30 72.714 14.571 101 8.143 129.286 8.143 157.571 12 185.857 9.429"
                stroke="#200b0b"
                stroke-width="2"
                fill="none"
              ></path>
            </g>
          </g>
        </g>
        <g></g>
      </g>
    </svg>
  );
};

export { Graph };
