import { useState, WheelEvent } from 'react';
import Name from './components/Name';
import { generateUsername } from './generation';
import SavedName from './components/SavedName';

const App = () => {
  const [names, setNames] = useState(
    new Array(24).fill(0).map(generateUsername),
  );
  const [savedNames, setSavedNames] = useState<string[]>([]);

  const onWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      setNames((names) => [...names, generateUsername()].slice(1));
    } else {
      setNames((names) => [generateUsername(), ...names].slice(0, -1));
    }
  };

  const onSaveName = (name: string, index: number) => {
    const offset = index - names.length / 2;
    const newNames = new Array(Math.abs(offset)).fill(0).map(generateUsername);

    if (offset === 0) {
      setNames((names) => {
        const newNames = [...names, generateUsername()];
        newNames.splice(index, 1);
        return newNames;
      });
      setSavedNames((savedNames) => [...savedNames, name]);
    } else if (offset >= 0) {
      setNames((names) => [...names, ...newNames].slice(offset));
    } else {
      setNames((names) => [...newNames, ...names].slice(0, offset));
    }
  };

  const onRemoveSaved = (name: string) => {
    setSavedNames((names) => names.filter((n) => n !== name));
  };

  return (
    <div className="bg-base text-text">
      <div className="w-screen h-screen overflow-hidden" onWheel={onWheel}>
        {names.map((name, i) => (
          <Name
            position={(i / names.length) * 4 - 2}
            onClick={() => onSaveName(name, i)}
            key={name}
          >
            {name}
          </Name>
        ))}
      </div>
      <div className="fixed top-1 left-4 text-[3vh] text-surface2">
        {savedNames.map((name) => (
          <SavedName onClick={() => onRemoveSaved(name)}>{name}</SavedName>
        ))}
      </div>
    </div>
  );
};

export default App;
