interface IPorps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export default function ToggleBtn({ isCollapsed, setIsCollapsed }: IPorps) {
  return (
    <button
      className={`absolute top-0 right-0 z-50 w-8 h-8 rounded-full text-white text-lg font-bold shadow-md active:shadow-none ${
        isCollapsed
          ? "bg-red-500 hover:bg-red-700"
          : "bg-sky-300 hover:bg-sky-500"
      }`}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      {isCollapsed ? "+" : "-"}
    </button>
  );
}
