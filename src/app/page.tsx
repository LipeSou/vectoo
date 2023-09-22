import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <p>
          home
        </p>

        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
        />
      </div>

    </main>
  );
}
