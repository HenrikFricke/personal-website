export const Card: React.FC = () => {
  return (
    <article className="border-4 border-black dark:border-zinc-300 px-4 py-5 lg:px-9 lg:py-8 rounded-2xl mb-5">
      <picture className="block w-full rounded-2xl overflow-hidden mb-6">
        {/* <source srcSet="/img/profile.avif" type="image/avif" />
        <source srcSet="/img/profile.webp" type="image/webp" /> */}
        <img
          className="object-cover w-full dark:filter dark:contrast-100 dark:brightness-75"
          src="/img/serverless-days-2022.jpg"
          alt="just a pic showing me"
          role="presentation"
          width={900}
          height={668}
        />
      </picture>
      <span className="bg-primary px-4 py-2 rounded-2xl mr-2 uppercase text-xs tracking-wide mb-4 inline-block">
        Article
      </span>
      <h3 className="text-2xl leading-8 font-semibold mb-2">
        Introducing Indiepen: A privacy-friendly tool to embed HTML, CSS & JS
        code examples
      </h3>
      <time className="inline-block text-sm mb-4">June 24, 2021</time>
      <p className="leading-6 mb-4">
        Indiepen is our first open-source project to embed HTML, CSS & JS code
        examples on a website. We ship less than 20 KB, we don’t set any cookies
        or tracking, and, most importantly, we develop inclusive features for
        everyone.
      </p>
      <a className="inline-flex items-center" href="https://indiepen.tech/">
        <span className="font-semibold bg-clip-text bg-gradient-to-r from-tertiary to-sedondary text-transparent">
          read more
        </span>
        <svg
          width={22}
          height={16}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block ml-2 mt-[2px] fill-sedondary"
        >
          <path d="M1 7a1 1 0 0 0 0 2V7Zm20.707 1.707a1 1 0 0 0 0-1.414L15.343.929a1 1 0 1 0-1.414 1.414L19.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h20V7H1v2Z" />
        </svg>
      </a>
    </article>
  );
};
