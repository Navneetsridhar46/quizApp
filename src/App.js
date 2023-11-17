import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const QuizApp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [questions, setQuestions] = useState([
    {
      question: 'When was Amateur Athletics Federation of India established?',
      options: ['1936', '1946', '1956', '1966'],
      correctAnswer: '1946',
    },
    {
      question: 'Who did Stone Cold Steve Austin wrestle at the 1998 edition of "Over the Edge?',
      options: ['Cactus Jack', 'Mankind', 'Dude Love', 'Mick Foley'],
      correctAnswer: 'Dude Love',
    },
    {
      question: 'Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?',
      options: ['Baron Davis', 'Kevin Garnett', 'Stephen Maurbury', 'Reggie Miller'],
      correctAnswer: 'Reggie Miller',
    },
    {
      question: 'Who was the 1st ODI captain for India?',
      options: ['Ajit Wadekar', 'Bishen Singh Bedi', 'Nawab Pataudi', 'Vinoo Mankad'],
      correctAnswer: 'Ajit Wadekar',
    },
    {
      question: 'The Asian Games were held in Delhi for the first time in...?',
      options: ['1951', '1963', '1971', '1982'],
      correctAnswer: '1951',
    },
  ]);

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleOptionSelect = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    const newScore = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(newScore);
  };

  return (
    <div style={{textAlign:'center'}}>
      <h1><b>Sports Quiz</b></h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p id='q1'>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <ul key={optionIndex}>
                <label>
                  <input
                    type="checkbox"
                    name={`question${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleOptionSelect(index, option)}
                  />
                  {option}
                </label>
              </ul>
            ))}
          </ul>
        </div>
      ))}
      <a onClick={handleShow}>
        <button className='w-25 bg-warning' onClick={handleSubmitQuiz}>SUBMIT</button>
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total Score</Modal.Title>
        </Modal.Header>
        <Modal.Body>{score !== null && <p>Your Score: {score} out of {questions.length}</p>}</Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'red'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default QuizApp;