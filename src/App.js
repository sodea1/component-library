import './App.css';
import CarouselApp from './components/carousel/CarouselApp';
import PostApp from './components/posts/PostApp';
import TimerApp from './components/timer/TimerApp';
import TodoApp from './components/todos/TodoApp';
import JournalApp from './components/journal/JournalApp';
import DraftApp from './components/mock_draft/DraftApp';

function App() {
  return (
    <div className='master-wrapper'>
      {/* TODOS */}
      {/* <TodoApp /> */}

      {/* FLASHCARDS */}
      {/* <FlashIndex /> */}

      {/* CAROUSEL */}
      {/* <CarouselApp /> */}

      {/* TIMER */}
      {/* <TimerApp /> */}

      {/* POSTS */}
      {/* <PostApp /> */}

      {/* JOURNAL */}
      {/* <JournalApp /> */}

      {/* DRAFT */}
      <DraftApp />
    </div>
  );
}

export default App;
