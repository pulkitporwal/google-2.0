"use client";
import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="flex flex-col justify-center items-center pt-10">
			<h1 className="text-3xl mb-4">Something Went Wrong</h1>
			<Link href="/" className="bg-blue-500 px-4 py-2 text-white rounded-md">
				Try again
			</Link>
		</div>
	);
};

export default Error;
