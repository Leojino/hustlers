import { useState, useEffect } from "react";
import Head from "next/head";
import Image from 'next/image'
import MentorThumbnail from "../components/MentorThumbnail";
import QuestionsModal from "../components/questionsModal";

export default function Home() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [mentors, setMentors] = useState(null);
  useEffect(() => {
    fetch("/api/returnmentors?count=5")
      .then((res) => res.json())
      .then((data) => {
        setMentors(data.returnData);
      });
  }, []);
  return (
    <div className="grow overflow-auto">
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6">
        <article className="border rounded-lg p-4 bg-white rounded-md">
          <h2 className="text-xl border-b border-orange-700/50 py-3 mb-2">Profile</h2>
          <div className="flex items-center">
            <div className="rounded-full bg-slate-900 w-24 h-24 mx-5 relative">
            <Image
                objectFit='contain'
                layout='fill'
                src="/images/profile/josieRowen.png"
            />
            </div>
            <div className="p-2 grow">
              <h4 className="font-semibold text-xl">Katherine Jones</h4>
              <small className="text-gray-500 font-bold">Software Engineer (I)</small>
              <div className="text-gray-500">
                <small className="font-bold">Languages:</small> <small>JavaScript, C++, HTML, CSS</small>{" "}
              </div>
              <div className="text-gray-500">
                <small className="font-bold">Hobbies:</small> <small>Travelling 🌍, Dog mom 🐶, Yoga 🧘🏻‍♀️, self-taught coder 👩‍💻</small>{" "}
              </div>
            </div>
            <div className="flex flex-col justify-center p-5">
              <button className="bg-orange-600 text-white text-sm m-2 py-1 px-3 rounded-md">Find Batchmates &rsaquo;</button>
              <button
                className="bg-orange-600 text-white text-sm m-2 py-1 px-3 rounded-md"
                onClick={(e) => {
                  setShowQuestions(true);
                }}
              >
                Book Mentorship Sessions &rsaquo;
              </button>
            </div>
          </div>
        </article>

        <section className="drop-shadow-xl my-4 p-4 bg-white">
          <h2 className="text-xl border-b border-orange-700/50 py-3 mb-2">Mentor Availabilities</h2>
          <div className="flex gap-1">
            {mentors ? mentors.map((mentor, index) => <MentorThumbnail key={index} mentor={mentor} />) : "Loading"}
          </div>
        </section>
      </main>
      <QuestionsModal
        show={showQuestions}
        onClose={() => {
          setShowQuestions(false);
        }}
      />
    </div>
  );
}
