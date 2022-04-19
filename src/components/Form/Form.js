export default function Form() {
  return (
    <div className="w-4/3 mx-auto p-12">
      <form action="#" >
        <label
          htmlFor="email"
          className="block sm:text-6xl text-5xl text-gray-900 mb-4"
        >
          Tiens-toi à jour
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full pl-7 pr-12 sm:text-xl p-4"
            placeholder="Entrez votre e-mail"
          />
        </div>
      </form>
    </div>
  );
}
