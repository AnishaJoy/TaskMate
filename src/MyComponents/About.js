import React from 'react';

const About = () => {
  return (
    // Main container with margin and padding for spacing
    <div className="container my-5 px-3 sm:px-5">
      {/* Card with rounded corners, shadow, and smooth hover effect */}
      <div className="card shadow-lg border-0 rounded-4 hover-shadow transition-all">
        <div className="card-body p-4">

          {/* Title with gradient text and slight animation */}
          <h2
            className="card-title text-primary mb-4 fw-bold"
            style={{
              background: 'linear-gradient(90deg, #007bff, #6610f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About My Todos List App
          </h2>

          {/* Paragraph text with better line height for readability */}
          <p className="card-text fs-5 text-muted" style={{ lineHeight: '1.7' }}>
            Welcome to the <strong>Todo List App</strong> — a simple, intuitive tool designed to help you
            stay organized and manage your daily tasks efficiently. Whether you need to jot down quick
            reminders or track ongoing responsibilities, this app allows you to add, edit, and delete
            todos with ease.
            <br /><br />
            Your tasks are <em>saved locally</em> in your browser, so you can pick up right where you
            left off without losing progress. Built using <strong>React</strong> and <strong>React Router</strong>,
            the app provides a smooth user experience with multiple pages, including an About section
            and an Edit page for flexibility.
            <br /><br />
            Perfect for personal use or productivity on the go, this website is your
            digital checklist for getting things done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
