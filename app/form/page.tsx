export default function Form() {
  return (
    <form className="max-w-md mx-auto my-8" action="/api/up" method="post">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
          URL:
        </label>
        <input
          required
          type="text"
          id="url"
          name="url"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject:
        </label>
        <select
          required
          id="subject"
          name="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="computer science">Computer Science</option>
          <option value="history">History</option>
          <option value="biology">Biology</option>
          <option value="advanced geometry">Advanced Geometry</option>
          <option value="core geometry">Core Geometry</option>
          <option value="latin">Latin</option>
          <option value="advanced spanish">Advanced Spanish</option>
          <option value="core spanish">Core Spanish</option>
          <option value="french">French</option>
          <option value="chinese">Chinese</option>
          <option value="english">English</option>
          <option value="greek">Greek</option>
        </select>
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );
}
