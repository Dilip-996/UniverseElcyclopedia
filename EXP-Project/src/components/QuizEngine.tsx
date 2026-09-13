"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { quizQuestions, quizRanks } from "@/data/quiz";

export function QuizEngine() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();
  const question = quizQuestions[index];
  const progress = ((index + (picked === null ? 0 : 1)) / quizQuestions.length) * 100;
  const rank = useMemo(() => quizRanks.find((item) => score >= item.min) ?? quizRanks[3], [score]);

  function choose(option: number) {
    if (picked !== null) return;
    setPicked(option);
    if (option === question.answer) setScore((value) => value + 1);
  }

  function next() {
    if (index === quizQuestions.length - 1) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  }

  if (done) {
    return (
      <section className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(212,180,106,0.12),transparent_46%),rgba(255,255,255,0.04)] p-6 text-center sm:rounded-[40px] sm:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-solar">Mission complete</p>
        <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">{rank.title}</h2>
        <p className="mt-4 text-xl text-slate-300">{rank.message}</p>
        <p className="mt-6 font-display text-3xl text-aurora">
          {score} / {quizQuestions.length}
        </p>
        <button type="button" onClick={restart} className="btn btn-light mt-8">
          Try Again
        </button>
      </section>
    );
  }

  const correct = picked === question.answer;

  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between text-sm font-bold">
        <span>
          Question {index + 1} / {quizQuestions.length}
        </span>
        <span className="text-solar">Score {score}</span>
      </div>
      <div className="mb-8 h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="compare-bar h-full bg-gradient-to-r from-aurora to-nebula"
          style={{ width: `${progress}%` }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
          className="rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-aurora">{question.category}</p>
          <h2 className="mt-3 font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">{question.question}</h2>
          <div className="mt-6 grid gap-3">
            {question.options.map((option, optionIndex) => {
              const isCorrect = optionIndex === question.answer;
              const isPicked = picked === optionIndex;
              const state =
                picked === null
                  ? "bg-white/5 hover:bg-white/10 active:bg-white/15"
                  : isCorrect
                    ? "bg-lime/20 border-lime"
                    : isPicked
                      ? "bg-comet/20 border-comet"
                      : "bg-white/5 opacity-60";
              return (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => choose(optionIndex)}
                  disabled={picked !== null}
                  animate={
                    !reduce && picked !== null && isPicked
                      ? isCorrect
                        ? { scale: [1, 1.03, 1] }
                        : { x: [0, -6, 6, -4, 4, 0] }
                      : undefined
                  }
                  className={`rounded-2xl border border-white/10 px-4 py-3.5 text-left text-sm font-bold transition active:scale-[0.99] sm:py-4 sm:text-base ${state}`}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>
          {picked !== null ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-2xl p-4 ${correct ? "bg-lime/10" : "bg-black/30"}`}
            >
              <p className="font-bold text-white">{correct ? "Nice launch!" : "Almost! Here is the secret:"}</p>
              <p className="mt-2 text-slate-200">{question.explanation}</p>
              <button type="button" onClick={next} className="btn btn-primary mt-4">
                {index === quizQuestions.length - 1 ? "See results" : "Next question"}
              </button>
            </motion.div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
