import ChatBot from 'react-simple-chatbot';

function App() {
  return (
    <div className="App">
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Siapa nama mu?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, Apa Kabar?',
          trigger: '4',
        },
        {
          id: '4',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          message: 'Have a great day!',
          end: true,
        },
      ]}
    />
    </div>
  );
}

export default App;
