"use client"

export default function Arrow() {

  function scrollTop() {
        window !== undefined && window.scrollTo({top:0, behavior: "smooth"})
    }
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      className="w-20 transition-colors duration-300 stroke-neutral-950 dark:stroke-white"
      xmlns="http://www.w3.org/2000/svg"
      onClick={scrollTop}
    >
      <path
        d="M40.0001 63.3334V16.6667M40.0001 16.6667L16.6667 40.0001M40.0001 16.6667L63.3334 40.0001"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
