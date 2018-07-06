import React from 'react';
import { WordCard } from './WordCard';
import { StartCard } from './StartCard';
import { ErrorCard } from './ErrorCard';
import { Spinner } from './Spinner';


export const RenderCards = (props) => {

  switch (props.mode) {
    case "EMPTY":
      return <StartCard />
    case "PENDING":
      return <Spinner />
    case "SUCCESS":
      return (
        <div id="word-cards">
          {props.words.map( (word, i) => (
            <WordCard key={i} name={word.word_name} class={word.word_class} definitions={word.definitions} />
          ))}
        </div>
      );
    case "ERROR-UNKOWN":
      return <ErrorCard notFound={false} />
    case "ERROR-NOT-FOUND":
    default:
      return <ErrorCard notFound={true} />
  }

}
