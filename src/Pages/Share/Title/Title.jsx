const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center my-4 text-white">
      <h3 className="font-serif lg:text-lg md:text-md text-[#F6EC4D]">
        {title}
      </h3>
      <h2 className="font-mono text-xl lg:text-4xl md:text-2xl ">{subTitle}</h2>
    </div>
  );
};

export default Title;
