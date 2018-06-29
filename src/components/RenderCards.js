import React from 'react';
import { WordCard } from './WordCard';
import { StartCard } from './StartCard';
import { ErrorCard } from './ErrorCard';
import { Spinner } from './Spinner';


export const RenderCards = (props) => {
    if (props.mode === "EMPTY") {
      return <StartCard />;
    }
    else if (props.mode === "PENDING") {
      return <Spinner />;
    }
    else if (props.mode === "SUCCESS") {
      return (
        <div id="word-cards">
          {props.words.map( (word, i) => (
            <WordCard key={i} name={word.word_name} class={word.word_class} definitions={word.definitions} />
          ))}
        </div>
      );
    }
    else if (props.mode === "ERROR-NOT-FOUND"){
      return <ErrorCard notFound={true} />
    }
    else if (props.mode === "ERROR-UNKNOWN"){
      return <ErrorCard notFound={false} />
    }
    else {
      return true
    }
}
