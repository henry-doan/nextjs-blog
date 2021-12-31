import Link from 'next/link'

const FirstPost = () => {
  return (
    <>
      <h1>My First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
          {/* <a className="foo" target="_blank" rel="noopener noreferrer">
            Hello World
          </a> */}
        </Link>
      </h2>
    </>
  )
}

export default FirstPost;