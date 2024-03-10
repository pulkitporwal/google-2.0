import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
	return (
		<header className="flex justify-end p-5 text-sm">
			<div className="flex space-x-4 items-center">
				<Link
					href={"https://www.mail.google.com"}
					className="hover:underline"
				>
					Gmail
				</Link>
				<Link
					href={"https://www.google.com"}
					className="hover:underline"
				>
					Images
				</Link>
				<TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
				<button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-100 hover:shadow-md transition-all">
					Sign in
				</button>
			</div>
		</header>
	);
};

export default HomeHeader;
