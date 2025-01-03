import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-3 mt-5 flex h-16 w-full flex-col items-center justify-between space-y-3 px-3 pt-4 text-center sm:mb-0 sm:h-20 sm:flex-row sm:pt-2">
      <div>
        <div className="font-medium">
          Built with{" "}
          <a
            href="https://ai.google.dev/gemini-api/docs"
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
            target="_blank"
          >
            Gemini AI
          </a>{" "}
          and{" "}
          <a
            href="https://bit.ly/justrohith"
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
            target="_blank"
          >
            Inspired from Rohith Coder
          </a>
          .
        </div>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        {/* GitHub link removed */}
      </div>
    </footer>
  );
}
