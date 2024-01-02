import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <div className="z- max-w-2xl justify-between font-mono lg:flex text-5xl">
      <h1 >
      Welcome!
      </h1>
      </div>
      <div className="max-w-5xl justify-between font-mono text-sm lg:flex">
        <p className="text-center place-items-center">
          recovxyz&nbsp;
          <code className="font-mono font-bold">By Auro</code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[100px] before:w-[480px] before:-translate-x-5/1 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      

      <div className="mb-22 grid text-center lg:max-w-5xl lg:w-full lg:mb-20 lg:grid-cols-3 lg:text-left">
        <a
          href="https://github.com/officialauro?tab=repositories"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel=""
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My Github{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information my projects!
          </p>
        </a>

        <a
          href="https://discord.gg/5se9W6ACUp"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel=""
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My Discord{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            My Official discord's if you need assistance with one of my projects!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel=""
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Add our bot{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-size:25px`}>
            This funfilling discord bot can help you moderate your server and has tons of fun commands!
          </p>
        </a>
      </div>
    </main>
  )
}
