type CustomTitleProps = {
  children: React.ReactNode;
  className?: string;
  desc?: string;
};

function CustomTitle({ children, className, desc }: CustomTitleProps) {
  return (
    <div>
      <h2 className={`text-32px text-[#333] font-bold mb-3 ${className}`}>
        {children}
      </h2>
      {desc && <p className="text-gray-400 mb-3 text-lg">{desc}</p>}
    </div>
  );
}

export default CustomTitle;
