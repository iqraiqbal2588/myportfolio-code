import React from 'react';
import './App.css';

function UiUxPage() {
  return (
    <div className="ui-ux-page">
      <h2 className="title">Quiz Game App</h2>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/quizgame1.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/quizgame2.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/quizgame3.PNG'}
          alt="Iqra"
          className="app-image"
        />
          <img
          src={process.env.PUBLIC_URL + '/images/quizgame4.PNG'}
          alt="Iqra"
          className="app-image"
        />
      </div>

      <h2 className="title">Milk Shop</h2>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/cow1.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/cow2.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/cow3.PNG'}
          alt="Iqra"
          className="app-image"
        />
         <img
          src={process.env.PUBLIC_URL + '/images/cow4.PNG'}
          alt="Iqra"
          className="app-image"
        />
      </div>
      <h2 className="title">Styling suggestion</h2>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/style1.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/style2.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/style3.PNG'}
          alt="Iqra"
          className="app-image"
        />
         <img
          src={process.env.PUBLIC_URL + '/images/style4.PNG'}
          alt="Iqra"
          className="app-image"
        />
      </div>
      <h2 className="title">Where to Eat </h2>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/5.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/2.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/11.PNG'}
          alt="Iqra"
          className="app-image"
        />
          <img
          src={process.env.PUBLIC_URL + '/images/10.PNG'}
          alt="Iqra"
          className="app-image"
        />
      </div>
      <h2 className="title">Whisky Shop </h2>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/W1.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/W2.PNG'}
          alt="Iqra"
          className="app-image"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/W3.PNG'}
          alt="Iqra"
          className="app-image"
        />
          <img
          src={process.env.PUBLIC_URL + '/images/W4.PNG'}
          alt="Iqra"
          className="app-image"
        />
      </div>
    </div>
  );
}

export default UiUxPage;
