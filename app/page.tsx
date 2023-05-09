import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
      <div id="text" className="flex flex-col p-5 space-y-12">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">Services for the Class of 2026</h1>
          <p className="font-lg">From Luke Kosner.</p>
        </div>

        <div id="updates" className="space-y-3">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold">Updates</h1>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>

          <div className="p-3 rounded-xl border border-green-500">
            <p>I am continuing to work on the Quizlet-sharer. Updates soon.</p>
            <p className="font-mono">- 5/8/23</p>
          </div>
        </div>

        <div id="projects" className="space-y-3">
          <h1 className="text-3xl font-bold">Services</h1>
          <div className="space-y-1">
            <Link
              href="https://forms.gle/ZYY59iPZ583NaH666"
              className="flex flex-row space-x-3 items-center hover:underline"
            >
              <h2 className="text-2xl">Forms</h2>
              <FaArrowRight />
            </Link>
            <p>
              Report 2-3-4 rule violations, give anonymous complaints, and
              suggest ideas.
            </p>
          </div>
          <div className="space-y-1">
            <Link
              href="/quizlet"
              className="flex flex-row space-x-3 items-center"
            >
              <h2 className="text-2xl  hover:underline">Quizlet Sharer</h2>
              <p className="text-black bg-yellow-400 rounded-full px-2 py-1">
                In Development
              </p>
              <FaArrowRight />
            </Link>
            <p>Share knowledge and learn faster.</p>
          </div>
          <div className="space-y-1">
            <div className="flex flex-row space-x-3 items-center">
              <h2 className="text-2xl  hover:underline">More Payment Types</h2>
              <p className="text-black bg-yellow-400 rounded-full px-2 py-1">
                ASAP
              </p>
            </div>
            <p>Accepting Apple Pay, Venmo, and more.</p>
          </div>
          <div className="space-y-1">
            <div className="flex flex-row space-x-3 items-center pointer-events-none">
              <h2 className="text-2xl  hover:underline">CitiBike Discount</h2>
              <p className="bg-green-400 rounded-full px-2 py-1">More Soon</p>
            </div>
            <p>Working for better biking for Collegiate students.</p>
          </div>
          <div className="space-y-1">
            <div className="flex flex-row space-x-3 items-center pointer-events-none">
              <h2 className="text-2xl  hover:underline">
                Daily Breakfast + Better Lunch
              </h2>
              <p className="bg-green-400 rounded-full px-2 py-1">More Soon</p>
            </div>
            <p>Speaking with the new culinary staff.</p>
          </div>
          <div className="space-y-1">
            <div className="flex flex-row space-x-3 items-center pointer-events-none">
              <h2 className="text-2xl  hover:underline">Overnight Trips</h2>
              <p className="bg-green-400 rounded-full px-2 py-1">More Soon</p>
            </div>
            <p>Collaborating with US leadership.</p>
          </div>
          <div className="space-y-1">
            <div className="flex flex-row space-x-3 items-center pointer-events-none">
              <h2 className="text-2xl  hover:underline">
                Riverside Park Fields
              </h2>
              <p className="bg-green-400 rounded-full px-2 py-1">More Soon</p>
            </div>
            <p>A new place to play.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
