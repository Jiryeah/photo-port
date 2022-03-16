import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
};

export default App;

// import React from 'react';
// import About from './components/About';

// function App() {
//   return (
//     <div>
//       <main>
//         <About></About>
//       </main>
//     </div>
//   );
// }

// export default App;