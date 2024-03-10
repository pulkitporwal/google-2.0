import Link from "next/link";

const WebSearchPage = async ({ searchParams }) => {
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
	);
	if (!response.ok) throw new Error("Something Went Wrong");
	const data = await response.json();
	console.log(data);
	const finalResult = data.items;

	if (!finalResult) {
		return (
			<div className="flex flex-col justify-center items-center pt-10">
				<h1 className="text-3xl mb-4">
					No Result Found for ${searchParams.searchTerm}
				</h1>
				<p>Try searching the web or images for someting else</p>
				<Link
					href="/"
					className="bg-blue-500 mt-5 px-4 py-2 text-white rounded-md"
				>
					Home
				</Link>
			</div>
		);
	}

	return (
		<div>
			{finalResult &&
				finalResult.map((result) => {
					return <h1>{result.title}</h1>;
				})}
		</div>
	);
};

export default WebSearchPage;
