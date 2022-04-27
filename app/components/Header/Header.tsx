import * as icons from "react-feather";
import profile from "../images/profile.png";

export interface HeaderProps {
  firstName: string;
  socials: {
    title: keyof typeof icons;
    url: string;
  }[];
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="bg-primary p-6 lg:pt-20 lg:pb-20">
      <section className="z-10 relative max-w-4xl lg:m-auto before:absolute before:bg-sedondary before:inset-0 before:translate-x-1 before:translate-y-1 lg:before:translate-x-2 lg:before:translate-y-2 after:absolute after:bg-tertiary after:inset-0 after:translate-x-2 after:translate-y-2 lg:after:translate-x-4 lg:after:translate-y-4 after:-z-10">
        <section className="md:flex relative bg-primary border-2 p-8 lg:px-16 lg:py-20 md:items-center">
          <img
            className="w-full border-2 max-h-52 object-cover object-[center_20%] lg:max-w-[300px] lg:max-h-max"
            src={profile}
            alt="just a pic showing me"
            role="presentation"
          />
          <section className="md:ml-20 mt-4">
            <h1 className="font-francois-one text-5xl lg:text-6xl mb-4">
              <small className="text-2xl lg:text-3xl block">Hi, I’m</small>
              {props.firstName}
            </h1>
            <span className="block text-l lg:text-xl max-w-prose font-normal mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros a diam euismod pretium. Aliquam quis ornare nunc. Etiam.
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
                    title={title}
                  >
                    <Icon size={24} aria-hidden="true" focusable="false" />
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