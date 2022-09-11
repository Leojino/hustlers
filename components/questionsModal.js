import Router from "next/router";
import { useState } from "react";

export default function QuestionsModal({ show, onClose }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    Router.push("/mentors");
  };

  const handleBackdropClick = (e) => {
    if (e.target == e.currentTarget) {
      onClose();
    }
  };

  if (show) {
    return (
      <div className="fixed inset-0 bg-gray-900/60 z-10 overflow-scroll py-10" onClick={handleBackdropClick}>
        <div className="w-3/4 bg-neutral-200 p-10 rounded-md mx-auto">
          {/* user block */}
          <div className="flex items-start">
            <div className="rounded-full bg-slate-900 w-20 h-20 mx-3"></div>
            <div className="p-2 grow">
              <h4 className="font-semibold text-xl">Christine Vera</h4>
              <small className="text-gray-500 font-bold">Software Engineer (I)</small>
            </div>
            <div className="flex flex-col justify-center p-5">
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer" onClick={() => onClose()}>
                close
              </span>
            </div>
          </div>
          {/* questions */}
          <form onSubmit={handleFormSubmit}>
            <ol className="list-decimal m-6 text-sm">
              <li>
                What are your goal(s) for having a mentor?
                <div className="grid grid-cols-2 mt-1 mb-3">
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input type="checkbox" name="goal" value="Career growth" /> Career growth
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input type="checkbox" name="goal" value="Career switch" /> Career switch
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input type="checkbox" name="goal" value="Seek feedback" /> Seek feedback
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input type="checkbox" name="goal" value="Career planning" /> Career planning
                    </label>
                  </div>
                </div>
              </li>
              <li>
                What is the seniority of the mentor(s) that you are looking for?
                <div className="grid grid-cols-2 mt-1 mb-3">
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input className="mr-1" type="checkbox" name="seniority" value="1-3" />
                      1-3 years in the company
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input className="mr-1" type="checkbox" name="seniority" value="4-6" />
                      4-6 years in the company
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input className="mr-1" type="checkbox" name="seniority" value="7-10" />
                      7-10 years in the company
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 hover:border-gray-400">
                    <label className="block px-2 py-1">
                      <input className="mr-1" type="checkbox" name="seniority" value="10+" />
                      Over 10 years in the company
                    </label>
                  </div>
                </div>
              </li>
              <li>
                What languages would you like to use during the mentorship session?
                <div className="mx-3 mt-2 mb-3">
                  <select name="language" id="">
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="spanish">Spanish</option>
                  </select>
                </div>
              </li>
              <li>
                Let us know your hobbies!
                <div className="mx-2 mt-2 mb-3">
                  <input type="text" name="hobbies" className="w-full py-1 px-2 rounded-sm" />
                </div>
              </li>
              <li>
                How does your availabilities look like?
                <div className="mx-2 mt-2 mb-3">
                  <textarea className="w-full rounded-md resize-none" name="availability" id="" cols="30" rows="5"></textarea>
                </div>
              </li>
              <li>
                Any topics that you would like to discuss with the mentor?
                <div className="mx-2 mt-2 mb-3">
                  <textarea className="w-full rounded-md resize-none" name="questions" id="" cols="30" rows="5"></textarea>
                </div>
              </li>
            </ol>
            <button type="submit" className="w-full p-3 bg-blue-800 text-slate-300 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
