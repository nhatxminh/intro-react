export default function Footer() {
    return (
        <footer className="fixed bottom-0 underline w-full bg-blue-300">
        <div className="flex px-20 py-3 text justify-between items-center">
          <a href="/">Home</a>
          <a href="/example">Example</a>
          <a href="/impure-function">Impure Function</a>
          <a href="/pure-function">Pure Function</a>
          <a href="/statejs">StateJS</a>
          <a href="/statereactjs">StateReactJS</a>
          <a href="/multiplestate">Multiple State</a>
          <a href="/queuePrevState">Queue Prev State</a>
          <a href="/refvalue">Ref Value</a>
          <a href="/refdom">Ref DOM</a>
          <a href="/effectrender">Effect Render</a>
          <a href="/effectwhycleanup">Effect Cleanup</a>
          <a href="/effectsubcribe">Effect Subcribe</a>
        </div>
      </footer>
    )
}