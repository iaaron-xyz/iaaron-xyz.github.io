import { Link } from "react-router-dom";
import HomeLogo from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import FolderIcon from "./icons/FolderIcon";
import StackIcon from "./icons/StackIcon";
import EmailIcon from "./icons/EmailIcon";

const Navbar = () => {
  return (
    <div className='fixed h-full border-r border-slate-700 left-0'>
      <div className='flex h-full'>
        <ul className='[&>li]:my-4 [&>li]:px-4 flex flex-col items-center justify-center'>
          <li>
            <Link to='/'>
              <HomeLogo
                className={
                  "h-6 fill-slate-400 stroke-2 dark:hover:fill-slate-200"
                }
              />
            </Link>
          </li>
          <li>
            <Link to='about'>
              <AboutIcon
                className={
                  "h-6 fill-slate-400 stroke-2 dark:hover:fill-slate-200"
                }
              />
            </Link>
          </li>
          <li>
            <FolderIcon
              className={
                "h-6 fill-slate-400 stroke-2 dark:hover:fill-slate-200"
              }
            />
          </li>
          <li>
            <StackIcon
              className={"h-6 fill-slate-400 stroke-2 hover:fill-slate-200"}
            />
          </li>
          <li>
            <EmailIcon
              className={
                "h-6 stroke-slate-400 stroke-2 dark:hover:stroke-slate-200"
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
