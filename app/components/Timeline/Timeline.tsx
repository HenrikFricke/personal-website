import { Card } from "../Card/Card";

export const Timeline: React.FC = () => {
  return (
    <main className="bg-white dark:bg-neutral-800 p-6 md:p-16 py-10 lg:py-20">
      <section className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h2 className="inline-block font-francois-one text-2xl md:text-4xl mb-10 relative before:absolute before:bg-sedondary after:absolute after:bg-gradient-to-r from-tertiary to-sedondary after:w-full after:h-2 after:bottom-[-12px] after:left-0 after:rounded-2xl">
            What’s up?
          </h2>
          <p className="leading-6 w-[50ch]">
            Well, this is a list of stuff I did in the last years. It can be
            everything from publishing a blogpost, giving a talk somewhere and
            launching an open-source project. Have fun digging into my history.
          </p>
        </header>
        <Card />
        <Card />
      </section>
    </main>
  );
};
