const WhiteBlurEffect = () => {
  return (
    <div
      className="absolute right-[-2px] top-0 z-[10] h-full w-[70px]"
      style={{
        backgroundImage: "linear-gradient(to right,rgba(255,255,255,0),#fff)",
      }}
    ></div>
  );
};

export default WhiteBlurEffect;
