// src/pages/About.jsx
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="w-11/12 mx-auto my-12 space-y-10">
        {/* Top intro */}
        <div className="bg-[#f8fafc] rounded-lg shadow p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] text-center mb-4">
            About SkillSwap
          </h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            SkillSwap is a local skill-exchange and learning platform where
            learners can discover curated courses, book sessions, and connect
            with real people who genuinely enjoy teaching what they know.
            Whether it’s coding, yoga, photography, or creative hobbies, our
            goal is to make learning simple, social, and accessible — so that
            you don’t just watch tutorials, you actually learn with people.
          </p>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            We believe that everyone has something valuable to share. SkillSwap
            gives you a space where you can grow at your own pace, ask
            questions without hesitation, and turn your curiosity into
            confidence through guided sessions and structured skill paths.
          </p>
        </div>

        {/* Mission / Vision / What we do */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-[#1e3a8a] mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our mission is to build a supportive community where anyone can be
              both a learner and a provider. SkillSwap connects people through
              structured sessions that are easy to book, affordable to join,
              and focused on real, practical skills you can use in daily life,
              education, or your career.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-[#1e3a8a] mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              We imagine a world where learning new skills is part of normal,
              everyday life — not something limited to big institutions or
              expensive courses. We want SkillSwap to become a trusted space
              where people grow together by sharing knowledge, experience, and
              stories in a friendly and approachable way.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-[#1e3a8a] mb-2">
              What Is SkillSwap?
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              SkillSwap is a platform that connects learners with skill
              providers offering themed courses and one-to-one sessions. You
              can explore skills, check ratings and prices, read short
              descriptions, and book a session in just a few clicks — all
              within a clean, focused interface designed to keep you learning,
              not lost in menus.
            </p>
          </div>
        </div>

        {/* Who it's for */}
        <div className="bg-[#f8fafc] rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-6">
            Who Is SkillSwap For?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-5 text-center">
              <h3 className="font-semibold text-lg text-[#1e3a8a] mb-2">
                Students & Beginners
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If you are just starting out with coding, design, language
                learning, or new hobbies, SkillSwap gives you structured
                sessions with patient providers who understand what it means to
                be a beginner and help you build a strong foundation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-5 text-center">
              <h3 className="font-semibold text-lg text-[#1e3a8a] mb-2">
                Working Professionals
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For professionals looking to upskill, switch fields, or stay
                updated, SkillSwap offers focused sessions that fit around your
                schedule. Learn practical tools, frameworks, and soft skills
                that you can apply immediately in your work life.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-5 text-center">
              <h3 className="font-semibold text-lg text-[#1e3a8a] mb-2">
                Hobby Learners & Creators
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Maybe you want to relax with yoga, improve your photography, or
                finally explore a creative passion. SkillSwap helps you find
                friendly providers who turn learning into a fun, low-pressure
                experience instead of a stressful one.
              </p>
            </div>
          </div>
        </div>

        {/* Values & commitments (replaces duplicated "How it works") */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-6">
            Our Values & Commitments
          </h2>

          <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-700">
            <div className="space-y-2">
              <h3 className="font-semibold text-[#1e3a8a]">
                Safe & Supportive Learning
              </h3>
              <p className="leading-relaxed">
                We want learners to feel safe, respected, and encouraged. Our
                community guidelines promote kindness, patience, and clear
                communication, so you never feel judged for asking questions or
                needing extra time to understand a concept.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-[#1e3a8a]">
                Practical & Real-World Skills
              </h3>
              <p className="leading-relaxed">
                Every session and course on SkillSwap is designed to be
                hands-on and actionable. Instead of only theory, we focus on
                skills you can use — from writing your first line of code to
                improving your posture in yoga or framing a better photograph.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-[#1e3a8a]">
                Community-Driven Growth
              </h3>
              <p className="leading-relaxed">
                SkillSwap grows with its community. As more people share their
                talents, the platform becomes richer and more diverse. Our
                long-term goal is to give learners and providers simple tools
                to connect, collaborate, and grow together in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
