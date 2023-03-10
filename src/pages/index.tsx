import * as React from 'react';
import categories from '../../public/assets/jeopardy.json';
import FlippableCard from '../components/FlippableCard/FlippableCard';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';

const Jeopardy: React.FC = () => {
  const [finale, setFinale] = React.useState(false);
  const jingle = React.useRef<HTMLAudioElement | undefined>();

  const toggleFinale = () => setFinale(!finale);

  const playJingle = () => {
    jingle.current && jingle.current.play();
    console.log('play');
  };

  React.useEffect(() => {
    jingle.current = new Audio('/assets/jeopardy_jingle.mp3');
  }, []);

  return (
    <main className='flex h-[100vh] w-screen flex-col bg-black' style={{ marginTop: 50 }}>
      <div className='flex w-screen'>
        <div
          className='min-h-40 gap grid h-fit w-full px-4'
          style={finale ? {} : { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}
        >
          {finale ? (
            <FlippableCard
              frontText='Final frågan!'
              frontTextSize='text-9xl'
              backText='Så heter Alfons Åbergs pappa'
              backTextSize='text-7xl'
              height='min-h-[90%]'
              width='min-w-[60%]'
            />
          ) : (
            categories.map((category) => (
              <div key={category.name} className='flex-col'>
                <FlippableCard
                  frontText={category.name}
                  frontTextSize='text-sm md:text-xl xl:text-4xl break-all'
                />
                {category.questions.map((question, index) => {
                  const frontText = `${(index + 1) * 100}`;
                  return (
                    <FlippableCard
                      key={question}
                      frontText={frontText}
                      backText={question}
                    />
                  );
                })}
              </div>
            ))
          )}
        </div>
        <div className='flex min-w-[150px] flex-row'>
          <ScoreBoard />
        </div>
      </div>
      <div className='flex flex-row justify-evenly'>
        <button type='button' onClick={toggleFinale}>
          <p className='text-yellow-300'>Finale!</p>
        </button>
        <button type='button' onClick={playJingle}>
          <p className='text-yellow-300'>Jingle!</p>
        </button>
      </div>
    </main>
  );
};

export default Jeopardy;
