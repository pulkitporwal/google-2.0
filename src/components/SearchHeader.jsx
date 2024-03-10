import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center justify-between ">
				<Link href={"/"}>
					<Image
						src={
							"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
						}
						alt="Google Logo"
						width={120}
						height={40}
						priority
						style={{ width: "auto", height: "auto" }}
					/>
				</Link>
				<div className="flex-1">
					<SearchBox />
				</div>
				<div className="hidden md:inline-flex space-2 ">
					<TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-[2.5rem] mr-2 rounded-full cursor-pointer " />
					<RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-[2.5rem] mr-2 rounded-full cursor-pointer " />
				</div>
				<button className="bg-blue-500 text-white ml-2 px-6 py-2 font-medium rounded-md hover:brightness-100 hover:shadow-md transition-all">
					Sign in
				</button>
			</div>
			<SearchHeaderOptions/>
		</header>
	);
};

export default SearchHeader;
