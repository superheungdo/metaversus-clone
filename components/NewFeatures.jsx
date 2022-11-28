const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col flex-1 min-w-[210px] sm:max-w-[250px]">
    <div className="flex-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
      <img className="w-1/2 h-1/2 object-contain" src={imgUrl} alt="icon" />
    </div>

    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>

    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
