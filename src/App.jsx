
function App() {

  return (
    <main className="bg-gray-900 h-screen flex justify-center items-center">
      <h1>Hola Mundo</h1>

      {/* Image Background */}
      <picture>
        <source srcSet="/images/bg-mobile.png" media="(max-width: 512px)" />
        <source srcSet="/images/bg-desktop.png" media="(min-width: 513px)" />
        <img
          src="/images/bg-desktop.png"
          alt="background image"
          className="fixed bottom-0 left-0 w-full h-auto object-cover"
        />
      </picture>
    </main>
  );
}

export default App
