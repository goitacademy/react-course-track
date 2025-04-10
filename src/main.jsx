import { createRoot } from 'react-dom/client';
import './index.css';

const elements = (
  <div>
    <img
      src="https://i.imgflip.com/5glqrg.jpg"
      alt="Що ж, це дивно."
      width={320}
    />
    <p>HTML у JS? Що за чорна магія? 🧙‍♂️</p>
    <p>
      Це <strong>JSX (JavaScript XML)</strong> — і так, до цього справді
      звикаєш.
    </p>
  </div>
);

createRoot(document.getElementById('root')).render(elements);
