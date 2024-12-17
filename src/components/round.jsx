const OpaqueCircle = ({ top, left }) => {
    return (
      <div
        className="absolute w-40 h-40 bg-blue-400 dark:bg-slate-400 opacity-10 rounded-full"
        style={{ top: `${top}%`, left: `${left}%` }}
      ></div>
    );
  };
  
  export default OpaqueCircle;
  