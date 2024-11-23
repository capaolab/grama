import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function DropDown() {
  return (
    <div className="dropdown relative h-10 w-44 px-2 trasition-effect cursor-pointer group">
      <li className="inline-block">
        <h3 className="absolute inset-y-0 flex items-center text-center font-semibold">Sales Admin</h3>
        <ul
          className="dropdown-content hidden py-2 bg-[var(--background)]
          absolute top-full left-0 w-full rounded-md shadow-[1px_1px_20px_0.3px_var(--shadow-color)]"
        >
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </li>
      <div className="absolute inset-y-0 right-0 flex items-center trasition-effect">
        <MdOutlineKeyboardArrowDown className="dropdown-arrow text-2xl transition duration-300" />
      </div>
    </div>
  )
}

export default DropDown;
