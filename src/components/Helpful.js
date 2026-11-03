import {useEffect, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import {sendEvent} from '@site/src/clientModules/track';

// "Was this page helpful?" One vote per page per browser (remembered in localStorage).
export default function Helpful() {
  const {pathname} = useLocation();
  const storageKey = `novator-helpful:${pathname}`;
  const [vote, setVote] = useState(null);

  useEffect(() => {
    try { setVote(window.localStorage.getItem(storageKey)); } catch (e) { setVote(null); }
  }, [storageKey]);

  const send = (value) => {
    setVote(value);
    try { window.localStorage.setItem(storageKey, value); } catch (e) { /* private mode */ }
    sendEvent({type: 'helpful', page: pathname, value});
  };

  return (
    <div className="helpful" role="group" aria-label="Page feedback">
      {vote ? (
        <span>
          Thank you for the feedback.
          {vote === 'no' && <> Tell us what was missing at <a href="mailto:support@novator.co">support@novator.co</a>.</>}
        </span>
      ) : (
        <>
          <span>Was this page helpful?</span>
          <button type="button" className="button button--sm button--outline button--primary" onClick={() => send('yes')}>Yes</button>
          <button type="button" className="button button--sm button--outline button--secondary" onClick={() => send('no')}>No</button>
        </>
      )}
    </div>
  );
}
