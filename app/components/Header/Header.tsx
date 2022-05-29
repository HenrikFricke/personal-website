import * as icons from "react-feather";

export interface HeaderProps {
  firstName: string;
  socials: {
    title: keyof typeof icons;
    url: string;
  }[];
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="p-6 md:p-16 flex lg:min-h-screen items-center justify-center bg-wave dark:bg-wave-dark bg-center bg-repeat-x">
      <section className="z-10 mr-2 mb-2 lg:mr-4 lg:mb-4 relative max-w-4xl before:absolute before:bg-sedondary before:inset-0 before:translate-x-1 before:translate-y-1 lg:before:translate-x-2 lg:before:translate-y-2 after:absolute after:bg-tertiary after:inset-0 after:translate-x-2 after:translate-y-2 lg:after:translate-x-4 lg:after:translate-y-4 after:-z-10">
        <section className="md:flex relative bg-primary dark:bg-neutral-900 border-black dark:border-zinc-300 border-2 p-8 md:p-16 md:items-center">
          <picture className="relative block w-full border-black dark:border-zinc-300 border-2 max-h-52 md:max-w-[300px] md:max-h-max overflow-hidden">
            <source srcSet="/img/profile.avif" type="image/avif" />
            <source srcSet="/img/profile.webp" type="image/webp" />
            <img
              className="object-cover object-[center_20%] w-full max-h-52 md:max-h-max dark:filter dark:contrast-100 dark:brightness-75"
              src="/img/profile.jpg"
              alt="just a pic showing me"
              role="presentation"
              width={300}
              height={453}
            />
          </picture>
          <section className="md:ml-16 mt-5 md:mt-0">
            <h1 className="dark:text-zinc-300 font-francois-one text-5xl lg:text-6xl mb-3 md:mb-4">
              <small className="text-2xl lg:text-3xl block">Hi, I’m</small>
              {props.firstName}
            </h1>
            <span className="block text-l lg:text-xl max-w-prose mb-6">
              I’m a web enthusiast. I love to talk about web technologies, share
              thoughts and ideas and contribute to OSS. Nice to meet you! ✌️
            </span>
            <section className="flex items-center">
              {props.socials.map(({ title, url }) => {
                const Icon = icons[title];
                return (
                  <a
                    key={url}
                    className="mr-4"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={20} aria-hidden="true" focusable="false" />
                    <span className="sr-only">{title}</span>
                  </a>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </header>
  );
};
