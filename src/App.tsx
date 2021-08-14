import React from 'react';
import logo from './logo.svg';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul className="divide-y divide-gray-200">
          {[
            {
              email: 'email1',
              name: 'name1',
            },
            {
              email: 'email2',
              name: 'name2',
            },
          ].map((person) => (
            <li key={person.email} className="py-4 flex">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
