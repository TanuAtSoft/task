import logo from './logo.svg';
import './App.css';
import { Quoteblock } from './stories/Quoteblock';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback ={<h1>This is just a storybook</h1>}>
    <Quoteblock title="storybook"
  subTitle ="can be run locally using npm run storybook"
  variant = ""
  hideUnderline= {true}
  compBackground="white"
  ctaLinks= {[]}
  description=""
  textboxBackground ={true}/>
    </Suspense>
  );
}

export default App;
