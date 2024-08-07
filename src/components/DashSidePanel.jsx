import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";

const DashSidePanel = ({
  open,
  setOpen,
  selectedItem,
  setSelectedItem,
  menuItems,
}) => {
  // const [screenSize, setScreenSize] = useState(undefined);
  let location = useNavigate();

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   screenSize <= 1400 ? setOpen(false) : setOpen(true);
  // }, [screenSize, setOpen]);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    location("/");
  };

  // const handleSelect = (value) => {
  //   setSelectedItem(value);
  //   setOpen(!open);
  // };

  return (
    <div className="flex h-screen ">
      {/* <div
        className={`absolute h-screen   duration-500 md:hidden   ${
          open ? "left-0  " : "-left-[100%]"
        }  flex flex-col justify-between    `}
      >
        <div>
          <div className="mt-2 mb-6 border-b">
            <Link to="/">
              {/* <img src={logo} alt='logo' className='mx-4  h-[56px] ' /> 
              Logo
            </Link>
          </div>
          <div className="text-lg lg:text-xl">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                isSelected={selectedItem === item.label}
                onClick={() => setSelectedItem(item.label)}
                open={open} // Pass open prop to MenuItem
              />
            ))}
          </div>
        </div>
        <LogoutButton onClick={handleLogout} open={open} />
      </div> */}
      <div
        className={`  ${open ? "w-56" : "w-20"}  duration-500   `}
        // className={` ${
        //   open ? "min-w-[250px]" : "w-20"
        // }   justify-between  duration-500   `}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="p-2  min-h-16  flex justify-center items-center mb-4 mt-2"
            >
              <div className="grid grid-cols-2 gap-0.5 cursor-pointer ">
                <div className="h-4 w-4 bg-primaryBlue rounded-r-full rounded-tl-full lg:h-4 lg:w-4"></div>
                <div className="h-4 w-4 bg-primaryBlue rounded-r-full rounded-bl-full lg:h-4 lg:w-4"></div>
                <div className="h-4 w-4 bg-primaryBlue rounded-l-full rounded-tr-full lg:h-4 lg:w-4"></div>
                <div className="h-4 w-4 bg-primaryBlue rounded-l-full rounded-br-full lg:h-4 lg:w-4"></div>
              </div>

              {/* Admin{" "}
              <span className={`${open ? "visible" : "hidden"}`}>
                Dashboard
              </span> */}
            </div>
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isSelected={selectedItem === item.label}
                  onClick={() => setSelectedItem(item.label)}
                  open={open} // Pass open prop to MenuItem
                />
              ))}
            </div>
          </div>
          <LogoutButton onClick={handleLogout} open={open} />
        </div>
      </div>
    </div>
  );
};

export default DashSidePanel;

const MenuItem = ({ icon: Icon, label, isSelected, onClick, open }) => {
  return (
    <div
      className={` mb-2 flex cursor-pointer gap-2   border-l-4 md:py-2  items-center text-sm md:text-base px-6 overflow-hidden lg:gap-6 ${
        isSelected
          ? "text-primaryBlue border-primaryBlue"
          : "border-transparent"
      }`}
      onClick={onClick}
    >
      <Icon className="text-xl lg:text-2xl" />
      <span className={`delay-500 ${open ? "visible  " : "hidden w-0"} duration-300`}>{label}</span>
    </div>
  );
};

const LogoutButton = ({ onClick, open }) => (
  <div
    className="  flex cursor-pointer gap-2   border-l-4 md:py-2  items-center text-sm md:text-base px-6 overflow-hidden lg:gap-6 hover:text-primaryBlue justify-center mb-6 hover:border-primaryBlue border-transparent"
    onClick={onClick}
  >
    <AiOutlineLogout className="text-xl" />
    <span className={`delay-500 ${open ? "visible " : "hidden w-0"} duration-300`}> Logout</span>
  </div>
);
